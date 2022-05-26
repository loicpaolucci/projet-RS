import { Link } from "react-router-dom";




const Home = () => {
    return(

    <body className="jumbotron">
                

<nav className="nav">


<Link to="/" className="nav"> Home </Link>
<Link to="/Login" className="nav"> Connection </Link>
<Link to="/Signin" className="nav"> S'inscrire </Link>
<Link to="/Profils" className="nav"> Profil </Link>

</nav>

<h1 className="tit" data-text="Connectez-vous ou inscrivez-vous">Connectez-vous ou inscrivez-vous </h1>
        
    </body>

    )
}

export default Home;