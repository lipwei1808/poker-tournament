import { FC, useEffect } from 'react';

import { Text } from '@ui';
import PlayerRow from './PlayerRow';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const tableHeaders: (string | number)[] = [
  'Rank',
  'Player',
  'Net Winnings',
  'Total Wins',
  'Total Games Played',
];
const mockData = [
  { rank: 1, player: 'Hung Chia-Yu', netWinnings: 341, totalWins: 2, gamesPlayed: 2 },
  { rank: 2, player: 'Andy Tan Jun Xian', netWinnings: 341, totalWins: 2, gamesPlayed: 2 },
  { rank: 3, player: 'Tan Lip Wei', netWinnings: 341, totalWins: 2, gamesPlayed: 2 },
  { rank: 4, player: 'Ruvenn Siow', netWinnings: 341, totalWins: 2, gamesPlayed: 2 },
  { rank: 5, player: 'Nyle Ng', netWinnings: 341, totalWins: 2, gamesPlayed: 2 },
  { rank: 6, player: 'Marcus Chong', netWinnings: 341, totalWins: 2, gamesPlayed: 2 },
];

// eslint-disable-next-line arrow-body-style
const PlayersList: FC<Props> = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-12 rounded-lg">
      <div className="grid grid-cols-playerList bg-black w-full">
        {tableHeaders.map((item, i) => (
          <Text key={i} className="p-6">
            {item}
          </Text>
        ))}
        {mockData.map((data) => (
          <PlayerRow data={data} />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
