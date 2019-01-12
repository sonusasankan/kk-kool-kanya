import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FiDownload, FiCamera, FiUpload, FiPrinter} from 'react-icons/fi';
import { MdMyLocation, MdCancel } from "react-icons/md";
import {IoIosClose} from 'react-icons/io';
import pdfImg from '../../assets/images/ic-pdf-44.svg';

import Avatar from '../../components/Avatar';

import Dropdown from '../../components/Dropdown';
import {ContentWrapper} from './style';
import {Sidebar} from '../Saved/style';
import {Button} from '../../components/Button';

class EditProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            interestOptions: this.interestOptions,
            selectedInterestOptions: this.selectedInterestOptions,
            goals: this.goals
        }
    }

    interestOptions = ["Salary & benifits", "Safety", "Work-life balance", "Work satisfaction"].sort();
    selectedInterestOptions = ["Culture", "Female representation & opportunities", "Maternity benifits", "Learning opportunities"];
    goals = ["New Career", "Career", "New job", "Job Search", "Better prospects", "Career Switch", "Better oppurtunities", "Job seeking", "Job switch","Salary hike"];
    dates=[1,2,3,4,5,6,7,8,9,20,21,22,23,24,25,26,27,28,29,30,31];
    months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    years=[1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015];

    _addItemInSelected(item, e){
        let intOption = this.state.interestOptions;
        let SelIntOption = this.state.selectedInterestOptions;
        SelIntOption.push(item);
        SelIntOption.sort();
        let index = intOption.indexOf(item);
        intOption.splice(index,1);
        this.setState({
            interestOptions: intOption,
            selectedInterestOptions: SelIntOption
        })
    }

    _removeItemFromSelected(item){
        let intOption = this.state.interestOptions;
        let selIntOptions = this.state.selectedInterestOptions;
        intOption.push(item);
        intOption.sort();
        selIntOptions.splice(selIntOptions.indexOf(item), 1);
        this.setState({
            interestOptions: intOption,
            selectedInterestOptions: selIntOptions
        })
    }

    _removeGoals(item){
        let arr = this.state.goals;
        arr.splice(arr.indexOf(item),1);
        this.setState({
            goals: arr
        })
    }

    takeInput(){
        let input = document.querySelector('#upload-file');
        input.click();
    }

    render(){
        return(
            <React.Fragment>
                <section className="container-fluid" style={{backgroundColor: '#fbfbfb'}}>
                    <div className="container" style={{marginTop: 72}}>
                        <div className="row">
                            <div className="col-3 d-none d-md-block">
                                <Sidebar className="kk-profile__sidebar">
                                    <ul>
                                        <li><h3>My Profile</h3></li>
                                        <li><Link to='/favourites'><h3>Favourites</h3></Link></li>
                                        <li><Link to={window.location.pathname}><h3>Become a Kool Kanya</h3></Link></li>
                                        <li><Link to='/settings'><h3>Settings</h3></Link></li>
                                    </ul>
                                </Sidebar>
                            </div>
                            <div className="col-12 col-md-9">
                                <ContentWrapper>
                                    <div className="border-bottom kk-avatar">
                                        <div className="kk-avatar__wrapper">
                                            <div className="kk-avatar__wrapper--inner">
                                                <Avatar
                                                    isLoggedIn
                                                    imgSrc="https://loremflickr.com/151/151"
                                                />
                                                <button className="kk-avatar__file-input" onClick={this.takeInput}><FiCamera /></button>
                                                <input id="upload-file" type="file" name="upload-file" style={{visibility:'hidden', height: 0, width: 0}}/>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="name" className="kk-input kk-input--required">
                                                <div className="kk-input__label">
                                                    <span>Name</span>
                                                </div>
                                                <input id="name" type="text" placeholder="Enter your name" required/>
                                            </label>
                                            <div className="kk-input kk-input--required">
                                                <div className="kk-input__label">
                                                    <span>Date of birth</span>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="kk-input__label--dropdown">
                                                        <Dropdown
                                                            options={this.dates}
                                                            onSelect={console.log(this)}
                                                            placeholder="Date"
                                                        />
                                                    </div>
                                                    <div className="kk-input__label--dropdown">
                                                        <Dropdown
                                                            options={this.months}
                                                            onSelect={console.log(this)}
                                                            placeholder="Month"
                                                        />
                                                    </div>
                                                    <div className="kk-input__label--dropdown">
                                                        <Dropdown
                                                            options={this.years}
                                                            onSelect={console.log(this)}
                                                            placeholder="Year"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <label for="location" className="kk-input kk-input--required">
                                                <div className="kk-input__label">
                                                    <span>Location</span>
                                                </div>
                                                <div className="kk-input-group">
                                                    <input id="location" type="text" placeholder="Enter your location"/>
                                                    <button className="kk-input-button"><MdMyLocation/></button>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="kk-interest border-bottom">
                                        <h3>Interested in companies good for </h3>
                                        <div className="row">
                                            <div className={"col-12 col-md-6 "+(this.state.selectedInterestOptions.length===0 ? 'd-none' : '')}>
                                                <ul>
                                                {   
                                                    this.state.selectedInterestOptions.map((item)=>{
                                                        return (
                                                            <li className="kk-list-style-type-none">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="custom-control-input"
                                                                        id={item}
                                                                        checked
                                                                    />
                                                                    <label
                                                                        className="custom-control-label"
                                                                        htmlFor={item}
                                                                        onClick={this._removeItemFromSelected.bind(this, item)}
                                                                    >
                                                                        {item}
                                                                    </label>
                                                                </div>
                                                            </li> 
                                                        ) 
                                                    })
                                                }
                                                </ul>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <ul>
                                                    {
                                                        this.state.interestOptions.map((item)=>{
                                                            return (
                                                                <li className="kk-list-style-type-none">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            className="custom-control-input"
                                                                            id={item}
                                                                            checked={false}
                                                                        />
                                                                        <label
                                                                            className="custom-control-label"
                                                                            htmlFor={item}
                                                                            onClick={this._addItemInSelected.bind(this, item)}
                                                                        >
                                                                            {item}
                                                                        </label>
                                                                    </div>
                                                                </li> 
                                                            ) 
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kk-primary-goals border-bottom">
                                        <h3>Primary career goals</h3>
                                        <div>
                                            {
                                                this.state.goals.map((item)=>{
                                                    return (
                                                        <div className="kk-capsule removable">{item}<button onClick={this._removeGoals.bind(this,item)}><IoIosClose/></button></div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="kk-resume__wrapper">
                                        <h3>Resume</h3>
                                        <div className="kk-resume">
                                            <div className="d-flex">
                                                <div className="kk-resume__pdf-icon"><img src={pdfImg} alt="pdf logo" /></div>
                                                <div className="kk-resume__name__wrapper">
                                                    <div className="kk-resume__name">Deeptiagrawal_resume.pdf</div>
                                                    <span>2MB</span>
                                                </div>
                                            </div>
                                            <button className="kk-resume__close-button" ><MdCancel/></button>
                                        </div>
                                        <div className="kk-resume__upload">
                                            <a href="#"><FiUpload /> <span>Upload new resume</span></a>
                                        </div>
                                        <div className="kk-cta-row">
                                            <Button
                                                styleName="curved mr-3 mb-2 mb-md-0"
                                                label="Save"
                                            />
                                            <Button primary={false} hasBorder styleName="curved mb-4 mb-md-0">
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                </ContentWrapper>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default EditProfile;
