'use client'
import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import styled from 'styled-components';
import Result from '../components/result';
import { useSearchParams } from "next/navigation";
import media from "styled-media-query";

const ContactArea = styled.main`
    padding: calc(100vh / 8) calc(100vw / 8);
    h3 {
        font-size: 3.0rem;
        font-weight: 600;
        letter-spacing: 1.6px;
        margin: 120px 0 12px 0;
        // margin-bottom: 12px;
        // display:inline-block;
    }
    p {
        font-size: 1.4rem;
        line-height: 2.1rem;
        margin-bottom: 36px;
    }
    ${media.lessThan("medium")`
        padding: 24px;
        h3 {
            font-size: 2.4rem;
            margin: 80px 0 8px 0;
        }
        p {
            font-size: 1.2rem;
            line-height: 1.8rem;
            margin-bottom: 12px;
        }        
    `}
`
const FromArea = styled.form`
    label {
        font-family: 'Outfit', sans-serif;
        font-size: 1.8rem;
        letter-spacing: 1px;
    }
    input, textarea {
        width: 100%;
        background-color: #EEEEEE;
        padding: 10px 12px;
        font-size: 1.6rem;
        margin: 8px 0 24px 0;
    }
    input {
        height: 50px;
        line-height: 30px;
    }
    textarea {
        height: 300px;
        line-height: 2.4rem;
    }
    button {
        background-color: #E94709;
        color: #FFF;
        font-size: 1.4rem;
        padding: 10px 72px;
        border-radius: 30px;
        letter-spacing: 12px;
        text-indent: 12px;
        display: block;
        margin: 30px auto;
    }

    ${media.lessThan("medium")`
        label {
            font-size: 1.4rem;
            letter-spacing: 0.4px;
        }
        input, textarea {
            padding: 8px 10px;
            font-size: 1.4rem;
            margin: 6px 0 12px 0;
        } 
        input {
            height: 40px;
            line-height: 24px;
        }
        textarea {
            height: 200px;
            line-height: 2.1rem;
        }
        button {
            font-size: 1.2rem;
            padding: 8px 40px;
            margin: 12px auto;
        }        
    `}    
`

export default function Contact() {
    const searchParams = useSearchParams();
    const result: boolean | null = searchParams.get("result") === "true";
    const [showResultPage, setShowResultPage] = useState(false);

    useEffect(() => {
        setShowResultPage(result);
    }, []);
    
    return (
        <>
        <Header active={3} />
        {showResultPage ? (
            <Result />
        ) : (
            <ContactArea>
                <h3>お問い合わせ</h3>
                <p>お仕事のご依頼・ご相談などお気軽にお問い合わせください。</p>
                <FromArea action="https://ssgform.com/s/ANP3SGOJsIUf" method="post">
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" id="email" required />
                    <label htmlFor="message">message</label>
                    <textarea id="message" name="message"></textarea> 
                    <button type="submit">送信</button>          
                </FromArea>
            </ContactArea>
        )}
        <Footer />
        </>
    );
}
  
