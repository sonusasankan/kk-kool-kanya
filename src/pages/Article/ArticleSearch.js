import React, {Component} from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Dropdown from '../../components/Dropdown';
import Capsule from '../../components/Cards/Capsule';
import Carousel from '../../components/Carousel';
import SearchContainer from '../../components/Search/SearchContainer';
import { ArticleCard } from '../../components/Article';

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

    componentDidMount(){
        // console.log(this.refs.trigger('refresh.owl.carousel'))
    }

    render(){
        return(
            <React.Fragment>
                <div className="kk-search text-center">
                    <SearchContainer placeholder="Search by company name, industry or location"/>
                </div>
                <section className="container py-0">
                    <BreadCrumb>
                        <li>Home</li>
                        <li>Articles</li>
                        <li>How to start with UX</li>
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
                    <Carousel option={option} ref="article_category">
                        <div className="item">

                        {/* pass title as an parameter for _selectCategory*/}
                            <div onClick={this._selectCategory.bind(this, "Career Advice")} >
                                <Capsule
                                    isSelected = {this.state.selected.includes('Career Advice')}
                                    imgSrc="https://loremflickr.com/44/44"
                                    imgAlt="capsule image"
                                    title="Career Advice"
                                />
                            </div>
                        </div>
                        <div className="item">
                            <div onClick={this._selectCategory.bind(this, "Coffee Break")}>
                                <Capsule
                                    isSelected = {this.state.selected.includes('Coffee Break')}
                                    imgSrc="https://loremflickr.com/44/44"
                                    imgAlt="capsule image"
                                    title="Coffee Break"
                                />
                            </div>
                        </div>
                        <div className="item">
                            <div onClick={this._selectCategory.bind(this, "Connect")}>
                                <Capsule
                                    isSelected = {this.state.selected.includes('Connect')}
                                    imgSrc="https://loremflickr.com/44/44"
                                    imgAlt="capsule image"
                                    title="Connect"
                                />
                            </div>
                        </div>
                        <div className="item">
                           <div onClick={this._selectCategory.bind(this, "Restarting your Career")}>
                                <Capsule
                                    isSelected = {this.state.selected.includes('Restarting your Career')}
                                    imgSrc="https://loremflickr.com/44/44"
                                    imgAlt="capsule image"
                                    title="Restarting your Career"
                                />
                           </div>
                        </div>
                        <div className="item">
                            <div onClick={this._selectCategory.bind(this, "Tools & Skills")}>
                                <Capsule
                                    isSelected = {this.state.selected.includes('Tools & Skills')}
                                    imgSrc="https://loremflickr.com/44/44"
                                    imgAlt="capsule image"
                                    title="Tools & Skills"
                                />
                            </div>
                        </div>
                    </Carousel>
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
// const option = {
//     autoWidth: true,
//     margin: 16,
//     nav:false,
//     dots: false,
//     responsive:{
//         768:{
//             margin: 32
//         }
//     }
// };

// function toggleSelect(e){
//     e.target.classList.toggle('selected');
// }

// const articleSearch = () =>(
//     <React.Fragment>
//         <div className="kk-search text-center">
//             <SearchContainer placeholder="Search by company name, industry or location"/>
//         </div>
//         <section className="container py-0">
//             <BreadCrumb>
//                 <li>Home</li>
//                 <li>Articles</li>
//                 <li>How to start with UX</li>
//             </BreadCrumb>
//             <div className="article-search__header__wrapper">
//                 <div className="article-search__header">
//                     <h3>How to start with UX</h3>
//                     <span>48 Articles</span>
//                 </div>
//                 <div className="d-flex dropdown">
//                     <div className="dropdown__title">Sort</div>
//                     <Dropdown
//                         options={['Latest', 'Popularity', 'Reading Time']}
//                         onSelect={console.log(this)}
//                         defualtOption="Latest"
//                     />
//                 </div>
//             </div>
//         </section>

//         <section className="container article-search__carousel">
//             <Carousel option={option}>
//                 <div className="item">
//                     <Capsule
//                         imgSrc="https://loremflickr.com/44/44"
//                         imgAlt="capsule image"
//                         title="Career Advice"
//                     />
//                 </div>
//                 <div className="item">
//                     <Capsule
//                         isSelected
//                         imgSrc="https://loremflickr.com/44/44"
//                         imgAlt="capsule image"
//                         title="Coffee Break"
//                     />
//                 </div>
//                 <div className="item">
//                     <Capsule
//                         imgSrc="https://loremflickr.com/44/44"
//                         imgAlt="capsule image"
//                         title="Connect"
//                     />
//                 </div>
//                 <div className="item">
//                     <Capsule
//                         imgSrc="https://loremflickr.com/44/44"
//                         imgAlt="capsule image"
//                         title="Restarting your Career"
//                     />
//                 </div>
//                 <div className="item">
//                     <Capsule
//                         imgSrc="https://loremflickr.com/44/44"
//                         imgAlt="capsule image"
//                         title="Tools & Skills"
//                     />
//                 </div>
//             </Carousel>
//         </section>

//         <section className="container pt-0">
//             <div className="row">
//                 <div className="col-12 col-md-6 col-lg-4">
//                     <ArticleCard
//                         cardLink="article-details"
//                         imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
//                         cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
//                         authorName="By Rennie Bradford"
//                         readingTime="7 min read"
//                         description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
//                     />
//                 </div>
//                 <div className="col-12 col-md-6 col-lg-4">
//                     <ArticleCard
//                         cardLink="article-details"
//                         imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
//                         cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
//                         authorName="By Rennie Bradford"
//                         readingTime="7 min read"
//                         description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
//                     />
//                 </div>
//                 <div className="col-12 col-md-6 col-lg-4">
//                     <ArticleCard
//                         cardLink="article-details"
//                         imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
//                         cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
//                         authorName="By Rennie Bradford"
//                         readingTime="7 min read"
//                         description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
//                     />
//                 </div>
//                 <div className="col-12 col-md-6 col-lg-4">
//                     <ArticleCard
//                         cardLink="article-details"
//                         imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
//                         cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
//                         authorName="By Rennie Bradford"
//                         readingTime="7 min read"
//                         description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
//                     />
//                 </div>
//                 <div className="col-12 col-md-6 col-lg-4">
//                     <ArticleCard
//                         cardLink="article-details"
//                         imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
//                         cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
//                         authorName="By Rennie Bradford"
//                         readingTime="7 min read"
//                         description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
//                     />
//                 </div>
//                 <div className="col-12 col-md-6 col-lg-4">
//                     <ArticleCard
//                         cardLink="article-details"
//                         imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
//                         cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
//                         authorName="By Rennie Bradford"
//                         readingTime="7 min read"
//                         description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
//                     />
//                 </div>
//                 <div className="col-12 col-md-6 col-lg-4">
//                     <ArticleCard
//                         cardLink="article-details"
//                         imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
//                         cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
//                         authorName="By Rennie Bradford"
//                         readingTime="7 min read"
//                         description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
//                     />
//                 </div>
//                 <div className="col-12 col-md-6 col-lg-4">
//                     <ArticleCard
//                         cardLink="article-details"
//                         imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
//                         cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
//                         authorName="By Rennie Bradford"
//                         readingTime="7 min read"
//                         description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
//                     />
//                 </div>
//                 <div className="col-12 col-md-6 col-lg-4">
//                     <ArticleCard
//                         cardLink="article-details"
//                         imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
//                         cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
//                         authorName="By Rennie Bradford"
//                         readingTime="7 min read"
//                         description="A great way to screw up your company is to get into the habit of blaming your suppliers, the market, your staff or your or your for your habit of blaming suppliers"
//                     />
//                 </div>
//             </div>
//         </section>
//     </React.Fragment>
// )

// export default articleSearch;