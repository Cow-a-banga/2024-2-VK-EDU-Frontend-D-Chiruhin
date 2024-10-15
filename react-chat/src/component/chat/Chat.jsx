import { useState } from 'react';
import './Chat.scss';

const TEXT_MAX_LENGTH = 25;

export const Chat = (props) => {

    const [waveStyle, setWaveStyle] = useState(null);

    const handleClick = (event) => {
        event.preventDefault();
        
        const rect = event.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const rippleX = event.clientX - rect.left - size / 2;
        const rippleY = event.clientY - rect.top - size / 2;

        setWaveStyle({
            width: `${size}px`,
            height: `${size}px`,
            left: `${rippleX}px`,
            top: `${rippleY}px`,
        });

        setTimeout(() => {
            props.onClick();
        }, 150);
    };


    return (
        <div className="chat" onClick={handleClick}>
            <div className="crop-container">
                <img className="chat__image profile-image" src={props.chat?.image}/>
            </div>
            <div className="chat__underline">
                <div className="chat__main">
                    <div className="chat__name">{props.chat?.username}</div>
                    <div className="chat__text">
                        {
                            props.chat.lastMessage && props.chat.lastMessage.text.length > TEXT_MAX_LENGTH ?
                            `${props.chat.lastMessage.text.slice(0, TEXT_MAX_LENGTH)}...` :
                            props.chat.lastMessage.text
                        }
                    </div>
                </div>
                <div className="chat__side">
                    <div className="chat__time">{props.chat.lastMessage.time}</div>
                    {props.chat.lastMessage.name == 'Я' && <div className="material-icons status">done_all</div>}
                </div>
            </div>

            {waveStyle && (
                <span
                    className="wave"
                    style={waveStyle}
                />
            )}
        </div>
    );
}