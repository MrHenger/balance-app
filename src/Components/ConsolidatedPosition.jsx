import React, {Component} from 'react';

export default class ConsolidatedPosition extends Component
{
    render(){
        return(
            <div className="card rounded-5">
                <div className="card-header rounded-5 header">
                    <h3>Consolidated Position</h3>
                </div>
                <div className="card-body d-flex justify-content-end">
                    <h2 className="color-balance">$100.00</h2>
                </div>
            </div>
        )
    }
}