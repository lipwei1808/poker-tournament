// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from '@frontend-types/User';
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../libs/mongodb';

type Data = {
  data: any;
};

const defaultUser: Omit<User, 'id' | 'name'> = {
  wins: 0,
  runnerUp: 0,
  winRate: null,
  totalWinnings: 0,
  totalSpending: 0,
  netWinnings: 0,
  quads: 0,
  straightFlush: 0,
  firstEliminated: 0,
  gameHistory: [],
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { body, method } = req;
  console.log('ADDING USer');
  console.log(body, method);
  const user = JSON.parse(body);
  const client = await clientPromise;
  const db = client.db('poker-tournament');
  switch (method) {
    case 'POST':
      await db.collection('users').insertOne({ ...user, ...defaultUser });
  }

  res.status(200).json({ data: 'success' });
}
