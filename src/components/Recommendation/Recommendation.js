import React, { Component } from 'react'


import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Wrapper from './style';

 class Recommendation extends Component {
  constructor(){
      super();
      this.state = {
        personas : ['Loading...'],
        current: 'Loading...',
        isDropDownOpen: false
    }
  } 

  _toggleListDropDown(){
    this.setState({
      isDropDownOpen: !this.state.isDropDownOpen
    })
  }

  _handleClick(e, persona){
    if(this.props.switchTab){
      this.props.switchTab(persona); //switch tab is function called from parent component to get current state
    }
    this.setState({
      current: persona,
      isDropDownOpen: false
    })
  }

  componentDidMount(){
    console.log(this.props);
    this.setState({
      personas: this.props.list,
      current: this.props.list[0]
    })
  }

  render() {
    const { personas, current } = this.state;
    return (
      <Wrapper>
        <button className="kk-recommended-dropdown" onClick={this._toggleListDropDown.bind(this)}>
          <span>{this.state.current}</span><span>{(this.state.isDropDownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />)}</span>
        </button>
        <ul className={"list-group list-group-flush kk-recommended-dropdown-list "+(this.state.isDropDownOpen ? "" : "kk-recommended-dropdown-list--close")}>{
          personas.map((persona, index) => {
              return(
                <li
                  key={index}
                  className={"kk-tab-list-btn list-group-item d-flex justify-content-left align-items-center "+(current === persona ? "current" : "")}
                  onClick={(e)=>this._handleClick(e, persona)}
                >
                    {persona}
                </li>
              )
          })
        }</ul>
      </Wrapper>
    )
  }
}

export default Recommendation;