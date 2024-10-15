import "./Message.scss";

export const Message = (props) => {
    return (
        <div className={`message ${props.isNew ? "new-message" : ""} ${props.message.name === 'Я' ? "message-right" : "message-left"}`}>
            <div className="message__text">{props.message.text}</div>
            <div className="message__bottom">
                <div className="message__time">{props.message.time}</div>
                { props.message.name === 'Я' && <span className="material-icons message__status status">done_all</span> }
            </div>
        </div>
    );
}