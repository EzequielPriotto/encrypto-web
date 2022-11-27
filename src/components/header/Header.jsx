import { Outlet, Link } from "react-router-dom";

export default function header() {
    return <>
        <header>
            <h1>Encrypto</h1>
            <div className="navBar">
                <div className="navBarIcon">
                    <span className="stick-top"></span>
                    <span className="stick-middle"></span>
                    <span className="stick-bottom"></span>
                </div>
                <nav>
                    <Link to="/home">Home</Link>
                </nav>
            </div>
        </header>
    </>
}