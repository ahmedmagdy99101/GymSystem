import { useState, useEffect } from 'react';
<<<<<<< Updated upstream
import axios from 'axios';
=======
>>>>>>> Stashed changes
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import '../membership-styling.css';
import NameID from '../components/NameID';
import SubscriptionTable from '../components/SubscriptionTable';


// ----------------------------------------------------------------------

const handleSubmitCode = async (e) => {
  e.preventDefault();
  const codeInfo = await axios.post('http://localhost:4000/api/v1/payments', { code: e.target.code.value }, { withCredentials: true })
}



export default function EcommerceShop() {
  const [userData, setUserData] = useState("");
  const [subscription, setSubscription] = useState("");
  const [subscriptionCode, setSubscriptionCode] = useState("");

<<<<<<< Updated upstream
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [date, setDate] = useState('');
  const [userID, setUserID] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get('http://localhost:4000/api/v1/memberships', { withCredentials: true });
        console.log(data.data)
        setStatus(data.data.data.active)
        setDate(data.data.data.renewAt)
        const userInfo = await axios.get('http://localhost:4000/api/v1/users/me', { withCredentials: true });
        setName(userInfo.data.client['firstName'] + " " + userInfo.data.client['lastName'])
        setUserID(userInfo.data.client['id'])
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);



  if (!loading) {
    return (
      <Page title="Dashboard: Membership">
        <Container>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Membership
          </Typography>

          <NameID name={name} id={userID} />
          <SubscriptionTable status={status} date={date} />

          <Typography variant="h4" sx={{ mb: 5 }}>
            Payment
          </Typography>
          <p>To extend your subscription, please enter payment code in the field:</p>
          <div className='membership-payment'>
            <form className="membership-paymentForm" onSubmit={handleSubmitCode}>
              <label id="pay-label" htmlFor="code">Code: </label>
              <input id="pay-text" type="text" name="code" />
              <input id="pay-submit" type="submit" value="Subscribe" />
            </form>
          </div>

        </Container>
      </Page>
    );
  }
  else {
    return (<div>There is no info yet</div>);
  }
=======
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setUserData(data.me[0]);
      })
  } ,[]);

  useEffect(() => {
    fetch("http://localhost:8000/memberships")
    .then(res => {
      return res.json();
    })
    .then(data => {
      setSubscription(data[0]);
    })
  }, [])

  const updateSubTable = (period) => {
    const d = new Date();
    const expirationDay = Math.floor(Date.now() / 1000 / 60 / 60 / 24) + period;
    localStorage.setItem(`user${subscription.id}`, expirationDay);
    const currentDay = Math.floor(Date.now() / 1000 / 60 / 60 / 24);
    const savedDay = localStorage.getItem(`user${subscription.id}`)
    const expiryPeriod = savedDay - currentDay;
    /*console.log(d.getDate())
    console.log(`${d.getDate()}/${parseInt(d.getMonth())+1}/${d.getFullYear()}`);*/
    const membership = {
      "active": "true",
      "subDate": `${d.getDate()}/${parseInt(d.getMonth())+1}/${d.getFullYear()}`,
      "endDate": `${expiryPeriod}`
    }
    fetch("http://localhost:8000/memberships/1/", {
      method: 'PUT',
      body: JSON.stringify(membership),
      headers: { 'Content-Type': 'application/json' }
    })
    setSubscription(membership);
    /*fetch(`http://localhost:8000/payments/${codeID}/`, {
      method: 'DELETE',
      body: JSON.stringify(),
      headers: { 'Content-Type': 'application/json' }
    })*/
  }

  const checkCodeValidity = (subscriptionCodes) => {
    const subscriptionValue = subscriptionCodes.filter(code => code[subscriptionCode])
    .map(cd => cd[subscriptionCode])[0];
    //const codeID = subscriptionCodes.filter(code => code[subscriptionCode])[0].id;
    if(subscriptionValue == 200){
      alert(`Your Subscription has been extended for 3 Months with 200EGP`);
      updateSubTable(90);
    }else if(subscriptionValue == 400){
      alert(`Your Subscription has been extended for 6 Months with 400EGP`);
      updateSubTable(180);
    }else if(subscriptionValue == 600){
      alert(`Your Subscription has been extended for 1 Year with 600EGP`);
      updateSubTable(365);
    }else{
      alert("Invalid Code!");
    }
  }

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/payments")
    .then(res => {
      return res.json();
    })
    .then(data => {
      checkCodeValidity(data);
    });
    {/*
      "id": "1",
      "active": "false",
      "subDate": "-",
      "endDate": "0"
    *//*
      const getDays = (date) => {
          const date1 = new Date(date);
          const date2 = new Date();
          const diffInTime = date1.getTime() - date2.getTime();
          var Difference_In_Days = diffInTime / (1000 * 3600 * 24);
          return Difference_In_Days;
      }
    */}
  }
  const d = new Date();
  console.log(Math.floor(Date.now() / 1000 / 60 / 60 / 24) + 90)
  //console.log(`${d.getDate()}/${parseInt(d.getMonth())+1}/${d.getFullYear()}`);
  
  return (
    <Page title="Dashboard: Membership">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Membership
        </Typography>

        <NameID userData={userData} />
        <SubscriptionTable subscription={subscription}/>
        
        <Typography variant="h4" sx={{ mb: 5 }}>
          Payment
        </Typography>
        <p>To extend your subscription, please enter payment code in the field:</p>
        <div className='membership-payment'>
          <form className="membership-paymentForm" onSubmit={handleCodeSubmit}>
            <label id="pay-label" htmlFor="code">Code: </label>
            <input id="pay-text" type="text" name="code" 
              value={subscriptionCode} 
              onChange={e => setSubscriptionCode(e.target.value)} 
            />
            {subscription.active==="true" &&
            <input className="pay-submit pay-submit-dis" type="submit" value="Subscribe" disabled/>}
            {subscription.active==="false" && <input className="pay-submit" type="submit" value="Subscribe" />}
          </form>
        </div>
       
      </Container>
    </Page>
  );
>>>>>>> Stashed changes
}
