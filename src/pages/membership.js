import { useState, useEffect } from 'react';
import axios from 'axios';
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
}
