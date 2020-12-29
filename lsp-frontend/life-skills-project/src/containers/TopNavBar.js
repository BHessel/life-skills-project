import React, { Component } from 'react'
import '../App.css'
export default class TopNavBar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <div className='leftSide'>
                    <h1>Our Logo</h1>
                </div>
                <div className='center'>
                    <input type='text' placeholder='Search...'/>
                    <button>Search</button></div>
                <div className='rightSide'>
                    <h2>Log In/Out</h2>
                </div>
            </div>
        )
    }
}