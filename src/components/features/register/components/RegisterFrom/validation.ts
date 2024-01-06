import * as yup from 'yup';

export const schemaValidation = yup.object({
  name: yup.string().min(4, 'Your name must have at least 4 characters').required('Your name must have at least 4 characters'),
  email: yup.string().email('Please input your valid email').required('Please input your valid email'),
  password: yup.string().min(6, 'Password must have at least 6 characters').required('Password must have at least 6 characters'),
});
