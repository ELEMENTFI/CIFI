import React from 'react';
import "./modifyAsset.scss"
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {modifyAsset, loadAsset} from "../../../store/actions/assetActions";
import { withStyles } from '@material-ui/core/styles';
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {hideModifyAssetDialog, showErrorModal, showWarningModal} from "../../../store/actions/utilActions";
import Tooltip from "@material-ui/core/Tooltip";
import algoSdk from "../../services/algoSdk";
import {loadWallet} from "../../../store/actions/walletActions";
import {getAmountInDecimals, getAssetSupply} from "../../services/utils";

const mapStateToProps = state => {
    return { wallet: state.wallet, network: state.network };
};

const styles = theme => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    }
});

function getPage() {
    const {asset} = this.props;
    console.log(asset);
    return (<div className="modify-asset-wrapper">
        <div className="modify-asset-container">
            <Grid container spacing={2}>
                <Grid item sm={12}>
                    <form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="asset_name"
                                    required
                                    fullWidth
                                    label="Asset Name"
                                    autoFocus
                                    inputRef={this.state.assetName}
                                    disabled={true}
                                    defaultValue={asset.params.name}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="unit_name"
                                    required
                                    fullWidth
                                    label="Unit Name"
                                    inputRef={this.state.unitName}
                                    placeholder="USDT"
                                    disabled={true}
                                    defaultValue={asset.params['unit-name']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="supply"
                                    required
                                    fullWidth
                                    label="Total Supply"
                                    inputRef={this.state.supply}
                                    disabled={true}
                                    defaultValue={getAssetSupply(asset)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="decimals"
                                    required
                                    fullWidth
                                    label="Decimals"
                                    inputRef={this.state.assetDecimals}
                                    defaultValue={asset.params.decimals}
                                    disabled={true}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="asset_url"
                                    fullWidth
                                    label="Asset Url"
                                    inputRef={this.state.assetUrl}
                                    disabled={true}
                                    defaultValue={asset.params.url}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="metadata_hash"
                                    fullWidth
                                    label="Metadata Hash"
                                    inputRef={this.state.metadataHash}
                                    disabled={true}
                                    defaultValue={asset.params['metadata-hash'] ? atob(asset.params['metadata-hash']) : asset.params['metadata-hash']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={this.state.useDefaultAddress}
                                            onChange={(event) => {
                                                this.setState({ ...this.state, useDefaultAddress: event.target.checked });
                                                if (event.target.checked) {
                                                    if (asset.params.manager) {
                                                        this.state.managerAddress.current.value = this.props.wallet.address;
                                                    }
                                                    if (asset.params.reserve) {
                                                        this.state.reserveAddress.current.value = this.props.wallet.address;
                                                    }
                                                    if (asset.params.freeze) {
                                                        this.state.freezeAddress.current.value = this.props.wallet.address;
                                                    }
                                                    if (asset.params.clawback) {
                                                        this.state.clawbackAddress.current.value = this.props.wallet.address;
                                                    }
                                                }
                                            }}
                                            color="primary"
                                            name="use_default_address"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    }
                                    label="Use Default Address"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Tooltip title="The manager account is the only account that can authorize transactions to re-configure or destroy an asset." placement="top-start">
                                    <TextField
                                        name="manager"
                                        fullWidth
                                        label="Manager Address"
                                        inputRef={this.state.managerAddress}
                                        defaultValue={asset.params.manager}
                                        className="address-field"
                                        disabled={this.state.useDefaultAddress || !asset.params.manager}
                                        inputProps={{
                                            style: {fontSize: 12}
                                        }}
                                        onChange={(event) => {
                                            if (!event.target.value) {
                                                this.props.showWarningModal({
                                                    message: 'Manager Address is set to empty. You will never be able to set it back to an address again.',
                                                });
                                            }
                                        }}
                                    />
                                </Tooltip>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Tooltip title="Specifying a reserve account signifies that non-minted assets will reside in that account instead of the default creator account. Assets transferred from this account are minted units of the asset. If you specify a new reserve address, you must make sure the new account has opted in to the asset and then issue a transaction to transfer all assets to the new reserve." placement="top-start">
                                    <TextField
                                        name="reserve"
                                        fullWidth
                                        label="Reserve Address"
                                        inputRef={this.state.reserveAddress}
                                        defaultValue={asset.params.reserve}
                                        className="address-field"
                                        disabled={this.state.useDefaultAddress || !asset.params.reserve}
                                        inputProps={{
                                            style: {fontSize: 12}
                                        }}
                                        onChange={(event) => {
                                            if (!event.target.value) {
                                                this.props.showWarningModal({
                                                    message: 'Reserve Address is set to empty. You will never be able to set it back to an address again.',
                                                });
                                            }
                                        }}
                                    />
                                </Tooltip>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Tooltip title="The freeze account is allowed to freeze or unfreeze the asset holdings for a specific account. When an account is frozen it cannot send or receive the frozen asset." placement="top-start">
                                    <TextField
                                        name="freeze"
                                        fullWidth
                                        label="Freeze Address"
                                        inputRef={this.state.freezeAddress}
                                        defaultValue={asset.params.freeze}
                                        className="address-field"
                                        disabled={this.state.useDefaultAddress || !asset.params.freeze}
                                        inputProps={{
                                            style: {fontSize: 12}
                                        }}
                                        onChange={(event) => {
                                            if (!event.target.value) {
                                                this.props.showWarningModal({
                                                    message: 'Freeze Address is set to empty. You will never be able to set it back to an address again.',
                                                });
                                            }
                                        }}
                                    />
                                </Tooltip>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Tooltip title="The clawback address represents an account that is allowed to transfer assets from and to any asset holder (assuming they have opted-in)." placement="top-start">
                                    <TextField
                                        name="clawback"
                                        fullWidth
                                        label="Clawback Address"
                                        inputRef={this.state.clawbackAddress}
                                        defaultValue={asset.params.clawback}
                                        className="address-field"
                                        disabled={this.state.useDefaultAddress || !asset.params.clawback}
                                        inputProps={{
                                            style: {fontSize: 12}
                                        }}
                                        onChange={(event) => {
                                            if (!event.target.value) {
                                                this.props.showWarningModal({
                                                    message: 'Clawback Address is set to empty. You will never be able to set it back to an address again.',
                                                });
                                            }
                                        }}
                                    />
                                </Tooltip>
                            </Grid>
                                <Grid item xs={12} sm={6}>


                                </Grid>
                                <Grid item xs={12} sm={6} style={{marginBottom: 25, marginTop: 25}}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        style={{marginLeft: 20, float: 'right'}}
                                        onClick={this.invokeModifyAsset}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        color="default"
                                        style={{float: 'right'}}
                                        onClick={() => {
                                            this.props.hideModifyAssetDialog();
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    </div>);
}

function invokeModifyAsset() {
    const assetName = this.state.assetName.current.value;
    const unitName = this.state.unitName.current.value;
    let supply;
    try {
        supply = parseInt(this.state.supply.current.value);
    } catch (e) {
        console.log(e);
    }
    let assetUrl = this.state.assetUrl.current.value;
    const managerAddress = this.state.managerAddress.current.value;
    const reserveAddress = this.state.reserveAddress.current.value;
    const freezeAddress = this.state.freezeAddress.current.value;
    const clawbackAddress = this.state.clawbackAddress.current.value;

    if (!assetName) {
        this.props.showErrorModal({
            message: 'Invalid Asset Name',

        });
        return;
    }
    if (!unitName) {
        this.props.showErrorModal({
            message: 'Invalid Unit Name',

        });
        return;
    }
    if (!supply) {
        this.props.showErrorModal({
            message: 'Invalid Supply',

        });
        return;
    }
    if (!assetUrl) {
        assetUrl = "";
    }
    if (managerAddress && !algoSdk.isValidAddress(managerAddress)) {
        this.props.showErrorModal({
            message: 'Invalid Manager Address',

        });
        return;
    }
    if (reserveAddress && !algoSdk.isValidAddress(reserveAddress)) {
        this.props.showErrorModal({
            message: 'Invalid Reserve Address',

        });
        return;
    }
    if (freezeAddress && !algoSdk.isValidAddress(freezeAddress)) {
        this.props.showErrorModal({
            message: 'Invalid Freeze Address',

        });
        return;
    }
    if (clawbackAddress && !algoSdk.isValidAddress(clawbackAddress)) {
        this.props.showErrorModal({
            message: 'Invalid Clawback Address',

        });
        return;
    }

    this.props.modifyAsset(this.props.network.usingAlgoSigner, this.props.wallet, parseInt(this.props.asset.index), managerAddress, reserveAddress, freezeAddress, clawbackAddress)
        .then((result) => {
            if (result.success) {
                this.props.hideModifyAssetDialog();
                this.props.loadWallet(this.props.wallet.mnemonic);
            }
        });
}

class ModifyAsset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            useDefaultAddress: false
        };
        this.getPage = getPage.bind(this);
        this.state.assetName = React.createRef();
        this.state.unitName = React.createRef();
        this.state.supply = React.createRef();
        this.state.assetUrl = React.createRef();
        this.state.managerAddress = React.createRef();
        this.state.reserveAddress = React.createRef();
        this.state.freezeAddress = React.createRef();
        this.state.clawbackAddress = React.createRef();
        this.state.assetDecimals = React.createRef();
        this.state.metadataHash = React.createRef();
        this.invokeModifyAsset = invokeModifyAsset.bind(this);
    }

    render() {
        return this.getPage();
    }
}
const mapDispatchToProps = {
    loadAsset,
    showErrorModal,
    hideModifyAssetDialog,
    modifyAsset,
    loadWallet,
    showWarningModal
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ModifyAsset));