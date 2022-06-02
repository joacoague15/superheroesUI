import { useEffect, useState } from "react";
import axios from "axios";

import Searcher from "../Searcher";
import HeroAvailable from "./HeroAvailable";
import { IallTeamMembers, IteamMemberObject } from "../../types";

const HeroRecruitment = (props: IallTeamMembers) => {
    const { teamMembers, setTeamMembers } = props;

    const [heroSearchedByName, setHeroSearchedByName] = useState([]);
    const [nameSearched, setNameSearched] = useState('');
    const [loading, setLoading] = useState(false);

    const heroesAvailableValue = 'heroesAvailable';
    const API_KEY = '110518307848299';

    useEffect(() => {
        const availableHeroes:any = localStorage.getItem(heroesAvailableValue)
        const parsedAvailableHeroes = JSON.parse(availableHeroes);
        setHeroSearchedByName(parsedAvailableHeroes)
    }, []);

    const handleSubmit = () => {
        setLoading(true);
        axios.get(`https://superheroapi.com/api/${API_KEY}/search/${nameSearched}`)
            .then(response => {
                setHeroSearchedByName(response.data.results)
                localStorage.setItem(heroesAvailableValue, JSON.stringify(response.data.results))
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChange = (e: any) => {
        setNameSearched(e.target.value)
    }

    return (
        <div>
            <Searcher handleSubmit={handleSubmit} handleChange={handleChange} disabled={loading} />
            <div>
                {heroSearchedByName && heroSearchedByName.map((hero: IteamMemberObject, i: number) =>
                    <HeroAvailable key={i} heroName={hero.name} teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
                )}
            </div>
        </div>
    )
}

export default HeroRecruitment;