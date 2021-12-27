import React, { Component } from 'react';
import { Container } from 'reactstrap';
import YieldFarmingComp from '../components/farming/YieldFarming';

class YieldFarming extends Component {
    state = {
        activeTab: "yieldfarming"
    }
    setActiveTab = (tab) => {
        console.log(tab)
        this.setState({ activeTab: tab })
    }
    componentDidMount() {
        document.getElementById("header-title").innerText = "Yield Farming";
    }
    render() {
        return (<>
            <YieldFarmingComp />
        </>);
    }
}
export default YieldFarming;