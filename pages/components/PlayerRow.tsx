import { FC, useState } from 'react';

import { Text, Modal, Button } from '@ui';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  data: any;
}

// eslint-disable-next-line arrow-body-style
const PlayerRow: FC<Props> = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Text className="p-6">{data.rank}</Text>
      <Text className="hover:underline p-6 cursor-pointer" onClick={() => setShowModal(true)}>
        {data.player}
      </Text>
      <Text className="p-6">{data.netWinnings}</Text>
      <Text className="p-6">{data.totalWins}</Text>
      <Text className="p-6">{data.gamesPlayed}</Text>
      <Modal modalOpen={showModal} setModalOpen={setShowModal}>
        <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col">
          <Text theme="black" className="mb-5">
            This player is a noob player because he sucks
          </Text>
          <Button.Link href={`/${data.id}`}>To Profile page</Button.Link>
        </div>
      </Modal>
    </>
  );
};

export default PlayerRow;
