import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./NavBar/Navbar";
import Footer from './Footer/Footer'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header> <Navbar /></header>
        <main>{children}</main>
        <footer><Footer /></footer>
      </Box>
    </div>
  );
}
export default Layout;
