import Image from 'next/image';
import { Text, Modal, Button } from '@ui';
import TopPlayer from './components/TopPlayer';
import PlayersList from './components/PlayersList';

const Index = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <Text.h4 className="my-5">欢迎来到一年一度扑克大赛</Text.h4>
      <TopPlayer />
      <PlayersList />
    </div>
  );
};

export default Index;

//
