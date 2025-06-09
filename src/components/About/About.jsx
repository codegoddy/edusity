import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';


const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className='about-left'>
            <img src={about_img} alt='' className='about-img'/>
                 <img src={play_icon} alt='' className='play-icon' onClick={()=>setPlayState(true)}/>
            </div>
            <div className='about-right'>
                <h3>
                   ABOUT UNIVERSITY
                </h3>
                <h2>
                    Nurturing Tomorrow's Leaders Today
                </h2>
                <p>
                    Embark on a transformative educational journey with our university's comprehensive education programs, designed to equip you with the knowledge, skills, and real-world experience needed to thrive in today's competitive landscape. From innovative teaching methods to a supportive learning environment, we are committed to helping you achieve academic excellence and personal growth.
                </p>
                <p>
                    Our diverse range of programs spans various disciplines, allowing you to tailor your education to match your passions and career goals. Whether you're pursuing science, arts, technology, or business, our curriculum is built to challenge and inspire you every step of the way.
                </p>

                <p>
                    Beyond academics, our vibrant campus life offers countless opportunities for leadership, networking, and personal development. Join a community of forward-thinking students and faculty who are dedicated to innovation, collaboration, and making a positive impact on the world.
                </p>
            </div>
        </div>
    );
};

export default About;
