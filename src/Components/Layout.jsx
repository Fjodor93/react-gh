import React from "react";
import {Outlet} from "react-router-dom";
import Header from './Header';
import Menu from './Menu';
import Banner from './Banner';
import Footer from './Footer';
import { Helmet } from "react-helmet";

const Layout = () => {
  return (
    <>
    <Helmet><author>Fjodor Joss, fjodor_joss@hotmail.com</author></Helmet>
      <Header/>
      <Banner/>
      <Outlet />
      <Menu />
      <Footer />
    </>
  );
};

export default Layout;
