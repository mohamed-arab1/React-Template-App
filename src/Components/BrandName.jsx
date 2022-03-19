import React from 'react';
import styled from 'styled-components';
import "../Styles/BrandNameStyle.css";

function BrandName({isFooter= false}) {
    return (
        <BrandSection className={`brand ${isFooter === true ? "footer" : ""}`}>
            <span>WebSerfing</span>
        </BrandSection>
    )
}

const BrandSection = styled.div`
    cursor: pointer;

    span{
        text-transform: uppercase;
        font-size: x-large;
        border: 0.1rem solid var(--pink-color);
        padding: 0.5rem;
        color: var(--blue-color);
        border-radius: 0.2rem;
    }
`

export default BrandName