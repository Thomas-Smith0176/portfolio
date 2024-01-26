import { useRef, useState } from "react";

const Accordion = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);
    const contentHeight = useRef()
    
    return (
        <div className="container">
            <div className="wrapper">
                <div className="accordion-title-container" onClick={() => setIsActive(!isActive)}>
                    <div className="accordion-title">
                    <text>{title}</text>
                    <text>{isActive ? '-' : '+'}</text>
                    </div>
                </div>
                <div ref={contentHeight} className="accordion-content-container" style={
                    isActive ? { height: contentHeight.current.scrollHeight } : { height: "0px" }
                }>
                <div className="accordion-content">{content}</div>
                </div>
            </div>
        </div>
    )
};

export default Accordion