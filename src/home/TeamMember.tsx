import { IteamMember } from "../types";

const TeamMember = (props: IteamMember) => {
    const  { name, setTeamMembers } = props;

    const removeHeroFromTeam = () => {
        setTeamMembers({ name: '' });
    }

    const displayRemoveButton = () => {
        if (name)
            return <button onClick={removeHeroFromTeam}>Remove {name} from the team</button>
    }

    return(
        <div>
            <h2>{name}</h2>
            {displayRemoveButton()}
        </div>
    )
}
export default TeamMember;