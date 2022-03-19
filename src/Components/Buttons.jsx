import React from 'react'
import styled from 'styled-components'
import '../Styles/buttonStyle.css'

function Buttons({
        content,
        color,
        icon
    }
) {

    return (
        <ButtonEdite className={`${color}`}>{content} {icon}</ButtonEdite>
    )

}
const ButtonEdite = styled.button`
    color: white;
    text-transform: uppercase;
    padding: 0.8rem 1rem;
    border: 0.1rem solid transparent;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-in-out;
    border-radius: 0.25rem;
}
`
export default Buttons