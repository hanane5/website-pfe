import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../components/Navbar.style";
import logo from "../img/Logo0.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Accueil</NavbarLink>
            <NavbarLink to="/presentation"> Présentation</NavbarLink>
            <NavbarLink to="/departements"> Départements</NavbarLink>
            <NavbarLink to="/structures"> Structures</NavbarLink>
            <NavbarLink to="/evenements"> Evenements</NavbarLink>
            <NavbarLink to="/contact"> Contact</NavbarLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        
        <RightContainer>
          <Logo src={logo}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Accueil</NavbarLinkExtended>
          <NavbarLinkExtended to="/presentation"> Présentation</NavbarLinkExtended>
          <NavbarLinkExtended to="/departements"> Départements</NavbarLinkExtended>
          <NavbarLinkExtended to="/structures"> Structures</NavbarLinkExtended>
          <NavbarLinkExtended to="/evenements"> Evenements</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Contact</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
    
  );
}

export default Navbar;