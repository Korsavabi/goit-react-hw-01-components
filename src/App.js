import React from 'react';
import Profile from './Components/Profile/Profile';
import Stats from './Components/Statistic/Statistic';
import FriendList from './Components/FriendList/FriendList';
import Transation from './Components/TransactionHistory/TransactionHistory';
import users from './db/user.json';
import stats from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';


const App = () => {
  return (
   <>
   <Profile  users={users}/>
   <Stats  stat={stats}/>
   <FriendList friends={friends}/>
   <Transation transactions={transactions}/>
   </>
  );
}

export default App;
