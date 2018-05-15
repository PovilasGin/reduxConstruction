import React from 'react';
import {connect} from 'react-redux';


const Workers = (props)=>{

const workers = props.workers.map((worker, i)=>{
  return <li key={i}>{worker.name} - {worker.status}</li>
})

  return (
      <div>
        <h1>Workers</h1>
        <ul>
          {workers}
        </ul>
      </div>
  );
};

const mapStateToProps=(state)=>{
  return{
    workers:state.workers
  }
}

export default connect(mapStateToProps)(Workers)