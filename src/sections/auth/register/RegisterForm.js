import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import axios from 'axios';
import * as React from 'react';
import Cookies from 'js-cookie';

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

  });

  const formik = useFormik({
    // initialValues: {
    //   firstName: '',
    //   lastName: '',
    //   phone: '',
    //   email: '',
    //   password: '',
    //   date: '',

    // },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      //navigate('/dashboard/app', { replace: true });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [birthDate, setDate] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const signup = await axios.post('http://localhost:4000/api/v1/users/signup', {
      "firstName": firstName,
      "lastName": lastName,
      "gender": gender,
      "birthDate": birthDate,
      "phone": phone,
      "email": email,
      "password": password
    })
    console.log(signup)
    Cookies.set('jwt', signup.data['token'])
    navigate('/dashboard/exercises', {
      replace: true
    });
  }

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleOnSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            fullWidth
            autoComplete='date'
            label="Birth Date"
            type='date'
            value='a'
            {...getFieldProps('date')}
            error={Boolean(touched.date && errors.date)}
            helperText={touched.date && errors.date}
            onChange={(e) => setDate(e.target.value)}
          />
          <FormControl>
            <FormLabel id="Gender">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="group-Gender"
              name="group-Gender-name"
              onChange={(e) => setGender(e.target.value)}
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
