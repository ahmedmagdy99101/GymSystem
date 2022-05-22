

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------
import _ from 'lodash';
import profileimg from './gymOwner.jpg'
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
      <div className="container1">
        <div className="avatar-flip">
          <img src={profileimg} height="150" width="150" />
        </div>
        <h4 className='center'>member state:<span className='state'>{status ? 'Active' : 'Inactive'}</span></h4>
        <div className='memberInfo'>


          <div className='right-div'>
            <h2 className='h22'>Name: <span>{information.firstName + " " + information.lastName}</span></h2>
            <h2 className='h22'>User ID: <span>{information.id}</span></h2>
            <h2 className='h22'>Gender: <span>{information.gender}</span></h2>
            <h2 className='h22'>Date of birth: <span>{information.age}</span></h2>
            <h2 className='h22'>Goal: <span>{information.goal}</span></h2>
            <h2 className='h22'>Training plan: <span>{information.trainingPlan}</span></h2>
            <h4 className='h40'>Diet plan: <span>{information.dietPlan}</span> cm</h4>


          </div>

          <div className="vl1"></div>
          <div className='secondInfo'>

            <h4 className='h44'>Email: <span>{information.email}</span></h4>

            <h4 className='h44'>Phone :<span>{information.phone}</span></h4>
            <h4 className='h44'> Weight: <span>{information.weight}</span> kgm</h4>
            <h2 className='h22'>Age: <span>{information.age}</span></h2>

            <h4 className='h44'>Height: <span>{information.height}</span> cm</h4>

            <h4 className='h44'>Calories: <span>{information.calories}</span> cm</h4>
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
