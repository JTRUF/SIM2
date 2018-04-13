import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class WizardStepThree extends Component {

    handleInputChange1(value){
        this.setState({monthly_mortgage: value})
    }
    handleInputChange2(value){
        this.setState({monthly_rent: value})
    }
   
    addHouse() {
        axios.post('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

render() {
    return (
        <div>
            Wizard
            <input value={this.state.monthly_mortgage}
            placeholder='Monthly Mortgage Amount'
            ref='Monthly Mortgage Amount'
            onChange={(e) => this.handleInputChange1(e.target.value)}/>
            <input value={this.state.monthly_rent}
            placeholder='Desired Monthly Rent'
            ref='Desired Monthly Rent'
            onChange={(e) => this.handleInputChange2(e.target.value)}/>
            <Link to='/'><button>Cancel</button></Link>
            <Link to='/wizard/step2'><button>Previous Step</button></Link>
            <Link to='/' onClick={() => this.addHouse()}><button>Complete</button></Link>
        </div>
        )
    }   
}

export default WizardStepThree;