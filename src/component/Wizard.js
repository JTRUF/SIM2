import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import WizardStepOne from './WizardStepOne';
import WizardStepTwo from './WizardStepTwo';
import WizardStepThree from './WizardStepThree';
import Dashboard from './Dashboard';


class Wizard extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route component={Dashboard} exact path= '/'/>

                    <Route component={WizardStepOne} path='/wizard/step1'/>
                    <Route component={WizardStepTwo} path='/wizard/step2'/>
                    <Route component={WizardStepThree} path='/wizard/step3'/>
                </div>
                    Wizard
                    <Link to='/'><button>Cancel</button></Link>
            </HashRouter>
        )
    }
}
export default Wizard;