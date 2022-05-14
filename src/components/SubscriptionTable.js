import '../membership-styling.css';

const SubscriptionTable = ({ subscription }) => {
    return ( 
        <div className='membership-tableContainer'>
            <table className="membership-table">
                <tbody>
                    <tr>
                        <th>Subscription Status</th>
                        {subscription.active === "true" ? 
                            <td><span className='activation-expiration' style={{backgroundColor: "green"}}>
                                Active</span></td> : 
                            <td><span className='activation-expiration' style={{backgroundColor: "red"}}>
                                Expired</span></td>
                        }
                    </tr>
                    <tr>
                        <th>Subscription Date</th>
                        <td>{subscription.subDate}</td>
                    </tr>
                    <tr>
                        <th>Subscription End Date</th>
                        <td>{subscription.endDate} Days left</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SubscriptionTable;