import { IheroAvailable } from "../../types";

const HeroAvailable = (props: IheroAvailable) => {
    const { heroName, teamMembers, setTeamMembers  } = props;

    const MAX_AMOUNT_OF_MEMBERS = 3;

    const isHeroAlreadyOnTeam = (heroName: string): boolean => {
        let isAlreadyOnTeam = false;

        for (const member of teamMembers) {
            if (member.name === heroName) {
                isAlreadyOnTeam = true;
            }
        }

        return isAlreadyOnTeam;
    }

    const recruitHero = () => {
        if (!isHeroAlreadyOnTeam(heroName) && teamMembers.length < MAX_AMOUNT_OF_MEMBERS)
            setTeamMembers([...teamMembers, { name: heroName }]);
    }

    return (
        <>
            <h2>Name: {heroName}</h2>
            <button onClick={recruitHero}>Recruit</button>
        </>
    )
}

export default HeroAvailable;