import { Link } from "react-router-dom";

// import UserNavbar from "./User/UserNavbar/UserNavbar";
import AboutUs from "./User/About/AboutUs";
import ProductsList from "./User/Products/ProductsList";
import UserHomeNavbar from "./User/UserHomeNavbar/UserHomeNavbar";
function Home(){


const TopBanner={
     /* min-height:fit-content; */
    height: "1.6rem",
    /* min-width: 100vw; */
    width: "100%",
    backgroundColor:"var(--heritage-burgandy)",
    color: "white",
    textAlign: "center",
    fontSize: "0.9rem",
    padding: "0.2rem",
    /* position: static; */
    zIndex: "200",
    top:0,
     position: "fixed" 
}

const DotCsswrapper={
    margin:"0 8px",        
  display: "inline-block",
  color: "white",
  fontWeight: "bold"   
}



    return (
        <>
        <div style={TopBanner}>
                <p>100% original <span style={DotCsswrapper}>&middot;</span >Home Made <span style={DotCsswrapper}>&middot;</span>No Preservatives</p>
        </div>

            {/* <div style={{color:"white",position:"relative",zIndex:"10000"}}>
        <Link to="/" style={{color:"white"}}>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to="/signup">Signup</Link>
        </div> */}
          {/* <UserNavbar/> */}

          <UserHomeNavbar/>
          <AboutUs/>
          {/* <Link to="/login" style={{textDecoration:"none"}}> */}
           <ProductsList redirection={true}/>
           {/* </Link> */}

        </>
    )
}

export default Home;