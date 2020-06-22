import React from 'react';
import './styles/App.css';

import { ProfileProvider } from './components/ProfileContext';

import Menu from './components/Menu'
import Preview from './components/Preview';


function App() {
    return (
        <ProfileProvider>
            <div className="App">
                <div className="left">
                    <Menu />
                </div>
                <div className="right">
                    <Preview />
                </div>
            </div>
        </ProfileProvider>
    );
}

export default App;
