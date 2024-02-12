import { Link } from "react-router-dom"
export default function Navi() {
    return (
        <div class="bg-body  d-flex flex-column flex-shrink-0 position-fixed top-0 bottom-0 navig" >
            <div className="box-nav" style={{ marginLeft: "10px" }}>
                <div id="link">
                    <i className="bx bxs-dashboard"></i>
                    <Link to="/stat"><i className="bx bx-stats"></i></Link>
                    <i className="bx bxs-bell"></i>
                    <Link to="/actu"><i className="bx bx-news"></i></Link>
                    <Link to="/utilisateur/info"><i className="bx bxs-user-circle"></i></Link>
                    <Link to="/connection"> <i className="bx bx-log-out-circle"></i></Link>

                </div>
            </div>

        </div>
    );
}