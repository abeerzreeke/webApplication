import React from 'react';
import { Link } from 'react-router-dom';

export default function Grid(props) {

    props.setAppHeader('Choose Code Block');

    return (

        <div className="container">
            <Link to='/StringMethods'>
                <div key="StringMethods" className="item">StringMethods</div>
            </Link>
            <Link to='/Arrays'>
                <div key="Arrays" className="item">Arrays</div>
            </Link>
            <Link to='/Loop'>
                <div key="Loop" className="item">Loop</div>
            </Link>
            <Link to='/Events'>
                <div key="Events" className="item">Events</div>
            </Link>
            <Link to='/Functions'>
                <div key="Functions" className="item">Functions</div>
            </Link>
            <Link to='/Objects'>
                <div key="Objects" className="item">Objects</div>
            </Link>
        </div>

    )
}
