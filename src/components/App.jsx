import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/users.json';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import statisticalData from 'components/Statistics/statistical-data.json';
import friends from 'components/FriendList/FriendsList.json';
import transactions from 'components/TransactionHistory/transactions.json';

export default function App() {
    return (
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={statisticalData} />;
            <FriendList friends={friends} />;
            <TransactionHistory items={transactions} />;
        </div>
    );
}