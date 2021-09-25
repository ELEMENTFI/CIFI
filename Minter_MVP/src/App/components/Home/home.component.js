import React from 'react';
import "./home.scss"
import {connect} from "react-redux";
import {CardContent, Card, Typography, CardActions, Button, withTheme} from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import {createAsset, destroyAsset, freezeAsset, revokeAssets, sendAssets} from "../../../store/actions/assetActions";
import {hideCreateAssetDialog, showCreateAssetDialog, showErrorModal, showModifyAssetDialog} from "../../../store/actions/utilActions";
import CreateAsset from "../CreateAsset/createAsset.component";
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import ModifyAsset from "../ModifyAsset/modifyAsset.component";
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import TextField from "@material-ui/core/TextField";
import Popover from "@material-ui/core/Popover";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import LaunchIcon from '@material-ui/icons/Launch';
import algoSdk from "../../services/algoSdk";
import SendIcon from '@material-ui/icons/Send';
import {getAmountInDecimals, getAssetSupply, isNumber, isValidAssetDecimals} from "../../services/utils";
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import {loadWallet} from "../../../store/actions/walletActions";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';

const mapStateToProps = state => {
    return { assets: state.asset, wallet: state.wallet, utils: state.utils, network: state.network };
};

const styles = (theme) => ({
    buttonIcon: {
        paddingRight: theme.spacing(1),
    },
    primaryText: {
        color: theme.palette.primary.main
    },
    secondaryText: {
        color: theme.palette.secondary.main
    },
    primaryBorder: {
        borderColor: theme.palette.primary.main
    },
    primaryBackground: {
        background: theme.palette.primary.main
    },
    iconTick: {
        float: 'right',
        marginTop: '15px',
        fontSize: '18px',
        color: theme.palette.primary.light
    },
    iconCancel: {
        float: 'right',
        marginTop: '15px',
        fontSize: '18px',
        color: theme.palette.primary.light
    },
    customCard: {
        boxShadow: 'none',
        border: '1px solid #f0f0f0'
    }
});

function canConfigureAsset(asset) {
    return this.props.wallet.address == asset.params.manager;
}
function getAssetsList(assets) {
    const { classes } = this.props;

    if (assets.length == 0) {
        return this.getEmptyAssetsMessage();
    }

    const assetsList = [];
    assets.forEach((asset, index) => {
        assetsList.push(
            <Grid item xs={12} sm={4} md={4} lg={4} key={index} >
                <div className='asset'>
                    <Card className={classes.customCard}>
                        <CardHeader
                            avatar={
                                <div className={classes.primaryBorder + ' ' + classes.primaryBackground + ' asset-id'}>
                                    {'ID: ' + asset.index}
                                </div>
                            }
                            action={
                                <div>
                                    <div>
                                        <Tooltip title={'Open Asset'} placement="top-start">
                                            <IconButton color={"primary"} onClick={(event) => {
                                                window.open(algoSdk.getAssetUrl(asset.index), '_blank');
                                            }}>
                                                <LaunchIcon />
                                            </IconButton>
                                        </Tooltip>

                                        <Tooltip title={'Menu'} placement="top-start">
                                            <IconButton color={"primary"} onClick={(event) => {
                                                this.setState({...this.state, popoverTarget: event.currentTarget, selectedAsset: asset});

                                            }}>
                                                <MoreVertIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                </div>
                            }
                            title={<span className={'asset-title'}>{asset.params.name + ' (' + asset.params['unit-name'] + ')'}</span>}
                            subheader={'Bal: ' + getAssetBalance(asset)}
                        />
                        <CardContent>
                            <div className='asset-property'>
                                <div className={classes.primaryText + ' asset-property-name'}>
                                    Manager Address
                                    {this.props.wallet.address == asset.params.manager ? <CheckCircleOutlineIcon className={classes.iconTick}></CheckCircleOutlineIcon> : <CancelIcon className={classes.iconCancel}></CancelIcon>
                                    }
                                </div>
                                <div className='asset-property-value monospace'>
                                    {asset.params.manager ? asset.params.manager : '(Empty)'}
                                </div>
                            </div>

                            <div className='asset-property'>
                                <div className={classes.primaryText + ' asset-property-name'}>
                                    Reserve Address
                                    {this.props.wallet.address == asset.params.reserve ? <CheckCircleOutlineIcon className={classes.iconTick}></CheckCircleOutlineIcon> : <CancelIcon className={classes.iconCancel}></CancelIcon>
                                    }
                                </div>
                                <div className='asset-property-value monospace'>
                                    {asset.params.reserve ? asset.params.reserve : '(Empty)'}
                                </div>
                            </div>

                            <div className='asset-property'>
                                <div className={classes.primaryText + ' asset-property-name'}>
                                    Freeze Address
                                    {this.props.wallet.address == asset.params.freeze ? <CheckCircleOutlineIcon className={classes.iconTick}></CheckCircleOutlineIcon> : <CancelIcon className={classes.iconCancel}></CancelIcon>
                                    }
                                </div>
                                <div className='asset-property-value monospace'>
                                    {asset.params.freeze ? asset.params.freeze : '(Empty)'}
                                </div>
                            </div>

                            <div className='asset-property'>
                                <div className={classes.primaryText + ' asset-property-name'}>
                                    Clawback Address
                                    {this.props.wallet.address == asset.params.clawback ? <CheckCircleOutlineIcon className={classes.iconTick}></CheckCircleOutlineIcon> : <CancelIcon className={classes.iconCancel}></CancelIcon>
                                    }
                                </div>
                                <div className='asset-property-value'>
                                    {asset.params.clawback ? asset.params.clawback : '(Empty)'}
                                </div>
                            </div>
                        </CardContent>
                        <CardActions disableSpacing>
                        </CardActions>
                    </Card>
                </div>
            </Grid>);
    });

    return assetsList;
}
function getEmptyAssetsMessage() {
    return ([<Grid item sm={12} key="no-asset-message">
        <div className='no-assets'>
            <div>No Assets found for this account. You can create an asset using above button.</div>
        </div>
    </Grid>]);
}

