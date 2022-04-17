import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => (
                <tr key={item.id}>
                    <td className={s.type}>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>)
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TransactionHistory;