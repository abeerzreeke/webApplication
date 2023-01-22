import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Smiles from './Smiles';

function StringMethods(props) {

    props.setAppHeader(`Practice - ${props.pageName}`);
    const [currentAnswer, setCurrentAnswer] = useState("toString()");

    return (
        <>
            <Smiles />
            <section>
                <header>
                    <span className='question_wrapper'>Convert the text into an UPPERCASE text:</span>
                </header>
                <main>
                    <p>
                        <p>let txt = "Hello World!";</p>
                        txt = txt.<input
                            id="StringMethods_input"
                            defaultValue={currentAnswer}
                            readOnly={props.userRole == 'mentor'}
                            onChange={(e) => { props.checkAnswer(e.currentTarget.value, setCurrentAnswer); }} />;
                    </p>
                </main>
                <button className='submit-btn' onClick={(e) => { props.showResult(currentAnswer) }}>Submit</button>
            </section>
            <Link to="/">
                <button className='exit-btn'>Exit</button>
            </Link>
        </>
    )
}

export default StringMethods;