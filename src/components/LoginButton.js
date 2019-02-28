import React from 'react'
import Keycloak from 'keycloak-js';
import { Link } from "react-router-dom";
import { AppContext } from '../context/ContextProvider';
import { RoutePaths } from '../routes/Routes';


const doAuthentication = setIsAuthenticated => {    
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({onLoad: 'login-required'})
        .success((auth) => {
            console.log("Logged in")
            setIsAuthenticated(auth)
        })
        .error(() => alert('failed to initialize!'));
}

const doLogout = setIsAuthenticated => {    
    setIsAuthenticated(false);
}

const LoginButton = () => {
    return ( 
        <React.Fragment>
            <AppContext.Consumer>
                {({ isAuthenticated, setIsAuthenticated }) => 
                    isAuthenticated ? 
                    (
                        <Link 
                            name="logout"
                            onClick={() => doLogout(setIsAuthenticated)}
                            to={RoutePaths.NOTALLOWED}
                        >
                           <button>
                                Logout
                           </button>
                        </Link>
                    ) : (
                        <Link 
                        /**
                         * For the Authorization Code Flow, 
                         * if you register redirect URIs that are too general, 
                         * then it would be possible for a rogue client to 
                         * impersonate a different client that has a broader scope of access.
                         * This could happen for instance if two clients live under the same domain.
                         * So, it’s a good idea to make your registered redirect URIs as specific 
                         * as feasible.
                         * https://www.keycloak.org/docs/2.5/server_admin/topics/threat/redirect.html
                         *  */ 
                            name="login"
                            onClick={() => doAuthentication(setIsAuthenticated)}
                            to={RoutePaths.SECRET}
                        >
                        
                            <button>
                                Login
                           </button>
                        </Link>
                    )
                }
            </AppContext.Consumer>
        </React.Fragment>
     );
}

export default LoginButton;