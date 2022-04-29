import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import * as React from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// material
import { Stack, TextField, IconButton, InputAdornment, RadioGroup, FormLabel, FormControl, FormControlLabel, Radio } from '@mui/material';
import { DatePicker, LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    phone: Yup.string().min(11,'phone must be a valid number ').required('phone is required'),
    password: Yup.string().required('Password is required'),
    date: Yup.date().required('Date is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      date: '',

    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard/app', { replace: true });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>
          <TextField
            fullWidth
            autoComplete="username"
            type="phone"
            label="phone"
            {...getFieldProps('phone')}
            error={Boolean(touched.phone && errors.phone)}
            helperText={touched.phone && errors.phone}
          />
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <TextField
          fullWidth
          autoComplete='date'
          label= "Birth Date"
          type='date'
          {...getFieldProps('date')}
          error={Boolean(touched.date && errors.date)}
          helperText={touched.date && errors.date}
          />
            <FormControl>
      <FormLabel id="Gender">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="group-Gender"
        name="group-Gender-name"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
    </FormControl>
          
          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
