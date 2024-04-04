import  "../index.css"
import {Link} from "react-router-dom"
export default function Header(){
  return(
    <div className="header">
    <h1>Header</h1>
   
    <li className="header-list">
      <Link to="/about"><ul>About</ul></Link>

      <Link to="/contact"><ul>Contact</ul></Link>
      <Link to="/"><ul>Home</ul></Link>
    </li>
    </div>
  )
}