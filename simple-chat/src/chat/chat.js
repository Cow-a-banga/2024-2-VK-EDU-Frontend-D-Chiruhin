import './chat.css';
import '../styles/global.css';
import '../styles/reset.css';
import '../styles/account.css';
import '../styles/message.css';
import '../styles/header.css';
import '../styles/status.css';
import { addAllMessagesOnScreen, addMessageOnScreen } from '../scripts/addMessageOnScreen';
import { scrollToTheBottom } from '../scripts/scrollToTheBottom';
import { loadMessagesFromStorage, saveMessagesToStorage } from '../scripts/localStorage';

const handleSubmit = (event) => {
    event.preventDefault();
    if (input.value !== '') {
        let time = new Date().toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
        let message = {text: input.value, name: "Я", time};
        data = [...data, message];
        addMessageOnScreen(message, messagesContainer);
        scrollToTheBottom();
        input.value = '';
    }
    
}

const form = document.querySelector('form');
const input = document.querySelector('input');
const messagesContainer = document.querySelector('.messages');

form.addEventListener('submit', handleSubmit);
window.addEventListener('beforeunload', () => {
    saveMessagesToStorage(data);
});

let data = loadMessagesFromStorage();
addAllMessagesOnScreen(data, messagesContainer);
scrollToTheBottom();
