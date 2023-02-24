export interface User {
  id: string;
  name: string;
  wins: number;
  runnerUp: number;
  winRate: number | null;
  totalWinnings: number;
  totalSpending: number;
  netWinnings: number;
  quads: number;
  straightFlush: number;
  firstEliminated: number;
  gameHistory: string[];
}
