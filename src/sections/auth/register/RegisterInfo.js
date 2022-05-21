import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import axios from 'axios';
import * as React from 'react';
import Cookies from 'js-cookie';
import MenuItem from '@mui/material/MenuItem';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// material
import { Stack, TextField, IconButton, InputAdornment, RadioGroup, FormLabel, FormControl, FormControlLabel, Radio } from '@mui/material';
import { DatePicker, LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const currencies = [
  {
    value: 1,
    label: 'body building',
  },
  {
    value: 2,
    label: 'power lefting',
  },
];

const trainers = [
  {
    value: 1,
    label: 'Ahmed Magdy',
  },
  {
    value: 2,
    label: 'Ahmed Mohamed',
  },
];

export default function RegisterInfo() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [heigth, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [goal, setGoal] = useState('');
  const [calories, setCalories] = useState(0);
  const [dietPlan, setDietPlan] = useState('');
  const [trainingPlan, setTrainingPlan] = useState('');
  const [age, setAge] = useState(0);


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const signup = await axios.post('http://localhost:4000/api/v1/infos', {
      heigth,
      weight,
      goal,
      calories,
      dietPlan,
      trainingPlan,
      age,
      sportId: currency,
      trainerId: trainer
    },
      { withCredentials: true }
    )
    console.log(signup)
    navigate('/dashboard/exercises', {
      replace: true
    });
  }



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

  const [currency, setCurrency] = React.useState(1);
  const [trainer, setTrainers] = React.useState(1);

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleChangetrainers = (e) => {
    setTrainers(e.target.value);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleOnSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Weight"
              //  {...getFieldProps('firstName')}
              // error={Boolean(touched.firstName && errors.firstName)}
              // helperText={touched.firstName && errors.firstName}
              onChange={(e) => setWeight(e.target.value)}
            />

            <TextField
              fullWidth
              label="Height"
              //   {...getFieldProps('lastName')}
              // error={Boolean(touched.lastName && errors.lastName)}
              // helperText={touched.lastName && errors.lastName}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Stack>
          <TextField
            fullWidth
            autoComplete="Goal"
            label="Goal"
            //   {...getFieldProps('phone')}
            // error={Boolean(touched.phone && errors.phone)}
            // helperText={touched.phone && errors.phone}
            onChange={(e) => setGoal(e.target.value)}
          />
          <TextField
            fullWidth
            label="Age"
            //   {...getFieldProps('phone')}
            // error={Boolean(touched.phone && errors.phone)}
            // helperText={touched.phone && errors.phone}
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Calories"
            //    {...getFieldProps('email')}
            // error={Boolean(touched.email && errors.email)}
            // helperText={touched.email && errors.email}
            onChange={(e) => setCalories(e.target.value)}
          />
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="DietPlan"
            //  {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            onChange={(e) => setDietPlan(e.target.value)}
          />
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="TrainingPlan"
            //  {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            onChange={(e) => setTrainingPlan(e.target.value)}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Sports"
            value={currency}
            onChange={handleChange}
            helperText="Please select your sport"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-Trainer"
            select
            label="Trainer"
            value={trainers}
            onChange={handleChangetrainers}
            helperText="Please select your trainer"
          >
            {trainers.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
