export const addMessageOnScreen = (message, messagesContainer, isNew = false) => {
    let div_message = document.createElement("div");
    div_message.className = `message ${isNew ? "new-message" : ""} ${message.name === 'Я' ? "message-right" : "message-left"}`;

    let div_text = document.createElement("div");
    div_text.className = "message__text";
    div_text.innerText = message.text;

    let div_bottom = document.createElement("div");
    div_bottom.className = "message__bottom";

    let div_time = document.createElement("div");
    div_time.className = "message__time";
    div_time.innerText = message.time;

    div_bottom.appendChild(div_time);

    if (message.name === 'Я') {
        let span_done = document.createElement("span");
        span_done.className = "material-icons message__status status";
        span_done.innerText = "done_all";
        div_bottom.appendChild(span_done);
    }

    div_message.appendChild(div_text);
    div_message.appendChild(div_bottom);
    messagesContainer.appendChild(div_message);
}

export const addAllMessagesOnScreen = (messages, messagesContainer) => {
    for (let message of messages) {
        addMessageOnScreen(message, messagesContainer);
    }
}
