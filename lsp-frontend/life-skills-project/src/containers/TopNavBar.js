import React, { Component } from 'react'
import '../App.scss'
import {
    Link
  } from "react-router-dom";
  


export default class TopNavBar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <div className='leftSide'>
                    <Link to='/'><img src={this.props.logo} alt='logo'></img></Link>
                </div>
                <div className='center-left'>
                    <input className='search' type='text' placeholder='Search...' onChange = {(e) => this.props.customSearch(e)}/>
                </div>
                <div className='center-right'>
                    <button className='view-favs'><Link to="/favorites">View My Favorites</Link></button>
                </div>
                <div className='rightSide'>
                    <button className='log-btn'><Link to="/login">Log In/Out</Link></button>
                </div>
            </div>
        )
    }
}