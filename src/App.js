import user from './data/user.json';
import Profile from './components/Profile/Profile';

import data from './data/data.json';
import StatisticsList from './components/Statistics/StatisticsList';

import friends from './data/friends.json';
import FriendList from './components/FriendList/FriendList';

import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

const App = () => {
    return (
        <><Profile 
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats} />
        <StatisticsList title = "Upload stats" items = {data}/>
        <FriendList friends = {friends}/>
        <TransactionHistory transactions = {transactions}/>
        </>
    );
}
export default App;
