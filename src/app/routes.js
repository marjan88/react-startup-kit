import {Resources} from "./components/Resources";
import App from "./containers/App";
import requireAuth from "./utils/require_auth";
import Signin from "./containers/auth/Signin";
import Signout from "./containers/auth/Signout";
const routes = [
    {
        path: '/',
        component: App,        
        childRoutes: [
            {path: 'resources', component: requireAuth(Resources)},            
            {path: 'signin', component: Signin},
            {path: 'logout', component: Signout}
        ]
    }
];

export default routes;
