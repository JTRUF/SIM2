import React, {Component} from 'react';
import House from './House';
import {Link} from 'react-router-dom'; 
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            list_of_houses: [],
            house: ''
        }
        this.getHouses = this.getHouses.bind(this);
        this.addHouse = this.addHouse.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
        this.editHouse = this.editHouse.bind(this);
    }
        componentDidMount(){
            axios.get('/api/get_houses').then(res=>{
              this.setState({
                list_of_houses: res.data})
            })
          }

        getHouses(){
            axios.get('/api/houser').then(res =>{
                this.setState({list_of_houses: res.data})
            }).catch(err => alert(err))
        }
        addHouse(event){
            const{house} = this.state;
            axios.post('/api/houser').then(res => {
                this.setState({houses: res.data})
            })
        }
        deleteHouse(id){
            axios.delete('/api/houser').then(res => {
                this.setState({list_of_houses: res.data})
            })
        }
        editHouse(id, house){
            axios.put('/api/houser', {house}).then( res => {this.setState({list_of_houses: Response.data})
            })
        }


    render() {
        const list = this.state.list_of_houses.map((house, i) => (
            <Link to={`/House/${house.id}`} key={i}>
            </Link>
        ));
        
        return (
            <div>
                Dashboard
                <House/>
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
            </div>
        )
    }
}
export default Dashboard;