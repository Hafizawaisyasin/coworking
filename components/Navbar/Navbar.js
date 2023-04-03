import React, { useEffect, useState } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Box, Hidden, styled, useTheme } from "@mui/material";
import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";
import { hexToRgba } from "../../utils/colors";
import Logo from "../../public/myLogo.png";

const Navbar = () => {
  const [scrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    const handleNav = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleNav);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 8 : 0}
      sx={{
        background: hexToRgba(theme.palette.background.default, 0.8),
        transition: ".2s",
        backdropFilter: scrolled ? "blur(5px)" : "inherit",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 0,
          }}
        >
          <div style={{ backgroundColor: "#f0f0f0" }}>
            <Image
              src="myLogo.png"
              alt="Landscape picture"
              width={800}
              height={500}
            />
          </div>
          <Box sx={{ display: { md: "block", xs: "none" } }}>
            <Menu />
          </Box>
          <Box sx={{ display: { md: "none", xs: "block" } }}>
            <HamburgerMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const NavLogo = ({ scrolled }) => {
  return (
    <div className="logo">
      <Image src="/myLogo.png" alt="Logo" width={50} height={50} />
    </div>
  );
};

export default Navbar;
