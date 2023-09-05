import React from "react";
import { useState } from "react";

const Buttons = ({ firstNumber, setFirstNumber, secondNumber, setSecondNumber, symbol, setSymbol, total, setTotal }) => {

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
    <section className="grid grid-cols-4 max-w-screen h-4/5">
      <div 
        className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl sm:text-4xl font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleReset()}
      >
        AC
      </div>
      <div 
        className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleImmediateOpertation("+/-")}
      >
        +/-
      </div>
      <div 
        className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleImmediateOpertation("%")}
      >
        %
      </div>
      <div 
        className="bg-orange-400 p-4 text-center border-b border-gray-500 text-2xl font-normal text-white flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleSymbolChange("/")}
      >
        /
      </div>
      <div 
        className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleNumberChange("7")}
      >
        7
      </div>
      <div 
        className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleNumberChange("8")}
      >
        8
      </div>
      <div 
        className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleNumberChange("9")}
      >
        9
      </div>
      <div 
        className="bg-orange-400 p-4 text-center border-b border-gray-500 text-2xl font-normal text-white flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleSymbolChange("x")}
      >
        x
      </div>
      <div 
        className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleNumberChange("4")}
      >
        4
      </div>
      <div 
        className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleNumberChange("5")}
      >
        5
      </div>
      <div 
        className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleNumberChange("6")}
      >
        6
      </div>
      <div className="bg-orange-400 p-4 text-center border-b border-gray-500 text-2xl font-normal text-white flex items-center justify-center hover:cursor-pointer hover:opacity-70">
        <button onClick={() => handleSymbolChange("-")}>-</button>
      </div>
      <div 
        className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleNumberChange("1")}
      >
        1
      </div>
      <div 
        className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleNumberChange("2")}
      >
        2
      </div>
      <div 
        className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleNumberChange("3")}
      >
        3
      </div>
      <div 
        className="bg-orange-400 p-4 text-center border-b border-gray-500 text-2xl font-normal text-white flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleSymbolChange("+")}
      >
        +
      </div>
      <div 
        className="bg-gray-200 p-4 text-center col-span-2 border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleNumberChange("0")}
      >
        0
      </div>
      <div 
        className="bg-gray-200 p-4 text-center border-b border-gray-500 border-r text-2xl font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleNumberChange(".")}
      >
        .
      </div>
      <div 
        className="bg-orange-400 p-2 text-center border-b border-gray-500 text-2xl text-white font-normal flex items-center justify-center hover:cursor-pointer hover:opacity-70"
        onClick={() => handleTotal()}
      >
        =
      </div>
    </section>
  );
};

export default Buttons;
