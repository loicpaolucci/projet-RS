import { Link } from "react-router-dom"

const SignIn = () => {
    return(

<div className="jumbotron">
<div className="container">
<nav className="nav">

<Link to="/" className="nav"> Home </Link>
<Link to="/Login" className="nav"> Connection </Link>
<Link to="/Signin" className="nav"> S'inscrire </Link>
<Link to="/Profils" className="nav"> Profil </Link>

</nav>


<h1 className="title">S'inscrire</h1>

<br></br>
<br></br>
<label className="input" htmlFor="nom">Username </label>
<input className="input"  type='text'></input>
<br></br>
<br></br>
<label className="input" htmlFor="email">Email </label>
<input className="input" type='email'></input>
<br></br>
<br></br>
<label className="input" htmlFor="password">Password </label>
<input className="input" type='password'></input>
<br></br>
<br></br>
<label className="input" htmlFor="password"> Confirm Password </label>
<input className="input" type='password'></input>
<br></br>
<br></br>
<button className="button">Enter
</button>

</div>
</div>


    )
}

export default SignIn;