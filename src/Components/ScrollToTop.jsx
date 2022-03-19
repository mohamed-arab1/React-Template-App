import React, { useState } from 'react';
import styled from 'styled-components';
import {FaChevronUp} from "react-icons/fa";

function ScrollToTop() {

    const [visible, setVisible] = useState(false);

    window.addEventListener("scroll", ()=>{
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    })

    return (
    <ScrolButton>
        <a href="#" className={visible ? "block" : "none"}>
            <FaChevronUp />
        </a>
    </ScrolButton>
    )
}

const ScrolButton = styled.div`
    max-width: 100vw;

    .none{
    visibility: hidden;
    opacity: 0;
    }
    a{
    background-color: rgb(18, 18, 88);
    position: fixed;
    bottom: 40px;
    right: 40px;
    padding: 1rem;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    transition: 0.5s ease-in-out;
    svg{
        margin: 0;
    }

@media screen and (max-width: 991px){
        bottom: 20px ;
        right: 20px;
}
`

export default ScrollToTop;