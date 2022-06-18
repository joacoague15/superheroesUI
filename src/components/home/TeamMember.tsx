import '../../styles/myTeamStyle.css';
import '../../styles/buttonStyle.css';
import Modal from "../Modal";
import { useState } from "react";
import {toast} from "react-toastify";

const TeamMember = (props: any) => {
    const  { name, img, power, durability, intelligence, indexOfCurrentMember, teamMembers, setTeamMembers } = props;

    const [modalOpened, setModalOpened] = useState(false);

    const removeTeamMember = () => {
        const newTeamStatus = teamMembers.filter((member: any) => indexOfCurrentMember !== teamMembers.indexOf(member));
        setTeamMembers(newTeamStatus);
        toast(`${name} was removed from the team`, { position: toast.POSITION.BOTTOM_RIGHT })
        closeModal();
    }

    const displayRemoveButton = () => {
        return name && <button className='button' onClick={removeTeamMember}>Remove {name} from the team</button>
    }

    const openModal = () => {
        setModalOpened(true)
    }

    const closeModal = () => {
        setModalOpened(false)
    }

    return(
        <div className='member'>
            <button id='member-button' onClick={openModal}><img src={img} alt={img} /></button>
            <Modal openModal={modalOpened} onClick={closeModal}>
                <h2>{name}</h2>
                <ul>
                    <li><b>Power: </b>{power}</li>
                    <li><b>Durability: </b>{durability}</li>
                    <li><b>Intelligence: </b>{intelligence}</li>
                </ul>
                {displayRemoveButton()}
            </Modal>
        </div>
    )
}
export default TeamMember;