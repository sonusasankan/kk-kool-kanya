import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TextMuted from '../../components/TextMuted/TextMuted';
import BreadCrumb from '../../components/BreadCrumb';
import Avatar from '../../components/Avatar';
import SearchContainer from '../../components/Search/SearchContainer';
import { ArticleCard } from "../../components/Article";

import Author from '../../assets/images/author.jpg';

class ArticleDetails extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="kk-search text-center">
                    <SearchContainer placeholder="Search by company name, industry or location"/>
                </div>
                <section className="container py-0">
                    <BreadCrumb>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/articles">Articles</Link></li>
                        <li><Link to="/article-search">Search results</Link></li>
                        <li><Link to="/article-details">When Are You Going Back? (Or: Maternity Leave is Complicated.)</Link></li>
                    </BreadCrumb>
                    <div className="kk-article-details__title--main">
                        <h2 className="mb-0">When Are You Going Back? (Or: Maternity Leave is Complicated.) </h2>
                    </div>

                    <div className="kk-article-details__author d-flex">
                        <Link to="/author-detail" className="kk-article-details__author__img">
                            <img className="img-fluid" src={Author} alt="Rennie Bradford"></img>
                        </Link>
                        <div className="d-flex justify-content-center flex-column">
                            <Link to="/author-detail" className="kk-article-details__author__name">Rennie Bradford</Link>
                            <TextMuted>
                                <span>15th October 2018</span>
                                <span>5 min read</span>
                            </TextMuted>
                        </div>
                    </div>
                </section>

                {/* article content */}
                <section className="container py-0">
                    
                    <div className="d-flex flex-wrap">
                        <div className="article__banner-img flex-grow-1">
                            <img className="w-100" src="https://loremflickr.com/1160/557" alt="banner" />
                        </div>

                        <div className="article__content__sidebar">
                            <div className="article__content__sidebar__inner d-flex position-sticky">
                                <div className="icon-ic-heart-disable-24 mb-4 mr-2"></div>
                                <div className="icon-ic-heart-disable-24 mb-4 mr-2"></div>
                                <div className="icon-ic-heart-disable-24 mb-4 mr-2"></div>
                                <div className="icon-ic-heart-disable-24 mb-4 mr-2"></div>
                            </div>
                        </div>
                        
                        <div className="article__content">
                            <p>
                            I had a baby in early June. Her name is Lilly and my husband and I agree she’s the coolest person we’ve ever met.
                            </p>
                            <p>
                            When people ask me how I’m doing, I say that I’ve had a pretty soft landing into parenthood. And it’s true — the stars couldn’t have been more aligned. Lilly was born in early June, sparing me the discomfort of being pregnant during a heatwave, a handful of close friends had babies within weeks of me, my husband took off a generous chunk of time, and summer is an ideal time to be unemployed.
                            </p>
                            <p>
                            Now Lilly is four months and change, the age at which they “get fun.” To be honest, I’ve thought she was fun since she was just a strange lump that pooped loudly and made strange gestures, but now she makes me laugh more than I thought possible.
                            </p>
                            <p>
                            I had been freelance consulting after leaving Birchbox, the company I co-founded, and if I’d followed through on my original plan — take three months off, then enlist part-time care so I could start talking to companies — I’d be deep into my job search now.
                            </p>
                            <h3>When to rejoin?</h3>
                            <p>
                            Instead, I realized that three months felt too short, as did four months. Five is just around the corner and the truth is, I’m not in any hurry for a full-time job. And because of the way I’m built, and the reality of being an ambitious woman in our culture, I feel guilty about it. My instinct is to say, “I’m not ready,” but that feels like I’m admitting some fault or weakness that is preventing me from going back to work. It’s not that I’m not ready; it’s that I’m enjoying myself and I am all too aware how quickly this time will pass.
                            </p>
                            <p>
                            If this feels like a non-problem and you’re wondering why I can’t just chill out, welcome to my Type A brain. (I had the same problem with over-engineering my time off.) I know I’m lucky in so many ways, starting with fact that I am in control of my own maternity leave, and have the financial security to take my time finding a job. It’s a privilege to even be wrestling with these questions when so many — the majority of people — have no choice, and far fewer resources than I do.
                            </p>
                            <p>
                            Still, I can’t avoid the existential crises: Am I still myself? Is it ok to feel fulfilled — even in the short term — without a job? And what kind of working mom do I want to be?
                            </p>
                            <p>
                            When I sheepishly told a few friends — successful, ambitious women with babies or young kids — that I was extending my self-imposed maternity leave, every single one of them told me to take as much time as I could. ‘It goes so fast.’ ‘Your older self would tell you not to worry.’ ‘You’ve worked your butt off, work will be there when you get back.’
                            </p>
                            <p>
                            What was striking to me wasn’t just that they were all in agreement—it was that I hadn’t even considered the possibility of taking more than three months before I had Lilly. I was conditioned to carve out three months of maternity bubble time and then expected to shift right into gear. Anything less would risk falling behind and losing the career momentum I’d worked so hard to build.
                            </p>
                            <p>
                            And here’s the thing: Every woman is different, and experiences the first chapter of parenthood differently. For some women, three (or fewer) months might be the right amount of time. In my case, I’ve been surprised at how much I like being a mom, and I’m still getting used to this part of my identity. While it hasn’t erased my former ambitious, work-energized self, that version of me has taken a backseat while my mom-self comes into focus. (Admittedly, I bring the same obsessive planning and optimization to parenthood as I did to work—some things never change.)
                            </p>
                            <p>
                            I told a friend— also a new mom — about how I was conflicted about the idea of “going back.” She immediately understood. “It’s not ‘going back,’” she said, “it’s moving forward.” Meaning you’re not reverting to your former self; you’re growing into your new reality.
                            </p>
                        </div>
                    </div>

                    <div className="article__content__bottom d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center"><span class="icon-ic-heart-active-24 mr-1"></span> 123 likes</div>
                        <div>
                            <span className="icon-ic-heart-disable-24 mr-3"></span>
                            <span className="icon-ic-heart-disable-24 mr-3"></span>
                            <span className="icon-ic-heart-disable-24 mr-3"></span>
                        </div>
                    </div>
                </section>

                {/* article footer */}
                <section className="container pt-0">
                    <div className="row article__readmore__wrapper">
                        <div className="col-12 col-md-6 mt-3">
                            <div className="article__readmore">Read more by</div>
                            <Link to="/author-detail"><Avatar className="mt-2" avatarTitle="Sheeba Chaudhary" /></Link>
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <div className="article__readmore">Read more in</div>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <Avatar className="mt-2" avatarTitle="Restarting your Career" />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Avatar className="mt-2" avatarTitle="Tools & Skills" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* similar article */}
                <section className="article__similar">
                    <div className="container">
                        <h3 className="mb-4">Similar Article</h3>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3">
                                <ArticleCard
                                    cardLink="/article-details"
                                    imgSrc="https://loremflickr.com/260/160" alt="Alternate text"
                                    cardTitle="When Are You Going Back? (Or: Maternity Leave is Complicated.)"
                                    authorName="By Sheeba Chaddha"
                                    readingTime="7 min read"
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <ArticleCard
                                    cardLink="/article-details"
                                    imgSrc="https://loremflickr.com/260/160" alt="Alternate text"
                                    cardTitle="A concise masterclass on how to write infrastructure code"
                                    authorName="By Sheeba Chaddha"
                                    readingTime="7 min read"
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <ArticleCard
                                    cardLink="/article-details"
                                    imgSrc="https://loremflickr.com/260/160" alt="Alternate text"
                                    cardTitle="A concise masterclass on how to write infrastructure code"
                                    authorName="By Sheeba Chaddha"
                                    readingTime="7 min read"
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <ArticleCard
                                    cardLink="/article-details"
                                    imgSrc="https://loremflickr.com/260/160" alt="Alternate text"
                                    cardTitle="Google Employees: Our Executives Engaged in Abuse..."
                                    authorName="By Sheeba Chaddha"
                                    readingTime="7 min read"
                                />
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default ArticleDetails;