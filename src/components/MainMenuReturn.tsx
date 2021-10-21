import styled from 'styled-components';
import { mainMenuConfigName } from '../lib/constants';

interface MainMenuReturnInterface {
  returnAction: Function;
}

const MainMenuReturn = ({
  returnAction,
}: MainMenuReturnInterface) => (
  <Wrapper
    onClick={() => returnAction(mainMenuConfigName)}
  >
    ← Main Menu
  </Wrapper>
);

export default MainMenuReturn;

const Wrapper = styled.div`
  margin: 10px 20px;
  cursor: pointer;
`;
