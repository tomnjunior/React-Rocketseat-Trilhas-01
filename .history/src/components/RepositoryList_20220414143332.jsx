// import { useState } from "react/cjs/react.production.min";
import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'


// https://api.github.com/orgs/rocketseat/repos

// const repository = {
//     name: 'unform',
//     description: 'Forms in React',
//     link: 'https://github.com/unform/unform'
// }


export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(Response=> Response.json())
        .then(data => setRepositories(data))
    }, []);

    console

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository =>{
                    return 
                        <RepositoryItem repository={repository} />
                })}
            </ul>
        </section>
    );
}