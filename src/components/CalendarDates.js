import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class CalendarDates extends React.Component {
  
  render() {
    const {dates} = this.props
    return (
      <div className="calender__dates-container">
        <Link to='/add-dates' className="add__date-button">+</Link>
        <div>
        <ul className="dates__list">
          {dates.map(date =>{
            return(
              <li className="dates__item" key={date}>
                <p>{date.date}</p>
                <p>{date.state}</p>
                {/*<Link  className="pokemon__link" to={`/pokemon-detail/${pokemon.id}`} >
                  <Pokemon pokemon={pokemon}/>
                </Link>*/}
              </li>
            );
          })}
        </ul>
        </div>
        
      </div>
    );
  };
}

export default CalendarDates;