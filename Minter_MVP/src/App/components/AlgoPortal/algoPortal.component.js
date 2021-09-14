import React from 'react';
import "./algoPortal.scss";
import Login from "../Login/login.component";
import {Switch, Route} from 'react-router-dom';
import Dashboard from "../Dashboard/dashboard.component";
import Grid from "@material-ui/core/Grid";

class AlgoPortal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <div className="asa-portal-wrapper">
            <Grid container spacing={2}>
                <Grid item xs={1} sm={1} xl={1}></Grid>
                <Grid item xs={10} sm={10} xl={10}>
                    <div className="asa-portal-container">

                        <Switch>
                            <Route exact path="/portal/login">
                                <Login />
                            </Route>
                            <Route path="/portal/dashboard">
                                <Dashboard />
                            </Route>
                        </Switch>

                    </div>
                </Grid>
                <Grid item xs={1} sm={1} xl={1}></Grid>
            </Grid>
        </div>;
    }
}

export default AlgoPortal;