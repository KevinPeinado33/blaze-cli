import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import {
  OrdersPage,
  ProductsPage,
  OrderDetailPage
} from './pages';

import { Container } from 'react-bootstrap';

import { Provider } from 'react-redux';
import store from './stateManagement/store';

import { NavBar } from './components/NavBar';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Container>

          <NavBar />

          <main style={{width: '100%'}}>

            <Switch>
              <Route path="/orders" exact component={OrdersPage} />
              <Route path="/orders/:id" exact component={OrderDetailPage} />
              <Route path="/products" exact component={ProductsPage} />
              <Redirect from="/" to="/orders" />
            </Switch>
          </main>

        </Container>
      </Provider>
    </Router>
  )
}

export default App;