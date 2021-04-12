import React, {useEffect, useState, createContext} from 'react'
import { Link } from 'react-router-dom';
import './styles/index.scss'
import Board from './Board'
// import {Card} from 'react-materialize'
import RegionChoiceCard from './RegionChoiceCard'
import CountriesChoice from './CountriesChoice'
import { IUserContext } from '../data/UserContext'

export const userContext = createContext<IUserContext>({
  scenario: '',
  regionMatched: false,
  countries : []
})

const Landing = () => {
  const [goButton, setGoButton] = useState(true)
  const [regionChoice, setRegionChoice] = useState(true)
  const [counriesChoice, setCounriesChoice] = useState(false)

  const handleUserProfile = (): void => {
    setRegionChoice(!regionChoice)
  }

  useEffect(()=>{
    console.log("выбор сделан")
  }, [goButton])

  const handleChoice = (choice: string): void => {
    console.log(choice)
    if (choice === 'yes'){
      console.log(choice)
      setCounriesChoice(!counriesChoice)
      setGoButton(true)
    }
    else {
      setGoButton(false)
    }
  }
  // const isRegionChoiceVisible = ()=>{
  //   return {
  //     display : {goButton? 'none': 'visible'}
  //   }
  
  return(
      <div>
        <Board handleClick={handleUserProfile}/>
       <RegionChoiceCard display={regionChoice ? 'none' : 'block' } handleChoice={handleChoice}/>
       <CountriesChoice display={!counriesChoice ? 'none' : 'block'} handleChoice={handleChoice}/>
       <Link to="/prec"><div className="block"> 
       <button className="waves-effect green darken-3 btn" disabled={goButton}>Let's start!</button></div>  </Link>
      </div>)
      }

export default Landing;
