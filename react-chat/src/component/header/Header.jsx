import './Header.scss';
import './Account.scss';

export const Header = () => {
    return (
        <div className="header">
            <span className="material-icons">menu</span>
            <div className="header__main ">Messenger</div>
            <span className="material-icons header__right-icon">search</span>
        </div>
    );
}

export const ChatHeader = (props) => {
    return (
        <div className="header">
            <span onClick={props.onClick} className="material-icons">arrow_back</span>
            <div className="header__main account">
                <div className="crop-container">
                    <img className="account__image" src={props.image}/>
                </div>
                <div className="account__info">
                    <div className="account__name open-sans">{props.username}</div>
                    <div className="account__last-time open-san">был(а) 2 часа назад</div>
                </div>
            </div>
            <span className="material-icons">search</span>
            <span className="material-icons header__right-icon">more_vert</span>
        </div>
    );
}