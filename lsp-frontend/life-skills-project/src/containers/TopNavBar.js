import React, { Component } from 'react'
import '../App.scss'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


export default class TopNavBar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <div className='leftSide'>
                    <Link to='/'><img src={this.props.logo} alt='logo'></img></Link>
                </div>
                <div className='center'>
                    <input type='text' placeholder='Search...' onChange = {(e) => this.props.customSearch(e)}/>
                   </div>
                <div className='rightSide'>
                <button><Link to="/favorites">View My Favorites</Link></button>
                <button><Link to="/login">Log In/Out</Link></button>
                    
                    
                </div>
            </div>
        )
    }
}