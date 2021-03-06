import * as React from 'react';
import { GetProps } from '_helpers';
import BN from 'bn.js';
import { FieldRenderProps } from 'react-final-form';

import { useTranslate } from 'services/i18n';
import { getFieldWithComponent } from 'shared/helpers/react';
import { TextInput, DecimalsInput } from 'shared/view/elements';

interface IOwnProps {
  baseDecimals: number;
  maxValue?: BN;
}

type IProps = Omit<GetProps<typeof TextInput>, 'ref'> & FieldRenderProps & IOwnProps;

function DecimalsField(props: IProps) {
  const { baseDecimals, maxValue, input, meta, ...rest } = props;
  const { t } = useTranslate();

  const error =
    typeof rest.error === 'boolean'
      ? rest.error && meta.error && t(meta.error)
      : meta.touched && meta.error && t(meta.error);

  return (
    <DecimalsInput
      baseDecimals={baseDecimals}
      maxValue={maxValue}
      {...rest}
      helperText={error}
      error={Boolean(error)}
      {...input}
    />
  );
}

export default getFieldWithComponent(DecimalsField);
