'use client'
import Header from '../components/header';
import Footer from '../components/footer';
import styled from 'styled-components';
import media from "styled-media-query";

const AboutArea = styled.main`
    padding: calc(100vh / 8) calc(100vw / 8);
    font-family: 'Outfit', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
        font-size: 4.8rem;
        font-weight: 600;
        letter-spacing: 5px;
        position: relative;
        margin-bottom: 24px;
    }
    p {
        font-size: 1.6rem;
        line-height: 2.4rem;
    }

    ${media.lessThan("medium")`
        padding: 24px;
        margin-bottom: 36px;
        h1 {
            font-size: 3.2rem;
            letter-spacing: 3.6px;
            margin-bottom: 24px;
        }
        p {
            font-size: 1.2rem;
            line-height: 1.8rem;
        }

    `}
    ${media.greaterThan("large")`
        height: 100vh;
        flex-direction: row;
    `}
`
const ProfileExp = styled.div`
    width: 100%;
    display: inline-block;
    ${media.greaterThan("large")`
        width: 60%;
        margin-top: auto;
    `}
`

const ProfileImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('/images/profile.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: relative;
    animation: fadeIn 2s ease-out forwards;
    opacity: 0;
    visibility: hidden;
    @keyframes fadeIn {
        to {
          opacity: 1;
          visibility: visible;
        }
    }


    &:after {
        width: 100%;
        height: 100%;
        content: "";
        background-color: rgba(0,0,0,.1);
        position: absolute;
        top: 0;
        z-index: 2;
    }
    &:before {
        width: 60%;
        height: 36px;
        height: calc(100% / 12);
        content: "";
        background-color: #E94709;
        position: absolute;
        bottom: 25%;
        right: 0;
        z-index: 3;
    }

    ${media.lessThan("medium")`
        height: 50vh;
        margin: 80px 0 36px 0;
        &:before {
            width: 60%;
            height: calc(50vh / 12);
        }        
    `}
    ${media.between("medium", "large")`
        height: 50vh;
        margin: 72px 0 36px 0;
        &:before {
            width: 40%;
            height: calc(50vh / 12);
        }
    `}
    ${media.greaterThan("large")`
        width: 36%;
        height: 100%;
        margin: 0;
    `}
`

export default function About() {
    return (
        <>
        <Header active={2} />
        <AboutArea>
            <ProfileImage />
            <ProfileExp>
                <h1>Yuki Mishina</h1>
                <p>
                    1992年北海道生まれ。1児の母。<br />
                    出産を機に新卒から9年間勤めた会社を退職し、現在は、フリーランスの在宅Webデザイナー・IT系何でも屋さんとして活動。<br />
                    <br />
                    会社員時代は、新卒から9年間IT企業のテクニカルサポートに従事。<br />
                    カスタマーサポート業務において、UIが良ければ問い合わせは来ない！ということを
                    ひしひしと実感し、Web・UIデザインの世界に興味を持つ。<br />
                    目指すのは、ユーザ目線でストレスのないデザイン。<br />
                    Webサイト制作の他、Zendeskやkintoneの構築等の経験もございますので、お気軽にご相談ください。
                </p>
            </ProfileExp>
        </AboutArea>
        <Footer />
        </>
    );
}
  
