'use client'
import styled, { css } from 'styled-components';
import media from "styled-media-query";

const HeaderArea = styled.header<{ active: number }>`
    font-size: 2.4rem;
    letter-spacing: 0.3rem;
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    top: calc(100vh / 8);
    right:  calc(100vw / 8);
    position: fixed;
    z-index: 5;
    
    ul {
        display: flex;
        background-color: rgba(255,255,255,.5);
        box-shadow: 0px 0px 10px 10px rgba(255,255,255,.5);
    }
    ul li {
        margin-left: 40px;
        position: relative;
    }
    ul li:hover {
        cursor: pointer;
    }

    ${(props) => `
        ul li:nth-child(${props.active}):after {
            content: "";
            width: 40%;
            height: 6px;
            border-radius: 8px;
            background-color: #e94709;
            position: absolute;
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
        }
    `};

    ${media.lessThan("medium")`
        font-size: 1.4rem;
        letter-spacing: 0.1rem;
        top: 48px;
        right: 24px;
        ul li {
            margin-left: 20px;
        }
        
    `}
    ${media.between("medium", "large")`

    `}
    ${media.greaterThan("large")`

    `}
`

export default function Header({ active }: { active: number }) {
    return (
        <HeaderArea active={active}>
            <ul>
                <li><a href="/home#works">WORKS</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/contact">CONTACT</a></li>
            </ul>
        </HeaderArea>
    );
}
  

