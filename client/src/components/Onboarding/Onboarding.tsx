import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { io } from "socket.io-client";

interface Props {}

const Onboarding = (props: Props) => {
  const isUserLoggedIn = localStorage.getItem("loggedin");

  const [isFriendGame, setIsFriendGame] = useState(false);

  const handleFriendGame = () => setIsFriendGame(!isFriendGame);

  useEffect(() => {
    if (isUserLoggedIn) {
      const socket = io("localhost:8080");
      console.log("socket", socket);
      socket.emit("karta", { cart: "A Detelina" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isUserLoggedIn) return <Redirect to="authenticate" />;

  return (
    <div className="onboardingCont">
      <h2>Welcome to Macao</h2>
      <p>
        You can create a new game and let your friends join or join a friend
        isntead
      </p>

      <div className="buttonsCont">
        {!isFriendGame && <button>Create new game</button>}
        <button onClick={handleFriendGame}>Play friends game</button>

        {isFriendGame && (
          <>
            <input type="text" placeholder="Place friends ID here" />
            <p>Or Create a new game instead</p>
            <button onClick={handleFriendGame}>Create new game</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
