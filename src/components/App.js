import React from 'react';

import Maps from './Maps';
import DataList from './DataList'

const App = () => {
    return (
        <main className="wrapper flex flex-row position-absolute">
            <section className="scroll hideXOverflow three shadow position-relative z-front">
                <DataList></DataList>
            </section>
            <section className="seven position-relative z-back">
                <Maps></Maps>
            </section>
        </main>
    );
};

export default App;