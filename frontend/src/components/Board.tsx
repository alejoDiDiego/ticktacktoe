"use client";
import React from "react";
import { useEffect, useState } from "react";

const Board = () => {
  const [game, setGame] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState(0);
  const [playerOneWins, setPlayerOneWins] = useState(0);
  const [playerTwoWins, setPlayerTwoWins] = useState(0);
  const [continueB, setContinueB] = useState(false);

  const setGrid = (index: number) => {
    if (winner > 0) return;
    if (game[index].length > 0) return;
    let clone = [...game];
    if (turn == 1) {
      clone[index] = "x";
      setGame(clone);
      setTurn(2);
      return;
    }
    clone[index] = "o";
    setGame(clone);

    setTurn(1);
  };

  const continueGame = () => {
    setTurn(1);
    setWinner(0);
    setGame(["", "", "", "", "", "", "", "", ""]);
    setContinueB(false);
  };

  const restartGame = () => {
    setTurn(1);
    setWinner(0);
    setPlayerOneWins(0);
    setPlayerTwoWins(0);
    setGame(["", "", "", "", "", "", "", "", ""]);
    setContinueB(false);
  };

  useEffect(() => {
    if (winner == 1) {
      setPlayerOneWins(playerOneWins + 1);
    }
    if (winner == 2) {
      setPlayerTwoWins(playerTwoWins + 1);
    }
  }, [winner]);

  useEffect(() => {
    if (
      (game[0] == game[1] && game[0] == game[2] && game[0] == "x") ||
      (game[3] == game[4] && game[3] == game[5] && game[3] == "x") ||
      (game[6] == game[7] && game[6] == game[8] && game[6] == "x") ||
      (game[0] == game[3] && game[0] == game[6] && game[0] == "x") ||
      (game[1] == game[4] && game[1] == game[7] && game[1] == "x") ||
      (game[2] == game[5] && game[2] == game[8] && game[2] == "x") ||
      (game[6] == game[7] && game[6] == game[8] && game[6] == "x") ||
      (game[0] == game[4] && game[0] == game[8] && game[0] == "x") ||
      (game[2] == game[4] && game[2] == game[6] && game[2] == "x")
    ) {
      setWinner(1);
      return;
    }

    if (
      (game[0] == game[1] && game[0] == game[2] && game[0] == "o") ||
      (game[3] == game[4] && game[3] == game[5] && game[3] == "o") ||
      (game[6] == game[7] && game[6] == game[8] && game[6] == "o") ||
      (game[0] == game[3] && game[0] == game[6] && game[0] == "o") ||
      (game[1] == game[4] && game[1] == game[7] && game[1] == "o") ||
      (game[2] == game[5] && game[2] == game[8] && game[2] == "o") ||
      (game[6] == game[7] && game[6] == game[8] && game[6] == "o") ||
      (game[0] == game[4] && game[0] == game[8] && game[0] == "o") ||
      (game[2] == game[4] && game[2] == game[6] && game[2] == "o")
    ) {
      setWinner(2);
      return;
    }
    if (game.every((value) => value !== "") && winner == 0) {
      setContinueB(true);
    }
  }, [game]);

  // "0" | "1" | "2"
  // "3" | "4" | "5"
  // "6" | "7" | "8"
  return (
    <div className="flex flex-col items-center mt-8 gap-4">
      <p className="text-4xl font-bold">
        <span className="text-purple-600">{playerOneWins}</span> vs{" "}
        <span className="text-blue-600">{playerTwoWins}</span>
      </p>

      <button
        onClick={restartGame}
        className="bg-teal-500 p-2 px-3 rounded-md shadow-md text-2xl text-white cursor-pointer transition-all hover:bg-teal-600"
      >
        Restart
      </button>

      <div className="w-[500px] h-[500px] bg-gray-800 shadow-lg shadow-black grid grid-cols-3 grid-rows-3 p-5 text-white gap-4 rounded-2xl">
        <div
          onClick={() => setGrid(0)}
          className={`border-2 border-gray-50 cursor-pointer rounded-2xl  w-full h-full transition-all flex items-center justify-center duration-300 ${
            game[0].length == 0
              ? "bg-transparent duration-200 hover:bg-gray-500"
              : game[0] == "x"
              ? "bg-purple-600 shadow-lg shadow-purple-600"
              : "bg-blue-600 shadow-lg shadow-blue-600"
          }`}
        >
          <div
            className={`transition-all duration-300  ${
              game[0].length > 0 ? "text-white" : "text-transparent"
            }`}
          >
            <p className="text-8xl flex items-center justify-center m-0 pb-3">
              {game[0]}
            </p>
          </div>
        </div>

        <div
          onClick={() => setGrid(1)}
          className={`border-2 border-gray-50 cursor-pointer rounded-2xl  w-full h-full transition-all duration-300 flex items-center justify-center ${
            game[1].length == 0
              ? "bg-transparent duration-200 hover:bg-gray-500"
              : game[1] == "x"
              ? "bg-purple-600 shadow-lg shadow-purple-600"
              : "bg-blue-600 shadow-lg shadow-blue-600"
          }`}
        >
          <div
            className={`transition-all duration-300  ${
              game[1].length > 0 ? "text-white" : "text-transparent"
            }`}
          >
            <p className="text-8xl flex items-center justify-center m-0 pb-3">
              {game[1]}
            </p>
          </div>
        </div>

        <div
          onClick={() => setGrid(2)}
          className={`border-2 border-gray-50 cursor-pointer rounded-2xl  w-full h-full transition-all duration-300 flex items-center justify-center ${
            game[2].length == 0
              ? "bg-transparent duration-200 hover:bg-gray-500"
              : game[2] == "x"
              ? "bg-purple-600 shadow-lg shadow-purple-600"
              : "bg-blue-600 shadow-lg shadow-blue-600"
          }`}
        >
          <div
            className={`transition-all duration-300  ${
              game[2].length > 0 ? "text-white" : "text-transparent"
            }`}
          >
            <p className="text-8xl flex items-center justify-center m-0 pb-3">
              {game[2]}
            </p>
          </div>
        </div>

        <div
          onClick={() => setGrid(3)}
          className={`border-2 border-gray-50 cursor-pointer rounded-2xl  w-full h-full transition-all duration-300 flex items-center justify-center ${
            game[3].length == 0
              ? "bg-transparent duration-200 hover:bg-gray-500"
              : game[3] == "x"
              ? "bg-purple-600 shadow-lg shadow-purple-600"
              : "bg-blue-600 shadow-lg shadow-blue-600"
          }`}
        >
          <div
            className={`transition-all duration-300  ${
              game[3].length > 0 ? "text-white" : "text-transparent"
            }`}
          >
            <p className="text-8xl flex items-center justify-center m-0 pb-3">
              {game[3]}
            </p>
          </div>
        </div>

        <div
          onClick={() => setGrid(4)}
          className={`border-2 border-gray-50 cursor-pointer rounded-2xl  w-full h-full transition-all duration-300 flex items-center justify-center ${
            game[4].length == 0
              ? "bg-transparent duration-200 hover:bg-gray-500"
              : game[4] == "x"
              ? "bg-purple-600 shadow-lg shadow-purple-600"
              : "bg-blue-600 shadow-lg shadow-blue-600"
          }`}
        >
          <div
            className={`transition-all duration-300  ${
              game[4].length > 0 ? "text-white" : "text-transparent"
            }`}
          >
            <p className="text-8xl flex items-center justify-center m-0 pb-3">
              {game[4]}
            </p>
          </div>
        </div>

        <div
          onClick={() => setGrid(5)}
          className={`border-2 border-gray-50 cursor-pointer rounded-2xl  w-full h-full transition-all duration-300 flex items-center justify-center ${
            game[5].length == 0
              ? "bg-transparent duration-200 hover:bg-gray-500"
              : game[5] == "x"
              ? "bg-purple-600 shadow-lg shadow-purple-600"
              : "bg-blue-600 shadow-lg shadow-blue-600"
          }`}
        >
          <div
            className={`transition-all duration-300  ${
              game[5].length > 0 ? "text-white" : "text-transparent"
            }`}
          >
            <p className="text-8xl flex items-center justify-center m-0 pb-3">
              {game[5]}
            </p>
          </div>
        </div>

        <div
          onClick={() => setGrid(6)}
          className={`border-2 border-gray-50 cursor-pointer rounded-2xl  w-full h-full transition-all duration-300 flex items-center justify-center ${
            game[6].length == 0
              ? "bg-transparent duration-200 hover:bg-gray-500"
              : game[6] == "x"
              ? "bg-purple-600 shadow-lg shadow-purple-600"
              : "bg-blue-600 shadow-lg shadow-blue-600"
          }`}
        >
          <div
            className={`transition-all duration-300  ${
              game[6].length > 0 ? "text-white" : "text-transparent"
            }`}
          >
            <p className="text-8xl flex items-center justify-center m-0 pb-3">
              {game[6]}
            </p>
          </div>
        </div>

        <div
          onClick={() => setGrid(7)}
          className={`border-2 border-gray-50 cursor-pointer rounded-2xl  w-full h-full transition-all duration-300 flex items-center justify-center ${
            game[7].length == 0
              ? "bg-transparent duration-200 hover:bg-gray-500"
              : game[7] == "x"
              ? "bg-purple-600 shadow-lg shadow-purple-600"
              : "bg-blue-600 shadow-lg shadow-blue-600"
          }`}
        >
          <div
            className={`transition-all duration-300  ${
              game[7].length > 0 ? "text-white" : "text-transparent"
            }`}
          >
            <p className="text-8xl flex items-center justify-center m-0 pb-3">
              {game[7]}
            </p>
          </div>
        </div>

        <div
          onClick={() => setGrid(8)}
          className={`border-2 border-gray-50 cursor-pointer rounded-2xl  w-full h-full transition-all duration-300 flex items-center justify-center ${
            game[8].length == 0
              ? "bg-transparent duration-200 hover:bg-gray-500"
              : game[8] == "x"
              ? "bg-purple-600 shadow-lg shadow-purple-600"
              : "bg-blue-600 shadow-lg shadow-blue-600"
          }`}
        >
          <div
            className={`transition-all duration-300  ${
              game[8].length > 0 ? "text-white" : "text-transparent"
            }`}
          >
            <p className="text-8xl flex items-center justify-center m-0 pb-3">
              {game[8]}
            </p>
          </div>
        </div>
      </div>
      {winner > 0 ? (
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl mt-1 mb-2">The winner is the player {winner}</p>
          <button
            onClick={continueGame}
            className="bg-blue-400 p-2 px-3 rounded-md shadow-md text-2xl text-white cursor-pointer transition-all hover:bg-blue-600"
          >
            Continue
          </button>
        </div>
      ) : null}
      {continueB ? (
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl mt-1 mb-2">It's a tie!</p>
          <button
            onClick={continueGame}
            className="bg-blue-400 p-2 px-3 rounded-md shadow-md text-2xl text-white cursor-pointer transition-all hover:bg-blue-600"
          >
            Continue
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Board;
