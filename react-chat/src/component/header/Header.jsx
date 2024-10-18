import './Header.scss';
import './Account.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Header = () => {
    return (
        <div className="header">
            <MenuIcon className='material-icons'/>
            <div className="header__main ">Messenger</div>
            <SearchIcon className="material-icons header__right-icon"/>
        </div>
    );
}

export const ChatHeader = (props) => {
    return (
        <div className="header">
            <ArrowBackIcon onClick={props.onClick} className="material-icons"/>
            <div className="header__main account">
                <div className="crop-container">
                    <img className="account__image" src={props.image}/>
                </div>
                <div className="account__info">
                    <div className="account__name open-sans">{props.username}</div>
                    <div className="account__last-time open-san">был(а) 2 часа назад</div>
                </div>
            </div>
            <SearchIcon className="material-icons"/>
            <MoreVertIcon className="material-icons header__right-icon"/>
        </div>
    );
}