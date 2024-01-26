const Accordion = ({title, content}) => {
    return (
        <div className="accordion">
            <div className="accordion-item">
                <div className="accordion-title">
                    <text>{title}</text>
                    <text> + </text>
                </div>
                <div className="accordion-content">
                    {content}
                </div>
            </div>
        </div>
    )
};

export default Accordion