import React from "react";
import styled from "styled-components";
import Link from "../../components/Link";
import config from "./config";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 32px;
  ${Link}:not(:last-child) {
    margin-bottom: 16px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    ${Link}:not(:last-child) {
      margin-bottom: 0;
      margin-right: 32px;
    }
    flex-direction: row;
  }
`;

const Footer: React.FC = () => (
  <StyledFooter>
    {config.map((entry) => {
      const attributes = entry.href.startsWith("http") ? { target: "blank", rel: "noopener noreferrer" } : {};
      return (
        <Link key={entry.href} href={entry.href} {...attributes}>
          {entry.label}
        </Link>
      );
    })}
  </StyledFooter>
);

export default Footer;
