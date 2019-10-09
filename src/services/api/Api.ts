import { Observable, from, fromEventPattern, defer, ReplaySubject } from 'rxjs';
import { switchMap, retry } from 'rxjs/operators';
import { identity } from 'ramda';
import { ApiRx } from '@polkadot/api';
import { web3Enable, web3AccountsSubscribe } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import { memoize, delay } from 'shared/helpers';
import { callPolkaApi } from './callPolkaApi';
import { IStakingLedger, IDerivedStaking } from './callPolkaApi/types';

export class Api {
  constructor(private _substrateApi: Observable<ApiRx>) {}

  @memoize()
  public getValidators$(): Observable<string[]> {
    return callPolkaApi(this._substrateApi, 'query.session.validators');
  }

  @memoize(identity)
  public getStakingLedger$(controllerAddress: string): Observable<IStakingLedger | null> {
    return callPolkaApi(this._substrateApi, 'query.staking.ledger', controllerAddress);
  }

  @memoize(identity)
  public getStakingInfo$(stashAddress: string): Observable<IDerivedStaking> {
    return callPolkaApi(this._substrateApi, 'derive.staking.info', stashAddress);
  }

  @memoize()
  public getSubstrateAccounts$(): Observable<InjectedAccountWithMeta[]> {
    const accounts$ = new ReplaySubject<InjectedAccountWithMeta[]>();

    defer(() =>
      from(
        (async () => {
          const injected = await web3Enable('Akropolis Staking Portal');
          if (!injected.length) {
            await delay(1000);
          }
          return injected;
        })(),
      ),
    )
      .pipe(
        switchMap(injectedExtensions =>
          injectedExtensions.length
            ? fromEventPattern<InjectedAccountWithMeta[]>(
                emitter => web3AccountsSubscribe(emitter),
                (_, signal: ReturnType<typeof web3AccountsSubscribe>) => signal.then(unsubscribe => unsubscribe()),
              )
            : new Observable<InjectedAccountWithMeta[]>(subscriber =>
                subscriber.error(new Error('Injected extensions not found')),
              ),
        ),
        retry(3),
      )
      .subscribe(accounts$);

    return accounts$;
  }
}