import * as React from 'react';
import { GetProps } from '_helpers';

import { RowsLayout } from 'shared/view/elements';

import Header from '../Header/Header';
import { StylesProps, provideStyles } from './BaseLayout.style';

interface IOwnProps {
  title: string;
  actions?: React.ReactNode[];
  backRoutePath?: string;
  additionalHeaderContent?: React.ReactNode;
  children: React.ReactNode;
}

type IProps = IOwnProps & StylesProps;

class BaseLayout extends React.PureComponent<IProps> {
  public render() {
    const { children, actions, backRoutePath, title, classes, additionalHeaderContent } = this.props;
    const headerProps: GetProps<typeof Header> = {
      actions, backRoutePath, title, additionalContent: additionalHeaderContent,
    };

    return (
      <RowsLayout
        spacing={4}
        headerContent={<Header {...headerProps} />}
        classes={{ root: classes.rootRowsLayout }}
      >
        {children}
      </RowsLayout>
    );
  }
}

export { IProps };
export default provideStyles(BaseLayout);
