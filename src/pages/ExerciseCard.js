import React from 'react';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ExerciseCard(props) {
    console.log(props)
    console.log("NAME")
    return (<Grid key={props.key} container spacing={2} className='container-ex'>
        <Grid item>

        </Grid>
        <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="h4" component="div">
                        Type of exercise : {props.name}
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        {props.exercise}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Img className='img-ex' alt="complex" src="/static/illustrations/Fitness-star.png" />
            </Grid>
        </Grid>
    </Grid>
    )
}