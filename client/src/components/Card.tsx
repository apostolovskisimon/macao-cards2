import React from "react";

interface Props {
  cardNumber?: string;
  cardSign?: string;
  cardColor?: string;
  jokerCard?: boolean;
  front?: boolean;
}

const Card = (props: Props) => {
  const { cardNumber, cardSign, cardColor, jokerCard, front } = props;
  return (
    <div className={`card ${!front ? "back" : ""} `}>
      {front ? (
        <>
          <div className="header">
            {jokerCard ? (
              <div className="section">
                <img
                  className="joker-card"
                  src="https://verdemagazine.com/wp-content/uploads/2019/11/Jokerrr-scaled-e1575165959502.png"
                  alt=""
                />
              </div>
            ) : (
              <div className="section">
                <div className={`number ${cardColor && cardColor}`}>{cardNumber && cardNumber}</div>
                <div className={`sign ${cardColor && cardColor}`}>{cardSign && cardSign}</div>
              </div>
            )}
          </div>
          <div className="body">
            {!jokerCard ? <div className="center">ATIS</div> : null}
          </div>
          <div className="footer">
            {jokerCard ? (
              <div className="section">
                <img
                  className="joker-card"
                  src="https://verdemagazine.com/wp-content/uploads/2019/11/Jokerrr-scaled-e1575165959502.png"
                  alt=""
                />
              </div>
            ) : (
              <div className="section">
                <div className={`sign ${cardColor && cardColor}`}>{cardSign && cardSign}</div>
                <div className={`number ${cardColor && cardColor}`}>{cardNumber && cardNumber}</div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="center opacity">ATIS</div>
      )}
    </div>
  );
};
export default Card;
