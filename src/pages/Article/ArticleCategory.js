import React, {Component} from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import SectionTitle from '../../components/SectionTitle';
import SearchContainer from "../../components/Search/SearchContainer";

import {
    ArticleCard,
    ArticleCard__Big,
    ArticleCard__Overlay
} from '../../components/Article';
import Carousel from '../../components/Carousel';

// importing images
import CareerAdvice from '../../assets/images/article-category/career-advice.png';
import CoffeeBreak from '../../assets/images/article-category/coffee-break.png';
import Connect from '../../assets/images/article-category/connect.png';
import RestartingCareer from '../../assets/images/article-category/restartingcareer.png';
import Tools from '../../assets/images/article-category/tools.png';

import './ArticleCategory.scss';

class Category extends Component {

    
    render(){
        
        // options for carousel in "other categories"
        const options = {
            loop: false,
            navContainer: false,
            dots: false,
            startPosition: 0,
            margin: 10,
            stagePadding: 16,
            responsive: {
                0: {
                    items: 2,
                },
                768: {
                    items: 4,
                    startPosition: 1,
                },
                992: {
                    items: 4,
                    startPosition: 2,
                    mouseDrag: false
                },
            }
        }

        return (
            <React.Fragment>
                <div className="kk-search text-center">
                    <SearchContainer placeholder="Search by company name, industry or location"/>
                </div>
                <section className="container py-0">
                    <BreadCrumb>
                        <li>Home</li>
                        <li>Articles</li>
                        <li>Category: Career Advice</li>
                    </BreadCrumb>
                </section>
                <section className="container pt-3 pb-0">
                    <div className="article-category__head">
                        <div className="article-category__img">
                            <img className="w-100" src={CareerAdvice} alt="Career Advice" />
                        </div>
                        <div className="article-category__title">
                            <SectionTitle className="mb-2">Career Advice</SectionTitle>
                            <div>19 Articles</div>
                            <p className="article-category__desc">
                                Writer, professor, editor, and commentator. New York Times contributor, author of “Bad Feminist” and “Hunger.” Bestselling author of “A Heartbreaking Work of Staggering Genius” and “The Circle.” Co-founder of McSweeney’s & 826 Valencia. Pulitzer Prize finalist.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container pb-0">
                    <SectionTitle>Recently Published Articles</SectionTitle>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <ArticleCard__Big
                                cardLink="article-details"
                                imgSrc="https://loremflickr.com/560/242" alt="Alternate text for image"
                                cardTitle="Tech Companies Are Getting Free Work Out of Job Applicants"
                                authorName="By Sheeba Chaudhary"
                                readingTime="7 min read"
                                description="The tech industry is built on free work. For every CEO like Mark Zuckerberg, who has said he clocks a relatively modest 50 or 60 hours."
                            />
                        </div>
                        <div className="col-12 col-md-6">
                        <ArticleCard__Big
                            cardLink="article-details"
                            imgSrc="https://loremflickr.com/560/242" alt="Alternate text for image"
                            cardTitle="Tech Companies Are Getting Free Work Out of Job Applicants"
                            authorName="By Sheeba Chaudhary"
                            readingTime="7 min read"
                            description="The tech industry is built on free work. For every CEO like Mark Zuckerberg, who has said he clocks a relatively modest 50 or 60 hours."
                        />
                        </div>
                    </div>
                </section>

                <section className="container pb-0">
                    <SectionTitle>Other Articles</SectionTitle>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <ArticleCard
                                cardLink="article-details"
                                imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                                cardTitle="Google Employees: Our Executives Engaged in Abuse..."
                                authorName="By Sheeba Chaudhary"
                                readingTime="7 min read"
                            />
                        </div>
                        <div className="col-12 col-md-4">
                            <ArticleCard
                                cardLink="article-details"
                                imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                                cardTitle="Everything You Need to Know About Digital Humans"
                                authorName="By Sheeba Chaudhary"
                                readingTime="7 min read"
                            />
                        </div>
                        <div className="col-12 col-md-4">
                            <ArticleCard
                                cardLink="article-details"
                                imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                                cardTitle="Yes to Nose & No to Plastic Surgery"
                                authorName="By Sheeba Chaudhary"
                                readingTime="7 min read"
                            />
                        </div>
                        <div className="col-12 col-md-4">
                            <ArticleCard
                                cardLink="article-details"
                                imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                                cardTitle="Everything You Need to Know About Digital Humans"
                                authorName="By Sheeba Chaudhary"
                                readingTime="7 min read"
                            />
                        </div>
                    </div>
                </section>

                <section className="container">
                    <div className="row">
                        <div className="col-12">
                            <SectionTitle>Other Categories</SectionTitle>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-10 px-0">
                            <Carousel class="article-category__carousel" option={options}>
                                <div class="item">
                                    <ArticleCard__Overlay
                                        cardLink="article-category"
                                        imgSrc={CoffeeBreak} alt="Cofee Break"
                                        cardTitle="Cofee Break"
                                        details="28 Articles"
                                    />
                                </div>
                                <div class="item">
                                    <ArticleCard__Overlay
                                        cardLink="article-category"
                                        imgSrc={Connect} alt="Connect"
                                        cardTitle="Connect"
                                        details="20 Articles"
                                    />
                                </div>
                                <div class="item">
                                    <ArticleCard__Overlay
                                        cardLink="article-category"
                                        imgSrc={RestartingCareer} alt="Restarting your career"
                                        cardTitle="Restarting your career"
                                        details="04 Articles"
                                    />
                                </div>
                                <div class="item">
                                    <ArticleCard__Overlay
                                        cardLink="article-category"
                                        imgSrc={Tools} alt="Tools & Skills"
                                        cardTitle="Tools & Skills"
                                        details="13 Articles"
                                    />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Category;