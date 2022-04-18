// import { render } from 'react-dom';
// import { App } from './App';


// render (<App />, document.getElementById('root'));

///----------------

import App from './App';

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);

