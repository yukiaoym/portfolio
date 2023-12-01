'use client'
import styled from 'styled-components';

const FooterArea = styled.footer`
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
    font-family: 'Outfit', sans-serif;
    color: #FFF;
    background-color: #000;
    text-align: center;
    height: 40px;
    line-height: 40px;

`
export default function Footer() {
    return (
        <FooterArea>
            <small>©️2023 Yuki Mishina</small>
        </FooterArea>
    );
}
  

