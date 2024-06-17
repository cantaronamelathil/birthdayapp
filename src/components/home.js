import React, { useState } from'react';
import List from './list/List';
import {data} from '../static data/data';
function Home(){
    const [people, setPeople] = useState(data);
    return(
        <div>
            <main>
                <section className='container'>
                    <h3>{people.length}
                        birthday today
                    </h3>
                    <List people ={people}/>
                    <button onClick={()=>setPeople([])}>
                        clear all
                    </button>

                    </section>
            </main>
        </div>
    )
}
export default Home;