

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------
import _ from 'lodash';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './blog2.scss'


export default function Blog2() {
  const [loading, setLoading] = useState(true);
  const [information, setInformation] = useState({})
  const [status, setStatus] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get('http://localhost:4000/api/v1/trainers/me', { withCredentials: true });
        console.log(data.data.trainer.id)
        setInformation({
          id: data.data.trainer['id'],
          name: data.data.trainer['name'],
          email: data.data.trainer['email'],
          city: data.data.trainer['trainerInfo.city'],
          state: data.data.trainer['trainerInfo.state'],
          salary: data.data.trainer['trainerInfo.salary'],
          gender: data.data.trainer['trainerInfo.gender'],
          expert: data.data.trainer['trainerInfo.expert']
        })
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);


  if (!loading) {
    return (
      <div className="container">

        <div className="avatar-flip">
          <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" height="150" width="150" />
        </div>
        <div className='memberInfo'>
          <div className='right-div'>
            <h2 className='h2'>name:<span>{information.name}</span></h2>
            <h2 className='h2'>Trainer ID: <span>{information.id}</span></h2>
            <h2 className='h2'>gender:<span>{information.gender}</span></h2>
            <h2 className='h2'>city:<span>{information.city}</span></h2>
          </div>

          <div className="vl"></div>
          <div className='secondInfo'>
            <h4 className='h4'>email:<span>{information.email}</span></h4>
            <h2 className='h2'>salary:<span> {information.salary} $</span></h2>
            <h2 className='h2'>expert:<span>{information.expert}</span></h2>
          </div>


        </div>

        <div className='info'>

        </div>

      </div>)
  }
  else {
    return (<div>No information yet</div>)
  }
}
