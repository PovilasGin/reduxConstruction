import React from 'react';
import {connect} from 'react-redux';

const Services = (props)=>{
  const services = props.services.map((services, i)=>{
    return <li key={i}>{services.paslauga} - {services.price}</li>
  })
  return (
      <div>
        <h1>Services</h1>
        <ul>
          {services}
        </ul>
      </div>
  );
};

const mapStateToProps=(state)=>{
  return {
    services:state.services
  }
}



export default connect(mapStateToProps)(Services)