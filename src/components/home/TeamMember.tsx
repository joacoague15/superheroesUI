import '../../styles/myTeamStyle.css';
import '../../styles/buttonStyle.css';
import Modal from "../Modal";
import { useState } from "react";
import { toast } from "react-toastify";

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

    const colorHandler = (stat: number) => {
        if (stat < 80)
            return 'black-text'
        if (stat < 90)
            return 'yellow-text'
        return 'green-text'
    }

    return(
        <div className='member'>
            <button id='member-button' onClick={openModal}><img src={img} alt={img} /></button>
            <Modal openModal={modalOpened} onClick={closeModal}>
                <h2>{name}</h2>
                <ul className='member-stats-list'>
                    <li><b>Power: </b><span className={colorHandler(power)}>{power}</span></li>
                    <li><b>Durability: </b><span className={colorHandler(durability)}>{durability}</span></li>
                    <li><b>Intelligence: </b><span className={colorHandler(intelligence)}>{intelligence}</span></li>
                </ul>
                {displayRemoveButton()}
            </Modal>
        </div>
    )
}
export default TeamMember;