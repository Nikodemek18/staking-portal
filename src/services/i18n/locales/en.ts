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
    },
    pageNotFound: 'We can’t find this page',
    cancel: 'Cancel',
    retry: 'Retry',
    noConnection: 'No connection to the Polkadot Network',
    needUseExtension: 'This browser has no connection to the Polkadot Network. Please use the Chrome/FireFox Polkadot extension.',
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
    },
    stakes: {
      list: {
        columns: {
          name: 'Name',
          nominees: 'Nominees',
          size: 'Size',
          awaitingWithdrawal: 'Awaiting withdrawal',
        },
        notFound: 'Your Substrate accounts can not be found, please install Polkadot.js browser extension and create an account.',
      },
    },
    manageStake: {
      balanceReplenishmentForm: {
        title: 'Stake balance refill form',
        field: {
          placeholder: 'Enter sum',
          name: 'sum',
        },
        cancelButtonText: 'Cancel',
        submitButtonText: 'Replenish balance',
      },
      cashWithdrawalForm: {
        title: 'Cash Withdrawal Form',
        field: {
          placeholder: 'Enter sum',
          name: 'sum',
        },
        cancelButtonText: 'Cancel',
        submitButtonText: 'Withdraw money',
      },
    },
  },
  modules: {},
  services: {},
};