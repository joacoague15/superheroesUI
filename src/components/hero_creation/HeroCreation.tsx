import '../../styles/creationTextInputStyle.css';
import '../../styles/buttonStyle.css';

import { useState } from "react";

const HeroCreation = () => {
    const [newHeroName, setNewHeroName] = useState('');
    const [newHeroPower, setNewHeroPower] = useState('');
    const [newHeroDurability, setNewHeroDurability] = useState('');
    const [newHeroIntelligence, setNewHeroIntelligence] = useState('');

    const createNewHero = (e: any) => {
        e.preventDefault()
        console.log('HERO NAME: ', newHeroName)
        console.log('HERO POWER: ', newHeroPower)
        console.log('HERO DURABILITY: ', newHeroDurability)
        console.log('HERO INTELLIGENCE: ', newHeroIntelligence)
    }

    return (
        <form onSubmit={createNewHero} className='creation-form-wrapper'>
            <label htmlFor='hero-name'>
                <span className='creation-span'>Name</span>
                <input type='text' onChange={(e: any) => setNewHeroName(e.target.value)} placeholder='50 characters max' className='creation-text-input' name='hero-name' />
            </label>
            <label htmlFor='hero-power'>
                <span className='creation-span'>Power</span>
                <input type='number' onChange={(e: any) => setNewHeroPower(e.target.value)} placeholder='1-100' className='creation-text-input' name='hero-power' />
            </label >
            <label htmlFor='hero-durability'>
                <span className='creation-span'>Durability</span>
                <input type='number' onChange={(e: any) => setNewHeroDurability(e.target.value)} placeholder='1-100' className='creation-text-input' name='hero-durability' />
            </label>
            <label htmlFor='hero-intelligence'>
                <span className='creation-span'>Intelligence</span>
                <input type='number' onChange={(e: any) => setNewHeroIntelligence(e.target.value)} placeholder='1-100' className='creation-text-input' name='hero-intelligence' />
            </label>
            <button type='submit' className='submit-button'>Create new hero</button>
        </form>
    )
}

export default HeroCreation;