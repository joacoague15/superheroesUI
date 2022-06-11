import '../styles/modalStyle.css';
import '../styles/buttonStyle.css';

const Modal = (props: any) => {
    const { openModal, onClick } = props;

    if (openModal) {
        return (
            <div className='modal-container'>
                <div className='modal-inner'>
                    <button onClick={onClick} className='close-btn'>Close</button>
                    { props.children }
                </div>
            </div>
        )
    }
    return null
}

export default Modal;