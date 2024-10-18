import "./Message.scss";
import DoneAllIcon from '@mui/icons-material/DoneAll';

export const Message = (props) => {
    return (
        <div className={`message ${props.isNew ? "new-message" : ""} ${props.message.name === 'Я' ? "message-right" : "message-left"}`}>
            <div className="message__text">{props.message.text}</div>
            <div className="message__bottom">
                <div className="message__time">{props.message.time}</div>
                { props.message.name === 'Я' && <DoneAllIcon className="material-icons message__status status"/> }
            </div>
        </div>
    );
}