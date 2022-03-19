import React from 'react';
import styled from 'styled-components';
import Buttons from '../Components/Buttons';
import Title from '../Components/Title';
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";

function About() {

    const cardsData = [
        {
            title: 'Innovative Ideas',
            logo: HiLightBulb,
        },
        {
            title: 'Planning',
            logo: BsFillCalendarFill,
        },
        {
            title: 'Communication',
            logo: BiSupport,
        },
        {
            title: '24 * 7 Support',
            logo: SiGooglemessages,
        },
    ]

    return (
        <AboutSection id='about'>
            <div className="container">
                <div className="details">
                    <Title title="About WEBSERFING" color='blue'/>
                    <p>
                        We Believe that everyone deserves to have a website or online store.
                        Innovation and simplicity make us happy. Our mission is to help
                        people achieve what they have passionate about it.
                    </p>
                    <p>
                        We are excited to simplify SEO for everyone through software,
                        education, or cimmunity.
                    </p>
                    <Buttons content='why WEBSERFING?' color='blue' />
                </div>
                <div className="cards">
                {
                    cardsData.map((card,index) => (
                        <div className="card" id={index}>
                            <div className="logo" >
                                <card.logo />
                            </div>
                            <div className="title-card">
                                <h4>{card.title}</h4>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </AboutSection>
    )
}

const AboutSection = styled.div`
    background-color: var(--background-color);

    .container{
        margin: 0 10%;
        padding: 5rem 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;

        .details{
            p{
                color: var(--light-color);
                line-height: 1.3rem;
                font-size: large;
                text-align: justify;
                width: 90%;
            }
            button{
                margin-top: 3rem;
            }
        }
        .cards{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;

            .card{
                background-color: white;
                height: 8rem;
                width: 15rem;
                padding: 1rem 1.5rem;
                border: none;
                border-radius: 0.4rem;
                box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                transition: 0.4s ease-in-out;

                .logo{
                    background-color: #f32a8f33;
                    height: 4rem;
                    width: 4rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 0.4rem;

                svg {
                    color: #f32a8f;
                    font-size: 2rem;
                    margin-left: 0;
                    }
                }
                .title-card{
                    margin-bottom: 1rem;
                    font-size: x-large;
                    color: rgb(18, 18, 88);
                }            
                &:hover{
                    box-shadow: #f32a8f2f 5px 5px, #f32a8f1e 10px 10px, #f32a8f02 15px 15px;
                }
            }

        }
    }

@media screen and (max-width: 1080px){
    .container{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
}
@media screen and (max-width: 700px){
    .container{
        margin: 0;
    }
    .details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        button{
            width: 90%;
        }
    }
    .cards{
        display: flex !important;
        flex-direction: column;
        align-items: center;
        .card{
            width: 75% !important;
        }
    }
}
`

export default About