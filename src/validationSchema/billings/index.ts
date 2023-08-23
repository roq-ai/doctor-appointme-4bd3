import * as yup from 'yup';

export const billingValidationSchema = yup.object().shape({
  invoice_amount: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
