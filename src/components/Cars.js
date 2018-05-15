import React from 'react';
import {connect} from 'react-redux';

const Cars = (props)=>{
  
  const cars = props.cars.map((cars, i)=>{
      return <li key={i}>{cars.name} - {cars.year}</li>
  })
  return (
      <div>
        <h1>Cars</h1>
        <ul>
          {cars}
        </ul>
      </div>
  );
};

const mapStateToProps=(state)=>{
    return{
        cars:state.cars
    }
}

export default connect(mapStateToProps)(Cars)