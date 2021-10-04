import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CareerPath from './components/CareerPath/CareerPath';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Join from './components/Join/Join';
import NotFound from './components/NotFound/NotFound';
import TeacherForm from './components/TeacherForm/TeacherForm';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/career">
            <CareerPath></CareerPath>
          </Route>
          <Route path="/join">
            <Join></Join>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/registration">
            <TeacherForm></TeacherForm>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
