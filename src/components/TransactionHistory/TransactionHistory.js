import PropTypes from 'prop-types';
import TransactionHistoryItem from "./TransactionHistoryItem";

export default function TransactionHistory ({transactions}) {
    return (
      <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

<tbody class = "">
          {transactions.map(transaction => 
            <tr key = {transaction.id}>
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