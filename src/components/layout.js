import React, {useState, useEffect} from 'react';

import { useInView } from 'react-intersection-observer';

import Navbar from "./navbar.js";
import NavbarBurger from "./navbar-burger.js";
import Footer from "./footer.js";


const Layout = ({children}) => {
  const [ref, inView] = useInView({
    threshold: 0.8
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1
  });

  function activeTab () {
    if (inView) {
      return 1;
    } else if (inView2 && !inView) {
      return 2;
    }
  };

  return (
    <main>
      <NavbarBurger navbarItems={[
        {name: "home", index: 0},
        {name: "portfolio", index: 1},
        {name: "about", index: 2},
        {name: "contact", index: 3},
      ]}/>
  
      {() => activeTab()}
      <Navbar navbarItems={[
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

