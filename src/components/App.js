import React from 'react';
// import PropTypes from 'prop-types'
import './css/app.css';
import Reproductor from './Reproductor';
import Canciones from './Canciones';


const App = (props) => {
     return (
      <div className="App">
        <div className="container mt-3">
          <div className="card text-white bg-dark">
            <Reproductor/>
            <Canciones value={props.value}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
            />
          </div>
        </div>
      </div>
    );
}

// App.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
// }

export default App;
