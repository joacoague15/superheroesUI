import { IheroAvailable } from "../../types";

const HeroAvailable = (props: IheroAvailable) => {
    const { heroName, teamMembers, setTeamMembers  } = props;

    const MAX_AMOUNT_OF_MEMBERS = 3;

    const isHeroAlreadyOnTeam = (heroName: string): boolean => {
        let isAlreadyOnTeam = false;

        for (const member of teamMembers) {
            if (member.name === heroName)
                isAlreadyOnTeam = true
        }
        return isAlreadyOnTeam;
    }

    const recruitHero = () => {
        const memberCanJoinTeam = !isHeroAlreadyOnTeam(heroName) && teamMembers.length < MAX_AMOUNT_OF_MEMBERS
        const noMoreSpace = teamMembers.length === MAX_AMOUNT_OF_MEMBERS
        const heroAlreadyOnTeam = isHeroAlreadyOnTeam(heroName)

        if (memberCanJoinTeam) {
            console.log('A HERO JOINED THE TEAM')
            setTeamMembers([...teamMembers, { name: heroName }]);
        }

        if (noMoreSpace)
            console.log('THERE IS NO SPACE FOR THIS HERO')

        if (heroAlreadyOnTeam)
            console.log('HERO ALREADY ON TEAM')
    }

    return (
        <>
            <h2>Name: {heroName}</h2>
            <button onClick={recruitHero}>Recruit</button>
        </>
    )
}

export default HeroAvailable;