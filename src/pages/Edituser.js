import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  const { id } = useParams();

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [dietPlan, setDietPlan] = useState()
  const [trainingPlan, setTrainingPlan] = useState()
  const [progress, setProgress] = useState()

  const editInfo = async (e) => {
    e.preventDefault()
    window.location.reload()
    await axios.post(`http://localhost:4000/api/v1/trainers/${id}`, {
      dietPlan,
      trainingPlan,
      progress,
    }, { withCredentials: true });

  }

  const [loading, setLoading] = useState(true)
  useEffect(async () => {
    setLoading(true);
    const user_ = await axios.get(`http://localhost:4000/api/v1/trainers/${id}`, { withCredentials: true })
    console.log(user_)

    setName(user_.data.info.name)
    setEmail(user_.data.info.email)
    setDietPlan(user_.data.info.dietPlan)
    setTrainingPlan(user_.data.info.trainingPlan)
    setProgress(user_.data.info.progress)

    setLoading(false);
  }, []);


  if (!loading) {
    return (
      <Page title="User">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Edit user
          </Typography>

        </Stack>

        <Container className='container-ed'>
          <Box sx={{ height: 15, }}></Box>

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '55ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField disabled id="outlined-basic" label="Name" variant="outlined" value={name} />
            <TextField disabled id="outlined-basic" label="Email" variant="outlined" value={email} />
            <TextField id="outlined-basic" label="Diet plan" variant="outlined" value={dietPlan} onChange={(e) => setDietPlan(e.target.value)} />
            <TextField id="outlined-basic" label="Training plan" variant="outlined" value={trainingPlan} onChange={(e) => setTrainingPlan(e.target.value)} />
            <TextField id="outlined-basic" label="progress" variant="outlined" value={progress} onChange={(e) => setProgress(e.target.value)} />
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
            <Box sx={{ height: 26, }}></Box>
            <Button variant="contained" onClick={editInfo}><Link className='link-ex' to="/trainer/profile">submit</Link></Button>
          </Box>
        </Container>
      </Page>
    );
  }
  else return <p>No such a user found</p>
}
