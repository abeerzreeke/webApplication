import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Smiles from './Smiles';

function Arrays(props) {

    props.setAppHeader(`Practice - ${props.pageName}`);
    const [currentAnswer, setCurrentAnswer] = useState("ships[2]");

    return (
        <>
            <Smiles />
            <section>
                <header>
                    <p className='question_wrapper'>Get the value "Volvo" from the cars array.</p>
                    <br />
                </header>
                <main>
                    <code>
                        <p>const cars = ["Saab", "Volvo", "BMW"];</p>
                        <p>const ships = ["Titanic"];</p>
                        let x = <input
                            id={`${props.pageName}_input`}
                            defaultValue={currentAnswer}
                            readOnly={props.userRole == 'mentor'}
                            onChange={(e) => { props.checkAnswer(e.currentTarget.value, setCurrentAnswer); }} />;
                    </code>
                </main>
                <button className='submit-btn' onClick={(e) => { props.showResult(currentAnswer) }}>Submit</button>
            </section>
            <Link to="/">
                <button className='exit-btn'>Exit</button>
            </Link>
        </>
    )
}

export default Arrays;