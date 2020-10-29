import React from 'react';
import Profile from './Components/Profile/Profile';
import Stats from './Components/Statistic/Statistic';
import FriendList from './Components/FriendList/FriendList';
import Transation from './Components/TransactionHistory/TransactionHistory';
import users from './db/user.json';


const App = () => {
  return (
   <>
   <Profile  users={users}/>
   <Stats />
   <FriendList />
   <Transation />
   </>
  );
}

export default App;
