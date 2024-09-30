export const addMessageOnScreen = (message, messagesContainer) => {
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
    span_done.className = "material-icons message__status status";
    span_done.innerText = "done_all";

    div_bottom.appendChild(div_time);
    div_bottom.appendChild(span_done);
    div_message.appendChild(div_text);
    div_message.appendChild(div_bottom);
    messagesContainer.appendChild(div_message);
}

export const addAllMessagesOnScreen = (messages, messagesContainer) => {
    for (let message of messages) {
        addMessageOnScreen(message, messagesContainer);
    }
}
