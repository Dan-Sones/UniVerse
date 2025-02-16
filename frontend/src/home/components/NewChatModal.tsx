import Modal from 'react-modal';
import SearchBar from './SearchArea';

interface NewChatModalProps {
  isOpen: boolean;
  onModalClose: VoidFunction;
}

const NewChatModal = (props: NewChatModalProps) => {
  const { isOpen, onModalClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onModalClose}
      style={{
        content: {
          top: '150px',
          bottom: '600px',
          left: '100px',
          right: '100px',
        },
        overlay: {
          backgroundColor: 'rgb(237, 231, 225, 0.75)',
        },
      }}
    ></Modal>
  );
};

export default NewChatModal;
