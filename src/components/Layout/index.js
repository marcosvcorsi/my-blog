import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../../styles/global';

import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

import { LayoutWrapper, LayoutMain } from './styles';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <LayoutMain>{children}</LayoutMain>
      <MenuBar />
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
