import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';

function Testimonials() {

    const testimonialsData = [
        {
            content: "The best on the net! Software development saved my business. I useSoftware development often. I am really satisfied with my SoftwareDevelopment.",
            name: "Trushit Vyas",
            designation: "Co-Founder"
        },
        {
            content: "TMobile application developer is exactly what out business has been lacing. I have gotten at least 50 times the value from mobile apllication.",
            name: "Kishan H. Sheth",
            designation: "Founder & CEO"
        },
        {
            content: "Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definetly worth the investment",
            name: "Romit Gandhi",
            designation: "Founder"
        }
    ];

    return (
        <TestimonialsSection id='testimonials'>
            <div className="container">
                <div className="titel-container">
                    <Title title="Testimonials" color="blue" lineCenter={true} />
                    <p>See what our clients are saying about us.</p>
                </div>
                <div className="testimonials">
                    {
                        testimonialsData.map((testimonial, index) => (
                            <div className="testimonial">
                                <div className="quote">
                                    <span>&#10077;</span>
                                </div>
                                <div className="content">{testimonial.content}</div>
                                <div className="author">
                                    <div className="name">{testimonial.name}</div>
                                    <div className="designation">{testimonial.designation}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </TestimonialsSection>
    )
}

const TestimonialsSection = styled.div`
    min-height: 50vh;
    background-color: var(--background-color);
    .container{
        margin: 0 10%;
        padding: 5rem 0;
        .titel-container{
            width: 100%;
            text-align: center;
            p{
                font-size: large;
                color: var(--light-color);
            }
        }
        .testimonials{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 5rem;
            margin-top: 1.5rem;

            .testimonial{
                height: 16rem;
                width: 95%;
                border: none;
                border-radius: 0.4rem;
                box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
                background-color: white;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                transition: 0.4s ease-in-out;
                &:hover {
                    box-shadow: rgba(99, 15, 179, 0.5) 5px 5px, rgba(99, 15, 179, 0.3) 10px 10px,
                    rgba(99, 15, 179, 0.1) 15px 15px;
                }
                .quote{
                    position: relative;
                    span{
                        position: absolute;
                        font-size: 5rem;
                        color: #f32a8f8f
                    }
                }
                .content {
                    color: var(--light-color);
                    font-weight: 600;
                    margin-top: 0.5rem;
                }
                .author {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    color: rgb(99, 15, 179);
                    .name {
                    font-size: larger;
                    font-weight: bold;
                    }
                    .designation {
                    font-size: medium;
                    }
                }
        }
    }

@media screen and (max-width: 1080px){
    .container{
        margin: 0;
    }
    .testimonials{
        display: flex ; 
        flex-direction: column ;
        align-items: center;
    }
}

@media screen and (max-width: 320px){
    .testimonials{
        .testimonial{
            height: 19rem;
        }
    }
}

`

export default Testimonials