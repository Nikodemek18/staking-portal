import * as React from 'react';
import { bind } from 'decko';
import { MarkAsPartial, SubSet } from '_helpers';

import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import { EyeIcon } from '../Icons';
import InputAdornment from '../InputAdornment/InputAdornment';

// crutch for types :)
type PartialProps = SubSet<
  keyof TextFieldProps,
  | 'className' | 'classes' | 'defaultValue' | 'variant' | 'style' | 'innerRef'
  | 'inputProps' | 'InputProps' | 'inputRef' | 'rows' | 'rowsMax' | 'value' | 'onChange'
>;

type IProps = MarkAsPartial<Omit<TextFieldProps, 'ref'>, PartialProps>;

interface IState {
  type?: string;
}

class TextInput extends React.PureComponent<IProps, IState> {
  public state: IState = {
    type: this.props.type,
  };

  public render() {
    const { type } = this.state;
    const { InputProps } = this.props;

    return (
      <TextField
        {...this.props as TextFieldProps}
        type={type}
        InputProps={{
          ...InputProps,
          endAdornment: InputProps && InputProps.endAdornment || this.renderEndAdornment(),
        }}
      />
    );
  }

  private renderEndAdornment(): React.ReactNode {
    const { type } = this.props;

    if (type === 'password') {
      return (
        <InputAdornment position="end">
          <IconButton
            aria-label="Toggle password visibility"
            onClick={this.handleClickShowPassword}
          >
            <EyeIcon />
          </IconButton>
        </InputAdornment>
      );
    }
  }

  @bind
  private handleClickShowPassword() {
    this.setState(state => ({
      type: state.type === 'password' ? 'text' : 'password',
    }));
  }
}

export { IProps };
export default TextInput;
