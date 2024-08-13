import React, { useState, useRef } from 'react';
import './Question.css';
import Accordion from '../Accordian/Accordion';
import Swal from 'sweetalert2';

const Question = () => {
    const [active, setActive] = useState("How do I choose the right travel destination for me?");
    const formRef = useRef(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);

        formData.append("access_key", "564df266-6e69-4c35-8007-e33148581011");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
    };

    return (
        <div className='question section container'>
            <div className="secHeading">
                <h3>Frequently Asked Questions</h3>
            </div>
            <div className='secContainer grid'>
                <div className='accordion grid'>
                    <Accordion
                        title="How do I choose the right travel destination for me?"
                        desc="Consider your interests, budget, desired experiences, and the type of environment you enjoy. Research destinations that align with your preferences and offer attractions or activities you find appealing."
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title="What are the best times to visit specific destinations?"
                        desc="Research the climate, weather patterns, and peak tourist seasons of the destination you're interested in. Opt for the shoulder seasons when the weather is pleasant and crowds are fewer, if possible."
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title="How can I find budget-friendly travel options and deals?"
                        desc="Look for travel deals, discounts on flights and accommodations. Being flexible with your travel dates can also help you find better deals."
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title="What essential items should I pack for my adventure?"
                        desc="Pack appropriate clothing, toiletries, travel documents (passport, visa, etc.), essential medications, and any specific gear needed for your adventure (e.g., hiking boots, snorkeling gear)."
                        active={active}
                        setActive={setActive}
                    />
                </div>
                <div className='form'>
                    <div className="secHeading">
                        <h4>Do you have any specific question?</h4>
                        <p>Please fill the form below and our dedicated team will get in touch with you as soon as possible.</p>
                    </div>
                    <form ref={formRef} onSubmit={onSubmit} className="formContent grid">
                        <input type='email' name="email" placeholder='Enter Email Address' required />
                        <textarea name="message" placeholder='Enter your question here' required></textarea>
                        <button type='submit' className='btn'>Submit Inquiry</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Question;
 