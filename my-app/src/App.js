import React, { useState } from 'react';
import './App.css';

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);

    const choices = ["✌", "✊", "🖐"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    setComputerChoice(computerChoice);

    setResult(game(choice, computerChoice));
  }

  const game = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "무승부";
    } else if ((userChoice === "✌" && computerChoice === "🖐") ||
               (userChoice === "✊" && computerChoice === "✌") ||
               (userChoice === "🖐" && computerChoice === "✊")) {
      return "이겼습니다!";
    } else {
      return "졌습니다.";
    }
  }

  return (
    <div className="App">
      <h1>가위바위보 게임</h1>
      <p>당신의 선택: {userChoice}</p>
      <p>컴퓨터의 선택: {computerChoice}</p>
      <p>게임 결과: {result}</p>
      <button onClick={() => handleUserChoice("✌")}>✌</button>
      <button onClick={() => handleUserChoice("✊")}>✊</button>
      <button onClick={() => handleUserChoice("🖐")}>🖐</button>

      <div className="wave" />
      {result && <div className="result">{result}</div>}
      {result === "이겼습니다!" && (
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
