import '../../styles/myTeamStyle.css';
import '../../styles/buttonStyle.css';
import { useState } from "react";
import { toast } from "react-toastify";
import {Modal, Progress} from "antd";
import axios from "axios";
import {useParams} from "react-router-dom";

const RecruitedMember = (props: any) => {
    const { userId } = useParams()
    const  { id, name, img, power, durability, intelligence, fetchHeroes } = props;

    const [modalOpened, setModalOpened] = useState(false);

    const removeTeamMember = () => {
        axios.delete(`http://localhost:4000/hero/${id}/remove/${userId}`)
            .then(() => {
                toast(`${name} was removed from the team`, { position: toast.POSITION.BOTTOM_RIGHT })
                closeModal()
                fetchHeroes()
            })
            .catch(err => toast(err.data, { position: toast.POSITION.BOTTOM_RIGHT }))
        closeModal();
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
            <Modal open={modalOpened} onCancel={closeModal} onOk={closeModal}>
                <h2 style={{ textAlign: 'center' }}>{name}</h2>
                <ul className='member-stats-list'>
                    Power <Progress percent={power} strokeColor={{ '0%': 'orange', '100%': 'orange' }} />
                    Durability <Progress percent={durability} strokeColor={{ '0%': 'orange', '100%': 'orange' }} />
                    Intelligence <Progress percent={intelligence} strokeColor={{ '0%': 'orange', '100%': 'orange' }} />
                </ul>
                {name && <button style={{ width: '100%' }} className='button' onClick={removeTeamMember}>Remove {name} from the team</button>}
            </Modal>
        </div>
    )
}
export default RecruitedMember;