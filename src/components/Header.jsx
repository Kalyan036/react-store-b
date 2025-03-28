import "./Header.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { appContext } from "../App"
export default function Header(){
    const {users,setUsers,user,setUser} = useContext(appContext)
    return(
        <div className="App-Header-Row">
            <div>React Store [{user.name}]</div>
            <div>
                <Link to="home">Home</Link> |
                <Link to="cart">Cart</Link> |
                <Link to="login">Login</Link>
            </div>
        </div>
    )
}