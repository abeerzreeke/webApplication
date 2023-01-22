import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Smiles from './Smiles';

function Events(props) {

    props.setAppHeader(`Practice - ${props.pageName}`);
    const [currentAnswer, setCurrentAnswer] = useState("onmouseover");
    
    return (
        <>
            <Smiles />
            <section>
                <header>
                    <span className='question_wrapper'>The {'<button>'} element should do something when someone clicks on it. Try to fix it!
                    </span>
                </header>
                <main>
                    <code>
                        {'<button'} <input
                            id="Events_input"
                            defaultValue={currentAnswer}
                            readOnly={props.userRole == 'mentor'}
                            onChange={(e) => { props.checkAnswer(e.currentTarget.value, setCurrentAnswer); }} /> = "alert('Hello')"{'>'}Click me.{'</button>'}
                    </code>
                </main>
                <button className='submit-btn' onClick={(e) => {props.showResult(currentAnswer)}}>Submit</button>
            </section>
            <Link to="/">
                <button className='exit-btn'>Exit</button>
            </Link>
        </>
    )
}

export default Events;