import React from 'react';
import { Switch , Route  } from 'react-router-dom';
import CalendarDates from './components/CalendarDates';
import AddDate from './components/AddDate';
import './App.scss';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dates:[]
    }
    this.saveDate=this.saveDate.bind(this);
    this.getState=this.getState.bind(this);

  }

  componentDidMount(){
    this.getState();
  }

  getState(){
    const updateState = JSON.parse(localStorage.getItem('User'));
    if (updateState ) {
      this.setState({
        dates:updateState.dates
      })
    }
  }

  saveDate(newInformation){
    this.setState((prevState => {
      const { dates } = prevState

      dates.push(newInformation);

      return {
        ...prevState,
        dates:dates
      }
    }),
    () => {
      localStorage.setItem('User', JSON.stringify(this.state));
    });
  }

  render (){
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <CalendarDates dates={this.state.dates}></CalendarDates>
            )
            }}
          />
        </Switch>
        <Switch>
          <Route  path="/add-dates" render={() => {
            return (
              <AddDate saveDate={this.saveDate}></AddDate>
            )
            }}
          />
        </Switch>
      </div>
    );
  }
  
}

export default App;
