import '../../styles/creationTextInputStyle.css';
import '../../styles/buttonStyle.css';
import '../../styles/reactLoadingStyle.css';

import { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";

const HeroCreation = () => {
    const { userId } = useParams()

    const [createdHeroName, setCreatedHeroName] = useState('');
    const [createdHeroPower, setCreatedHeroPower] = useState('');
    const [createdHeroDurability, setCreatedHeroDurability] = useState('');
    const [createdHeroIntelligence, setCreatedHeroIntelligence] = useState('');

    const nameErrorMessage = 'The hero name length is not the one expected'
    const statErrorMessage= 'There is at least one stat value that is not between 1 and 100'
    const succesMessage = 'Hero created succesfully'
    const heroCreationError = 'There was an error on the creation hero process'

    let navigate = useNavigate()

    const isNameValid = () => {
        if (!createdHeroName || createdHeroName.length < 1 || createdHeroName.length > 50) {
            toast.error(nameErrorMessage, { position: toast.POSITION.BOTTOM_RIGHT })
            return false
        }
        return true
    }

    const isStatValid = (stat: string) => {
        const statNumber = parseInt(stat)
        if (!stat || statNumber < 1 || statNumber > 100) {
            toast.error(statErrorMessage, { position: toast.POSITION.BOTTOM_RIGHT })
            return false
        }
        return true
    }

    const createNewHero = (e: any) => {
        e.preventDefault()

        if (isNameValid() && isStatValid(createdHeroPower) && isStatValid(createdHeroDurability) && isStatValid(createdHeroIntelligence))
            axios.post('http://localhost:4000/create', {
                name: createdHeroName,
                power: parseInt(createdHeroPower),
                durability: parseInt(createdHeroDurability),
                intelligence: parseInt(createdHeroIntelligence),
                img: "https://images.squarespace-cdn.com/content/v1/5c0f697e9d5abb8c65cd6857/1599032187414-92U41D7HVIIFVCHHBDA3/Artboard+2.png?format=1000w"
            })
                .then(() => {
                    toast.success(succesMessage, { position: toast.POSITION.BOTTOM_RIGHT })
                    navigate(`/${userId}/recruitment`);
                })
                .catch(err => {
                    console.log(err)
                    toast.error(heroCreationError, { position: toast.POSITION.BOTTOM_RIGHT })
                })
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
            <button type='submit' className='submit-button'>Create hero</button>
        </form>
    )
}

export default HeroCreation;