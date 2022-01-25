import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link> |  
            <Link to="/category">Categories</Link> |   
            <Link to="/entry/new">New Entry</Link>
        </nav>
    )
}
