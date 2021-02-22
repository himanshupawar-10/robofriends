import React from 'react';

function Card()
{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src='https://robohash.org/JohnDoe?200x200'/>
            <div>
                <h2>John Doe</h2>
                <p>johndoe@gmail.com</p>
            </div>
        </div>
    )
}
export default Card;