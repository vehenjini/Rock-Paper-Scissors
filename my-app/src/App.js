import React, { useState } from 'react';
import './App.css';

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);

    const choices = ["β", "β", "π"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    setComputerChoice(computerChoice);

    setResult(game(choice, computerChoice));
  }

  const game = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "λ¬΄μΉλΆ";
    } else if ((userChoice === "β" && computerChoice === "π") ||
               (userChoice === "β" && computerChoice === "β") ||
               (userChoice === "π" && computerChoice === "β")) {
      return "μ΄κ²Όμ΅λλ€!";
    } else {
      return "μ‘μ΅λλ€.";
    }
  }

  return (
    <div className="App">
      <h1>κ°μλ°μλ³΄ κ²μ</h1>
      <p>λΉμ μ μ ν: {userChoice}</p>
      <p>μ»΄ν¨ν°μ μ ν: {computerChoice}</p>
      <p>κ²μ κ²°κ³Ό: {result}</p>
      <button onClick={() => handleUserChoice("β")}>β</button>
      <button onClick={() => handleUserChoice("β")}>β</button>
      <button onClick={() => handleUserChoice("π")}>π</button>

      <div className="wave" />
      {result && <div className="result">{result}</div>}
      {result === "μ΄κ²Όμ΅λλ€!" && (
        <div className="fireworks">
          <img src="https://www.animatedimages.org/data/media/710/animated-fireworks-image-0042.gif" alt="firework" />
          <img src="https://www.animatedimages.org/data/media/710/animated-fireworks-image-0042.gif" alt="firework" />
          <img src="https://www.animatedimages.org/data/media/710/animated-fireworks-image-0042.gif" alt="firework" />
          <img src="https://www.animatedimages.org/data/media/710/animated-fireworks-image-0042.gif" alt="firework" />
          
          <img src="https://www.animatedimages.org/data/media/710/animated-fireworks-image-0069.gif" alt="firework" />
          <img src="https://www.animatedimages.org/data/media/710/animated-fireworks-image-0056.gif" alt="firework" />
          <img src="https://www.animatedimages.org/data/media/710/animated-fireworks-image-0052.gif" alt="firework" />
        </div>
      )}
    </div>
  );
}

export default App;
