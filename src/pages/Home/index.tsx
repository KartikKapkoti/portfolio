import React from 'react'
import messages from './messages'
import  './styles.scss';
const HomePage = () => {
    return (
       <div className='container'>
        <div className="HomePage-container">
            <div className="HomePage-Text">
                <h1>{messages.title}</h1>
            </div>
        </div>
       </div>
    )
}

export default HomePage
