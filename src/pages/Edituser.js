import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Page from '../components/Page';

import './edituser.css'



export default function Edituser() {
    const handleLogOut = async () => {
        //await axios.post('http://localhost:4000/api/v1/users/logout', { withCredentials: true });
        Cookies.set('jwt', undefined)
      }

  return (
    <Page title="User">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
           Edit user
          </Typography>
      
        </Stack>
        
      <Container className='container-ed'>
    <Box sx={{height: 15 , }}></Box>
      
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '55ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField disabled id="outlined-basic" label="Name" variant="outlined" />
      <TextField disabled id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Diet plan" variant="outlined" />
      <TextField id="outlined-basic" label="Training plan" variant="outlined" />
      <TextField id="outlined-basic" label="progress" variant="outlined" />
      <Box sx={{ flexGrow: 1 }} />
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '15ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <Box sx={{height: 26 , }}></Box>
      <Button variant="contained" onClick={handleLogOut}><Link className='link-ex' to="/">submit</Link></Button>
      </Box>
      </Container>
    </Page>
  );
}
