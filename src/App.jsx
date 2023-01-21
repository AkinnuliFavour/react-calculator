import { useState } from "react";
import Buttons from "./Buttons";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [total, setTotal] = useState("");
  const screenValue = firstNumber ? firstNumber : 0;

  return (
    <main className="h-screen w-screen bg-gray-400">
      <section className="p-6 bg-gray-400 h-max text-right text-4xl text-white font-semibold">
        {!total ? screenValue : total}
      </section>
      <Buttons
        firstNumber={firstNumber}
        setFirstNumber={setFirstNumber}
        total={total}
        setTotal={setTotal}
      />
    </main>
  );
}

export default App;
