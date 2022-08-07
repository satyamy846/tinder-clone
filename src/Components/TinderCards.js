import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCard.css';

function TinderCards () {
    const [people, setPeople] = useState([
        {
            name: 'Tesla',
            url: 'https://media.wired.com/photos/5dd82f459ac14a0008116985/4:3/w_1412,h_1059,c_limit/Transoi_storyone_Screen-Shot-2019-11-22-at-10.38.01-AM.jpg',
        },
        {
            name:'BMW i8',
            url: 'https://images.hgmsites.net/hug/bmw-i8_100634676_h.jpg',
        },
        {
            name:'Porse',
            url: 'https://vukasin772.files.wordpress.com/2017/05/porse1.jpg',
        }
    ]);
    
    //This is normal way of pushing array elements
    // const people=[];
    // people.push('golf','football');

    // This react way of pushing the elements
    // setPeople=['golf','football'];

  return (
    <div className='card-container'>
    {
                people.map(person=>(
                    <TinderCard className="swipe" key={person.name} preventSwipe={['up','down']} >
                        
                        <div style={{ backgroundImage: `url(${person.url})`}} className='card'>
                        <h1>{person.name}</h1>
                        </div>
                        
                    </TinderCard>
                    
                ))
            }
    </div>
  );
}

export default TinderCards