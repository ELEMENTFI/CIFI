import React from 'react';
import "./login.scss"
import {connect} from "react-redux";
import {Button, Icon, FormControl, TextField} from "@material-ui/core";
import {loadWallet} from "../../../store/actions/walletActions";
import {Redirect} from 'react-router-dom';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import {hideLoading, showLoading, showErrorModal} from "../../../store/actions/utilActions";
import { withTheme } from '@material-ui/core/styles';
import {
    ALGO_SIGNER_INSTALLATION_URL,
    isAlgoSignerInstalled
} from "../../services/algoSigner";
import algoSdk from "../../services/algoSdk";
import {usingAlgoSigner} from "../../../store/actions/networkActions";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const mapStateToProps = state => {
    return { wallet: state.wallet, network: state.network};
};

function validateMnemonic() {
    const mnemonic = this.mnemonic.current.value;
    if (!mnemonic) {
        this.props.showErrorModal({message: 'Please enter your mnemonic'});
        return;
    }
    this.props.loadWallet(mnemonic);
}
function getStarted() {
    validateMnemonic.call(this);
}

function getPage() {
    const {wallet} = this.props;
    const {primary, secondary} = this.props.theme.palette;
    if (wallet && wallet.address) {
        return (<Redirect to='dashboard/home'></Redirect>);
    }

    return (<div className="login-wrapper">
        <div className="login-container">
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} xl={4}>
                    
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={1} xl={1}>

                        </Grid>
                        <Grid item xs={12} md={10} xl={10}>
                            <div className='wallet-mnemonic'>
                                <div className={'mnemonic-header'}>Account Mnemonic</div>
                                <FormControl fullWidth>
                                <h1>hello world</h1>
                                    <TextField
                                        id="mnemonic"
                                        label=""
                                        multiline
                                        rows={4}
                                        defaultValue="quality family fork daring skirt increase arena enhance famous marble bracket kingdom huge dash hedgehog ask sport legal able rain kidney abandon theme absent elephant"
                                        variant="outlined"
                                        inputRef={this.mnemonic}
                                        placeholder={"Enter your wallet mnemonic"}
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <Button fullWidth variant="contained" color="primary" className="login-button"
                                            endIcon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
                                            onClick={this.getStarted}>
                                        Get Started

                                    </Button>
                                </FormControl>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link href="https://wallet.myalgo.com/" variant="body2" target={"_blank"}>
                                            Don't have an account? Create here
                                        </Link>
                                    </Grid>
                                </Grid>
                                <div className={'separator'}>OR</div>
                                {this.renderAlgoSignerButton()}
                            </div>
                        </Grid>
                        <Grid item xs={12} md={1} xl={1}>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3} xl={4}>

                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} xl={12}>
                    <div className="disclaimer">
                        <div className="disclaimer-text">
                            
                        </div>
                     </div>
                </Grid>
            </Grid>
            {this.renderModals()}
        </div>
    </div>);
}

function renderAlgoSignerButton() {
    if (this.state.algoSignerInstalled) {
        return <FormControl fullWidth>
            <Button fullWidth variant="contained" color="primary" className="login-button"
                    endIcon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
                    onClick={() => {
                const {availableNetworks, selected: selectedNetwork} = this.props.network;
                let algoSignerNet = '';
                let currentNetwork;
                availableNetworks.forEach((network) => {
                    if (network.name == selectedNetwork) {
                        algoSignerNet = network.algoSignerNet;
                        currentNetwork = network;
                    }
                });
                if (!algoSignerNet) {
                    this.props.showErrorModal({
                        message: "AlgoSigner doesn't support the selected network: " + currentNetwork.label
                    });
                    return;
                }
                AlgoSigner.connect()
                .then(() => {
                    AlgoSigner.accounts({
                        ledger: algoSignerNet
                    })
                    .then((accounts) => {
                        if (accounts && accounts.length > 0) {
                            if (accounts.length == 1) {
                                const firstAccount = accounts[0];
                                const address = firstAccount.address;
                                this.props.usingAlgoSigner(true);
                                this.props.loadWallet(address);
                            }
                            else {
                                this.setState({...this.state, availableAccounts: accounts, showAccountSelectionDialog: true});
                            }
                        }
                        else {
                            this.props.showErrorModal({
                                message: "AlgoSigner doesn't have any accounts connected to the network: " + algoSignerNet
                            });
                            return;
                        }
                    })
                    .catch((e) => {
                        console.log(e);
                        const {message} = e;
                        if (message) {
                            this.props.showErrorModal({
                                message
                            });
                        }
                        return;
                    });
                })
                .catch((e) => {
                    console.log(e);
                    const {message} = e;
                    if (message) {
                        this.props.showErrorModal({
                            message
                        });
                    }
                    return;
                });
            }}>
                Connect with AlgoSigner
            </Button>
        </FormControl>;
    }
    return <FormControl fullWidth>
        <Button fullWidth variant="contained" color="primary"
                endIcon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
                className="login-button" onClick={() => {
            window.open(ALGO_SIGNER_INSTALLATION_URL, '_blank')
        }}>
            Install AlgoSigner
        </Button>
    </FormControl>;
}

function renderModals() {
    const {showAccountSelectionDialog} = this.state;
    return <div>
        {showAccountSelectionDialog ?
            <Dialog
                fullWidth={true}
                maxWidth={"sm"}
                open={showAccountSelectionDialog}
            >
                <DialogTitle ><span>Choose Account</span></DialogTitle>
                <DialogContent>
                    {this.renderAvailableAccounts()}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        this.setState({...this.state, showAccountSelectionDialog: false});
                    }} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog> : ''}
    </div>;

}

function renderAvailableAccounts() {
    const {primary} = this.props.theme.palette;
    const {availableAccounts} = this.state;
    const accountsList = [];
    availableAccounts.forEach((account, index) => {
        accountsList.push(<div className='account' key={account.address} onClick={() => {
            const address = account.address;
            this.props.usingAlgoSigner(true);
            this.props.loadWallet(address);
        }}>
            <div className='index-count' style={{background: primary.main}}>{index + 1}</div>
            {account.address}
        </div>);
    });
    return <div className='accounts-wrapper'>
        <div className='accounts-container'>
            {accountsList}
        </div>
    </div>;
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.mnemonic = React.createRef();
        this.getStarted = getStarted.bind(this);
        this.renderAlgoSignerButton = renderAlgoSignerButton.bind(this);
        this.getPage = getPage.bind(this);
        this.renderModals = renderModals.bind(this);
        this.renderAvailableAccounts = renderAvailableAccounts.bind(this);
        this.state = {
            algoSignerInstalled: false,
            showAccountSelectionDialog: false,
            availableAccounts: []
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({...this.state, algoSignerInstalled: isAlgoSignerInstalled()});
        }, 500);
    }

    render() {
        return this.getPage();
    }
}

const mapDispatchToProps = {
    loadWallet,
    showErrorModal,
    showLoading,
    hideLoading,
    usingAlgoSigner
};
export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Login));