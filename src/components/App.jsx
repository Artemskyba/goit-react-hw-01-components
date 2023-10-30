import user from '../data/user.json';
import stats from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json'

import { GlobalStyle } from './global-style';
import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import { Friendlist } from './friendlist/friendlist';
import { TransactionHistory } from './transaction-history/transaction-hictory';


export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="upload stats" stats={stats} />
      <Friendlist friends={friends}></Friendlist>
      <TransactionHistory transactions={transactions}></TransactionHistory>
      <GlobalStyle/>
    </div>);
};
