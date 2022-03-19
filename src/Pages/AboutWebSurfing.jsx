import React from 'react';
import '../Styles/AboutWebSurfing.css'
import styled from 'styled-components';
import Title from '../Components/Title';
import { GoPlay } from 'react-icons/go';


function AboutWebSurfing() {
    return (
        <Websurfing id='AboutWeb'>
            <div className="continaer">
                <div className="top">
                    <Title title='why websurfing?' color="pink" lineCenter={true} />
                    <div className="supTitle">
                        <p>
                            Always stay updated with the technologies thus we help our clients
                            by giving the best solutions for thier needs.
                        </p>
                    </div>
                </div>
                <div className="content">
                    <div className="vedio">
                        <GoPlay />
                    </div>
                    <div className="resones">
                        <ul>
                            <li>Over 10+ years of industry wide expierence</li>
                            <li>
                                Provide solutions to our multiple global clients or website
                                traffic generation and workflow
                            </li>
                            <li>Strong team of 150+ creative people</li>
                            <li>99% adhere to service level contract</li>
                            <li>Ready to recieve service request 24/7</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Websurfing>
    )
}

const Websurfing  = styled.div`
    min-height: 50vh;

    .continaer{
        margin: 0 10%;
        padding: 5rem 0;

        .top{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .title{
                margin-bottom: 1rem;
            }        
            .supTitle{
                display: flex;
                justify-content: center;
                align-items: center;

                p{
                    width: 65%;
                    color: var(--light-color);
                    text-align: center;
                }
            }
        }
        .content{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin-top: 1rem;

            .resones{
                height: 100%;
                display: flex;
                align-items: center;
                ul{
                    width: 80%;
                    list-style: none;
                    li{
                        color: var(--light-color);
                        margin-bottom: 1.5rem;
                        padding-left: 45px;
                        position: relative;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1080px){
        .continaer {
            margin: 0;

            .content{
                display: flex;
                flex-direction: column;
                align-items: center;

                .vedio{
                    width: 80%;
                    margin-bottom: 1.5rem;
                }
                .resones{
                    justify-content: center;
                }
            }
        }
    }
`

export default AboutWebSurfing;