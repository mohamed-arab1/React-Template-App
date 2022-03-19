import React from 'react';
import styled from 'styled-components';
import work from '../Photos/work.svg';
import Buttons from '../Components/Buttons';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoPlay } from "react-icons/go";
import Navbar from '../Components/Navbar';

function Home() {
    return (
        <HomeSection>
            <Navbar />
            <div className="container">
                <div className="content">
                    <h1>
                        We Provide Solutions to Help You to Build or Grow Your Buisness! 
                    </h1>
                    <p>
                        A professional web and mobile app development agency with over 100+
                        web and app developed. We provide a high- quality service in web and
                        mobile app development as well as in design.
                    </p>
                    <div className="buttons_container">
                        <Buttons content="Watch video" icon={<GoPlay />} color='blue' />
                        <Buttons content="Request Quote" icon={<HiOutlineArrowNarrowRight />} color="pink" />
                    </div>
                </div>
                <div className="container_image">
                    <img src={work} alt="Worg-image" />
                </div>
            </div>
        </HomeSection>
    )
}

const HomeSection = styled.div`
    margin: 0 10%;
    .container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .content{
            margin-top: 3.4rem;
            margin-right: 3rem;

            h1{
                font-size: 3rem;
                color: var(--heading-color);
            }
            p{
                font-size: 1.4rem;
                color: var(--light-color);
                line-height: 1.9rem;
            }
            .buttons_container{
                display: flex;

                button{
                    margin-right: 1rem;
                }
            }
        }

        .container_image{
            img{
                height: 35rem;
                width: 35rem;

            }
        }
    }

@media screen and (max-width: 1080px){
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
        justify-content: center;
        .content{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
            margin: 0;
        }
        .container_image{
            img{
                height: 25rem;
                width: 25rem;
                margin-right: 5rem;
            }
    }
    }
}
@media screen and (max-width: 480px){
    .container{
        .container_image{
            img{
                height: 20rem;
                width: 20rem;
            }
    }
}
@media screen and (max-width: 330px){
    margin: 0;
    .container{
        .content{
            h1{
                font-size: 2.3rem;
            }
            p{
                font-size: 1rem;
            }
            .buttons_container{
                width:100%;
                display:flex;
                justify-content: space-between;
                gap: 1rem;
                button{
                    margin: 0;
                }
            }
        }
        .container_image{
            img{
                height: 15rem;
                width: 15rem;
                margin: 0;
            }
    }
`

export default Home