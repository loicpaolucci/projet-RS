import { Link } from "react-router-dom";

const User = () => {
    return(

<div className="jumbotron">
<button className="button-back">
<Link className="button-back" to="/Profils" > Back </Link>
</button>

<div className="one">
<h1 >Songoku</h1>
<br></br>
<h2 >type : Sayan</h2>
<h2 >Age : ? </h2>
<h2 >hobbie : Fight</h2>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Presentation</label>
  <br></br>
  <br></br>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

</div>
    
    )
}

export default User;