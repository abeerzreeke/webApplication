import React from 'react';

function Smiles() {
    const smileStyle = { height: '76px', display: 'none', margin: '25px auto' };
    return (
        <>
            <img id='smileyFace' src={require('../img/correct.png')} style={smileStyle}></img>
            <img id='sadFace' src={require('../img/wrong.png')} style={smileStyle}></img>
        </>
    )
}

export default Smiles;