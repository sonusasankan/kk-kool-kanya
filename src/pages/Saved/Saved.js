import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import SavedArticles from './SavedArticles';
import SavedCompanies from './SavedCompanies';
import SavedJobs from './SavedJobs';
import Recommendation from "./../../components/Recommendation/Recommendation";
import {Sidebar} from './style';


class Saved extends Component{
    constructor(props){
        super(props);
        this.state = {
            list : ["Companies", "Jobs", "Articles"],
            active : "Companies"
        }
    }

    switchTab(p){
        this.setState({
            active: p
        })
        console.log(this.state.active);
    }

    render(){
        return(
            <React.Fragment>
                <section className="container" style={{marginTop: "73px"}}>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <Sidebar>
                                <ul className="kk">
                                    <li className="d-none d-md-block"><Link to="/profile"><h3>My Profile</h3></Link></li>
                                    <li>
                                        <h3 className="active">Favourites</h3>
                                        <Recommendation list={this.state.list} active={this.state.active} switchTab={this.switchTab.bind(this)}/>
                                    </li>
                                    <li className="d-none d-md-block"><Link to={window.location.pathname}><h3>Become a Kool Kanya</h3></Link></li>
                                    <li className="d-none d-md-block"><Link to="settings"><h3>Settings</h3></Link></li>
                                </ul>
                            </Sidebar>
                        </div>
                        <div className="col-12 col-md-9">
                            {(this.state.active === "Articles") ? <SavedArticles /> : ''}
                            {(this.state.active === "Companies") ? <SavedCompanies /> : ''}
                            {(this.state.active === "Jobs") ? <SavedJobs /> : ''}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Saved;
