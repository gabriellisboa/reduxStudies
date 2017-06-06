import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyCZ1gAtCF5e-OVGFnFWW3o5fwuhJ0DejAo';

const App = () => {
    return (<div>
        <SearchBar />
    </div>);
}

ReactDOM.render(<App />, document.querySelector('.container'));