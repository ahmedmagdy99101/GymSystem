

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------
import _ from 'lodash';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './blog2.scss'
import User from '../pages/User';
import profileimg from './gymOwner.jpg'



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
      <div>
        <div className="container2">
          <br />
          <br />
          <br />

          <div className="avatar-flip">
            <img src={profileimg} height="150" width="150" />
          </div>
          <div className='memberInfo'>
            <div className='right-div'>
              <h2 className='h23'>Name: <span>{information.name}</span></h2>
              <h2 className='h23'>Trainer ID: <span>{information.id}</span></h2>
              <h2 className='h23'>Gender: <span>{information.gender}</span></h2>
              <h2 className='h233'>City: <span>{information.city}</span></h2>
            </div>

            <div className="vl3"></div>
            <div className='secondInfo'>
              <h4 className='h43'>Email: <span>{information.email}</span></h4>
              <h2 className='h23'>Salary: <span> {information.salary} $</span></h2>
              <h2 className='h23'>Expert: <span>{information.expert}</span></h2>
            </div>


          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

        </div>

      </div>
    )
  }
  else {
    return (<div>No information yet</div>)
  }
}
