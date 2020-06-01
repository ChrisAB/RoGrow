import React from 'react';
import {Link, withRouter} from 'react-router-dom'


function Footerpage () {
    return (
        <footer className="page-footer font-small mdb-color footer-bg pt-4">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="text-center">
                        <a className="" href = '/'>
                            <img src="../assets/logo-white.svg" height="30" alt="Rogrow"/>
                        </a>
                        <div className="mb-2 mb-sm-4 small">
                            <div>
                                <a className="footer-bg" href="mailto:rogrow@contact.com">
                                        rogrow@contact.com
                                </a>
                            </div>
                            <div className="footer-copyright text-center py-1">© 2020 Copyright:
                                <Link className="footer-bg" to="/"> Rogrow</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default withRouter(Footerpage);