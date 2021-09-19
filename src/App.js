import './App.css';
import Sdbar from './sdbar';
import Drive from './drive';
import Folder from './folder';
import Files from './files';
import Textfiles from './textfiles'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Sdbar/>
      <Switch>
        <Route path = "/" component={Drive} exact={true}/>
        <Route path = "/folder" component={Folder} exact={true}/>
        <Route path = "/files" component={Files} exact={true}/>
        <Route path = "/textfiles" component={Textfiles} exact={true}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
