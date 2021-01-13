import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import TinderCards from './Components/TinderCards';
import SwipeButtons from './Components/SwipeButtons';

function App() {
	return (
		<div className="App">
			{/* Header */}
			<Header />
			<Router>
				<Switch>
					<Route path="/chat" exact>
						<h1>I am the chat page</h1>
					</Route>
					<Route path="/" exact>
						<TinderCards />
						<SwipeButtons />
					</Route>
				</Switch>
			</Router>
			{/* Tinder Cards */}
			{/*  Buttons below tinder Cards */}

			{/* Chats screen */}
			{/* Individual chat screen */}
		</div>
	);
}

export default App;
