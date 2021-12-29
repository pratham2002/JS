import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div style={{display:"flex",margin:15,justifyContent:"center", gap:15}}>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div >
                <Link to="/checkout">Orders</Link>
            </div>
        </div>
    )
}

export default Navbar;