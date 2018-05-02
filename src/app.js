import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import 'normalize.css';
import 'typeface-roboto';

const styles = {
    fontFamily: "Roboto",
    textAlign: "center",
    overFlow: "auto",
};

ReactDOM.render(<App styles={styles} />, document.getElementById('app'));