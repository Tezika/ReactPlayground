import React, {Component} from 'react';
import HobbyList from './hobbyList.js';
import './pet.css';

class Pet extends Component{
        render(){ 
            return (
                    <div className="card">
                    <h2 className="name">Moxie</h2>
                    <img src="https://github.com/tigarcia/Moxie/raw/master/moxie.png" alt="moxie" />
                    <h5 style={{fontSize:'2.0em'}}>Hobbies</h5>
                    <HobbyList />
                    </div>
                );
        }
}

export default Pet;