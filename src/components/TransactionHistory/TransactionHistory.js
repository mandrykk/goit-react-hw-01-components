import PropTypes from 'prop-types';
import TransactionHistoryItem from "./TransactionHistoryItem";
import style from './TransactionHistory.module.css'

export default function TransactionHistory ({transactions}) {
    return (
      <table className = {style.transactionHistory}>
  <thead className = {style.transactionsHead}>
    <tr className = {style.title}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

<tbody>
          {transactions.map(transaction => 
            <tr key={transaction.id}
            className = {style.tr}>
              <TransactionHistoryItem 
                type = {transaction.type}
                amount = {transaction.amount}
                currency = {transaction.currency}/>
            </tr>
          )}
        </tbody>
</table>
    );
}

TransactionHistory.propType = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired
    }))
}