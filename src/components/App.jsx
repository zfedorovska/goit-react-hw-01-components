import user from 'data/user.js';
import data from 'data/data.js'
import friends from 'data/friends.js';
import transactions from "data/transactions.js";
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Test Upload stats" statsData={data} />
      <Statistics statsData={data} /> 
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;  
    </div>
  );
};

