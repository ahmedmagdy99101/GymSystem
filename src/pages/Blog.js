

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------
import _ from 'lodash';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './blog.scss'
export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [information, setInformation] = useState({})
  const [status, setStatus] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get('http://localhost:4000/api/v1/users/me', { withCredentials: true });
        console.log(data.data.client)
        setInformation({
          id: data.data.client['id'],
          firstName: data.data.client['firstName'],
          lastName: data.data.client['lastName'],
          gender: data.data.client['gender'],
          phone: data.data.client['phone'],
          age: data.data.client['info.age'],
          weight: data.data.client['info.weight'],
          height: data.data.client['info.heigth'],
          email: data.data.client['email'],
          goal: data.data.client['info.goal'],
          calories: data.data.client['info.calories'],
          dietPlan: data.data.client['info.dietPlan'],
          trainingPlan: data.data.client['info.trainingPlan'],
        })
        const status = await axios.get('http://localhost:4000/api/v1/memberships', { withCredentials: true });
        setStatus(status.data.data.active == 'true')
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
        <h4 className='center'>member state:<span className='state'>{status ? 'Active' : 'Inactive'}</span></h4>
        <div className='memberInfo'>


          <div className='right-div'>
            <h2 className='h2'>name:<span>{information.firstName + " " + information.lastName}</span></h2>
            <h2 className='h2'>User ID: <span>{information.id}</span></h2>
            <h2 className='h2'>gender:<span>{information.gender}</span></h2>
            <h2 className='h2'>date of birth:<span>{information.age}</span></h2>
            <h2 className='h2'>goal:<span>{information.goal}</span></h2>
            <h2 className='h2'>training plan:<span>{information.trainingPlan}</span></h2>


          </div>

          <div className="vl"></div>
          <div className='secondInfo'>

            <h4 className='h4'>email:<span>{information.email}</span></h4>

            <h4 className='h4'>phone:<span>{information.phone}</span></h4>
            <h4 className='h4'> weight:<span>{information.weight}</span> kgm</h4>
            <h2 className='h2'>age:<span>{information.age}</span></h2>

            <h4 className='h4'>height:<span>{information.height}</span> cm</h4>
            <h4 className='h4'>calories:<span>{information.calories}</span> cm</h4>
            <h4 className='h4'>diet plan:<span>{information.dietPlan}</span> cm</h4>

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
