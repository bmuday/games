import React from "react";

const NavBar = (score) => {
  return (
    <div>
      {/* si non connecté */}
      <header id="nav">
        <h2>Connexion</h2>
        <input
          type="text"
          className="inputs"
          name="login"
          placeholder="Your Login"
        ></input>
        <input
          type="text"
          className="inputs"
          name="password"
          placeholder="Your Password"
        ></input>
      </header>

      {/* si connecté */}
      <header id="nav">
        <div>
          <img src="" alt="icon"></img>
          <p>Bienvenue Babou</p>
        </div>
        <div>
          <p>A quel jeu désirez-vous jouer?</p>
          <ul>
            <li>
              <a href="#">Le compte est bon</a>
            </li>
            <li>
              <a href="#">Le pendu</a>
            </li>
            <li>
              <a href="#">Quiz</a>
            </li>
            <li>
              <a href="#">TicTacToe</a>
            </li>
          </ul>
          <div>
            <p>
              Score: <span>0</span>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
