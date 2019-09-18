import * as React from 'react';
import { bind } from 'decko';

import './SomeComponent.scss';

interface IProps {

}

const b = block('block-name');

class SomeComponent extends React.PureComponent<IProps, {}> {
  public render() {
    const { } = this.props;
    return (
      <div className={b()}>content</div>
    );
  }
}

export default SomeComponent;
