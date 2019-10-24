import * as React from 'react';
import BN from 'bn.js';
import { formatNumber } from '@polkadot/util';
import BaseIdentityIcon from '@polkadot/react-identicon';
import { RecentlyOffline } from '@polkadot/api-derive/types';
import { tKeys, useTranslate } from 'services/i18n';

import { withStyles, colors } from 'shared/styles';
import { Avatar, Badge, Grid, Tooltip } from 'shared/view/elements';

import { useStyles } from './Address.style';

interface IProps {
  address: string;
  offlineCount?: BN;
  offlineInfo?: RecentlyOffline[];
}

const StyledBadge = withStyles(_theme => ({
  badge: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    padding: 0,
    cursor: 'pointer',
    backgroundColor: colors.valencia,
    color: '#fff',
  },
}))(Badge);

function Address(props: IProps) {
  const { address, offlineCount, offlineInfo } = props;
  const classes = useStyles();
  const { t } = useTranslate();

  const formattedBlockNumbers = React.useMemo(
    () =>
      offlineInfo && offlineInfo.map(({ blockNumber }): string => `#${formatNumber(blockNumber)}`),
    [offlineInfo],
  );

  const blockNumbers = formattedBlockNumbers && formattedBlockNumbers[formattedBlockNumbers.length - 1];

  const tooltipTitle = t(tKeys.features.validators.addressInfo.offline.getKey(), { offlineCount, blockNumbers });

  return (
    <Grid container wrap="nowrap" alignItems="center" spacing={2}>
      <Grid item xs={1}>
        {offlineCount && blockNumbers ? (
          <StyledBadge
            badgeContent={
              <Tooltip title={tooltipTitle} aria-label="offline-count" interactive>
                <span className={classes.badgeContent}>{`${offlineCount}`}</span>
              </Tooltip>
            }
          >
            <Avatar>
              <BaseIdentityIcon className={classes.icon} value={address} />
            </Avatar>
          </StyledBadge>
        ) : (
          <Avatar>
            <BaseIdentityIcon className={classes.icon} value={address} />
          </Avatar>
        )}
      </Grid>
      <Grid item>{address}</Grid>
    </Grid>
  );
}

export default Address;