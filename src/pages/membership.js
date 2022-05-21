import { useState, useEffect } from 'react';
import axios from 'axios';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';

// mock

import '../membership-styling.css';
import NameID from '../components/NameID';
import SubscriptionTable from '../components/SubscriptionTable';


// ----------------------------------------------------------------------



export default function EcommerceShop() {
  const [userData, setUserData] = useState("");
  const [subscription, setSubscription] = useState("");
  const [subscriptionCode, setSubscriptionCode] = useState("");

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [date, setDate] = useState('');
  const [userID, setUserID] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');


  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    try {
      const codeInfo = await axios.post('http://localhost:4000/api/v1/payments', { code }, { withCredentials: true })
      checkCodeValidity(codeInfo.data.message, codeInfo.data.status)
    } catch (e) {
      checkCodeValidity("Invalid Code, try again", "Failed")
    }

  }


  const checkCodeValidity = (subscriptionMessage, status) => {
    alert(subscriptionMessage);
    if (status == 'Success')
      window.location.reload();


    // const subscriptionValue = subscriptionCodes.filter(code => code[subscriptionCode])
    //   .map(cd => cd[subscriptionCode])[0];
    // //const codeID = subscriptionCodes.filter(code => code[subscriptionCode])[0].id;
    // if (subscriptionValue == 200) {

    //   updateSubTable(90);
    // } else if (subscriptionValue == 400) {
    //   alert(`Your Subscription has been extended for 6 Months with 400EGP`);
    //   updateSubTable(180);
    // } else if (subscriptionValue == 600) {
    //   alert(`Your Subscription has been extended for 1 Year with 600EGP`);
    //   updateSubTable(365);
    // } else {
    //   alert("Invalid Code!");
    // }
  }

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
            <form className="membership-paymentForm" onSubmit={handleCodeSubmit}>
              <label id="pay-label" htmlFor="code">Code: </label>
              <input id="pay-text" type="text" name="code"
                value={code}
                onChange={e => setCode(e.target.value)}
              />
              {status == "true" &&
                <input className="pay-submit pay-submit-dis" type="submit" value="Subscribe" disabled />}
              {status == "false" && <input className="pay-submit" type="submit" value="Subscribe" />}
            </form>
          </div>

        </Container>
      </Page>
    );
  }
  else {
    return (<div>There is no info yet</div>);
  }
}
