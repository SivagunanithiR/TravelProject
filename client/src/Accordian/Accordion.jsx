import React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';

const Accordion = ({ title, desc, active, setActive }) => {
    const handleToggle = () => {
        setActive(active === title ? "" : title);
    };

    return (
        <div className='accordionContainer'>
            <span className={`title flex ${active === title ? 'activeTitle' : ''}`} onClick={handleToggle}>
                {title}
                <span>
                    <BsArrowDownCircle className='icon' />
                </span>
            </span>
            <p className={`description ${active === title ? 'show' : ''}`}>
                {desc}
            </p>
        </div>
    );
};

export default Accordion;