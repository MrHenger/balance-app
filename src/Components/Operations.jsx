import React, { Component } from 'react'

export default class Operations extends Component {
    constructor()
    {
        super();
        this.state = {
            value: 0,
            show: false,
            total: 1,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleShow = this.handleShow.bind(this);
    };

    handleSubmit(e)
    {
        e.preventDefault();
        if(this.state.total === 3){
            alert("EPA EPA EPA, Usted ha superad el maximo de operaciones permitidas");
            this.setState({show: false});
            return false;
        }
        this.props.add(this.state);
        let temporally = (this.state.total + 1);
        this.setState({show: false, total: temporally});
    }

    handleInput(e)
    {
        const {name ,value} = e.target;
        this.setState({[name]: parseInt(value)});
    }

    handleShow()
    {
        this.setState({show: true});
    }

    handleRemove(index)
    {
        this.props.remove(index);
    }


    render() {
        const operations = this.props.balance.map((operation, key) => {
            let removeButton = false

            
            if(!removeButton)
            {
                return (
                    <div className="card rounded-5 header d-inline-flex mx-2 operation" key={key}>
                        <h3 className="d-flex justify-content-center px-3">{operation.value}</h3>
                    </div>
                )
            }
            else
            {
                return (
                    <div className="card rounded-5 header d-inline-flex mx-2 operation" key={key} onClick={this.handleRemove.bind(this, key)}>
                        <h3 className="d-flex justify-content-center px-3">Delete</h3>
                    </div>
                )
            }

        });
        
        let test;
        if(this.state.show){
            test = <div className="card d-inline-flex mx-2">
                        <form className="form-group" onSubmit={this.handleSubmit}>
                            <input className="form-control operation" type="text" name="value" onChange={this.handleInput}/>
                        </form>
                    </div>
        }
        else {
            test = <div className="card rounded-5 header d-inline-flex mx-2 operation" onClick={this.handleShow}>
                        <h3 className="d-flex justify-content-center px-3">+</h3>
                    </div>
        }

        return (
            <div className="card rounded-5">
                <div className="card-header header rounded-5">
                    <h4>Operations</h4>
                </div>
                <div className="card-body">
                    {operations}
                    {test}
                </div>
            </div>
        )
    }
}
