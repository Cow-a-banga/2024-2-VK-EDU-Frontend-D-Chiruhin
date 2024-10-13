import './chat.css';
import '../styles/global.css';
import '../styles/reset.css';
import '../styles/account.css';
import '../styles/message.css';
import '../styles/header.css';
import '../styles/status.css';
import { addAllMessagesOnScreen, addMessageOnScreen } from '../scripts/addMessageOnScreen';
import { scrollToTheBottom } from '../scripts/scrollToTheBottom';
import { getChatById, loadMessagesFromStorage, saveMessagesToStorage } from '../scripts/localStorage';

const handleSubmit = (event) => {
    event.preventDefault();
    if (input.value !== '') {
        let time = new Date().toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
        let message = {text: input.value, name: "Я", time};
        messages = [...messages, message];
        addMessageOnScreen(message, messagesContainer, true);
        scrollToTheBottom(messagesContainer);
        input.value = '';
    } 
}

const addAccountInfoOnScreen = (username, image, accountContainer) => {
    let div_crop = document.createElement("div");
    div_crop.className = "crop-container";

    let img_account = document.createElement("img");
    img_account.className = "account__image";
    img_account.src = image;

    let div_info = document.createElement("div");
    div_info.className = "account__info";

    let div_name = document.createElement("div");
    div_name.className = "account__name open-sans";
    div_name.innerText = username;

    let div_time = document.createElement("div");
    div_time.className = "account__last-time open-san";
    div_time.innerText = "был(а) 2 часа назад";

    div_crop.appendChild(img_account);
    div_info.appendChild(div_name);
    div_info.appendChild(div_time);
    accountContainer.appendChild(div_crop);
    accountContainer.appendChild(div_info);
}

const form = document.querySelector('form');
const input = document.querySelector('input');

const messagesContainer = document.querySelector('.messages');
const accountContainer = document.querySelector('.account');

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

form.addEventListener('submit', handleSubmit);
window.addEventListener('beforeunload', () => {
    if(chat !== undefined){
        saveMessagesToStorage(id, messages);
    }
});

let messages = loadMessagesFromStorage(id);
let chat = getChatById(id);

if (chat === undefined) {
    window.location.href = "/";
}

addAccountInfoOnScreen(chat.username, chat.image, accountContainer);
addAllMessagesOnScreen(messages, messagesContainer);
scrollToTheBottom(messagesContainer);
