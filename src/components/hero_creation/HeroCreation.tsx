import '../../styles/creationTextInputStyle.css';
import '../../styles/buttonStyle.css';

import { useState } from "react";
import axios from "axios";

const HeroCreation = () => {
    const [createdHeroName, setCreatedHeroName] = useState('');
    const [createdHeroPower, setCreatedHeroPower] = useState('');
    const [createdHeroDurability, setCreatedHeroDurability] = useState('');
    const [createdHeroIntelligence, setCreatedHeroIntelligence] = useState('');
    const [createdHeroImgLink, setCreatedHeroImgLink] = useState('')

    const createNewHero = (e: any) => {
        e.preventDefault()

        axios.post('http://localhost:4000/heroes/create', {
            name: createdHeroName,
            power: createdHeroPower,
            durability: createdHeroDurability,
            intelligence: createdHeroIntelligence,
            imgLink: createdHeroImgLink
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        console.log('HERO NAME: ', createdHeroName)
        console.log('HERO POWER: ', createdHeroPower)
        console.log('HERO DURABILITY: ', createdHeroDurability)
        console.log('HERO INTELLIGENCE: ', createdHeroIntelligence)
        console.log('HERO LINK: ', createdHeroImgLink)
    }

    return (
        <form onSubmit={createNewHero} className='creation-form-wrapper'>
            <label htmlFor='hero-name'>
                <span className='creation-span'>Name</span>
                <input type='text' onChange={(e: any) => setCreatedHeroName(e.target.value)} placeholder='50 characters max' className='creation-text-input' name='hero-name' />
            </label>
            <label htmlFor='hero-power'>
                <span className='creation-span'>Power</span>
                <input type='number' onChange={(e: any) => setCreatedHeroPower(e.target.value)} placeholder='1-100' className='creation-text-input' name='hero-power' />
            </label >
            <label htmlFor='hero-durability'>
                <span className='creation-span'>Durability</span>
                <input type='number' onChange={(e: any) => setCreatedHeroDurability(e.target.value)} placeholder='1-100' className='creation-text-input' name='hero-durability' />
            </label>
            <label htmlFor='hero-intelligence'>
                <span className='creation-span'>Intelligence</span>
                <input type='number' onChange={(e: any) => setCreatedHeroIntelligence(e.target.value)} placeholder='1-100' className='creation-text-input' name='hero-intelligence' />
            </label>
            <label htmlFor='hero-img-link'>
                <span className='creation-span'>Image</span>
                <input type='text' onChange={(e: any) => setCreatedHeroImgLink(e.target.value)} placeholder='Paste an image link here' className='creation-text-input' name='hero-img-link' />
            </label>
            <button type='submit' className='submit-button'>Create new hero</button>
        </form>
    )
}

export default HeroCreation;