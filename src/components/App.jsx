import user from 'user.js';
import data from 'data.js'
import friends from 'friends.js';
import transactions from "transactions.js";
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

