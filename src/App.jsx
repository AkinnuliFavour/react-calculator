import { useState } from "react";
import Buttons from "./Buttons";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [symbol, setSymbol] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [total, setTotal] = useState("");

  // const screenValue = firstNumber ? firstNumber : 0;

  const screenValue = `${secondNumber} ${symbol} ${firstNumber}`

  return (
    <main className="h-screen w-screen bg-gray-400">
      <section className="p-6 bg-gray-400 h-1/5 text-right text-4xl text-white font-semibold flex items-center justify-end">
        {!total ? screenValue : total}
      </section>
      <Buttons
        firstNumber={firstNumber}
        setFirstNumber={setFirstNumber}
        secondNumber={secondNumber}
        setSecondNumber={setSecondNumber}
        symbol={symbol}
        setSymbol={setSymbol}
        total={total}
        setTotal={setTotal}
      />
    </main>
  );
}

export default App;
