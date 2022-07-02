import '../../styles/creationTextInputStyle.css';
import '../../styles/buttonStyle.css';

import {useEffect, useState} from "react";

import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

import axios from "axios";
import { toast } from "react-toastify";

const HeroCreation = () => {
    const [createdHeroName, setCreatedHeroName] = useState('');
    const [createdHeroPower, setCreatedHeroPower] = useState('');
    const [createdHeroDurability, setCreatedHeroDurability] = useState('');
    const [createdHeroIntelligence, setCreatedHeroIntelligence] = useState('');
    const [createdHeroImgFile, setCreatedHeroImgFile] = useState<any>({});
    const [imgURL, setImgURL] = useState('');

    const nameErrorMessage = 'The hero name length is not the one expected'
    const statErrorMessage= 'There is at least one stat value that is not between 1 and 100'
    const succesMessage= 'Hero created succesfully'

    useEffect(() => {
        if (createdHeroImgFile !== {}) {
            const imageRef = ref(storage, `recruitmentImages/${createdHeroImgFile.name + v4()}`, )
            uploadBytes(imageRef, createdHeroImgFile)
                .then(() => {
                    getDownloadURL(imageRef)
                        .then(res => setImgURL(res))
                        .catch(err => console.log(err))
                })
        }
    }, [createdHeroImgFile])

    useEffect(() => {
        console.log('IMG URL: ', imgURL)
    }, [imgURL])

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
            axios.post('http://localhost:4000/heroes/create', {
                name: createdHeroName,
                power: createdHeroPower,
                durability: createdHeroDurability,
                intelligence: createdHeroIntelligence,
                imgURL: imgURL
            })
                .then(() => toast.success(succesMessage, { position: toast.POSITION.BOTTOM_RIGHT }))
                .catch(err => console.log(err))
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
            <label htmlFor='hero-img-file'>
                <span className='creation-span'>Image</span>
                <input type='file' onChange={(e: any) => setCreatedHeroImgFile(e.target.files[0])} placeholder='Paste an image link here' className='creation-text-input' name='hero-img-file' />
            </label>
            <button type='submit' className='submit-button'>Create new hero</button>
        </form>
    )
}

export default HeroCreation;