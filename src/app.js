import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
/*
import About from './components/About';
import Shop from './components/Shop';
*/

function App() {
  return (
    <span>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                {/*
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route component={Error} />
                */}
            </Switch>
        </BrowserRouter>
        
    </span>
  );
}

export default App;
