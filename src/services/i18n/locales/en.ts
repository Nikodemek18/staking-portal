// tslint:disable:max-line-length
export default {
  shared: {
    pagination: {
      itemsPerPage: 'Items per page',
      currentPagination: '%{from} - %{to} of %{total}',
    },
    validation: {
      isRequired: 'Field is required',
      moreThen: 'Should be more then %{value}',
      moreThenOrEqual: 'Should be more then or equal %{value}',
      lessThenOrEqual: 'Should be less then or equal %{value}',
      invalidWalletAddress: 'Invalid wallet address',
      notDefault: 'Value must be different from initial',
      maxStringLength: 'Text should be less then %{max} letters',
      allowedCharactersForDaoName: 'Name should contain only english letters and numbers',
      onEnglishPlease: 'Should contain only english letters and numbers',
      isUsedDaoName: 'Co-op with that name already exists',
      notEnoughDai: 'Not enough dai',
      isNumber: 'Enter a valid number',
      decimalsMoreThen: 'Enter a valid number with decimals less than %{decimals} digits',
      mustBeAnInteger: 'Enter an integer',
      isPositiveNumber: 'Must be positive number',
    },
    pageNotFound: 'We can’t find this page',
    cancel: 'Cancel',
    retry: 'Retry',
    noConnection: 'No connection to the Polkadot Network',
    needUseExtension:
      'This browser has no connection to the Polkadot Network. Please use the Chrome/FireFox Polkadot extension.',
    notFoundExtension: 'Injected extension not found. You need to install %{chromeLink} or %{firefoxLink} Polkadot.JS extension.',
    makeSureUseExtension: 'Please make sure you are using Polkadot extension',
    somethingWentWrong: 'Oh. Something went wrong.',
    new: 'New',
    join: 'Join',
    to: 'to',
    from: 'from',
    no: 'No',
    yes: 'Yes',
    you: 'You',
    done: 'Done',
    waiting: 'Waiting',
    daysAmount: '%{smart_count} day |||| %{smart_count} days',
    mainTitle: 'Akropolis Staking Portal',
    balance: 'Balance',
    bonded: 'Bonded',
    era: 'Era',
  },
  features: {
    validators: {
      list: {
        columns: {
          ownStake: 'Own stake',
          address: 'Address',
          commission: 'Commission',
          otherStakes: 'Other stakes',
          myStake: 'My stake',
        },
        notFound: 'Validators not found',
      },
      addressInfo: {
        offline: 'Reported offline %{offlineCount} times, last at #%{lastOfflineBlock}',
      },
    },
    stakes: {
      list: {
        columns: {
          name: 'Name',
          balance: 'Balance',
          nominees: 'Nominees',
          bonded: 'Bonded',
          awaitingWithdrawal: 'Awaiting unbonding',
          redeemable: 'Redeemable',
        },
        notFound:
          'Your Substrate accounts can not be found, please install Polkadot.js browser extension and create an account.',
      },
      unbondingList: {
        columns: {
          size: 'Size',
          blocksLeft: 'Blocks left',
        },
        title: 'Awaiting unbonding',
        notFound: 'To unbond funds, use the Withdraw button',
      },
      metrics: {
        balance: 'Balance',
        bonded: 'Bonded',
        unbonding: 'Unbonding',
        redeemable: 'Redeemable',
        deposit: 'Deposit',
        withdraw: 'Withdraw',
        redeem: 'Redeem',
      },
    },
    manageStake: {
      balanceReplenishmentForm: {
        title: 'Stake Balance Replenishment',
        field: {
          placeholder: 'Enter sum',
        },
        cancelButtonText: 'Cancel',
        submitButtonText: 'Replenish balance',
      },
      cashWithdrawalForm: {
        title: 'Cash Withdrawal',
        field: {
          placeholder: 'Enter sum',
        },
        cancelButtonText: 'Cancel',
        submitButtonText: 'Withdraw money',
      },
      actions: {
        nominate: 'Nominate',
        editNominees: 'Edit nominees',
        stopNominating: 'Stop nominating',
      },
      validatorsListEditingForm: {
        title: 'Edit Nominees',
        cancelButtonText: 'Cancel',
        submitButtonText: 'Change validators',
      },
      nominatingStop: {
        title: 'Nominating Stop',
        description: 'Are you sure that you want to stop nominating?',
        cancelButtonText: 'Cancel',
        submitButtonText: 'Stop nominating',
      },
      cashRedeeming: {
        title: 'Cash Redeeming',
        description: 'Are you sure that you want to redeem %{amount}?',
        cancelButtonText: 'Cancel',
        submitButtonText: 'Redeem cash',
      },
    },
    notifications: {
      'staking.bond': {
        pending: 'Deposit pending',
        success: 'Deposit succeeded',
        error: 'Deposit failed',
      },
      'staking.bondExtra': {
        pending: 'Deposit pending',
        success: 'Deposit succeeded',
        error: 'Deposit failed',
      },
      'staking.unbond': {
        pending: 'Withdraw pending',
        success: 'Withdraw succeeded',
        error: 'Withdraw failed',
      },
      'staking.nominate': {
        pending: 'Nominate pending',
        success: 'Nominate succeeded',
        error: 'Nominate failed',
      },
      'staking.chill': {
        pending: 'Stop nominating pending',
        success: 'Stop nominating succeeded',
        error: 'Stop nominating failed',
      },
      'staking.withdrawUnbonded': {
        pending: 'Redeem pending',
        success: 'Redeem succeeded',
        error: 'Redeem failed',
      },
    },
  },
  modules: {},
  services: {},
};
