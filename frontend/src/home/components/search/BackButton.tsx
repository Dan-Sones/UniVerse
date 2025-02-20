import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';

interface BackButtonProps {
  onClick: VoidFunction;
}

const BackButtonWrapper = styled.div`
  :hover {
    background-color: rgb(236, 236, 236, 0.75);
    border-radius: 20px;
    cursor: pointer;
  }
`;

const BackButton = (props: BackButtonProps) => {
  const { onClick } = props;
  return (
    <BackButtonWrapper onClick={onClick}>
      <ArrowBackIcon />
    </BackButtonWrapper>
  );
};

export default BackButton;
