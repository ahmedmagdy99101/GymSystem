import '../membership-styling.css';

const SubscriptionTable = (props) => {
    const getDays = (date) => {
        const date1 = new Date(date);
        const date2 = new Date();
        const diffInTime = date1.getTime() - date2.getTime();
        var Difference_In_Days = diffInTime / (1000 * 3600 * 24);
        return Difference_In_Days;
    }

    return (
        <div className='membership-tableContainer'>
            <table className="membership-table">
                <tbody>
                    <tr>
                        <th className='mem-table-header'>Subscription Status</th>
                        {props.status === "true" ?
                            <td className='mem-table-info'><span className='activation-expiration' style={{ backgroundColor: "green" }}>
                                Active</span></td> :
                            <td className='mem-table-info'><span className='activation-expiration' style={{ backgroundColor: "red" }}>
                                Expired</span></td>
                        }
                    </tr>
                    <tr>
                        <th className='mem-table-header'>Subscription End Date</th>
                        <td className='mem-table-info'>{props.date}</td>
                    </tr>
                    <tr>
                        <th className='mem-table-header'>Remaining Days</th>
                        <td className='mem-table-info'>{getDays(props.date) > 0 ? Math.floor(getDays(props.date)) : 0} Days left</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SubscriptionTable;
