import React from 'react';
import logo from './logo.svg';
import './App.css';
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container'); 

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
