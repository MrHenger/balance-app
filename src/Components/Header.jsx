import React, { Component } from 'react'
import logo from '../logo.png'

export default class Header extends Component {
    render() {
        return (
            <div className="px-5 d-flex py-4 header">
                <div className="">
                    <img src={logo} alt="StringBin Logo"  width="50"/>
                </div>
                <div className="mx-4 ">
                    <h2>StringBin Balance</h2>
                </div>
            </div>
        )
    }
}
