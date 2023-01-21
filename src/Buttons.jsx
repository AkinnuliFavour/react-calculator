import React from "react";
import { useState } from "react";

const Buttons = ({ firstNumber, setFirstNumber, total, setTotal }) => {
  const [symbol, setSymbol] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  const handleReset = () => {
    setSecondNumber(" ");
    setSymbol("");
    setFirstNumber("");
    setTotal("");
  };

  const handleNumberChange = (number) => {
    setFirstNumber(firstNumber + number);
    setTotal("");
  };

  const handleSymbolChange = (s) => {
    setSecondNumber(Number(firstNumber));
    setFirstNumber("");
    setSymbol(s);
  };

  const handleTotal = () => {
    if (symbol === "x") {
      setTotal(secondNumber * Number(firstNumber));
    } else if (symbol === "+") {
      setTotal(secondNumber + Number(firstNumber));
    } else if (symbol === "/") {
      setTotal(secondNumber / Number(firstNumber));
    } else if (symbol === "-") {
      setTotal(secondNumber - Number(firstNumber));
    } else return;
    setFirstNumber("");
    setSecondNumber("");
  };

  const handleImmediateOpertation = (symbol) => {
    if (symbol === "%") {
      setTotal(total / 100);
    } else if (symbol === "+/-") {
      setTotal(total * -1);
    }
  };

  return (
    <section className="grid grid-cols-4 max-w-screen h-[84vh]">
      <div className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl sm:text-4xl font-normal flex items-center justify-center">
        <button onClick={() => handleReset()}>AC</button>
      </div>
      <div className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center">
        <button onClick={() => handleImmediateOpertation("+/-")}>+/-</button>
      </div>
      <div className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center">
        <button onClick={() => handleImmediateOpertation("%")}>%</button>
      </div>
      <div className="bg-orange-400 p-4 text-center border-b border-gray-500 text-2xl font-normal text-white flex items-center justify-center">
        <button onClick={() => handleSymbolChange("/")}>/</button>
      </div>
      <div className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center">
        <button onClick={() => handleNumberChange("7")}>7</button>
      </div>
      <div className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center">
        <button onClick={() => handleNumberChange("8")}>8</button>
      </div>
      <div className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center">
        <button onClick={() => handleNumberChange("9")}>9</button>
      </div>
      <div className="bg-orange-400 p-4 text-center border-b border-gray-500 text-2xl font-normal text-white flex items-center justify-center">
        <button onClick={() => handleSymbolChange("x")}>x</button>
      </div>
      <div className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center">
        <button onClick={() => handleNumberChange("4")}>4</button>
      </div>
      <div className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center">
        <button onClick={() => handleNumberChange("5")}>5</button>
      </div>
      <div className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center">
        <button onClick={() => handleNumberChange("6")}>6</button>
      </div>
      <div className="bg-orange-400 p-4 text-center border-b border-gray-500 text-2xl font-normal text-white flex items-center justify-center">
        <button onClick={() => handleSymbolChange("-")}>-</button>
      </div>
      <div className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center">
        <button onClick={() => handleNumberChange("1")}>1</button>
      </div>
      <div className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center">
        <button onClick={() => handleNumberChange("2")}>2</button>
      </div>
      <div className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center">
        <button onClick={() => handleNumberChange("3")}>3</button>
      </div>
      <div className="bg-orange-400 p-4 text-center border-b border-gray-500 text-2xl font-normal text-white flex items-center justify-center">
        <button onClick={() => handleSymbolChange("+")}>+</button>
      </div>
      <div className="bg-gray-200 p-4 text-center col-span-2 border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center">
        <button onClick={() => handleNumberChange("0")}>0</button>
      </div>
      <div className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center">
        <button onClick={() => handleNumberChange(".")}>.</button>
      </div>
      <div className="bg-orange-400 p-2 text-center border-b border-gray-500 text-2xl text-white font-normal flex items-center justify-center">
        <button onClick={() => handleTotal()}>=</button>
      </div>
    </section>
  );
};

export default Buttons;
