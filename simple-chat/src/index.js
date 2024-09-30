import './index.css';

const MESSAGES_STORAGE_KEY = "MESSAGES";

const form = document.querySelector('form');
const input = document.querySelector('.form__input');
const messagesContainer = document.querySelector('.messages');
let data = [];

form.addEventListener('submit', handleSubmit);
window.addEventListener('beforeunload', saveMessagesToStorage);

loadMessagesFromStorage();
scrollToTheBottom();

function loadMessagesFromStorage () {
    let json = localStorage.getItem(MESSAGES_STORAGE_KEY);
    data = json === null ? [] : JSON.parse(json);
    for (let message of data) {
        addMessageOnScreen(message)
    }
}

function saveMessagesToStorage () {
    localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(data));
}

function addMessageOnScreen (message) {
    let div_message = document.createElement("div");
    div_message.className = "message";

    let div_text = document.createElement("div");
    div_text.className = "message__text";
    div_text.innerText = message.text;

    let div_bottom = document.createElement("div");
    div_bottom.className = "message__bottom";

    let div_time = document.createElement("div");
    div_time.className = "message__time";
    div_time.innerText = message.time;

    let span_done = document.createElement("span");
    span_done.className = "material-icons message__done";
    span_done.innerText = "done_all";

    div_bottom.appendChild(div_time);
    div_bottom.appendChild(span_done);
    div_message.appendChild(div_text);
    div_message.appendChild(div_bottom);
    messagesContainer.appendChild(div_message);
}

function scrollToTheBottom () {
    window.scrollTo({top: document.body.scrollHeight});
}

function handleSubmit (event) {
    event.preventDefault();
    if (input.value !== '') {
        let time = new Date();
        let message = {text: input.value, name: "Я", time: `${time.getHours()}:${time.getMinutes()}`};
        data = [...data, message];
        addMessageOnScreen(message);
        scrollToTheBottom();
        input.value = '';
    }
    
}
