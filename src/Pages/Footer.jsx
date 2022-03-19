import React from 'react'
import styled  from 'styled-components';
import BrandName from './../Components/BrandName';
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdEmail } from 'react-icons/md';

function Footer() {
    return (
            <FooterSection>
                <div className="container">
                    <div className="news-letter">
                        <BrandName isFooter={true} />
                        <p>
                            Join our newsletter to get updated with our Offers & Discounts.
                        </p>
                        <div className="mail">
                            <input type="email" placeholder='Enter Your Email' />
                            <button>
                                <AiOutlineSend />
                            </button>
                        </div>
                    </div>
                    <div className="links-footer">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Testimonial</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">Portfolio</a>
                            </li>
                            <li>
                                <a href="#">Career</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="industries">
                        <h3>Industires</h3>
                        <ul>
                            <li>
                                <a href="#">Website Development</a>
                            </li>
                            <li>
                                <a href="#">Mobile App Development</a>
                            </li>
                            <li>
                                <a href="#">Website Design</a>
                            </li>
                            <li>
                                <a href="#">Mobile App Design</a>
                            </li>
                            <li>
                                <a href="#">Digital Marketing</a>
                            </li>
                            <li>
                                <a href="#">Graphic Design</a>
                            </li>
                            <li>
                                <a href="#">IOS App Development</a>
                            </li>
                        </ul>
                    </div>
                    <div className="touch">
                        <h3>Get in Touch</h3>
                        <div className="touch-container">
                            <div className="icon">
                                <FaPhoneAlt />
                            </div>
                            <div className="details">
                                <div className="detail-name">Phone</div>
                                <div className="detail-content">
                                    <a href="#">+20 1099444563</a>
                                </div>
                            </div>
                        </div>
                        <div className="touch-container">
                            <div className="icon">
                                <ImLocation />
                            </div>
                            <div className="details">
                                <div className="detail-name">Location</div>
                                <div className="detail-content">
                                    <a href="#">El-GIZA,EGYPT</a>
                                </div>
                            </div>
                        </div>
                        <div className="touch-container">
                            <div className="icon">
                                <MdEmail />
                            </div>
                            <div className="details">
                                <div className="detail-name">Email</div>
                                <div className="detail-content">
                                    <a href="#">marab2411@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                    <div className="copy">
                        <p>Copyright c 2021. All Rights Reserved.</p>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <a href="#">
                                <FaFacebookF />
                            </a>
                        </div>
                        <div className="icon">
                            <a href="#">
                                <AiFillInstagram />
                            </a>
                        </div>
                        <div className="icon">
                            <a href="#">
                                <AiFillLinkedin />
                            </a>
                        </div>
                        <div className="icon">
                            <a href="#">
                                {" "}
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </FooterSection>
        )
}

const FooterSection = styled.div`
    background-color: #333335;
    color: white;
    min-height: 55vh;
    height: fit-content;
    padding: 8rem 0;

    .container{
        margin: 0 10%;
        padding-top: 2.5rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);  

        ul{
            list-style: none;
            padding: 0;
            margin: 0;

            li{
                margin: 1rem 0;
                
                a{
                    color: #b5b8b8;
                    text-decoration: none;
                    &:hover{
                        color: white;
                    }
                }
            }
        }
        .news-letter{
            p{
                margin: 2rem 0.5rem 2rem 0;
            }
            .mail{
                width: 75%;
                position: relative;

                input{
                    margin: 0;
                    padding: 0.1rem 1rem;
                    outline: none;
                    width: 100%;
                    height: 2.4rem;
                    border-radius: 0.3rem;
                    border: none;
                }
                button{
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: 2;
                    border: none;
                    height: 2.6rem;
                    color: white;
                    cursor: pointer;
                    background-color: #f32a8f;
                    transform: translateX(33px);
                    border-radius: 0.3rem;
                }
            }
        }
        .touch{
            h3{
                margin-bottom: 1rem;
            }
            .touch-container{
                margin-bottom: 1rem;
                display: flex;

                .icon{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #2c2c31;
                    border-radius: 0.3rem;
                    width: 3rem;
                    height: 3rem;
                    margin-right: 1rem;

                    svg{
                        margin: 0;
                        font-size: 1.5rem;
                    }
                }

                .details{
                    .detail-content{
                        a{
                            text-decoration: none;
                            color: #b5b5b8;
                            &:hover{
                                color: white;
                            }

                        }
                    }
                }
            }
        }
    }
    .copy-right{
        margin: 5% 10% 0 10%;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #b5b5b8;

        .copy{
            color: #b5b5b8;
        }
        .icons{
            display: flex;
            justify-content: center;
            align-items: center;

            .icon{
                display: flex;
                justify-content: center;
                align-items:center;
                width: 2.5rem;
                height: 2.5rem;
                background-color: #2c2c31;
                margin-left: 1rem;
                border-radius: 0.3rem;
                transition: 0.5s ease-in-out;

                &:hover{
                    background-color: white;
                    svg{
                        color: #2c2c31;
                    }
                }
                a{
                    text-decoration: none;
                    color: white;
                    svg{
                        font-size: 1.2rem;
                        margin: 0;
                    }
                }
            }
        }
    }

@media screen and (max-width: 1080px){
    .container{
        grid-template-columns: repeat(2, 1fr); 
        gap: 1.5rem;
    }
}

@media screen and (max-width: 576px){
    .container{
        margin: 0 10%;
        grid-template-columns: repeat(1, 1fr); 
        gap: 4rem;

        .news-letter{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;
        }
    }
    .copy-right{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
`

export default Footer