function renderAssets(assets) {
    const { classes } = this.props;
    return (<div className='assets-wrapper'>
        <div className='assets-container'>
            <div className="create-asset">
                <Button variant="contained" color="primary" onClick={() => {
                    this.props.showCreateAssetDialog();
                }}>
                    <AddCircleOutlineIcon className={classes.buttonIcon}></AddCircleOutlineIcon>
                    Create Asset
                </Button>
            </div>
            {this.props.wallet.loading ? <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <div className="linear-background">
                        <div className="inter-draw"></div>
                        <div className="inter-crop"></div>
                        <div className="inter-right--top"></div>
                        <div className="inter-right--bottom"></div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <div className="linear-background">
                        <div className="inter-draw"></div>
                        <div className="inter-crop"></div>
                        <div className="inter-right--top"></div>
                        <div className="inter-right--bottom"></div>
                    </div>
                </Grid>
            </Grid> : <Grid container spacing={2}>
                {this.getAssetsList(assets)}
            </Grid>}
        </div>
    </div>);
}

function closePopover() {
    setTimeout(() => {
        this.setState({...this.state, popoverTarget: null});
    }, 100);
}

function getAssetBalance(asset) {
    const balance = asset.balance / Math.pow(10,asset.params.decimals);
    return getAmountInDecimals(balance, asset.params.decimals);
}

