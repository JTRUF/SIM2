import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {addHouse, deleteHouse} from '../ducks/reducer';

class WizardStepOne extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: [],
            houses: []
        }
    }
    handleInputChange1(value){
        this.setState({name: value})
    }
    handleInputChange2(value){
        this.setState({address: value})
    }
    handleInputChange3(value){
        this.setState({city: value})
    }
    handleInputChange4(value){
        this.setState({state: value})
    }
    handleInputChange5(value){
        this.setState({zip: value})
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
            <input value={this.state.name}
            placeholder='Property Name'
            ref='Property Name'
            onChange={(e) => this.handleInputChange1(e.target.value)}/>
            <input value={this.state.address}
            placeholder='Address'
            ref='Address'
            onChange={(e) => this.handleInputChange2(e.target.value)}/>
            <input value={this.state.city}
            placeholder='City'
            ref='City'
            onChange={(e) => this.handleInputChange3(e.target.value)}/>
            <input value={this.state.state}
            placeholder='State'
            ref='State'
            onChange={(e) => this.handleInputChange4(e.target.value)}/>
            <input value={this.state.zip}
            placeholder='Zip'
            ref='Zip'
            onChange={(e) => this.handleInputChange5(e.target.value)}/>
            <Link to='/'><button>Cancel</button></Link>
            <Link to='/wizard/step2' onClick={() => this.addHouse()}><button>Next Step</button></Link>
        </div>
        )
    }   
}

function mapStateToProps(state) {
    return{
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps, {addHouse, deleteHouse})(WizardStepOne)