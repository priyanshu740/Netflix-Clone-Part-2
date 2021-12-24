import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
// import Product from "./pages/product/Product";
import MovieList from './pages/movielist/MovieList'
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Movie from './pages/movie/Movie'

function App() {
  return (
    <>
    <Router>
      <Route path='/login/'>
        <Login/>
      </Route> 
    </Router>

    <Router>
      <Topbar />
      <Switch>
        <>
        <div className="container">
          <Sidebar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/movies">
            <MovieList/>
          </Route>
          <Route path="/Movie/:movieId">
            <Movie />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </div>
        </>
      </Switch>
    </Router>
  </>
  );
}

export default App;
