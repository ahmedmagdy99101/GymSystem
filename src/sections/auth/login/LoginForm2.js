import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
import axios from 'axios';
import Cookies from 'js-cookie'
// ----------------------------------------------------------------------

export default function LoginForm2() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email1: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password1: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {

    },
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const login = await axios.post('http://localhost:4000/api/v1/users/login', {
      email,
      password
    })
    Cookies.set('jwt', login.data['token'])
    navigate('/dashboard/exercises', {
      replace: true,
      firstName: login.data['firstName'],
      lastName: login.data['lastName'],
      gender: login.data['gender'],
    });
  }
  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
    console.log(email)
  }

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
    console.log(password)
  }


  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleOnSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            onChange={handleSetEmail}
            value={email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            onChange={handleSetPassword}
            value={password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
