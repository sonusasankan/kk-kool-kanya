import React, { Component } from 'react';

import "../Article/Article.scss";
import Carousel from '../../components/Carousel';
import SectionTitle from '../../components/SectionTitle';
import SearchContainer from '../../components/Search/SearchContainer';

import {
  ArticleCard,
  ArticleCard__Big,
  ArticleCard__Trending,
  ArticleCard__Overlay
} from "../../components/Article";

class Article extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="kk-search text-center">
            <SearchContainer placeholder="Search by company name, industry or location"/>
        </div>
        {/* Featured Categories starts */}
        <section className="container pb-0">
          <div className="row">
            <div className="col-12">
              <SectionTitle>Featured Categories</SectionTitle>
            </div>
          </div>
          <div className="row">
            <div className="col-12 px-0">
              <Carousel>
                <div class="item">
                    <ArticleCard__Overlay
                        cardLink="article-category"
                        imgSrc="https://loremflickr.com/216/262" alt="Alternate text for image"
                        cardTitle="Career Advice"
                        details="28 Articles"
                    />
                </div>
                <div class="item">
                    <ArticleCard__Overlay
                        cardLink="article-category"
                        imgSrc="https://loremflickr.com/216/262" alt="Alternate text for image"
                        cardTitle="Coffee Break"
                        details="20 Articles"
                    />
                </div>
                <div class="item">
                  <ArticleCard__Overlay
                        cardLink="article-category"
                        imgSrc="https://loremflickr.com/216/262" alt="Alternate text for image"
                        cardTitle="Connect"
                        details="04 Articles"
                    />
                </div>
                <div class="item">
                    <ArticleCard__Overlay
                        cardLink="article-category"
                        imgSrc="https://loremflickr.com/216/262" alt="Alternate text for image"
                        cardTitle="Restarting your career"
                        details="13 Articles"
                    />
                </div>
                <div class="item">
                    <ArticleCard__Overlay
                        cardLink="article-category"
                        imgSrc="https://loremflickr.com/216/262" alt="Alternate text for image"
                        cardTitle="Tools & Skills"
                        details="15 Articles"
                    />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        {/* Featured Categories ends */}

        <section className='container'>
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-6">
              {/* Editor Picks start */}
              <div className="row section-bottom-margin">
                <div className="col-12">
                  <SectionTitle>Editor Picks</SectionTitle>
                </div>
                <div className="col-12">
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
                  <ArticleCard
                    cardLink="article-details"
                    imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                    cardTitle="Morning Rituals & How to Stay Grounded in Times of Change"
                    authorName="By Sheeba Chaddha"
                    readingTime="7 min read"
                    
                  />
                </div>
                <div className="col-12 col-md-6">
                  <ArticleCard
                    cardLink="article-details"
                    imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                    cardTitle="So I’m Not As Great As I Thought I Was: The Bright Side"
                    authorName="By Sheeba Chaddha"
                    readingTime="7 min read"
                  />
                </div>
              </div>
              {/* editor picks end */}

              {/* recently published start */}
              <div className="row">
                <div className="col-12">
                <SectionTitle
                  link="article-search"
                  linkText = "View All"
                >Recently Published</SectionTitle>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <ArticleCard
                        cardLink="article-details"
                        imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                        cardTitle="When Are You Going Back? (Or: Maternity Leave is Complicated.)"
                        authorName="By Sheeba Chaddha"
                        readingTime="7 min read"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <ArticleCard
                        cardLink="article-details"
                        imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                        cardTitle="Google Employees: Our Executives Engaged in Abuse..."
                        authorName="By Sheeba Chaddha"
                        readingTime="7 min read"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <ArticleCard
                        cardLink="article-details"
                        imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                        cardTitle="Morning Rituals & How to Stay Grounded in Times of Change"
                        authorName="By Sheeba Chaddha"
                        readingTime="7 min read"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <ArticleCard
                        cardLink="article-details"
                        imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                        cardTitle="So I’m Not As Great As I Thought I Was: The Bright Side"
                        authorName="By Sheeba Chaddha"
                        readingTime="7 min read"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <ArticleCard
                        cardLink="article-details"
                        imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                        cardTitle="When Are You Going Back? (Or: Maternity Leave is Complicated.)"
                        authorName="By Sheeba Chaddha"
                        readingTime="7 min read"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <ArticleCard
                        cardLink="article-details"
                        imgSrc="https://loremflickr.com/260/160" alt="Alternate text for image"
                        cardTitle="Google Employees: Our Executives Engaged in Abuse..."
                        authorName="By Sheeba Chaddha"
                        readingTime="7 min read"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* recently published end */}
            </div>

            {/* tending start */}
            <div className="col-12 col-lg-6">
              <div className="bottom-clamped">
                <div className="row">
                  <div className="col-12">
                    <SectionTitle>Trending</SectionTitle>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-12">
                    <ArticleCard__Trending
                      cardLink="article-details"
                      imgSrc="https://loremflickr.com/160/127" alt="Alternate text for image"
                      cardTitle="Tech Companies Are Getting Free Work Out of Job Applicants"
                      authorName="By Sheeba Chaddha"
                      readingTime="7 min read"
                    />
                  </div>
                  <div className="col-12 col-lg-12">
                    <ArticleCard__Trending
                      cardLink="article-details"
                      imgSrc="https://loremflickr.com/160/127" alt="Alternate text for image"
                      cardTitle="Why Every Entrepreneur Should Watch the Bohemian Rhapsody Movie"
                      authorName="By Sheeba Chaddha"
                      readingTime="7 min read"
                    />
                  </div>
                  <div className="col-12 col-lg-12">
                    <ArticleCard__Trending
                      cardLink="article-details"
                      imgSrc="https://loremflickr.com/160/127" alt="Alternate text for image"
                      cardTitle="How Quitting My Job Turned Me Into a Compulsive Liar (Temporarily)"
                      authorName="By Sheeba Chaddha"
                      readingTime="7 min read"
                    />                  
                  </div>
                  <div className="col-12 col-lg-12">
                    <ArticleCard__Trending
                      cardLink="article-details"
                      imgSrc="https://loremflickr.com/160/127" alt="Alternate text for image"
                      cardTitle="Productivity culture, cognitive triage and the pseudo-commensurability of the to-do list"
                      authorName="By Sheeba Chaddha"
                      readingTime="7 min read"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* trending end */}
          </div>
        </section>

      </React.Fragment>
    );
  }
}

export default Article;

