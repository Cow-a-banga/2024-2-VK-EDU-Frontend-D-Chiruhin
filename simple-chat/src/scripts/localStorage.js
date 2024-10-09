const MESSAGES_STORAGE_KEY = "MESSAGES";

export const loadMessagesFromStorage = () => {
    let json = localStorage.getItem(MESSAGES_STORAGE_KEY);
    console.log(localStorage.getItem(MESSAGES_STORAGE_KEY));
    console.log(json === null ? [] : JSON.parse(json))
    let data = json === null ? [] : JSON.parse(json);

    //Временно для демонстрации сообщений собеседника
    if (data.length === 0 || data[0].name === 'Я') {
        data = addInterlocutorMessages(data);
    }
    return data;
}

export const saveMessagesToStorage = (data) => {
    localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(data));
}

const addInterlocutorMessages = (data) => {
    const messages = [
        {text: "Привет!", name: "Дженнифер Эшли", time: "12:12"},
        {text: "Как дела?", name: "Дженнифер Эшли", time: "12:12"},
    ];
    return [...messages, ...data];
}