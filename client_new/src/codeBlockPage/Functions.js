import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Smiles from './Smiles';

function Functions(props) {

    props.setAppHeader(`Practice - ${props.pageName}`);
    const [currentAnswer, setCurrentAnswer] = useState("myFunction");

    return (
        <>
            <Smiles />
            <section>
                <header>
                    <span className='question_wrapper'>Execute the function named myFunction.</span>
                </header>
                <main>
                    <code>
                        <p>function myFunction() {'{'} </p>
                        <p>alert("Hello World!");</p>
                        <p>{'}'}</p>
                        <p><input
                            id="Functions _input"
                            defaultValue={currentAnswer}
                            readOnly={props.userRole == 'mentor'}
                            onChange={(e) => { props.checkAnswer(e.currentTarget.value, setCurrentAnswer); }} />;
                        </p>
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

export default Functions;