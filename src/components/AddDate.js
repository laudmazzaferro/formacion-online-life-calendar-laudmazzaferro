import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



class AddDate extends React.Component {
  constructor(props){
    super(props);
    this.state={}
    this.getInputValue= this.getInputValue.bind(this);
  }

  getInputValue(event){
    const {value}= event.currentTarget
    const {name}=event.currentTarget
    this.setState({
      [name]:value
    })
  }
  render() {
    return (
      <div>
        <label htmlFor="date" className="date__label">Fecha</label>
        <input type="date" name="date" className="date__input" onChange={this.getInputValue}/>
        <h3 className="state__title">Estado:</h3>
        <div>
          <label for="state1" className="state__label" >
            <input onChange={this.getInputValue}
              id="state1"
              type="radio"
              value="happy"
              name="state"
            />
            :)
        </label>
        </div>
        <div>
          <label for="state2" className="state__label">
            <input onChange={this.getInputValue}
              id="state2"
              type="radio"
              value="sad"
              name="state"
            />
            :(
          </label>
        </div>
      
      <label htmlFor="message">Mensaje:</label>
      <input type="text" name="message"onChange={this.getInputValue}/>
      <Link to="/">
        <div>
          Guardar
        </div>
      </Link>
      <Link to="/">
        <div>
          Cancelar
        </div>
      </Link>
      </div>
    );
  };
}

export default AddDate;