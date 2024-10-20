import { useEffect, useRef, useState } from 'react'
import { Header } from '../../component/header/Header';
import { ChatList } from '../../component/chatList/ChatList';
import { FloatButton } from '../../component/floatButton/FloatButton';
import { getLastMessageByChatId, loadChatsFromStorage, saveChatsToStorage } from '../../utils/localStorage';

export const ChatListPage = (props) => {
    const [chats, setChats] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const floatButtonRef = useRef();
    

    const addChat = () => {
        floatButtonRef.current.classList.add("pulse");
        setTimeout(() => floatButtonRef.current.classList.remove("pulse"), 2000);

        const id = chats.length + 1;
        const chat = {id: id, username: `User ${id}`, image: `https://randomfox.ca/images/${id}.jpg`};
        chat.lastMessage = getLastMessageByChatId(chat.id);
        const newChats = [...chats, chat];
        setChats(newChats);
    }

    useEffect(() => {
        if(loaded){
            saveChatsToStorage(chats);
        }
    }, [chats]);
    
    
    useEffect(() => {
        let chatsData = loadChatsFromStorage();
        for (const chat of chatsData) {
            chat.lastMessage = getLastMessageByChatId(chat.id);
        }
        setChats(chatsData);
        setLoaded(true);
    }, []);
    
    return (
        <div className="content">
            <Header/>
            <ChatList chats={chats} setId={props.setId} />
            <FloatButton buttonRef={floatButtonRef} onClick={addChat} />
        </div>
    );
}