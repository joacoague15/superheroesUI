import { useParams } from "react-router-dom";

const Hero = () => {
    const param = useParams()

    return <h1>HERO ID: {param.id}</h1>
}

export default Hero;