import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    function handleCollapse() {
        var nav = document.getElementById("navbarNavAltMarkup");
        var btn = document.getElementById("navbarbtn");
        nav.classList.remove("show");
        btn.classList.add("collapsed");
    }

    return (
        <nav class="navbar  navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="#">Levi Smith</a>
            <button id='navbarbtn' class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="customicon"><i id="bars" class="fas fa-bars"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav" style={{textAlign: 'center'}}>
                    <Link class="nav-item nav-link active" to="/" onClick={handleCollapse}>Home <span class="sr-only">(current)</span></Link>
                    <Link class="nav-item nav-link" to="/production" onClick={handleCollapse}>Production</Link>
                    <Link class="nav-item nav-link" to="/creative" onClick={handleCollapse}>Creative</Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar