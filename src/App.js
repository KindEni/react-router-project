import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import itemDetail from './pages/itemDetail';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/items' exact>
            <Shop />
          </Route>
          <Route path='/items/:itemId'>
            <itemDetail />
          </Route>
        </Switch>
      </>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
