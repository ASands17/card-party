import React, { FC } from "react";
import "./GreetingCard.css";
import Card from "../../types/Card.type";

interface Props {
  to: string;
  quote: string;
  message: string;
  from: string;
  id: number;
  deleteCard: (id: number) => void;
}

const GreetingCard: FC<Card> = ({ to, quote, message, from, id, deleteCard }: Props) => {
  return (
    <section className="mini-card">
      <button className="delete-button" onClick={() => deleteCard(id)}>X</button>
      <p className="mini-to">
        <b>To: {to}</b>
      </p>
      <p className="mini-quote">{quote}</p>
      <p className="mini-message">{message}</p>
      <p className="mini-from">
        <b>From: {from}</b>
      </p>
    </section>
  );
};

export default GreetingCard;
