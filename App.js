import React from 'react';
import WeatherSummary from './components/WeatherSummary';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Daily Weather Summary</h1>
            </header>
            <WeatherSummary /> {/* Render the WeatherSummary component */}
        </div>
    );
}

export default App;