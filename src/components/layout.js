import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import NavbarBurger from "./navbar-burger.js";
import Footer from "./footer.js";


const Layout = ({children, navbarItems}) => {
  return (
    <main>
      <NavbarBurger navbarItemsQuery={navbarItems}/>
      {children}
      <Footer/>
    </main>
  )
}

export default Layout;
