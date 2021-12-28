import React, { Component } from 'react';
import { Container } from 'reactstrap';
import YieldFarming from '../components/farming/YieldFarming';

class YieldFarmingP extends Component {
    state = {
        activeTab: "yieldfarming"
    }
    setActiveTab = (tab) => {
        console.log(tab)
        this.setState({ activeTab: tab })
    }
    render() {
        return (<>
            <Container fluid className="py-4 px-md-5">
                {this.state.activeTab == "yieldfarming" ? <YieldFarming /> : ""}
            </Container>
        </>);
    }
}
export default YieldFarmingP;