import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';

function Header() {
  return (
    <Head>
      <Image src={ logo } alt="inCicle" />
    </Head>
  );
}

const Head = styled.header`
  background-color: #FFFFFF;
  height: 55px;
`

const Image = styled.img`
  padding: 9px 9px 9px 41px;
`

export default Header;
