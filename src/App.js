import React from 'react';
import { Switch , Route  } from 'react-router-dom';
import CalendarDates from './components/CalendarDates';
import AddDate from './components/AddDate';
import './App.scss';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dates:[],
    }

  }

  render (){
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <CalendarDates></CalendarDates>
            )
            }}
          />
        </Switch>
        <Switch>
          <Route  path="/add-dates" render={() => {
            return (
              <AddDate></AddDate>
            )
            }}
          />
        </Switch>
      </div>
    );
  }
  
}

export default App;
