import React from 'react';
import { Form } from 'react-final-form';

import { useDeps } from 'core';
import { TextInputField } from 'shared/view/form';
import { Button, Typography, Grid, CircleProgressBar } from 'shared/view/elements';
import { composeValidators, validateFloat, validatePositiveNumber } from 'shared/validators';
import { useSubscribable } from 'shared/helpers/react';

import { useStyles } from './BalanceChangingForm.style';

interface IFormData {
  amount: string;
}

const fieldNames: { [K in keyof IFormData]: K } = {
  amount: 'amount',
};

interface IProps {
  title: string;
  placeholder: string;
  cancelButtonText: string;
  submitButtonText: string;
  onSubmit: (values: IFormData) => void;
  onCancel: () => void;
}

function BalanceChangingForm(props: IProps) {
  const { title, placeholder, cancelButtonText, submitButtonText, onSubmit, onCancel } = props;

  const classes = useStyles();
  const { api } = useDeps();
  const [chainProps, chainPropsMeta] = useSubscribable(() => api.getChainProps$(), []);

  const initialValues = React.useMemo<IFormData>(
    () => ({
      amount: '',
    }),
    [],
  );

  const amountDecimals = chainProps ? chainProps.tokenDecimals : 0;
  const validateAmount = React.useMemo(() => {
    return composeValidators(validateFloat(amountDecimals), validatePositiveNumber);
  }, [amountDecimals]);

  if (!chainPropsMeta.loaded) {
    return (
      // TODO: need to wrap in Hint
      <CircleProgressBar />
    );
  }

  if (!!chainPropsMeta.error) {
    return (
      // TODO: need to wrap in Hint
      <Typography color="error">{chainPropsMeta.error}</Typography>
    );
  }

  return (
    <Form onSubmit={onSubmit} initialValues={initialValues}>
      {formProps => (
        <form onSubmit={formProps.handleSubmit} className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" weight="bold" noWrap gutterBottom>
                {title}
              </Typography>
              <TextInputField
                variant="outlined"
                validate={validateAmount}
                name={fieldNames.amount}
                placeholder={placeholder}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" color="primary" fullWidth onClick={onCancel}>
                {cancelButtonText}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                {submitButtonText}
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Form>
  );
}

export { IFormData };
export default BalanceChangingForm;
