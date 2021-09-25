import React from 'react';
import "./dashboard.scss"
import {connect} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Home from '../Home/home.component';
import algoSdk from "../../services/algoSdk";

const mapStateToProps = state => {
    return { wallet: state.wallet };
};

function getPage() {
    const {wallet} = this.props;

    if (!wallet.address) {
        return (<Redirect to='/portal/login'></Redirect>);
    }

    return (<div className="dashboard-wrapper">
        <div className="dashboard-container">
            <div className="dashboard-header">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <div className="wallet-details">
                            <span className="account-icon">
                                <AccountBoxIcon color="primary" fontSize="large"/>
                            </span>
                            <span className="address" onClick={(event) => {
                                window.open(algoSdk.getAccountUrl(wallet.address), '_blank');
                            }}>
                                {wallet.address}
                            </span>

                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="wallet-details">
                            <span className="balance">
                                <Chip
                                    icon={<AccountBalanceWalletIcon />}
                                    label={(wallet.amount / 1000000) + ' Algos'}
                                    color="primary"
                                    variant="outlined"
                                />
                                <Chip
                                    label={'logout'}
                                    color="secondary"
                                    variant={"outlined"}
                                    onClick={() => {
                                        location.reload();
                                    }}
                                    style={{marginLeft: 10}}
                                />
                            </span>

                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="dashboard-body">
                <Switch>
                    <Route exact path="/portal/dashboard/home">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </div>
    </div>);
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.getPage = getPage.bind(this);
    }

    render() {
        return this.getPage();
    }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);