import { IheroAvailable, IteamMember } from "../../types";

const HeroAvailable = (props: IheroAvailable) => {
    const { heroName, setTeamMembers  } = props;

    const recruitHero = () => {
        let findFreeSpace = true;
        setTeamMembers((team: []) => {
            return team.map((member: IteamMember) => {
                if (member.name === '' && findFreeSpace) {
                    findFreeSpace = false;
                    return {...member, name: heroName};
                }
                return member;
            });
        });
    }

    return (
        <>
            <h2>Name: {heroName}</h2>
            <button onClick={recruitHero}>Recruit</button>
        </>
    )
}

export default HeroAvailable;