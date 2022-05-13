import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import './exercises.css'
import ExerciseCard from './ExerciseCard';





export default function exercises() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('')
  const [excercisesName, setExcercisesName] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get('http://localhost:4000/api/v1/sports/me', { withCredentials: true });
        setName(data.data.sports[0]['name'])
        console.log(data.data.sports[0]['excercises'])
        setExcercisesName(data.data.sports[0]['excercises'])
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);


  if (!loading) {
    return (<Paper
      sx={{
        p: 0,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      {
        excercisesName.map((exercise) => <ExerciseCard key={name} name={name} exercise={exercise.name} />)
      }
    </Paper>);
  }
  else {
    return <div>Please Login</div>
  }
}
