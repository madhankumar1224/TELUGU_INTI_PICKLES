import { Link } from "react-router-dom";


function Home(){

    return (
        <>
        <Link to="/">Home</Link>
        <Link to='/login'>Login</Link>
        <Link to="/signup">Signup</Link>
        </>
    )
}

export default Home;