import { useState } from 'react';
import { ChatListPage } from './pages/ChatListPage/ChatListPage';
import { ChatPage } from './pages/ChatPage/ChatPage';

export const App = () => {
  
  const [id, setId] = useState(null);

  if(id === null)
    return <ChatListPage setId={setId}/>
  
  return <ChatPage id={id} setId={setId}/>
}
