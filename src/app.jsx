import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Home } from './home/home';
import { Project } from './project/project';


export default function App() {
    return (
        <BrowserRouter>
            <div className='body bg-dark text-light'>
                <header className='container-fluid'>
                <nav className='navbar fixed-top navbar-dark'>
                    <div className='navbar-brand'>
                    Web-Brain
                    </div>
                    <menu className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='home'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='project'>
                            Project
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to=''>
                            Login
                        </NavLink>
                    </li>
                    </menu>
                </nav>
                </header>

                
        
                <main>App components go here</main>
        
                <footer className='bg-dark text-white-50'>
                <div className='container-fluid'>
                <hr />
                        <span className="bottom">Sarah Stanley</span>
                        <br />
                        <a href="https://github.com/skstan256/startup">Github</a>
                        <div>
                        Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a>
                        </div>
                </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}