import styled from "styled-components";
import NavEntryInterface from "../interfaces/NavEntryInterface";

const NavEntry = ({
  copy,
  clickAction,
  hasSubentries,
}: NavEntryInterface) => {
  const onClick = () => {
    if (!clickAction || !hasSubentries) {
      return;
    }

    clickAction(copy);
  };

  return (
    <Wrapper
      onClick={() => onClick()}
    >
      {copy}
    </Wrapper>
  );
}

export default NavEntry;

const Wrapper = styled.div`
  margin: 10px 20px;
  cursor: pointer;
`;
