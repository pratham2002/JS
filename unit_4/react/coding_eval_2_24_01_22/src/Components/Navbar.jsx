
const { Link } = require("react-router-dom");

function NavBar(){
    return (<>
    <div style={{display:"flex",gap:"5rem",justifyContent:"center",padding:5}}>
            <Link to ="/">
                <div>HomePage</div> 
            </Link>
            <Link to ="/reimbersment/add">
                <div>Add</div> 
            </Link>
            <Link to="/dashboard/users" >
            <div>Check</div>
            </Link>
            <Link to="/dashboard/admin">
            <div>Admin</div>
            </Link>
    </div>
    </>
    )
}

export default NavBar