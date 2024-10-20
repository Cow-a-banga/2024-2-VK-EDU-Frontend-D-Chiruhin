import './FloatButton.scss';
import CreateIcon from '@mui/icons-material/Create';

export const FloatButton = (props) => <CreateIcon ref={props.buttonRef} className="material-icons float-button" onClick={props.onClick}/>;