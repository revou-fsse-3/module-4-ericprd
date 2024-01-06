import * as yup from 'yup';

export const schemaValidation = yup.object({
  name: yup.string().min(3, 'Category name must have at least 3 characters').required('Category name must have at least 3 characters'),
})
