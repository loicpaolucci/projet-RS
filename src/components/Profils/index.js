import { Link } from "react-router-dom";
import {Routes, Route } from 'react-router-dom';
import User from "../Profils/User";






const Profils = () => {
    return(

    <body className="jumbotron">
                

<nav className="nav">


<Link to="/" className="nav"> Home </Link>
<Link to="/Login" className="nav"> Connection </Link>
<Link to="/Signin" className="nav"> S'inscrire </Link>
<Link to="/Profils" className="nav"> Profil </Link>

</nav>

<h1 className="tit" data-text="Gerez votre Profil">Gerez votre Profil</h1>
<br></br>
<br></br>
<li className="li"><Link to="/profils/user" className='use'>User 1</Link></li>
<li className="li"><Link to="/profils/user" className='use'>User 2</Link></li>
<li className="li"><Link to="/profils/user" className='use'>User 3</Link></li>
<li className="li"><Link to="/profils/user" className='use'>User 4</Link></li>


<Routes>
    <Route path="/user" element={ <User />}></Route>
</Routes>

    </body>

    )
}

export default Profils;