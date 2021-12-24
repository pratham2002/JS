import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div style={{display:"flex", gap:6,justifyContent:"center"}}>
        <div>
            <Link to="/">Search</Link>
        </div>
        <div>
            <Link to="/random">Random</Link>
        </div>
        </div>
    )
}

export default Navbar;