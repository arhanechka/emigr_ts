import React , { useContext } from "react";
import "./styles/index.scss";
import { ICardInfo, IHandleClick } from "./Board";
import { IClickOptions } from "@testing-library/user-event";
import {userContext} from './Landing'

const Card = (props: IHandleClick & ICardInfo): React.ReactNode | any => {
  const user= useContext(userContext)

  const handleClick = (choice: string): void => {
    user.scenario = choice;
    props.handleClick()
}

  return (
    <div className="card board inline">
      <div className="card-image card-action waves-effect waves-block waves-light">
        <img className="activator board_img" src={props.img} />
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
              defaultChecked={false}
              onClick={()=>handleClick(props.title)}
            />{" "}
            <span>Choose</span>
          </label>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Card Title<i className="material-icons right">close</i>
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
  );
};
export default Card;
