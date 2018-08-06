import React, { Component } from "react";
import tests from "../../config/test.js";
import { AllHtmlEntities } from "html-entities";

const entities = new AllHtmlEntities();

class TestResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tests
        }
    }

    parseHtmlEntity(htmlEntity) {
        const regex = /&[^;]+;[^;]+;/g;
        const matches = htmlEntity.match(regex);

        const matchedEntities = matches.map(match => {
            let parsedEntities = match.split(';').filter(item => item !== '')
                .map(entity => {
                    if (entity.substr(0, 1) !== '&') {
                        entity = '&' + entity;
                    }
                    return entities.decode(entity);
                })
            return {
                replace: match,
                parsedEntities,
            };
        });

        matchedEntities.map(item => {
            htmlEntity = htmlEntity.replace(item.replace, item.parsedEntities.join(''))
        })
    
        return htmlEntity;
    }

    toggle(target) {
        $(target).closest('.ibox').find('.ibox-content').toggle();
    }

    render() {
        return (
            <div className="test-results">
                {this.state.tests.map((test, i) => {
                    return (
                        <div className="col-lg-12">
                            <div className="ibox collapsed">
                                <div className="ibox-title">
                                    <h5>{test.testName}</h5>
                                    <div className="ibox-tools">
                                        <a className="collapse-link collapse-btn" onClick={(e) => this.toggle(e.target)}>
                                            <i className="fa fa-chevron-up"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-user">
                                            <li><a href="#" className="dropdown-item">Config option 1</a>
                                            </li>
                                            <li><a href="#" className="dropdown-item">Config option 2</a>
                                            </li>
                                        </ul>
                                        <span
                                            className={test.testResults.ASSERT === 'Success' ? "text-success" : "text-warning"}
                                        >{test.testResults.ASSERT}</span>
                                    </div>
                                </div>
                                <div className="ibox-content" style={{ display: 'none' }}>
                                    <div>
                                        <h3>Test type:</h3>
                                        <p>ApiTarget: {test.testType.ApiTarget} </p>
                                        <p>RequestHeaders: {test.testType.RequestHeaders} </p>
                                        <p>Request: {this.parseHtmlEntity(test.testType.Request)} </p>
                                        <p>Result Headers: {test.testType.ResultHeaders} </p>
                                        <p>Result: {this.parseHtmlEntity(test.testType.Result)} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default TestResults;

