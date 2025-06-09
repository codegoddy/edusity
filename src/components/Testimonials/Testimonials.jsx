import React, {useRef} from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward =()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward =()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    return (
        <div className='testimonials'>
            <img onClick={slideForward} className='next-btn' src={next_icon} alt=''/>
            <img onClick={slideBackward} className='back-btn' src={back_icon} alt=''/>
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt=''/>
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, Nairobi</span>
                                </div>
                            </div>
                            <p>
                                "I have been a student at Edusity for 3 years and I am very satisfied with the education they provide. The teachers are very knowledgeable and the curriculum is very interesting. I would recommend Edusity to anyone who wants to learn something new."
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt=''/>
                                <div>
                                    <h3>Mary Wanjiku</h3>
                                    <span>Edusity, Nairobi</span>
                                </div>
                            </div>
                            <p>
                                "Edusity has transformed the way I learn. The platform is easy to use and the content is always up-to-date. I feel more confident in my studies thanks to Edusity."
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt=''/>
                                <div>
                                    <h3>Ahmed Noor</h3>
                                    <span>Edusity, Mombasa</span>
                                </div>
                            </div>
                            <p>
                                "The support I received from the Edusity team is unmatched. The interactive lessons and practical projects helped me build real-world skills."
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt=''/>
                                <div>
                                    <h3>Grace Mwikali</h3>
                                    <span>Edusity, Kisumu</span>
                                </div>
                            </div>
                            <p>
                                "What I love most about Edusity is the community. I’ve connected with peers and mentors who have supported me throughout my learning journey."
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
