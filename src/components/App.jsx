// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import React from "react";
import { Profile } from "./Profile/Profile.jsx";
import { Statistics } from "./Statistics/Statistics.jsx";
import { FriendList } from "./FriendList/FriendList.jsx";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory.jsx";

import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

export const App = () => {
  return (
    <div>
    <Profile
    avatar={user.avatar}
    username={user.username}
    tag={user.tag}
    location={user.location}
    stats={user.stats}
      />
      
    <Statistics
    title="Upload stats"
    stats={data}
      />

      <FriendList
        friends={friends}
      />

      <TransactionHistory
        items={transactions}
      />
      
      </div>
  )
};