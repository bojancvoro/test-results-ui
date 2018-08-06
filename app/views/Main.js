import React, { Component } from 'react';
import TestResults from "../components/myComponents/testResults";
import BasicInfo from "../components/myComponents/basicInfo";
import AdditionalInfo from '../components/myComponents/additionalInfo';

class Main extends Component {

    render() {
        return (
            <div>
                <BasicInfo />
                <AdditionalInfo />
                <TestResults />
            </div>
        );
    }
}

export default Main
