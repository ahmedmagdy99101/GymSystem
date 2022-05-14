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

export default function RegisterInfo() {
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
              label="Weight"
            //  {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <TextField
              fullWidth
              label="Height"
           //   {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Stack>
          <TextField
            fullWidth
            autoComplete="Goal"
            type="phone"
            label="Goal"
         //   {...getFieldProps('phone')}
            error={Boolean(touched.phone && errors.phone)}
            helperText={touched.phone && errors.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Calories"
        //    {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            onChange={(e) => setEmail(e.target.value)}
          />
<TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="DietPlan"
          //  {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="TrainingPlan"
          //  {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
