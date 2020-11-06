import React from "react";
import styled from "styled-components";
import Link from "../../components/Link";
import { CloseIcon } from "../../components/Svg";
import Button from "../../components/Button";
import UserBlock from "./UserBlock";
import MobileOnlyButton from "./MobileOnlyButton";
import config from "./config";
import Dark from "./icons/Dark";
import Light from "./icons/Light";
import { NavProps } from "./types";

interface Props extends NavProps {
  show: boolean;
  closeNav: () => void;
}

const StyledPanel = styled.div<{ show: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.nav.background};
  top: 0;
  right: ${({ show }) => (show ? 0 : "-100%")};
  width: 100%;
  max-width: 320px;
  height: 100vh;
  padding: 32px 0;
  overflow-y: auto;
  transition: right 0.4s;
  z-index: 11;
  ${({ theme }) => theme.mediaQueries.md} {
    position: unset;
    max-width: unset;
    overflow-y: unset;
    z-index: unset;
    padding: 0;
    justify-content: space-between;
    flex-direction: row;
    height: 100%;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 8px 40px;
  transition: background-color 0.2s;
  :hover {
    background-color: ${({ theme }) => theme.nav.hover};
    text-decoration: none;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    align-items: center;
    padding: 0 16px;
  }
`;

const LinkBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  order: 2;
  margin-bottom: 32px;
  ${({ theme }) => theme.mediaQueries.md} {
    order: 1;
    margin-bottom: 0;
    flex-direction: row;
  }
`;

const ControlBlock = styled.div`
  display: flex;
  align-items: center;
  order: 3;
  margin-left: 40px;
  ${({ theme }) => theme.mediaQueries.md} {
    order: 2;
    margin-left: 0;
  }
`;

const Panel: React.FC<Props> = ({ show, account, closeNav, connectCallbacks, logout, isDark, toggleTheme }) => {
  return (
    <StyledPanel show={show}>
      <MobileOnlyButton
        onClick={closeNav}
        aria-label="Close the menu"
        style={{ position: "absolute", top: "5px", right: "5px" }}
      >
        <CloseIcon />
      </MobileOnlyButton>
      <LinkBlock>
        {config.nav.map((entry) => (
          <StyledLink key={entry.href} href={entry.href}>
            {entry.label}
          </StyledLink>
        ))}
      </LinkBlock>
      <ControlBlock>
        <Button size="sm" variant="text" onClick={() => toggleTheme(!isDark)}>
          {isDark ? <Light /> : <Dark />}
        </Button>
      </ControlBlock>
      <UserBlock account={account} closeNav={closeNav} connectCallbacks={connectCallbacks} logout={logout} />
    </StyledPanel>
  );
};

export default Panel;
