import { useEffect, useState } from "react";
import axios from "axios";

import Searcher from "../Searcher";
import HeroAvailable from "./HeroAvailable";
import { IallTeamMembers, IteamMemberObject } from "../../types";
import '../../styles/recruitmentStyle.css';
import '../../styles/searcherStyle.css';
import '../../styles/buttonStyle.css';
import Button from "../Button";

const HeroRecruitment = (props: IallTeamMembers) => {
    const { teamMembers, setTeamMembers } = props;

    const [fetchedHeroes, setFetchedHeroes] = useState<any>([]);
    const [filteredHeroes, setFilteredHeroes] = useState<any>([]);
    const [nameSearched, setNameSearched] = useState('');
    const [page, setPage] = useState(1);
    const [noMoreHeroesToFetch, setNoMoreHeroesToFetch] =  useState(false);

    const PAGE_SIZE = 5

    const handleChange = (e: any) => {
        const nameSearched = e.target.value.toLowerCase()
        setNameSearched(e.target.value)

        if (nameSearched) {
            const filterHeroResult = fetchedHeroes.filter((hero: IteamMemberObject) => hero.name.toLowerCase().includes(nameSearched));
            setFilteredHeroes(filterHeroResult);
        }

        if (!nameSearched)
            setFilteredHeroes(fetchedHeroes);
    }

    const addPage = () => {
        setPage(prevState => prevState + 1)
        setNameSearched('') // Restore search filter
    }

    useEffect(() => {
        axios.get('http://localhost:4000/heroes', {
            params: {
                page: page,
                pageSize: PAGE_SIZE
            }
        })
            .then(response => {
                const responseData = response.data

                if (responseData.length < PAGE_SIZE)
                    setNoMoreHeroesToFetch(true)

                setFetchedHeroes([...fetchedHeroes, ...responseData])
                setFilteredHeroes([...fetchedHeroes, ...responseData])
            })
            .catch(err => {
                console.log(err);
            })
        //eslint-disable-next-line
    }, [page, PAGE_SIZE]);

    return (
        <div className='recruit-container'>
            <Searcher type='text' className='searcher' value={nameSearched} handleChange={handleChange} placeHolder='Search your hero...' />
            <div className='hero-container'>
                {filteredHeroes && filteredHeroes.map((hero: IteamMemberObject, i: number) =>
                    <HeroAvailable key={i} id={hero.id!} heroName={hero.name} img={hero.img} teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
                )}
            </div>
            <div className='more-heroes-wrapper'>
                {!noMoreHeroesToFetch &&  <Button className='button' onClick={addPage} text='See more Heroes' />}
            </div>
        </div>
    )
}

export default HeroRecruitment;