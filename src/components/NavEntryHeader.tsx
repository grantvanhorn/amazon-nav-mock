import styled from 'styled-components';
import NavEntryHeaderInterface from '../interfaces/NavEntryHeaderInterface';

const NavEntryHeader = ({
  copy,
}: NavEntryHeaderInterface) => (
  <Wrapper>
    {copy}
  </Wrapper>
);

export default NavEntryHeader;

const Wrapper = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin: 10px 20px;
`;
