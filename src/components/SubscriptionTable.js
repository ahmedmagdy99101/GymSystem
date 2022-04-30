import '../membership-styling.css';

const SubscriptionTable = () => {
    return ( 
        <div className='membership-tableContainer'>
            <table className="membership-table">
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
    );
}
 
export default SubscriptionTable;