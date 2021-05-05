import React, { useContext } from "react";
import Card from "./Card";
import mountains from "../assets/img/mountains.jpg";
import bridge from "../assets/img/bridge.jpg";
import azor from "../assets/img/azor.jpg";

import "./styles/index.scss";

export interface ICardInfo{
  title: string;
  img: string;
  description: string;
  fullDescription?: string;
//   handleClick: ()=> void
}

const cardInfoArray : ICardInfo[]= [
  {
    title: "Freelance",
    img: bridge,
    description: "Choose if you don't need to become a citizen",
  },
  {
    title: "Private interprenuer",
    img: mountains,
    description: "Choose this option if you want to become a citizen",
  },
  {
    title: "Play destination game",
    img: azor,
    description: "Choose this option if don't mind",
  },
];

export interface IHandleClick {
    handleClick (choice: string): void
}

const Board = (props: IHandleClick) => {

  return (
    <div className='row'>
        {cardInfoArray.map(el => (<Card title={el.title} img={el.img} description={el.description} handleClick={props.handleClick}/>))}
          </div>
  );
};

export default Board;