function getPage() {
    const assets = this.props.assets.list;
    const {popoverTarget} = this.state;
    const openPopover = Boolean(popoverTarget);
    const { classes } = this.props;

    return (<div className="home-wrapper">
        <div className="home-container">

            {this.renderAssets(assets)}

            {this.state.showDeleteAssetDialog ?
            <Dialog
                fullWidth={true}
                maxWidth={"sm"}
                open={this.state.showDeleteAssetDialog}
            >
                <DialogTitle ><span>Delete Asset</span></DialogTitle>
                <DialogContent>
                    <div>
                        Do you want to delete this asset &nbsp;
                        <span style={{fontWeight: 'bold'}} className={classes.secondaryText}>
                            {this.state.selectedAsset.params.name} ?
                        </span>
                    </div>
                    <div>
                        <br/>
                        Transaction cannot be rolled back again.
                        <br/>
                        &nbsp;
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        this.setState({...this.state, showDeleteAssetDialog: false})
                    }} color="default">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        this.invokeDestroyAsset(this.state.selectedAsset);
                    }} color="primary" variant={"contained"} size={"small"}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog> : ''}

            {this.state.showFreezeAssetDialog ?
                <Dialog
                    fullWidth={true}
                    maxWidth={"sm"}
                    open={this.state.showFreezeAssetDialog}
                >
                    <DialogTitle ><span>{this.state.freezeState ? 'Freeze Asset' : 'UnFreeze Asset'} ({this.state.selectedAsset.params['unit-name']})</span></DialogTitle>
                    <DialogContent>
                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="freeze_account"
                                        required
                                        fullWidth
                                        label="Account Address"
                                        autoFocus
                                        inputRef={this.state.freezeAccount}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <br/>
                        <div>
                            <br/>
                            Do you want to {this.state.freezeState ? 'Freeze' : 'UnFreeze'} assets in this account ?
                            <br/>
                            &nbsp;
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            this.setState({...this.state, showFreezeAssetDialog: false})
                        }} color="default">
                            Cancel
                        </Button>
                        <Button
                            variant={"contained"}
                            size={"small"}
                            onClick={() => {
                            this.invokeFreezeAsset(this.state.selectedAsset);
                        }} color={this.state.freezeState ? 'primary' : 'primary'}>
                            {this.state.freezeState ? 'Freeze' : 'UnFreeze'}
                        </Button>
                    </DialogActions>
                </Dialog> : ''}

            {this.state.showSendAssetsDialog ?
                <Dialog
                    fullWidth={true}
                    maxWidth={"sm"}
                    open={this.state.showSendAssetsDialog}
                >
                    <DialogTitle ><span>Send Assets</span></DialogTitle>
                    <DialogContent>
                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <div className={classes.primaryText} style={{marginTop: '10px', fontWeight: 'bold'}}>BALANCE: {getAssetBalance(this.state.selectedAsset)} ({this.state.selectedAsset.params['unit-name']})</div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="to_address"
                                        required
                                        fullWidth
                                        label="To Address"
                                        autoFocus
                                        inputRef={this.state.toAddress}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="send_amount"
                                        required
                                        fullWidth
                                        label="Amount"
                                        inputRef={this.state.sendAmount}
                                        defaultValue={10}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <br/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            this.setState({...this.state, showSendAssetsDialog: false})
                        }} color="default">
                            Cancel
                        </Button>
                        <Button
                            variant={"contained"}
                            size={"small"}
                            onClick={() => {
                            this.invokeSendAssets(this.state.selectedAsset);
                        }} color={'primary'}>
                            Send
                        </Button>
                    </DialogActions>
                </Dialog> : ''}

            {this.state.showRevokeAssetsDialog ?
                <Dialog
                    fullWidth={true}
                    maxWidth={"sm"}
                    open={this.state.showRevokeAssetsDialog}
                >
                    <DialogTitle ><span>Revoke Assets</span> ({this.state.selectedAsset.params['unit-name']})</DialogTitle>
                    <DialogContent>
                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="revoke_address"
                                        required
                                        fullWidth
                                        label="Revoke Address"
                                        autoFocus
                                        inputRef={this.state.revokeAddress}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="revoke_receiver_address"
                                        required
                                        fullWidth
                                        label="Receiver Address"
                                        autoFocus
                                        inputRef={this.state.revokeReceiverAddress}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="revoke_amount"
                                        required
                                        fullWidth
                                        label="Revoke Amount"
                                        inputRef={this.state.revokeAmount}
                                        defaultValue={10}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <br/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            this.setState({...this.state, showRevokeAssetsDialog: false})
                        }} color="default">
                            Cancel
                        </Button>
                        <Button
                            variant={"contained"}
                            size={"small"}
                            onClick={() => {
                            this.invokeRevokeAssets(this.state.selectedAsset);
                        }} color={'primary'}>
                            Revoke
                        </Button>
                    </DialogActions>
                </Dialog> : ''}

            {this.props.utils.createAsset.showDialog ?
                <Dialog
                    maxWidth="md"
                    open={this.props.utils.createAsset.showDialog}
                >
                    <DialogTitle ><span>Create Asset</span></DialogTitle>
                    <DialogContent>
                        <CreateAsset></CreateAsset>
                    </DialogContent>

                </Dialog> : ''}

            {this.props.utils.modifyAsset.showDialog ?
                <Dialog
                    maxWidth="md"
                    open={this.props.utils.modifyAsset.showDialog}
                >
                    <DialogTitle ><span>Modify Asset</span></DialogTitle>
                    <DialogContent>
                        <ModifyAsset asset={this.state.selectedAsset}></ModifyAsset>
                    </DialogContent>

                </Dialog> : ''}

            <Popover
                id="context_menu"
                open={openPopover}
                anchorEl={this.state.popoverTarget}
                onClose={(event) => {
                    this.setState({...this.state, popoverTarget: null})
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Paper>
                    <MenuList>
                        <MenuItem onClick={() => {
                            this.setState({...this.state, showSendAssetsDialog: true});
                            this.closePopover();
                        }}>
                            <SendIcon color={"primary"}/>
                            <span className='custom-menu-item'>
                                Send Assets
                            </span>
                        </MenuItem>

                        <MenuItem onClick={() => {
                            if (this.props.wallet.address === this.state.selectedAsset.params.manager) {
                                this.props.showModifyAssetDialog();
                            }
                            else {
                                this.props.showErrorModal({message: 'Only Manager of this asset will be able to Modify the asset.'});
                            }
                            this.closePopover();
                        }}>
                            <EditIcon color={"primary"}/>
                            <span className='custom-menu-item'>
                                Modify Asset
                            </span>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            if (this.props.wallet.address === this.state.selectedAsset.params.freeze) {
                                this.setState({...this.state, freezeState: true, showFreezeAssetDialog: true});
                            }
                            else {
                                this.props.showErrorModal({message: 'Only Freeze Address of this asset will be able to Freeze the assets.'});
                            }
                            this.closePopover();
                        }}>
                            <LockIcon color={"primary"}></LockIcon>
                            <span className='custom-menu-item'>
                                Freeze Assets
                            </span>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            if (this.props.wallet.address === this.state.selectedAsset.params.freeze) {
                                this.setState({...this.state, freezeState: false, showFreezeAssetDialog: true});
                            }
                            else {
                                this.props.showErrorModal({message: 'Only Freeze Address of this asset will be able to Unfreeze the assets.'});
                            }
                            this.closePopover();
                        }}>
                            <LockOpenIcon color={"primary"}></LockOpenIcon>
                            <span className='custom-menu-item'>
                                Unfreeze Assets
                            </span>
                        </MenuItem>

                        <MenuItem onClick={() => {
                            if (this.props.wallet.address === this.state.selectedAsset.params.clawback) {
                                this.setState({...this.state, showRevokeAssetsDialog: true});
                            }
                            else {
                                this.props.showErrorModal({message: 'Only Clawback Address of this asset will be able to Revoke the assets.'});
                            }
                            this.closePopover();
                        }}>
                            <SettingsBackupRestoreIcon color={"primary"}></SettingsBackupRestoreIcon>
                            <span className='custom-menu-item'>
                                Revoke Assets
                            </span>
                        </MenuItem>


                        <MenuItem onClick={() => {
                            if (this.props.wallet.address === this.state.selectedAsset.params.manager) {
                                this.setState({...this.state, showDeleteAssetDialog: true});
                            }
                            else {
                                this.props.showErrorModal({message: 'Only Manager of this asset will be able to delete the asset.'});
                            }
                            this.closePopover();
                        }}>
                            <DeleteIcon color={"primary"}></DeleteIcon>
                            <span className='custom-menu-item'>Delete Asset</span>
                        </MenuItem>
                    </MenuList>
                </Paper>
            </Popover>
        </div>
    </div>);
}
function invokeDestroyAsset(asset) {
    this.props.destroyAsset(this.props.network.usingAlgoSigner, this.props.wallet, parseInt(asset.index)).then((result) => {
        if (result.success) {
            this.setState({...this.state, showDeleteAssetDialog: false});
            this.props.loadWallet(this.props.wallet.mnemonic);
        }
    });
}
function invokeFreezeAsset(asset) {
    const freezeAddress = this.state.freezeAccount.current.value
    if (!freezeAddress) {
        this.props.showErrorModal({message: 'Invalid  Address.'});
        return;
    }
    this.props.freezeAsset(this.props.network.usingAlgoSigner, this.props.wallet, parseInt(asset.index), freezeAddress, this.state.freezeState).then((result) => {
        if (result.success) {
            this.setState({...this.state, showFreezeAssetDialog: false});
            this.props.loadWallet(this.props.wallet.mnemonic);
        }
    });
}
function invokeRevokeAssets(asset) {
    const revokeAddress = this.state.revokeAddress.current.value;
    if (!revokeAddress) {
        this.props.showErrorModal({message: 'Invalid Revoke Address.'});
        return;
    }
    if (!algoSdk.isValidAddress(revokeAddress)) {
        this.props.showErrorModal({message: 'Invalid Revoke Address.'});
        return;
    }

    const revokeReceiverAddress = this.state.revokeReceiverAddress.current.value;
    if (!revokeReceiverAddress) {
        this.props.showErrorModal({message: 'Invalid Receiver Address.'});
        return;
    }
    if (!algoSdk.isValidAddress(revokeReceiverAddress)) {
        this.props.showErrorModal({message: 'Invalid Receiver Address.'});
        return;
    }

    let revokeAmount = this.state.revokeAmount.current.value;
    if (revokeAmount == "") {
        this.props.showErrorModal({message: 'Invalid Amount.'});
        return;
    }

    try {
        revokeAmount = parseInt(revokeAmount);
    } catch (e) {
        console.log(e);
    }

    if (!isNumber(revokeAmount) || revokeAmount <= 0) {
        this.props.showErrorModal({
            message: 'Invalid Amount',

        });
        return;
    }

    revokeAmount = revokeAmount * Math.pow(10,asset.params.decimals);
    this.props.revokeAssets(this.props.network.usingAlgoSigner, this.props.wallet, parseInt(asset.index), revokeAddress, revokeReceiverAddress, revokeAmount).then((result) => {
        if (result.success) {
            this.setState({...this.state, showRevokeAssetsDialog: false});
            this.props.loadWallet(this.props.wallet.mnemonic);
        }
    });
}

