// App.tsx

import React from 'react';
import TicTacToe from './TTT';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header-links">
          <a href="#">Main page</a>
          <a href="#">About me</a>
          <a href="#">Articles</a>
          <a href="#">Gallery</a>
          <a href="#">How to code</a>
        </div>
        <h1>Banana Games</h1>
      </header>
      <div className="content">
        <aside className="sidebar">
          <div className="sidebar-links">
            <a href="#">Guess the number</a>
            <a href="#">HangMan</a>
            <a href="#">Rock, Paper, Scissors</a>
            <a href="#">Tic-Tac-Toe</a>
            <a href="#">Memory Puzzle</a>
          </div>
        </aside>
        <main className="main">
          {/* Other content can be added here */}
          <TicTacToe />
        </main>
      </div>
    </div>
  );
};

export default App;

