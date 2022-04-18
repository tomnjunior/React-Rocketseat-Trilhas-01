// import { useState } from "react/cjs/react.production.min";
import { useState, useEffect } from 'react';

import '../styles/header.scss'


// https://api.github.com/orgs/rocketseat/repos

// const repository = {
//     name: 'unform',
//     description: 'Forms in React',
//     link: 'https://github.com/unform/unform'
// }

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function Header() {

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(Response=> Response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <header className="header">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </header>
    );
}