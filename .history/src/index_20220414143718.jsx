// import { render } from 'react-dom';
// import { App } from './App';


// render (<App />, document.getElementById('root'));

import ReactDOM from 'react-dom';
import App from './App';

// create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// render an element to the root
root.render(<App />);