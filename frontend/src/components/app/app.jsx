import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation } from 'components/navigation';
import { Dish, DishAdd } from 'components/dish';
import { Auth, AuthLogout } from 'components/auth';
import Provider from 'store';

import './app.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
	return (
		<Router>
			<Provider>
				<Navigation />
				<Switch>
					<Route path="/" component={Dish} exact />
					<Route path="/dish/add" component={DishAdd} />
					<Route path="/auth" component={Auth} exact />
					<Route path="/auth/logout" component={AuthLogout} />
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
