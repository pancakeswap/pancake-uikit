import React, { useState } from "react";
import styled from "styled-components";
import { HamburgerIcon } from "../../components/Svg";
import Overlay from "../../components/Overlay";
import Logo from "./icons/Logo";
import MobileOnlyButton from "./MobileOnlyButton";
import Panel from "./Panel";
import { NavProps } from "./types";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  height: 64px;
  background-color: ${({ theme }) => theme.nav.background};
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: normal;
  }
`;

const StyledLink = styled.a`
  margin-right: 8px;
`;

const Nav: React.FC<NavProps> = ({
  account,
  connectCallbacks,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <StyledNav>
      <StyledLink href="/" aria-label="Pancake home page">
        <Logo width="160px" height="100%" />
      </StyledLink>
      <MobileOnlyButton aria-label="Open mobile menu" onClick={() => setIsOpened((prevState) => !prevState)}>
        <HamburgerIcon />
      </MobileOnlyButton>
      <Panel
        show={isOpened}
        account={account}
        closeNav={() => setIsOpened(false)}
        connectCallbacks={connectCallbacks}
        logout={logout}
        isDark={isDark}
        toggleTheme={toggleTheme}
        langs={langs}
        setLang={setLang}
        currentLang={currentLang}
      />
      <Overlay show={isOpened} onClick={() => setIsOpened(false)} role="presentation" />
    </StyledNav>
  );
};

export default Nav;
