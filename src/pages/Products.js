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
  /*const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };*/

  return (
    <Page title="Dashboard: Membership">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Membership
        </Typography>

        {/*<Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>*/}

        <NameID />
        <SubscriptionTable />
        
        <Typography variant="h4" sx={{ mb: 5 }}>
          Payment
        </Typography>
        
        <div className='membership-tableContainer'>
          <table className="membership-table">
            <tr>
              <th>Charge</th>
              <td>218.00 EGP</td>
            </tr>
            <tr>
              <th>Subscription Date</th>
              <td>22/7/2021</td>
            </tr>
            <tr>
              <th>Subscription End Date</th>
              <td>224 Days left</td>
            </tr>
          </table>
        </div>
        {/*<ProductList products={PRODUCTS} />
        <ProductCartWidget />*/}
      </Container>
    </Page>
  );
}
