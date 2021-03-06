import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';
import Dropdown from '../../components/Dropdown';
import SearchContainer from '../../components/Search/SearchContainer';
import { ArticleCard } from '../../components/Article';

//importing customscroll for swipable category cards
import HorizontalScrollableTags from '../../container/HorizontalScrollableTags';


import {Chip} from '../../components/Chips';

//impor ting images for filter cards
import CareerAdvice from '../../assets/images/article-category/career-advice-square.png';
import CoffeeBreak from '../../assets/images/article-category/coffee-break-square.png';
import Connect from '../../assets/images/article-category/connect-square.png';
import Restarting from '../../assets/images/article-category/restartingcareer-square.png';
import Tools from '../../assets/images/article-category/tools-square.png';
import './ArticleSearch.scss';

const option = {
    autoWidth: true,
    margin: 16,
    nav:false,
    dots: false,
    responsive:{
        768:{
            margin: 32
        }
    }
};

const list = [
    <Chip logo={CareerAdvice} alt="Career Advice" title="Career Advice" />,
    <Chip logo={CoffeeBreak} alt="Coffee Break" title="Coffee Break" />,
    <Chip logo={Connect} alt="Connect" title="Connect" />,
    <Chip logo={Restarting} alt="Restarting your Career" title="Restarting your Career" />,
    <Chip logo={Tools} alt="Tools & Skills" title="Tools & Skills" />
];

class ArticleSearch extends Component {

    constructor(props){
        super(props);
        this.state={
            selected:["Coffee Break"]
        }
    }

    _selectCategory(category, e){
        let newArr = this.state.selected;
        if(newArr.includes(category)){
            newArr.splice(newArr.indexOf(category,1));
        }
        else{
            newArr.push(category);
        }
        this.setState({
            selected: newArr
        })
        console.log(category, e.target);
    }

    render(){
        return(
            <React.Fragment>
                <div className="kk-search text-center">
                    <SearchContainer placeholder="Search by article, keywords"/>
                </div>
                <section className="container py-0">
                    <BreadCrumb>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/articles">Articles</Link></li>
                        <li><Link to="/article-search">Search results</Link></li>
                        <li><Link to="/article-details">How to start with UX</Link></li>
                    </BreadCrumb>
                    <div className="article-search__header__wrapper">
                        <div className="article-search__header">
                            <h3>How to start with UX</h3>
                            <span>48 Articles</span>
                        </div>
                        <div className="d-flex dropdown">
                            <div className="dropdown__title">Sort</div>
                            <Dropdown
                                options={['Latest', 'Popularity', 'Reading Time']}
                                defualtOption="Latest"
                            />
                        </div>
                    </div>
                </section>
        
                <section className="container article-search__carousel">
                    <HorizontalScrollableTags list={list}/>
                </section>
        
                <section className="container pt-0">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <ArticleCard
                                cardLink="article-details"
                                imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                                cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
                                authorName="By Rennie Bradford"
                                readingTime="7 min read"
                                description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <ArticleCard
                                cardLink="article-details"
                                imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                                cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
                                authorName="By Rennie Bradford"
                                readingTime="7 min read"
                                description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <ArticleCard
                                cardLink="article-details"
                                imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                                cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
                                authorName="By Rennie Bradford"
                                readingTime="7 min read"
                                description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <ArticleCard
                                cardLink="article-details"
                                imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                                cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
                                authorName="By Rennie Bradford"
                                readingTime="7 min read"
                                description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <ArticleCard
                                cardLink="article-details"
                                imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                                cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
                                authorName="By Rennie Bradford"
                                readingTime="7 min read"
                                description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <ArticleCard
                                cardLink="article-details"
                                imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                                cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
                                authorName="By Rennie Bradford"
                                readingTime="7 min read"
                                description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <ArticleCard
                                cardLink="article-details"
                                imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                                cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
                                authorName="By Rennie Bradford"
                                readingTime="7 min read"
                                description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <ArticleCard
                                cardLink="article-details"
                                imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                                cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
                                authorName="By Rennie Bradford"
                                readingTime="7 min read"
                                description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <ArticleCard
                                cardLink="article-details"
                                imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                                cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
                                authorName="By Rennie Bradford"
                                readingTime="7 min read"
                                description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
                            />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ArticleSearch;