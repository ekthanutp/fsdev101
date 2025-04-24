import React from "react"
import { Link } from "react-router-dom"

const Navbar=()=>{
    return(
        <nav style={{padding: '1rem', backgroundColor: '#f4f4f4'}}>
            <Link to="/projects" style={{marginRight: '1rem'}}>Projects</Link>
            <Link to="/tasks">Tasks</Link>
        </nav>
    )
}
export default Navbar