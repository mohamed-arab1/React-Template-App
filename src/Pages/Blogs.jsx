import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import BlogImage1 from '../Photos/blogImage1.jpg';
import BlogImage2 from '../Photos/blogImage2.jpg';
import BlogImage3 from '../Photos/blogImage3.jpg';
import Buttons from './../Components/Buttons';

function Blogs() {

    const blogsData = [
        {
            image: BlogImage1,
            title: "Top list of Mistakes to Avoid During MVP Development",
            subTitle: "When there appears an idea to create a startup, have to take intoaccount all the risks you will face and evalute them thoughtfullu. Also as a rule..."
        },
        {
            image: BlogImage2,
            title: "A Day in the life on an Engineering Manager",
            subTitle: "When there appears an idea to create a startup, have to take intoaccount all the risks you will face and evalute them thoughtfullu. Also as a rule..."
        },
        {
            image: BlogImage3,
            title: "How to Build a Strong Remote Work Culture",
            subTitle: "WebSurfing is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
        }
    ]

    return (
        <BlogsSection id='blog'>
            <div className="container">
                <div className="title-container">
                    <Title title="Blogs" color="blue" lineCenter={true} />
                    <p>Insights and advice from our experts.</p>
                </div>
                <div className="blogs">
                    {
                        blogsData.map((blog, index) => (
                            <div className="blog" id={index}>
                                <div className="image-container">
                                    <img src={blog.image} alt="blog-image1" />
                                </div>
                                <div className="content">
                                    <div className="blog-title">
                                        <h3>{blog.title}</h3>
                                    </div>
                                    <div className="blog-subTitle">
                                        <p>{blog.subTitle}</p>
                                    </div>
                                    <Buttons content="Read More" color="inverse" icon={<HiOutlineArrowNarrowRight />} />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="button-container">
                    <Buttons content="veiw All" color="blue"/>
                </div>
            </div>
        </BlogsSection>
    )
}

const BlogsSection = styled.div`
    .container {
    margin: 0 10%;
    padding: 5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .title {
            margin-bottom: 1rem;
        }
        p {
            color: var(--light-color);
        }
    }
    .blogs {
        margin-bottom: 2rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem;

        .blog{
            height: 100%;
            width: 100%;
            background-color: white;
            border-radius: 0.4rem;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
            transition: 0.4s ease-in-out;
            &:hover {
                box-shadow: #f32a8f2f 5px 5px, #f32a8f1e 10px 10px, #f32a8f02 15px 15px;
            }
            .image-container {
                height: 12rem;
                img {
                height: 12rem;
                width: 100%;
            }
        }
        .content{
            padding: 1rem;

            .blog-title{
                h3 {
                    color: var(--heading-color);
                }
            }
            .blog-subTitle {
                p {
                    color: var(--light-color);
                }
            }
        }
    }
}

@media screen and (max-width: 991px){
    .blogs{
        display: flex;
        flex-direction: column;
    }
    .button-container{
        width: 100%;
        display: flex;
        justify-content: center;
        button{
            width: 90%;
        }
    }
}
`

export default Blogs;