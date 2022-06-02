import { IteamMember } from "../../types";

const TeamMember = (props: IteamMember) => {
    const  { name } = props;

    const removeTeamMember = () => {
        console.log('Member team removed')
    }

    const displayRemoveButton = () => {
        return name && <button onClick={removeTeamMember}>Remove {name} from the team</button>
    }

    return(
        <div>
            <h2>{name}</h2>
            {displayRemoveButton()}
        </div>
    )
}
export default TeamMember;