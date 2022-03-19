import React,{useState} from 'react';
import styled from 'styled-components';
import '../Styles/Navbar.css';
import Buttons from './Buttons';
import {GiHamburgerMenu} from "react-icons/gi";
import {MdClose} from "react-icons/md";
import BrandName from './BrandName';

function Navbar() {

    const [openNav, setOpenNav] = useState(false);
    const handelNavOpen = _ => setOpenNav(!openNav);

    return (
        <NavbarSection className={`${openNav ? "active" : ""}`}>
            <div className="col">
                <BrandName />
                <div className="menu">
                    {!openNav ? <GiHamburgerMenu onClick={handelNavOpen} />: <MdClose onClick={handelNavOpen} /> }
                </div>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#AboutWeb">Services</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li>
                        <a href="#blog">Blog</a>
                    </li>
                    <Buttons content="Contant" color="blue"/>
                </ul>
            </div>
            <div className={`links-media ${openNav ? "active" : ""}`}>
                <ul>
                    <li onClick={handelNavOpen}>
                        <a href="#about">About</a>
                    </li>
                    <li onClick={handelNavOpen}>
                        <a href="#AboutWeb">Services</a>
                    </li>
                    <li onClick={handelNavOpen}>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li onClick={handelNavOpen}>
                        <a href="#blog">Blog</a>
                    </li>
                    <Buttons content="Contant" color="blue" />
                </ul>
            </div>
        </NavbarSection>
    )
}

const NavbarSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    
    .col{
        display: flex;
        justify-content: center;
        align-items: center;

        .brand{
            z-index: 2;
        }

        .menu{
            display: none;
            margin-right:0.5rem;
            z-index: 2;
        }
    }
    .links{
        ul{
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0.3rem 2rem;
            color: var(--light-color);

            li{
                text-transform: uppercase;
                margin: 0 1rem;
                a{
                    text-decoration: none;
                    color: var(--blue-color);
                    font-size: 1.2rem;
                    transition: 0.2s ease-in-out;
                    &:hover{
                        color: var(--pink-color);
                    }
                }
            }
        }
    }
    .links-media{
        display: none;
    }

@media screen and (min-width: 280px) and (max-width: 991px){
    position: relative;
    width: 100%;
    .links{
        display: none;
    }
    .col{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .menu{
            display: block;
        }
        .brand{
            margin-left: 0.5rem;
        }
    }
}
.links-media{
    display: block;
    position: absolute;
    left: 0;
    top: -450px;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    transition: 0.5s ease-in-out;

    ul{
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        border: solid 3px var(--blue-color);
        padding: 3rem 4rem;
        z-index: 1;
        background-color: white;
        border-radius: 0.5rem;
        li{
            
            a{
                color: var(--blue-color);
                text-decoration: none;
            }
        }
    }
}
.active{
    top: -2px;
}

@media screen and (max-width: 576px){
    .links-media{
        min-height: 41vh;
        ul{
            flex-direction: column;
            gap: 1rem;
            padding: 0;
            padding-top: 6.2rem;
        }
    }
    .active{
        top: -50px !important;
    }
}
`
export default Navbar