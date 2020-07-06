import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../../styles/global';

import Sidebar from '../Sidebar';

import { LayoutWrapper, LayoutMain } from './styles';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
