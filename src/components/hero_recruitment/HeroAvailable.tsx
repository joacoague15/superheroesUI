import { IheroAvailable } from "../../types";
import {useEffect} from "react";

const HeroAvailable = (props: IheroAvailable) => {
    const { heroName, firstMember, secondMember, thirdMember, setFirstMember, setSecondMember, setThirdMember  } = props;

    useEffect(() => {

    }, [])

    const recruitHero = () => {
        const heroMemberData = { name: heroName };
        if (firstMember.name === '') {
            setFirstMember(heroMemberData)
            localStorage.setItem('firstMember', JSON.stringify(heroMemberData))
        }
        else if (secondMember.name === '') {
            setSecondMember(heroMemberData)
            localStorage.setItem('secondMember', JSON.stringify(heroMemberData))
        }
        else if (thirdMember.name === '') {
            setThirdMember(heroMemberData)
            localStorage.setItem('thirdMember', JSON.stringify(heroMemberData))
        }
    }

    return (
        <>
            <h2>Name: {heroName}</h2>
            <button onClick={recruitHero}>Recruit</button>
        </>
    )
}

export default HeroAvailable;