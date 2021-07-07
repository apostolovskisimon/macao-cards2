import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { io } from "socket.io-client";
import { socket } from "../../socket";

interface Props {}

const Onboarding = (props: Props) => {
  const isUserLoggedIn = localStorage.getItem("loggedin");

  const [isFriendGame, setIsFriendGame] = useState(false);

  const handleFriendGame = () => setIsFriendGame(!isFriendGame);

  useEffect(() => {
    if (isUserLoggedIn) {
      console.log("socket", socket);
      socket.emit("newUser", socket.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createNewGame = () => {
    socket.emit("create new game", { userId: socket.id, gameId: "ASD123" });
  };

  if (!isUserLoggedIn) return <Redirect to="authenticate" />;

  return (
    <div className="onboardingCont">
      <h2>Welcome to Macao</h2>
      <p>
        You can create a new game and let your friends join or join a friend
        isntead
      </p>

      <div className="buttonsCont">
        {!isFriendGame && (
          <button onClick={createNewGame}>Create new game</button>
        )}
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
