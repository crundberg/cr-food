import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation } from 'components/navigation';
import { Dish } from 'components/dish';
import Provider from 'store';

import './app.css';

function App() {
	return (
		<Router>
			<Provider>
				<Navigation />
				<Switch>
					<Route path="/" component={Dish} />
				</Switch>
				<footer className="footer mt-auto py-3 bg-light">
					<div className="container">
						<span className="text-muted">CR Food</span>
					</div>
				</footer>
			</Provider>
		</Router>
	);
}

export default App;
