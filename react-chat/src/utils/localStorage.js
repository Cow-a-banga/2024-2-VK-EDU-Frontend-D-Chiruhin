const MESSAGES_STORAGE_KEY = "MESSAGES";
const CHATS_STORAGE_KEY = "CHATS";

const getChatKey = (id) => {
    return `${MESSAGES_STORAGE_KEY}_${id}`;
}

export const loadChatsFromStorage = () => {
    let json = localStorage.getItem(CHATS_STORAGE_KEY);
    let data = json === null ? [] : JSON.parse(json);
    return data;
}

export const getChatById = (id) => {
    let num_id = Number(id);
    let chats = loadChatsFromStorage();
    return chats.find(x => x.id === num_id);
}

export const getLastMessageByChatId = (id) => {
    let messages = loadMessagesFromStorage(id);
    return messages.length > 0 ? messages[messages.length - 1] : {text: '', name: '', time: ''};
}

export const saveChatsToStorage = (data) => {
    localStorage.setItem(CHATS_STORAGE_KEY, JSON.stringify(data));
}

export const loadMessagesFromStorage = (id) => {
    let json = localStorage.getItem(getChatKey(id));
    let data = json === null ? [] : JSON.parse(json);

    //Временно для демонстрации сообщений собеседника
    if (data.length === 0 || data[0].name === 'Я') {
        data = addInterlocutorMessages(id, data);
    }
    return data;
}

export const saveMessagesToStorage = (id, data) => {
    if (data !== undefined){
        localStorage.setItem(getChatKey(id), JSON.stringify(data));
    }
}

const addInterlocutorMessages = (id, data) => {
    const messages = [
        {text: "Привет!", name: `User ${id}`, time: "12:12"},
        {text: "Как дела?", name: `User ${id}`, time: "12:12"},
    ];
    return [...messages, ...data];
}