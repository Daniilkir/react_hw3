import React from 'react';
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

function App() {
  return (
    <div className="App">
      <section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>

      <section>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </section>

      <section>
        <FriendList friends={friends} />
      </section>
      <section>
      <TransactionHistory items={transactions} />
      </section>

    </div>
  );
}

export default App;
