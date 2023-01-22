import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Smiles from './Smiles';

function Objects(props) {

    props.setAppHeader(`Practice - ${props.pageName}`);
    const [currentAnswer, setCurrentAnswer] = useState("person[0]");

    return (
        <>
            <Smiles />
            <section>
                <header>
                    <span className='question_wrapper'>Alert "John" by extracting information from the person object.</span>
                </header>
                <main>
                    <code>
                        <p>const person = {'firstName: "John", lastName: "Doe"'};</p>
                        alert (<input
                            id="Objects_input"
                            defaultValue={currentAnswer}
                            readOnly={props.userRole == 'mentor'}
                            onChange={(e) => { props.checkAnswer(e.currentTarget.value, setCurrentAnswer); }} />;);
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

export default Objects;