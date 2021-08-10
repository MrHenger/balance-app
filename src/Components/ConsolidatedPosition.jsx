import React, {Component} from 'react';

export default class ConsolidatedPosition extends Component
{
    constructor()
    {
        super()
        this.state = {
            
        }

        this.total = this.total.bind(this);
    }

    total(operations)
    {
        let total = 0;

        operations.map((operation) =>{
            total += operation.value;
            return 0;
        })

        return total;
    }

    render(){

        return(
            <div className="card rounded-5">
                <div className="card-header rounded-5 header">
                    <h3>Consolidated Position</h3>
                </div>
                <div className="card-body d-flex justify-content-end">
                    <h2 className="color-balance">${this.total(this.props.balance)}.00</h2>
                </div>
            </div>
        )
    }
}