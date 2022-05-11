import { useState } from 'react';
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

export default function EcommerceShop() {


  return (
    <Page title="Dashboard: Membership">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Membership
        </Typography>

        <NameID />
        <SubscriptionTable />
        
        <Typography variant="h4" sx={{ mb: 5 }}>
          Payment
        </Typography>
        <p>To extend your subscription, please enter payment code in the field:</p>
        <div className='membership-payment'>
          <form className="membership-paymentForm">
            <label id="pay-label" for="code">Code: </label>
            <input id="pay-text" type="text" name="code" />
            <input id="pay-submit" type="submit" value="Subscribe" />
          </form>
        </div>
       
      </Container>
    </Page>
  );
}
