/* eslint-env browser */
import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          BODY content
        </div>
        <Footer />
      </div>
    );
  }
}
