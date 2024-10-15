import './FloatButton.scss';

export const FloatButton = (props) => <span ref={props.buttonRef} className="material-icons float-button" onClick={props.onClick}>edit</span>;