import '../membership-styling.css';

const getDays = (date) => {
    const date1 = new Date(date);
    const date2 = new Date();
    const diffInTime = date1.getTime() - date2.getTime();
    var Difference_In_Days = diffInTime / (1000 * 3600 * 24);
    return Difference_In_Days;
}

const SubscriptionTable = (props) => {
    console.log(props)
    return (
        <div className='membership-tableContainer'>
            <table className="membership-table">
                <tr>
                    <th>Subscription Status</th>
                    <td>{props.status}</td>
                </tr>
                <tr>
                    <th>Subscription Date</th>
                    <td>{props.date}</td>
                </tr>
                <tr>
                    <th>Subscription End Date</th>
                    <td>{getDays(props.date) > 0 ? Math.floor(getDays(props.date)) : '--'}</td>
                </tr>
            </table>
        </div>
    );
}

export default SubscriptionTable;