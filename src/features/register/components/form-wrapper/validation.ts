import * as yup from 'yup';

export const validationSchema = yup.object({
  fullname: yup.string().required('Full name is required').min(3, 'Username must have at least 3 characters'),
  email: yup.string().email('Email is not valid').required('Email is required'),
  date: yup.date().typeError('Please select your birthdate').required('Date of birth is required'),
  address: yup.string().required('Address is required').min(5, 'Address too short'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zipcode: yup.string().matches(/^\d{6}$/gi, 'Zip code is not valid').required('Zip Code is required'),
  username: yup.string().required('Username is required').min(6, 'Username must have at least 6 characters'),
  password: yup.string().required('Password is required').min(8, 'Password must have at least 8 characters')
})