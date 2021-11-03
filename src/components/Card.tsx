import React , { useContext, useState } from "react";
import "./styles/index.scss";
import { ICardInfo, IHandleClick } from "./Board";
import {userContext} from './Landing'

//this is test commit

const Card = (props: IHandleClick & ICardInfo): React.ReactNode | any => {
  const user= useContext(userContext)
  const[isChecked, setIsChecked] = useState(false)

  const handleClick = (choice: string): void => {
    user.scenario = choice;
    props.handleClick(choice)
    if (choice.includes("game"))
    setIsChecked(true)
}

  return (
    <div className="col card board inline">
      <div className="card-image card-action waves-effect waves-block waves-light">
        <img className=" activator board_img" src={props.img} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {props?.title}
          <i className="material-icons right board_descr">
            {props.description}
          </i>
        </span>
        <p>
          <label>
            <input
              type="checkbox"
              defaultChecked={isChecked}
              onClick={()=>handleClick(props.title)}
              checked={isChecked}
            />{" "}
            <span>Choose</span>
          </label>
        </p>
      </div>
    </div>
  );
};
export default Card;
