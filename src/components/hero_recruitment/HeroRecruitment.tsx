import { useEffect, useState } from "react";
import axios from "axios";

import HeroAvailable from "./HeroAvailable";
import { IallTeamMembers, IteamMemberObject } from "../../types";
import '../../styles/recruitmentStyle.css';
import '../../styles/searcherStyle.css';
import '../../styles/buttonStyle.css';
import '../../styles/reactLoadingStyle.css';

const HeroRecruitment = (props: IallTeamMembers) => {
    const { teamMembers, setTeamMembers } = props;

    const [fetchedHeroes, setFetchedHeroes] = useState<any>([]);
    //eslint-disable-next-line
    const [page, _] = useState(1);

    useEffect(() => {
        axios.get('http://localhost:4000/list', {
            params: {
                page: page,
            }
        })
            .then(response => {
                const responseData = response.data

                setFetchedHeroes([...fetchedHeroes, ...responseData])
            })
            .catch(err => {
                console.log(err);
            })
        //eslint-disable-next-line
    }, [page]);

    return (
        <div className='recruit-container'>
            <div className='hero-container'>
                {fetchedHeroes && fetchedHeroes.map((hero: IteamMemberObject, i: number) =>
                    <HeroAvailable key={i} id={hero.id!} heroName={hero.name} img={hero.img} teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
                )}
            </div>
        </div>
    )
}

export default HeroRecruitment;