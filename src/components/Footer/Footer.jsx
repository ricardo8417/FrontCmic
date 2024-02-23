import './footer.css'
import {Link} from "react-router-dom"
export const Footer = () =>{

    return(

<footer>
  <div className="content">
    <div className="top">
      <div className="logo-details">
        
        <span className="logo_name">CMIC Veracruz Puerto</span>
      </div>
      <div className="media-icons">
        <Link to= '#'><i className="fab fa-facebook-f" /></Link>
        <Link to= '#'><i className="fab fa-twitter" /></Link>
        <Link to= '#'><i className="fab fa-instagram" /></Link>
        <Link to= '#'><i className="fab fa-linkedin-in" /></Link>
        <Link to= '#'><i className="fab fa-youtube" /></Link>
      </div>
    </div>
   </div>
  <div className="bottom-details">
    <div className="bottom_text">
      <span className="copyright_text">Copyright © 2024 <Link to= '#'>CMIC Veracruz Puerto</Link>All rights reserved</span>
      <span className="policy_terms">
        <Link to= '#'>Privacy policy</Link>
        <Link to= '#'>Terms &amp; condition</Link>
      </span>
    </div>
  </div>
</footer>




    )
}
