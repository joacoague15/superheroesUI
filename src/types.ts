export interface IteamMemberObject {
    name: string;
    img: string;
}

export interface IteamMember {
    name: string;
    indexOfCurrentMember?: number;
    teamMembers?: { name: string }[];
    setTeamMembers?: Function;
}

export interface IallTeamMembers {
    teamMembers: { name: string, img: string }[];
    setTeamMembers: Function;
}

export interface IheroAvailable {
    heroName: string;
    img: string;
    teamMembers: { name: string }[];
    setTeamMembers: Function;
}

export interface IModal {
    openModal: boolean;
}