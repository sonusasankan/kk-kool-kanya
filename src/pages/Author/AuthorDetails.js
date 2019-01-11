import React from 'react';
import {Link} from 'react-router-dom';

import BreadCrumb from '../../components/BreadCrumb';
import SearchContainer from '../../components/Search/SearchContainer';
import AuthorDetailsHeader from './style';
import SectionTitle from '../../components/SectionTitle';
import {ArticleCard__Big, ArticleCard} from '../../components/Article';

//importing custom icons
import {IcFacebookOutline32, IcLinkedin32, IcTwitter32, IcMail32} from '../../components/IconSet';

import Author from '../../assets/images/author.jpg';

const authorDetails = () => (
    <React.Fragment>
        <div className="kk-search text-center">
            <SearchContainer placeholder="Search by company name, industry or location"/>
        </div>
        <AuthorDetailsHeader className="container py-0">
            <BreadCrumb>
                <li>Home</li>
                <li>Articles</li>
                <li>Author: Rennie BradFord</li>
            </BreadCrumb>

            <div className="kk-author-detail__author">
                <Link to="/author-detail" className="kk-author-detail__author__img">
                    <img className="w-100" src={Author} alt="Rennie Bradford"></img>
                </Link>
                <div className="kk-author-detail__author__desc">
                    <div className="kk-author-detail__author__title__wrapper">
                        <Link to="/author-detail" className="kk-author-detail__author__title">
                            <h2 className="mb-0">Rennie Bradford</h2>
                            <div className="kk-author-detail__author__designation">People's Manager</div>
                        </Link>
                        <div className="d-flex align-items-end kk-author-detail__author__social__wrapper">
                            Follow me on:
                            <div className="kk-author-detail__author__social">
                                <a href="facebook.com" className="ml-3"><IcFacebookOutline32 /></a>
                                <a href="twitter.com" className="ml-3"><IcLinkedin32 /></a>
                                <a href="linkedin.com" className="ml-3"><IcTwitter32 /></a>
                                <a href="instagram.com" className="ml-3"><IcMail32 /></a>
                            </div>
                        </div>
                    </div>
                    <div className="kk-author-detail__author__details">
                        <p>
                            Writer, professor, editor, and commentator. New York Times contributor, author of “Bad Feminist” and “Hunger.” Bestselling author of “A Heartbreaking Work of Staggering Genius” and “The Circle.” Co-founder of McSweeney’s & 826 Valencia. Pulitzer Prize finalist.
                        </p>
                        <Link to="/" className="kk-author-detail__author__count">19 Articles</Link>
                    </div>
                </div>
            </div>
        </AuthorDetailsHeader>

        <section className="container">
            <SectionTitle>Recently Published Articles by Rennie Bradford</SectionTitle>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <ArticleCard__Big
                        cardLink="/article-details"
                        imgSrc="https://loremflickr.com/560/240" alt="Alternate text for image"
                        cardTitle="Tech Companies Are Getting Free Work Out of Job Applicants"
                        authorName="By Sheeba Chaudhary"
                        readingTime="7 min read"
                        description="The tech industry is built on free work. For every CEO like Mark Zuckerberg, who has said he clocks a relatively modest 50 or 60 hours."
                    />
                </div>
                <div className="col-12 col-lg-6">
                    <ArticleCard__Big
                        cardLink="/article-details"
                        imgSrc="https://loremflickr.com/560/240" alt="Alternate text for image"
                        cardTitle="Coffee vs. beer: which drink makes you more creative?"
                        authorName="By Sheeba Chaudhary"
                        readingTime="7 min read"
                        description="The tech industry is built on free work. For every CEO like Mark Zuckerberg, who has said he clocks a relatively modest 50 or 60 hours."
                    />
                </div>
            </div>
        </section>

        <section className="container pt-0">
        <SectionTitle>Other Articles</SectionTitle>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <ArticleCard
                        cardLink="/article-details"
                        imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                        cardTitle="Design for Everyone: How Universal Design Makes Technology Better for All of Us"
                        authorName="By Sheeba Chaudhary"
                        readingTime="7 min read"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <ArticleCard
                        cardLink="/article-details"
                        imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                        cardTitle="Everything You Need to Know About Digital Humans
                        Meet the lifelike creations gaining fame and followers in the real world"
                        authorName="By Sheeba Chaudhary"
                        readingTime="7 min read"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <ArticleCard
                        cardLink="/article-details"
                        imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                        cardTitle="Yes to Nose & No to Plastic Surgery"
                        authorName="By Sheeba Chaudhary"
                        readingTime="7 min read"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <ArticleCard
                        cardLink="/article-details"
                        imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                        cardTitle="This Mindset Shift I Learned From a Guru and The Smartest..."
                        authorName="By Sheeba Chaudhary"
                        readingTime="7 min read"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <ArticleCard
                        cardLink="/article-details"
                        imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                        cardTitle="When My Father Told Me I Wasn’t Bright, It Changed My Life"
                        authorName="By Sheeba Chaudhary"
                        readingTime="7 min read"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <ArticleCard
                        cardLink="/article-details"
                        imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                        cardTitle="The Queer Case for Moving Away From Your Hometown"
                        authorName="By Sheeba Chaudhary"
                        readingTime="7 min read"
                    />
                </div>
            </div>
        </section>
    </React.Fragment>
)

export default authorDetails;