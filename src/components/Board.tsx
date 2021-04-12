import React from "react";
import Card from "./Card";
import mountains from "../assets/img/mountains.jpg";
import bridge from "../assets/img/bridge.jpg";
import "./styles/index.scss";

export interface ICardInfo {
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
    description: "Choose this option if you don't need to become a citizen",
  },
  {
    title: "Private interprenuer",
    img: mountains,
    description: "Choose this option if you want to become a citizen",
  },
];

export interface IHandleClick{
    handleClick (): void
}

const Board = (props: IHandleClick & ICardInfo): React.ReactNode => {

  return (
    <div>
        {cardInfoArray.map(el => (<Card title={el.title} img={el.img} description={el.description} handleClick={props.handleClick}/>))}
          </div>
  );
};

export default Board;
