import React, { useState } from 'react';

const FAQ = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'show' : '';

    return (
        <div key={item.title} className="mb-2 w-[1000px] overflow-hidden text-center mx-auto">
            <div 
            onClick={() => onTitleClick(index)} 
            className="cursor-pointer bg-red-400 text-white p-2 rounded-lg "
            >
            {item.title}
        </div>
            <div className={`p-2 ${active === 'show' ? 'block' : 'hidden'}`}>
            {item.content}
            </div>
        </div>
        );
    });

    return <div>{renderedItems}</div>;
};

export default FAQ;
