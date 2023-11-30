'use client'
import Header from '../components/header';
import Footer from '../components/footer';
import styled from 'styled-components';
import media from "styled-media-query";

const ContactArea = styled.main`
    padding: calc(100vh / 8) calc(100vw / 8);
    height: 100vh;
    h3 {
        font-size: 3.0rem;
        font-weight: 600;
        letter-spacing: 1.6px;
        margin: 120px 0 36px 0;
        position: relative;
    }
    p {
        font-size: 1.4rem;
        line-height: 2.1rem;
        margin-bottom: 36px;
    }
    h3:after {
        content: "";
        width: 60px;
        height: 7.2px;
        border-radius: 8px;
        background-color: #E94709;
        position: absolute;
        bottom: -22px;
        left: 0;
    }

    ${media.lessThan("medium")`
        padding: 24px;
        h3 {
            font-size: 2.4rem;
            margin: 72px 0 36px 0;
        }
        p {
            font-size: 1.2rem;
            line-height: 1.8rem;
            margin-bottom: 12px;
        }
        h3:after {
            height: 7px;
            bottom: -21px;
        }      
    `}    
`


export default function Result() {
    return (
        <ContactArea>
            <h3>送信完了</h3>
            <p>
                この度は、お問い合わせフォームよりご連絡をいただき、ありがとうございます。<br />
                内容を確認し、3営業日以内に、ご入力いただいたメールアドレス宛にご連絡いたしますので、<br />
                今しばらくお待ちいただきますようお願いいたします。
            </p>
        </ContactArea>
    );
}
  
