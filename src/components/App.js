import React from 'react';
import Maps from './Maps'

const App = () => {
    return (
        <main class="wrapper flex flex-row position-absolute">
            <section class="three shadow position-relative z-front">
                test
            </section>
            <section class="seven position-relative z-back">
                <Maps></Maps>
            </section>
        </main>
    )
};

export default App;