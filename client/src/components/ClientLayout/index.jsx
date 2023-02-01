import { Box } from "@mui/material";
import React from "react";
import { Navbar, Footer } from "..";
import { ColorModeContext } from "../Theme/Theme";
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
export default function ClientLayout({ children }) {
  const theme = useTheme();
	const { mode, toggleMode } = useContext(ColorModeContext);
  return (
    <>
      <Navbar />
      <Box sx={mode === 'dark' ? { backgroundColor: 'black' } : { backgroundColor: 'white' }}>
      <Box maxWidth="lg">{children}</Box>
      <Footer />
      </Box>
    </>
  );
}
