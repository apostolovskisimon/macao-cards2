import React from "react";
import Card from "./Card";

interface Props {}

export const Board = (props: Props) => {
  return (
    <>
      <div className="board">
        <div className="oponent-section">
          <Card cardColor="" cardNumber="" cardSign="" front={false} />
          <Card cardColor="" cardNumber="" cardSign="" front={false} />
          <Card cardColor="" cardNumber="" cardSign="" front={false} />
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
      </div>
      <div className="dashboard">
        <div className="gameNumber">Game #3</div>
        <div className="playersLabel">Players: </div>
        <div className="playersSection">
          <div className="names">
            <div className="playerOne">Simon</div>
            <div className="playerTwo">Simona</div>
          </div>
          <div className="wins">
            <div className="winOne"><span>1</span></div>
            <div className="winTwo"><span>2</span></div>
          </div>
        </div>
        <div className="winnerLabel">
        WINNER!
        </div>
        <div className="winnerName">
          Simona
        </div>
      
          <img className="icon" src={require('../assets/celebrate.png').default} alt="" />
        
      </div>
    </>
  );
};
