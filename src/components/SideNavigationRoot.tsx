import styled, { css } from "styled-components";
import { useState } from "react";

import NavEntry from "./NavEntry";
import NavEntryHeader from "./NavEntryHeader";
import MainMenuReturn from "./MainMenuReturn";

import mainNavigationConfig from "../lib/mainNavigationConfig";
import allRightMenuConfigs from "../lib/allRightMenuConfigs";
import RightMenusContentInterface from "../interfaces/RightMenusContentInterface";
import { mainMenuConfigName } from '../lib/constants';

import ConfigInterface from '../interfaces/ConfigInterface';

const renderConfig = (configKey: string, config: ConfigInterface, setActiveRightMenu: Function | null = null) => config.map(({
  type,
  copy,
  hasSubMenu,
  key,
  id,
}) => {
  if (type === 'header' && copy) {
    return (
      <NavEntryHeader
        key={`${configKey}-${id}`}
        copy={copy}
      />
    );
  }

  if (type === 'entry' && copy) {
    let clickAction;

    if (hasSubMenu && key && setActiveRightMenu) {
      clickAction = setActiveRightMenu;
    }

    return (
      <NavEntry
        key={`${configKey}-${id}`}
        copy={copy}
        clickAction={clickAction}
        hasSubentries={hasSubMenu}
        clickKey={key}
      />
    )
  }

  if (type === 'divider') {
    return (
      <hr
        key={`${configKey}-${id}`}
      />
    );
  }

  return null;
});

const SideNavigationRoot = () => {
  const [activeRightMenu, setActiveRightMenu] = useState(mainMenuConfigName);
  const mainDom = renderConfig(mainMenuConfigName, mainNavigationConfig.config, setActiveRightMenu);
  const allRightMenus: RightMenusContentInterface = {};

  allRightMenuConfigs.forEach(({config, key}) => {
    const renderedConfig = renderConfig(key, config);
    const mmr = (
      <MainMenuReturn
        key={`main-menu-return-${key}`}
        returnAction={setActiveRightMenu}
      />
    );
    allRightMenus[key] = [
      mmr,
      ...renderedConfig,
    ]
  });

  const rightMenu = activeRightMenu ? allRightMenus[activeRightMenu] : null;

  return (
    <Wrapper>
      <MainMenu
        activeSubMenu={activeRightMenu}
      >
        {mainDom}
      </MainMenu>
      <RightMenu
        activeSubMenu={activeRightMenu}
      >
        {rightMenu}
      </RightMenu>
    </Wrapper>
  );
}

export default SideNavigationRoot;

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
