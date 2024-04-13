import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Simon<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='index.html'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='play.html'>
                  Play
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='scores.html'>
                  Scores
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='about.html'>
                  About
                </a>
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
    );
}