import React from 'react';
import "./header.scss"
import {connect} from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { withStyles } from '@material-ui/core/styles';
import {selectNetwork} from "../../../store/actions/networkActions";
import Grid from "@material-ui/core/Grid";
import {loadWallet} from "../../../store/actions/walletActions";
import algoSdk from "../../services/algoSdk";
import GraphicEqIcon from '@material-ui/icons/GraphicEq';

const styles = theme => ({
    select: {
        '&:before': {
            borderColor: theme.palette.primary.main,
        },
        '&:after': {
            borderColor: theme.palette.primary.main,
        },
        textColor: theme.palette.primary.main
    },
    icon: {
        fill: theme.palette.primary.main,
    },
    root: {
        textColor: theme.palette.primary.main,
        color: theme.palette.primary.main
    },
    primaryText: {
        color: theme.palette.primary.main
    }
});

const mapStateToProps = state => {
    return { wallet: state.wallet, network: state.network};
};

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        const {availableNetworks} = this.props.network;

        return (<div className="header-wrapper">
            <div className="header-container">
                <Grid container spacing={2}>
                    <Grid item xs={1} sm={1} xl={1}></Grid>
                    <Grid item xs={5} sm={5} xl={5}>
                        <div className={"logo"} onClick={() => {
                            window.open('https://cifinetwork.vercel.app/', '_blank');
                        }}>
                            <div className={"logo"}>

                                 <span> <img src = "data:image/png;base64,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" height = "30px" width = "80px"/> </span>   {/*<GraphicEqIcon style={{verticalAlign: 'sub'}}></GraphicEqIcon> */}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={5} sm={5} xl={5}>
                        <div className="network-status">
                            <FormControl>
                                <Select
                                    className={classes.select}
                                    labelid="network"
                                    value={10}
                                    id="demo-simple-select"
                                    color={"secondary"}
                                    inputProps={{
                                        classes: {
                                            icon: classes.icon,
                                            root: classes.root
                                        },
                                    }}
                                    value={this.props.network.selected}
                                    onChange={(event) => {
                                        this.props.selectNetwork(event.target.value);
                                        if (this.props.wallet.mnemonic) {
                                            this.props.loadWallet(this.props.wallet.mnemonic);
                                        }
                                    }}
                                    disabled={this.props.network.usingAlgoSigner}
                                >
                                    {availableNetworks.map((network) => {
                                        return (<MenuItem value={network.name} key={network.name}>{network.label}</MenuItem>)
                                    })}
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item xs={1} sm={1} xl={1}></Grid>
                </Grid>

            </div>
        </div>);
    }
}
const mapDispatchToProps = {
    selectNetwork,
    loadWallet
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));