import React from 'react';
import "./app.scss";
import Header from "./components/Header/header.component";
import { connect } from "react-redux";
import AlgoPortal from "./components/AlgoPortal/algoPortal.component";
import {Redirect, Route, Switch} from "react-router-dom";
import {initApp} from "../store/actions/initActions";
import {hideModal} from "../store/actions/utilActions";
import LinearProgress from "@material-ui/core/LinearProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {Button} from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';
import {SEVERITY_ERROR, SEVERITY_WARNING} from "../store/reducers/utilReducer";
import WarningIcon from '@material-ui/icons/Warning';

const mapStateToProps = state => {
    return { wallet: state.wallet, utils: state.utils };
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.initApp();
        this.state = {
        };
    }

    render() {
        let modalButtonCls = '';
        if (this.props.utils.modal.severity === SEVERITY_ERROR) {
            modalButtonCls = 'secondary';
        }
        else if (this.props.utils.modal.severity === SEVERITY_WARNING) {
            modalButtonCls = 'primary';
        }
        return (<div className="app-root">
            <Header/>
            <Switch>
                <Route path="/portal">
                    <AlgoPortal />
                </Route>
                <Route exact path="/" render={() => <Redirect to="/portal/login" />} />
            </Switch>

            {this.props.utils.modal.show ?
                <Dialog
                    fullWidth={true}
                    maxWidth={"xs"}
                    open={this.props.utils.modal.show}
                >
                    {this.props.utils.modal.severity == SEVERITY_ERROR ? <DialogTitle >
                        <ErrorIcon color={"secondary"} fontSize={"large"}></ErrorIcon>
                        <span className='modal-icon-text'>
                            Error
                        </span>
                    </DialogTitle> : ''
                    }

                    {this.props.utils.modal.severity == SEVERITY_WARNING ? <DialogTitle >
                        <WarningIcon color={"primary"} fontSize={"large"}></WarningIcon>
                        <span className='modal-icon-text'>
                            Warning
                        </span>
                    </DialogTitle> : ''
                    }

                    <DialogContent>
                        <div style={{lineHeight: 1.3,wordBreak: "break-word"}}>
                            {this.props.utils.modal.message}
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            this.props.hideModal();
                        }} color={modalButtonCls} variant="contained">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog> : ''}

            <div className={"custom-loading " + (this.props.utils.loading.count ? 'open' : 'close')}>
                <div className='loading-icon'>
                    <LinearProgress color="primary" />
                </div>
                <div className='loading-message'>
                    {this.props.utils.loading.message}
                </div>
            </div>
        </div>);
    }
}

const mapDispatchToProps = {
    initApp,
    hideModal
};

export default connect(mapStateToProps, mapDispatchToProps)(App);