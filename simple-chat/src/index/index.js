import './index.css';
import '../styles/global.css';
import '../styles/reset.css';
import '../styles/header.css';
import '../styles/float-button.css';
import '../styles/chat-item.css';
import '../styles/status.css';
import '../styles/pulse.css';
import { getLastMessageByChatId, loadChatsFromStorage, saveChatsToStorage } from '../scripts/localStorage';
import { addAllChatsOnScreen, addChatOnScreen } from '../scripts/addChatOnScreen';

const addChat = () => {
    newChatBtn.classList.add("pulse");
    setTimeout(() => newChatBtn.classList.remove("pulse"), 2000);

    const id = chats.length + 1;
    const chat = {id: id, username: `User ${id}`, image: `https://randomfox.ca/images/${id}.jpg`};
    chat.lastMessage = getLastMessageByChatId(chat.id);
    chats = [...chats, chat];
    addChatOnScreen(chat.lastMessage, chat.id, chat.username, chat.image, chatContainer);
}

const newChatBtn = document.querySelector('.float-button');
const chatContainer = document.querySelector('.chats');

newChatBtn.addEventListener('click', addChat);
window.addEventListener('beforeunload', () => {
    saveChatsToStorage(chats);
});

let chats = loadChatsFromStorage();
for (const chat of chats) {
    chat.lastMessage = getLastMessageByChatId(chat.id);
}

addAllChatsOnScreen(chats, chatContainer);