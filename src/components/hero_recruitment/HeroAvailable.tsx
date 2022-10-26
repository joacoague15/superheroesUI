import { IheroAvailable } from "../../types";
import '../../styles/recruitmentStyle.css';
import '../../styles/buttonStyle.css';
import { useNavigate } from "react-router-dom";

const HeroAvailable = (props: IheroAvailable) => {
    const { id, img } = props;

    let navigate = useNavigate()

    return <button className='hero-button' onClick={() => navigate(`/${id}`)}><img className='img' src={img} alt={img} /></button>
}

export default HeroAvailable;