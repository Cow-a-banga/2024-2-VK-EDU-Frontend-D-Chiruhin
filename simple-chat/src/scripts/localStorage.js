const MESSAGES_STORAGE_KEY = "MESSAGES";

export const loadMessagesFromStorage = () => {
    let json = localStorage.getItem(MESSAGES_STORAGE_KEY);
    console.log(localStorage.getItem(MESSAGES_STORAGE_KEY));
    console.log(json === null ? [] : JSON.parse(json))
    return json === null ? [] : JSON.parse(json);
}

export const saveMessagesToStorage = (data) => {
    localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(data));
}