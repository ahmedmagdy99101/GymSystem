import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import '../membership-styling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';


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
        <div id='membership-container'>
          <ul id='membership-list'>
            <li id="user-data">
              <p style={{fontSize: "2em"}}>Ahmed Mohamed</p>
              <p>User ID: 55952265</p>
            </li>
            <li>
              <FontAwesomeIcon icon={solid('circle-user')} size="6x" />              
            </li>
          </ul>
        </div>
        <div className='membership-tableContainer'>
          <table id="membership-table">
            <tr>
              <th>Subscription Status</th>
              <td>Active</td>
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
        <Typography variant="h4" sx={{ mb: 5 }}>
          Payment
        </Typography>
        {/*<ProductList products={PRODUCTS} />
        <ProductCartWidget />*/}
      </Container>
    </Page>
  );
}
