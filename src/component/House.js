import React from 'react';

export default function House(props) { 
    let {name, address, city, state, zip} = props
    return ( 
        <div>
            <p>{name}</p>
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zip}</p>
            {/* <button onClick={this.props.deleteHouse}>Delete</button> */}
        </div>
    )
}