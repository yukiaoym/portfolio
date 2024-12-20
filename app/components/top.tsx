'use client'
import styled from 'styled-components';
import media from "styled-media-query";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'

const TopArea = styled.div`
    height: 100vh;
    padding: calc(100vh / 8) 0;
    display: flex;
    align-items: flex-end;
    h1 {
        font-size: 6.0rem;
        font-weight: 600;
        letter-spacing: 6px;
        position: relative;
        margin-bottom: 64px;
    }
    h1:after {
        content: "";
        width: 72px;
        height: 8px;
        border-radius: 8px;
        background-color: #E94709;
        position: absolute;
        bottom: -32px;
        left: 0;
    }
    p {
        font-size: 2.0rem;
        font-weight: 300;
        line-height: 2.7rem;
        margin-bottom: 12px;
        letter-spacing: 1.2px;
    }

    ${media.lessThan("medium")`
        h1 {
            font-size: 3.2rem;
            letter-spacing: 3.6px;
            margin-bottom: 36px;
        }
        p {
            font-size: 1.2rem;
            line-height: 1.8rem;
            letter-spacing: 1px;
        }
        p br {
            display: none;
        }
        h1:after {
            width: 50px;
            height: 7px;
            bottom: -21px;
            left: 0;
        }
    `}
`

const generateAnimatedText = (text: string, isHTML: boolean = false, start: number) => {
    const wordArray = isHTML ? text.split(/(<br>|[\s])/) : text.split("");
    
    return wordArray.map((word, index) => {
        if (isHTML && word === "<br>") {
            return <br key={index} />;
        } else if (!isHTML && /\s+/.test(word)) {
            return <span key={index}>&nbsp;</span>;
        }
  
        return (
            <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 + start}}
            key={index}
            >
            {word}
            </motion.span>
        );
    });
};

const TopImage = styled.img`
    width: 100px;
    animation: fadeIn 1s ease-out 4s forwards;
    opacity: 0;
    visibility: hidden;
    @keyframes fadeIn {
        to {
          opacity: 1;
          visibility: visible;
        }
    }
    ${media.lessThan("medium")`
        width: 72px;
    `}
`
export default function Top() {
    return (
        <TopArea>
            <div>
                <h1>{generateAnimatedText("Yuki Mishina", false, 0)}</h1>
                <p>
                    {generateAnimatedText("This portfolio showcases the work of a freelance IT generalist <br>with expertise in web design and more.", true, 1.2)}
                </p>
                <TopImage src="/images/icon.png" alt="icon" />
            </div>
        </TopArea>
    );
}
  
