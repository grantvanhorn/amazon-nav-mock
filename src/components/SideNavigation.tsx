import styled from 'styled-components';
import sideNavigationConfig from '../lib/sideNavigationConfig';
import NavEntryHeader from './NavEntryHeader';
import NavEntry from './NavEntry';
import { useState } from 'react';
import RightMenusContentInterface from '../interfaces/RightMenusContentInterface';

const mainMenuKey = 'main';

const SideNavigation = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(mainMenuKey);
  const rightMenusContent: RightMenusContentInterface = { };

  const navEntriesDom = sideNavigationConfig.map((mainEntry) => {
    const {
      name,
      entries,
    } = mainEntry;

    const navEntries = entries.map((subEntry) => {
      const {
        name,
        subEntries,
      } = subEntry;

      if (subEntries) {
        subEntries.forEach(se => {
          const rightSubMenu = se.subEntries.map((onese) => {
            return (
              <NavEntry
                copy={onese.name}
              />
            );
          })
          rightMenusContent[name] = (
            <>
              <MainMenuReturn
                onClick={() => setActiveSubMenu(mainMenuKey)}
              >
                ← Main Menu
              </MainMenuReturn>
              <NavEntryHeader
                copy={name}
              />
              {rightSubMenu}
            </>
          );
        });
      }

      return (
        <NavEntry
          copy={name}
          clickAction={setActiveSubMenu}
        />
      );
    });

    return (
      <>
        <NavEntryHeader
          copy={name}
        />
        {navEntries}
      </>
    )
  });

  const rightMenu = activeSubMenu ? rightMenusContent[activeSubMenu] : null;

  console.log('rightMenu', rightMenu);

  return (
    <Wrapper>
      <MainMenu
        activeSubMenu={activeSubMenu}
      >
        {navEntriesDom}
      </MainMenu>
      <RightMenu
        activeSubMenu={activeSubMenu}
      >
        {rightMenu}
      </RightMenu>
    </Wrapper>
  );
};

export default SideNavigation;

const Wrapper = styled.div`
  width: 300px;
  position: relative;
`;

interface MainMenuInterface {
  activeSubMenu: string;
}

interface RightMenuInterface {
  activeSubMenu: string;
}

const MainMenu = styled.div<MainMenuInterface>`
  ${({
    activeSubMenu,
  }) => `
    left: ${activeSubMenu === 'main' ? 0 : -300}px;
  `}
  transition: 200ms;
  position: absolute;
  top: 0;
`;

const RightMenu = styled.div<RightMenuInterface>`
  ${({
    activeSubMenu,
  }) => `
    left: ${activeSubMenu === 'main' ? 300 : 0}px;
  `}
  transition: 200ms;
  position: absolute;
  top: 0;
`;

const MainMenuReturn = styled.div`
  margin: 10px 20px;
  cursor: pointer;
`;
