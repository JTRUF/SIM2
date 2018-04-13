import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class WizardStepTwo extends Component {

    handleInputChange(value){
        this.setState({imageUrl: value})
    }


render() {
    return (
        <div>
            Wizard
            <input value={this.state.imageUrl}
            placeholder='Image URL'
            ref='Image URL'
            onChange={(e) => this.handleInputChange(e.target.value)}/>
            <Link to='/'><button>Cancel</button></Link>
            <Link to='/wizard/step1'><button>Previous Step</button></Link>
            <Link to='/wizard/step3'><button>Next Step</button></Link>
        </div>
        )
    }   
}

export default WizardStepTwo;