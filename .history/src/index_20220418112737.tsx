// import { render } from 'react-dom';
// import { App } from './App';


// render (<App />, document.getElementById('root'));



///----------------
// import ReactDOM from 'react-dom';
// import App from './App';

// // create a root
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // render an element to the root
// root.render(<App />);
//-----------

import App from './App';
import {StrictMode} from 'react';// ✅ now importing from react-dom/client
import {createRoot} from 'react-dom/client';


// 👇️ IMPORTANT: make sure to specify correct ID
// must be the ID of the div element in your index.html file

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);

