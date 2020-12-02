import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import LoginForm from './components/Forms/LoginForm.component'
import Dashboard from './pages/Dashboard.page'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
