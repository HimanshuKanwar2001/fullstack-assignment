import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Card.css";

const Card = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    cardData();
  }, []);

  const cardData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/cards");
      setCardList(response.data); // Setting the fetched data to cardList
    } catch (error) {
      console.error("Error fetching card data", error);
    }
  };

  return (
    <div className='card-list'>
      {cardList.map((card) => (
        <div className='card' key={card._id}>
          <div className='heading-txt'>
            <p>{card.title}</p>
          </div>
          <div className='description'>
            <p>{card.description}</p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Card;
