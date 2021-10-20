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
      name: mainEntryName,
      entries,
    } = mainEntry;

    const navEntries = entries.map((subEntry) => {
      const {
        name: subEntryName,
        subEntries,
      } = subEntry;

      if (subEntries) {
        subEntries.forEach(subEntry => {
          const {
            name: rightEntryName,
            rightMenuEntries,
          } = subEntry;
          const rightSubMenu = rightMenuEntries.map((rightMenuEntry) => {
            const {
              name,
            } = rightMenuEntry;
            return (
              <NavEntry
                key={`right-sub-nav-entry-${name}`}
                copy={name}
                hasSubentries={false}
              />
            );
          });

          rightMenusContent[subEntryName] = (
            <>
              <MainMenuReturn
                onClick={() => setActiveSubMenu(mainMenuKey)}
              >
                ← Main Menu
              </MainMenuReturn>
              <NavEntryHeader
                copy={rightEntryName}
              />
              {rightSubMenu}
            </>
          );
        });
      }

      return (
        <NavEntry
          key={`nav-entry-${subEntryName}`}
          copy={subEntryName}
          clickAction={setActiveSubMenu}
          hasSubentries={subEntries !== null}
        />
      );
    });

    return (
      <>
        <NavEntryHeader
          key={`nav-entry-header-${mainEntryName}`}
          copy={mainEntryName}
        />
        {navEntries}
      </>
    )
  });

  const rightMenu = activeSubMenu ? rightMenusContent[activeSubMenu] : null;

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
