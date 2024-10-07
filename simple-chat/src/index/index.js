import './index.css';
import '../styles/global.css';
import '../styles/reset.css';
import '../styles/header.css';
import '../styles/float-button.css';
import '../styles/chat-item.css';
import '../styles/status.css';
import { loadMessagesFromStorage } from '../scripts/localStorage';

const TEXT_MAX_LENGTH = 25;

const addChatOnScreen = (lastMessage, img, chatContainer) => {
    let a_chat = document.createElement("a");
    a_chat.className = "chat";
    a_chat.href = "./chat/chat.html";

    let div_crop = document.createElement("div");
    div_crop.className = "crop-container";

    let img_chat = document.createElement("img");
    img_chat.className = "chat__image profile-image";
    img_chat.src = img;

    let div_underline = document.createElement("div");
    div_underline.className = "chat__underline";

    let div_main = document.createElement("div");
    div_main.className = "chat__main";

    let div_name = document.createElement("div");
    div_name.className = "chat__name";
    div_name.innerText = "Дженнифер Эшли";

    let div_text = document.createElement("div");
    div_text.className = "chat__text";
    div_text.innerText = lastMessage.text.length > TEXT_MAX_LENGTH ? `${lastMessage.text.slice(0, TEXT_MAX_LENGTH)}...` : lastMessage.text;

    let div_chat_side = document.createElement("div");
    div_chat_side.className = "chat__side";

    let div_time = document.createElement("div");
    div_time.className = "chat__time";
    div_time.innerText = lastMessage.time;

    div_chat_side.appendChild(div_time);

    if (lastMessage.name === 'Я') {
        let div_status = document.createElement("div");
        div_status.className = "material-icons status";
        div_status.innerText = "done_all";
        div_chat_side.appendChild(div_status);
    }

    div_main.appendChild(div_name);
    div_main.appendChild(div_text);
    div_underline.appendChild(div_main);
    div_underline.appendChild(div_chat_side);
    div_crop.appendChild(img_chat);
    a_chat.appendChild(div_crop);
    a_chat.appendChild(div_underline);
    chatContainer.appendChild(a_chat);
}

const chatContainer = document.querySelector('.chats');
let data = loadMessagesFromStorage();
let lastMessage = data.length > 0 ? data[data.length - 1] : {text: '', name: '', time: ''};

for (let i = 0; i < 12; i++) {
    addChatOnScreen(lastMessage, `https://randomfox.ca/images/${i+1}.jpg`, chatContainer);
}