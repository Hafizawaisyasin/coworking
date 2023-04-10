import React, { useEffect, useState } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Box, Hidden, styled, useTheme } from "@mui/material";
import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";
import { hexToRgba } from "../../utils/colors";
import Logo from "../../public/myloog.png";

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
        alignItems: "center",
        px: 0,
      }}
    >
      <Box sx={{ width: "15%" }}>
        <Image src={Logo} alt="Landscape picture" layout="responsive" style={{ maxHeight: "25px" }} />
      </Box>

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

export default Navbar;
