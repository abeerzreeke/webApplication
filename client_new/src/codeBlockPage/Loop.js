import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Smiles from './Smiles';

function Loop(props) {
    props.setAppHeader(`Practice - ${props.pageName}`);
    const [currentAnswer, setCurrentAnswer] = useState("in fruits");
    return (
        <>
            <Smiles />
            <section>
                <header>
                    <span className='question_wrapper'>Create a loop that runs from 0 to 9.</span>
                </header>
                <main>
                    <code>
                        <p>const fruits = ["Apple", "Banana", "Orange"];</p>
                        <p>for (x <input
                            id={`${props.pageName}_input`}
                            defaultValue={currentAnswer}
                            readOnly={props.userRole == 'mentor'}
                            onChange={(e) => { props.checkAnswer(e.currentTarget.value, setCurrentAnswer); }} />;
                            ) {'{'}</p>
                        <p>console.log(x);</p>
                        {'}'}
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

export default Loop;