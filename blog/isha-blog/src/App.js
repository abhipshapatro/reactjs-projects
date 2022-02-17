import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

//switch surrounds the route >> makes sure only one route component shows at one time
// id = name of the route parameter