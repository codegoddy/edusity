import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';



const Contact = () => {

    const [result, setResult] = React.useState("");
    const apiKey = import.meta.env.VITE_API_KEY;


    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", apiKey);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            setTimeout(()=>{
                setResult("");}
                , 5000);

        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>
                    Send us a message <img src={msg_icon} alt=''/>
                </h3>
                <p>
                    Have any questions or feedback? Fill out the form and we'll get back to you as soon as possible. We're here to help!
                </p>
                <ul>
                    <li >
                        <img src={mail_icon} alt=''/>
                        Contact@CodeGoddy.dev
                    </li>
                    <li>
                        <img src={phone_icon} alt=''/>
                        +254700000000
                    </li>
                    <li>
                        <img src={location_icon} alt=''/>
                        77 Kenya Road <br/>Nairobi, Kenya
                    </li>

                </ul>
            </div>

            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>
                        Your Name
                    </label>
                    <input type='text' name='phone' placeholder='Enter your name' required/>
                    <label>
                        Phone Number
                    </label>
                    <input type='text' name='phone' placeholder='Enter your phone number' required/>
                    <label>
                        Write your message here
                    </label>
                    <textarea rows='6' name='message' placeholder='Enter your message' required/>
                    <button className='btn dark-btn' type='submit'>
                        Submit now
                        <img src={white_arrow} alt=''/>
                    </button>
                </form>
                <span>
                    {result}
                </span>
            </div>
        </div>
    );
};

export default Contact;
