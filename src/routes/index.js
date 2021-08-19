import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
//--------------------pages----------------------//

import Home from '../layout/pages/Home';
import Terms from '../layout/pages/Terms';
import Privacy from '../layout/pages/Privacy';



//...............................................
function Routes() {
    return (
        <Switch>
            <Route
                component={Home}
                path={"/"}
                exact
            />

            <Route
                component={Terms}
                path={"/Terms"}
                exact
            //layout={AuthLayout} 
            />

            <Route
                component={Privacy}
                path={"/Privacy"}
                exact
            //layout={AuthLayout} 
            />

        </Switch>
    );
}

export default Routes;