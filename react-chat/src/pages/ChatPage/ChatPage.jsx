import { useEffect, useRef, useState } from "react";
import { ChatHeader, Header } from "../../component/header/Header";
import "./ChatPage.scss";
import { Message } from "../../component/message/Message";
import { loadMessagesFromStorage, getChatById, saveMessagesToStorage } from "../../utils/localStorage";

export const ChatPage = (props) => {

    const [messages, setMessages] = useState([]);
    const [chat, setChat] = useState(null);
    const [input, setInput] = useState("");
    const [newMessageIndex, setNewMessageIndex] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const messageContainerRef = useRef();


    useEffect(() => {
        setMessages(loadMessagesFromStorage(props.id));
        let newChat = getChatById(props.id);
        if (newChat === undefined) {
            props.setId(null);
        }
        else {
            setChat(newChat);
        }
        setLoaded(true);
    }, []);

    useEffect(() => {
        console.log("out");
        if(loaded) {
            console.log("in");
            saveMessagesToStorage(props.id, messages);
        }
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input !== '') {
            let time = new Date().toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
            let message = {text: input, name: "Я", time};
            let newMessages = [...messages, message];
            setMessages(newMessages);
            setNewMessageIndex(newMessages.length - 1);
            setInput('');
        } 
    }

    return (
        <div className="content">
            <ChatHeader 
                onClick={() => props.setId(null)}
                username={chat?.username}
                image={chat?.image}
            />
            <div className="messages" ref={messageContainerRef}>
                {messages.map((x, index) => (
                    <Message
                        key={index}
                        message={x}
                        isNew={index === newMessageIndex}
                    />
                ))}
            </div>
            <div className="form">
                <form action="/" onSubmit={handleSubmit}>
                    <input name="message-text" placeholder="Сообщение" type="text" autoComplete="off" value={input} onChange={x => setInput(x.target.value)}/>
                </form>
                <span className="material-icons form__attachment">attachment</span>
            </div>
        </div>
    );
}