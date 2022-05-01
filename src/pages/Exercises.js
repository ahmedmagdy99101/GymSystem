import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import './exercises.css'
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
export default function exercises() {
  return (

    <Paper
      sx={{
        p: 0,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2} class='container-ex'>
        <Grid item>
          
           
         
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h3" component="div">
              Type of exercise
              </Typography>
              <Typography variant="body2" gutterBottom>
              name of exercise
              </Typography>
              <Typography variant="body2" color="text.secondary">
                number of exercise
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
          <Img className='img-ex' alt="complex" src="/static/illustrations/Fitness-star.png" />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
 
  );
}
