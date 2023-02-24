import { FC, useState } from 'react';
import Image from 'next/image';

import { Text, Button, Modal } from '@ui';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// eslint-disable-next-line arrow-body-style
const TopPlayer: FC<Props> = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-gray-200 bg-opacity-40 p-8">
      <div className="flex gap-x-8">
        <Image
          className="rounded-xl"
          src="https://firebasestorage.googleapis.com/v0/b/poker-tournament-b1b66.appspot.com/o/chiayu?alt=media&token=3fd6154d-04b5-4e8a-affa-217aee758aa6"
          alt="Image of the biggest winner"
          height={300}
          width={300}
        />
        <div className="py-2 flex-grow">
          <Text.h6 onClick={() => setShowModal(true)} className="hover:underline">
            Hung Chia Yu
          </Text.h6>
          <div className="mt-8 flex items-center flex-grow">
            <div className="bg-white flex flex-col justify-center items-center px-16 py-12">
              <Text.h6 className="mb-1" variant="body1" theme="red">
                Ranking
              </Text.h6>
              <Text.h3 theme="red">1</Text.h3>
            </div>
            <div className="flex justify-around bg-black ml-4 flex-grow">
              <div className="p-6 flex flex-col gap-y-2 items-center">
                <Text variant="body1">Change</Text>
                <Text.h4>1</Text.h4>
              </div>
              <div className="p-6 flex flex-col gap-y-2 items-center">
                <Text variant="body1">Net Earnings</Text>
                <Text.h4>123</Text.h4>
              </div>
              <div className="p-6 flex flex-col gap-y-2 items-center">
                <Text variant="body1">Total Wins</Text>
                <Text.h4>44</Text.h4>
              </div>
            </div>
          </div>
        </div>
        <Modal modalOpen={showModal} setModalOpen={setShowModal}>
          <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col">
            <Text className="mb-5">Look here</Text>
            <Button>To Profile page</Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default TopPlayer;
