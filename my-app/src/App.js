import React, { useState } from 'react';

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);

    const choices = ["가위", "바위", "보"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    setComputerChoice(computerChoice);

    setResult(game(choice, computerChoice));
  }

  const game = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "무승부";
    } else if ((userChoice === "가위" && computerChoice === "보") ||
               (userChoice === "바위" && computerChoice === "가위") ||
               (userChoice === "보" && computerChoice === "바위")) {
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
      <button onClick={() => handleUserChoice("가위")}>가위</button>
      <button onClick={() => handleUserChoice("바위")}>바위</button>
      <button onClick={() => handleUserChoice("보")}>보</button>
    </div>
  );
}

export default App;