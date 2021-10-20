import styled, { css } from 'styled-components';
import sideNavigationConfig from '../lib/sideNavigationConfig';
import NavEntryHeader from './NavEntryHeader';
import NavEntry from './NavEntry';
import { useState, ReactNode } from 'react';
import RightMenusContentInterface from '../interfaces/RightMenusContentInterface';

const mainMenuKey = 'main';

const SideNavigation = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(mainMenuKey);
  // A place to store the right menus, we will build them up before the user
  // clicks anything. Once the user clicks the dom is already built and chosen
  // from the object storing all the react nodes.
  const rightMenusContent: RightMenusContentInterface = { };

  // Start building out our menu.
  const navEntriesDom = sideNavigationConfig.map((mainEntry) => {
    const {
      name: mainEntryName,
      entries,
    } = mainEntry;

    // Loop through the highest level of our nav entries.
    const navEntries = entries.map((subEntry) => {
      const {
        name: subEntryName,
        subEntries,
      } = subEntry;

      if (subEntries) {
        // We are going to use this arrary to hold our right menu entires for
        // each subsection.
        const subEntriesDom: Array<ReactNode> = [];
        subEntries.forEach(subEntry => {
          const {
            name: rightEntryName,
            rightMenuEntries,
          } = subEntry;
          // Render the contents of each right menu entry
          const rightSubMenu = rightMenuEntries.map((rightMenuEntry) => {
            const {
              name: rightSubEntryName,
            } = rightMenuEntry;

            return (
              <NavEntry
                key={`right-sub-nav-entry-${rightSubEntryName}`}
                copy={rightSubEntryName}
                hasSubentries={false}
              />
            );
          });

          // Each of the sub entries need to be added to the array otherwise
          // we would not have a complete menu
          subEntriesDom.push((
            <>
              <NavEntryHeader
                copy={rightEntryName}
              />
              {rightSubMenu}
            </>
          ));

          // Now lets build the whole menu and store it in our menus object
          rightMenusContent[subEntryName] = (
            <>
              <MainMenuReturn
                onClick={() => setActiveSubMenu(mainMenuKey)}
              >
                ← Main Menu
              </MainMenuReturn>
              {subEntriesDom}
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

const sharedMenuStyles = css`
  transition: 200ms;
  position: absolute;
  top: 0;
`;

const MainMenu = styled.div<MainMenuInterface>`
  ${({
    activeSubMenu,
  }) => `
    left: ${activeSubMenu === 'main' ? 0 : -300}px;
  `}
  ${sharedMenuStyles}
`;

interface RightMenuInterface {
  activeSubMenu: string;
}

const RightMenu = styled.div<RightMenuInterface>`
  ${({
    activeSubMenu,
  }) => `
    left: ${activeSubMenu === 'main' ? 300 : 0}px;
  `}
  ${sharedMenuStyles}
`;

const MainMenuReturn = styled.div`
  margin: 10px 20px;
  cursor: pointer;
`;
