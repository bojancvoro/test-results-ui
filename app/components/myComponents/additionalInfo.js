import React from "react";
import tests from "../../config/test.js";

class AdditionalInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const successfulTests = tests.reduce((acc, test) => {
            if (test.testResults.ASSERT === "Success") {
                return acc + 1;
            } else {
                return acc;
            }
        }, 0);

        return (
            <div className="col-lg-12 mb-2 info-container">
                <div className="ibox-content">
                    <h5>Successful / Failed tests</h5>
                    <h2>{successfulTests}/{tests.length - successfulTests}</h2>
                </div>
            </div>
        )
    };
}

export default AdditionalInfo;