const TeamMember = (props: any) => {
    const  { name, indexOfCurrentMember, teamMembers, setTeamMembers } = props;

    const removeTeamMember = () => {
        const newTeamStatus = teamMembers.filter((member: any) => indexOfCurrentMember !== teamMembers.indexOf(member));
        setTeamMembers(newTeamStatus);
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