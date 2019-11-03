import React from 'react';


import Maps from './Maps';
import Request from './Request';

let Re = new Request();

Re.getRequest();

class App extends React.Component {
    render () {
        return (
            <main className="wrapper flex flex-row position-absolute">
                <section className="three shadow position-relative z-front">
                    
                </section>
                <section className="seven position-relative z-back">
                    <Maps></Maps>
                </section>
            </main>
            )
    }
};

export default App;