function invokeSendAssets(asset) {
    const toAddress = this.state.toAddress.current.value;
    if (!toAddress) {
        this.props.showErrorModal({message: 'Invalid Address.'});
        return;
    }
    if (!algoSdk.isValidAddress(toAddress)) {
        this.props.showErrorModal({message: 'Invalid Address.'});
        return;
    }

    let sendAmount = this.state.sendAmount.current.value;
    if (sendAmount == "") {
        this.props.showErrorModal({message: 'Invalid Amount.'});
        return;
    }

    try {
        sendAmount = parseFloat(sendAmount);
    } catch (e) {
        console.log(e);
    }

    if (!isNumber(sendAmount) || sendAmount <= 0) {
        this.props.showErrorModal({
            message: 'Invalid Amount',

        });
        return;
    }

    if (!isValidAssetDecimals(sendAmount, asset.params.decimals)) {
        this.props.showErrorModal({
            message: 'Decimals of Amount should not be more than configured decimals',

        });
        return;
    }

    sendAmount = sendAmount * Math.pow(10,asset.params.decimals);
    this.props.sendAssets(this.props.network.usingAlgoSigner, this.props.wallet, parseInt(asset.index), toAddress, sendAmount).then((result) => {
        if (result.success) {
            this.setState({...this.state, showSendAssetsDialog: false});
            this.props.loadWallet(this.props.wallet.mnemonic);
        }
    });
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.getPage = getPage.bind(this);
        this.getAssetsList = getAssetsList.bind(this);
        this.renderAssets = renderAssets.bind(this);
        this.invokeDestroyAsset = invokeDestroyAsset.bind(this);
        this.invokeFreezeAsset = invokeFreezeAsset.bind(this);
        this.invokeSendAssets = invokeSendAssets.bind(this);
        this.invokeRevokeAssets = invokeRevokeAssets.bind(this);
        this.getEmptyAssetsMessage = getEmptyAssetsMessage.bind(this);
        this.canConfigureAsset = canConfigureAsset.bind(this);
        this.closePopover = closePopover.bind(this);
        this.state = {
            freezeAccount: React.createRef(),
            toAddress: React.createRef(),
            sendAmount: React.createRef(),
            revokeAddress: React.createRef(),
            revokeAmount: React.createRef(),
            revokeReceiverAddress: React.createRef(),
            popoverTarget: null
        };
    }

    render() {
        return this.getPage();
    }
}

const mapDispatchToProps = {
    destroyAsset,
    showCreateAssetDialog,
    hideCreateAssetDialog,
    createAsset,
    showErrorModal,
    showModifyAssetDialog,
    freezeAsset,
    sendAssets,
    revokeAssets,
    loadWallet
};
export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(Home));