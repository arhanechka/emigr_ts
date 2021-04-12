import React, { useContext } from "react";
import {userContext} from './Landing'

interface iProps {
    display: string,
    handleChoice (choice: string): void
}


const RegionChoiceCard = (props: iProps) => {
    const user= useContext(userContext)

    const handleClick = (choice: string): void => {
        if (choice === 'yes') user.regionMatched = true;
        handleClick(choice)
    }
  return (
    <div style={{display: props.display}} className="col s12 m7">
      <h2 className="header">Do you want to specify a region you want to move?</h2>
    <p className='inline'>
      <label>
        <input name="group1" type="radio" onChange={()=>props.handleChoice('yes')} />
        <span>Yes</span>
      </label>
    </p>
    <p className='inline'>
      <label>
        <input name="group1" type="radio" onChange={()=>props.handleChoice('no')}/>
        <span>No</span>
      </label>
    </p>
    </div>
  );
};

export default RegionChoiceCard
