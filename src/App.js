import React from 'react';
import { Switch , Route  } from 'react-router-dom';
import CalendarDates from './components/CalendarDates';
import AddDate from './components/AddDate';
import './App.scss';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dates:[
        {date:'12-02-2019',
         state:'happy',
         message:'ggg'
        },
        {date:'12-04-2019',
         state:'sad',
         message:'-'
        }
      ]
    }
    this.saveDate=this.saveDate.bind(this);

  }

  saveDate(){
   
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
