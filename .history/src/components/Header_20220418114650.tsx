// import { useState } from "react/cjs/react.production.min";
import { useState, useEffect } from 'react';

import '../styles/header.scss'


// https://api.github.com/orgs/rocketseat/repos

// const repository = {
//     name: 'unform',
//     description: 'Forms in React',
//     link: 'https://github.com/unform/unform'
// }



export function Header() {
    return (
        <header className="header">
            <h1>Lista de repositórios</h1>
        </header>
    );
}