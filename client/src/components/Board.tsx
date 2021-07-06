import React from "react";
import Card from "./Card";

interface Props {}

export const Board = (props: Props) => {
  return (
    <div className="board">
      <div className="oponent-section">
        <Card
          cardColor=""
          cardNumber=""
          cardSign=""
          front={false}
        />
          <Card
          cardColor=""
          cardNumber=""
          cardSign=""
          front={false}
        />
          <Card
          cardColor=""
          cardNumber=""
          cardSign=""
          front={false}
        />
      </div>
      <div className="middleBoard">
          <div className="currentCard">
            <Card
              cardColor="black"
              cardNumber="A"
              cardSign="&clubs;"
              front={true}
            />
          </div>
          <div className="sideCards">
            <Card
              cardColor="red"
              cardNumber="5"
              cardSign="&hearts;"
              front={false}
            />
          </div>
      </div>
      <div className="player-section">
        <Card
          cardColor=""
          cardNumber=""
          cardSign=""
          front={true}
          jokerCard={true}
        />
           <Card
          cardColor="red"
          cardNumber="6"
          cardSign="&hearts;"
          front={true}
        />
      </div>
      <div className="dashboard">
        
      </div>
    </div>

  );
};
