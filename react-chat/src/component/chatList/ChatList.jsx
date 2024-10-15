import { Chat } from '../chat/Chat';
import './ChatList.scss';

export const ChatList = (props) => {
    return (
        <div className="chats">
            {props.chats.map(x => 
                <Chat
                    key={x.id}
                    chat={x}
                    onClick={() => props.setId(x.id)}
                />
            )}
        </div>
    );
}