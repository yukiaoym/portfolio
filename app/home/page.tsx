'use client'
import Header from '../components/header';
import Footer from '../components/footer';
import styled from 'styled-components';
import Top from '../components/top';
import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import media from "styled-media-query";

const MainArea = styled.main`
    padding: 0 calc(100vw / 8);
    font-family: 'Outfit', sans-serif;

    ${media.lessThan("medium")`
        padding: 0 24px;
    `}
    ${media.between("medium", "large")`

    `}
    ${media.greaterThan("large")`

    `}
`

const WorksArea = styled.div`
    ul {
        padding: calc(100vh / 8) 0;
        margin-top: 120px;
    }
    ul li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 120px;
        flex-direction: column;
    }
    ul li div {
        width: 100%;
        margin-top: auto;
    }
    ul li div h3 {
        font-size: 3.6rem;
        letter-spacing: 1.6px;
        margin-bottom: 12px;
    }
    ul li div p {
        font-size: 1.6rem;
        line-height: 2.4rem;
        margin-bottom: 12px;
    }
    ul li div span {
        font-size: 1.6rem;
        display: inline-block;
        color: #FFF;
        background-color: #E94709;
        padding: 4px 16px;
    }

    ${media.lessThan("medium")`
        ul {
            padding-top: 104px;
        }    
        ul li {
            margin-bottom: 60px;
        }
        ul li div h3 {
            font-size: 2.4rem;
            margin-bottom: 8px;
        }
        ul li div p {
            font-size: 1.2rem;
            line-height: 1.8rem;
            margin-bottom: 8px;
        }
    `}
    ${media.between("medium", "large")`

    `}
    ${media.greaterThan("large")`
        ul li {
            flex-direction: row;
        }
        ul li div {
            width: 48%;
            margin-top: auto;
        }
    `}

`
const handleUrl = (pageId: number) => {
    switch (pageId) {
        case 1:
            return "/images/webkoya.png";
        case 2:
            return "/images/sampleform.png";
        case 3:
            return "/images/lp.png";
        case 4:
            return "/images/sup.png";                
        default:
            return "";
    }
};
  
const SiteImage = styled.a`
    display: block;
    width: 100%;
    background-color: gray;

    img {
        width: 100%;
        border: 2px solid #000;
    }
    &:hover {
        // cursor: url('/images/arrow-up-right-from-square-solid.svg'), auto;
        cursor: pointer;
    }

    ${media.lessThan("medium")`
        margin-bottom: 12px;
    `}
    ${media.between("medium", "large")`
        margin-bottom: 24px;
    `}
    ${media.greaterThan("large")`
        width: 48%;
        margin-bottom: 0;
        &.animate {
            animation-name:fadeUpAnime;
            animation-duration:1s;
            animation-fill-mode:forwards;
            opacity:0;
        }
        @keyframes fadeUpAnime{
            from {
                opacity: 0;
                transform: translateY(60px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `}
`


export default function Home() {
    const [refWorks, inViewWorks] = useInView();
    const [isActiveWorks, setIsActiveWorks] = useState(false);
   
    useEffect(() => {
        setIsActiveWorks(inViewWorks);
    }, [inViewWorks]);

    const imageList = [
        {
            href: "https://rongowebkoya.com/",
            imgSrc: "/images/webkoya.png",
            title: "Webkoya",
            description: "論語を暗誦するためのサイトです。Webデザインスクールの卒業制作として制作しました。500個ある論語をページ遷移なく切り替えしたかったため、Reactを使用しました。",
            tag: "React"
        },
        {
            href: "https://form2-nine.vercel.app/cloud/new",
            imgSrc: "/images/sampleform.png",
            title: "Sample Form",
            description: "シンプルなWebフォームです。デザイン＆コーディングを担当しました。Excelファイルでやり取りしていた部分を、工数削減のためWebフォーム化することに。入力内容はkintoneへ自動登録されるようにバックエンド部分も設計しました。現在、同デザインのフォームを非公開の環境で運用中。",
            tag: "TypeScript"
        },
        {
            href: "https://www.one-netbook.jp/landing/onemix5/",
            imgSrc: "/images/lp.png",
            title: "Landing Page",
            description: "ランディングページの主にコーディングを担当しました。レスポンシブ対応。デザインは、ほぼ既存サイトを踏襲しています。",
            tag: "Wordpress"
        },
        {
            href: "https://high-beam.zendesk.com/hc/ja",
            imgSrc: "/images/sup.png",
            title: "Support Site",
            description: "サポートサイトのデザイン＆コーディング（Zendeskのテーマカスタマイズ）を担当しました。サイト訪問者がどこを見ればいいのか、一見してわかるようにしてほしいとのリクエストを受け、主にトップページのデザインをデフォルトのデザインから変更しています。",
            tag: "Zendesk"
        }
    ];
    
    const imageRefs = imageList.map(() => useInView({triggerOnce: false}));
    const [isActiveImages, setIsActiveImages] = useState(imageList.map(() => false));
    
    useEffect(() => {
        setIsActiveImages(imageRefs.map(([, inView]) => inView));
    }, imageRefs.map(([, inView]) => inView));
    

    return (
        <>
        <Header active={isActiveWorks ? 1 : 0}/>
        <MainArea>
            <Top />
            <WorksArea>
                <ul ref={refWorks} id="works">
                    {imageList.map((image, index) => (
                        <li key={index} ref={imageRefs[index][0]}>
                            <SiteImage
                                href={image.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={isActiveImages[index] ? 'animate' : ''}
                            >
                                <img src={image.imgSrc} alt="" />
                            </SiteImage>
                            <div>
                                <h3>
                                    <a href={image.href} target="_blank" rel="noopener noreferrer" >{image.title}</a>
                                </h3>
                                <p>{image.description}</p>
                                <span>{image.tag}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </WorksArea>
        </MainArea>
        <Footer />
        </>
    );
}
  
