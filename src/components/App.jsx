import user from 'data/user.json';
import { Profile } from './profile/Profile';

import data from 'data/data.json';
import { Statistics } from './statistics/Statistics';

import friends from 'data/friends.json'
import { FriendList } from './friendList/friendslist'

import transactions from 'data/transactions.json'
import {TransactionHistory} from './transactionHistory/TransactionHistory'


export const App = () => {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />;

      <TransactionHistory items={transactions} />;

    </div>
  );
};
