import React from 'react';

import NavbarBurger from "./navbar-burger.js";
import Footer from "./footer.js";


const Layout = ({children}) => {
  return (
    <main>
      <NavbarBurger navbarItems={[
        {name: "home", index: 0},
        {name: "portfolio", index: 1},
        {name: "about", index: 2},
        {name: "contact", index: 3},
      ]}/>
      {children}
      <Footer/>
    </main>
  )
}

export default Layout;
