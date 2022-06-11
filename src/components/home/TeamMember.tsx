import '../../styles/myTeamStyle.css';
import Modal from "../Modal";
import {useState} from "react";

const TeamMember = (props: any) => {
    const  { name, img, indexOfCurrentMember, teamMembers, setTeamMembers } = props;

    const [modalOpened, setModalOpened] = useState(false);

    const removeTeamMember = () => {
        const newTeamStatus = teamMembers.filter((member: any) => indexOfCurrentMember !== teamMembers.indexOf(member));
        setTeamMembers(newTeamStatus);
        closeModal();
    }

    const displayRemoveButton = () => {
        return name && <button onClick={removeTeamMember}>Remove {name} from the team</button>
    }

    const openModal = () => {
        setModalOpened(true)
    }

    const closeModal = () => {
        setModalOpened(false)
    }

    return(
        <div className='member'>
            <button onClick={openModal}><img src={img} alt={img} /></button>
            <Modal openModal={modalOpened} onClick={closeModal}>
                <h2>{name}</h2>
                {displayRemoveButton()}
            </Modal>
        </div>
    )
}
export default TeamMember;