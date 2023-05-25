import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.css";
import {cards}from "../../data";

interface CatCardProps {
  card: {
    img: string;
    desc: string;
    title: string;
  };
}

function CatCard({ card }: CatCardProps) {
  return (
    <Link to="/design/photo-editing-services">
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}

export default CatCard;
