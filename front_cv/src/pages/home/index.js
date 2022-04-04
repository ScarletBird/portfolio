import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';

export default function Home(){
    const [repos, setRepos] = useState([]);

    useEffect(() => {

        async function loadRepos() {
            const response = await axios.get('https://api.github.com/users/ScarletBird/repos');
    
            setRepos(response.data);
        }

        loadRepos();
    }, []);

    

    return(
        <div className="home_main">
            <title>
                Gustavo Ferreira Fogolin
            </title>
            <h1>
                Hello! My name is Gustavo Fogolin.
            </h1>
            <p>
                I am a beginner in the webdev world, learning about Python and JavaScript.
            </p>
            <p>
                In my <a href="https://github.com/ScarletBird">GitHub</a>, you can find my projects, which include AI, full-stack and game design.
            </p>
            <div className="options">
                <p>
                    Find more about my projects here:
                </p>
                <section className="repo-boxes-section">
                    {repos.map(repo => (
                        <div key={repo.id} className="repo-box-div">
                            <h3>
                                {repo.name}
                            </h3>
                            <p>
                                {repo.description}
                            </p>
                            <section className="repo-box-topics">
                                {repo.topics.map(topic => (
                                    <p key={repo.id + topic} className="repo-topic-chips">{topic}</p>
                                ))}
                            </section>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}