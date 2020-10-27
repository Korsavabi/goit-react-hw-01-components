import React from 'react';
import User from './Components/User/User';
import Stats from './Components/Statistic/Statistic';
import FriendList from './Components/FriendList/FriendList';
import Transation from './Components/TransactionHistory/TransactionHistory';
import users from './db/user.json';


const App = () => {
  return (
   <>
   <User  users={users}/>
   <Stats />
   <FriendList />
   <Transation />
   </>
  );
}

export default App;
