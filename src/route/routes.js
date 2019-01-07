import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import {Article, ArticleDetails, ArticleCategory, ArticleSearch} from '../pages/Article/index';
import AuthorDetails from '../pages/Author';
import Career from '../pages/Career';
import Team from '../pages/Team';
import Posts from '../pages/Posts';
import Companies from '../pages/Companies/Companies';
import CompanyDescription from '../pages/CompanyDescription';
import CompanySearch from '../pages/CompanySearch';
import jobLanding from '../pages/Jobs/JobLanding';
import jobDescription from '../pages/Jobs/JobsDescription';
import Profile from '../pages/Profile';
import EditProfile from '../pages/Profile/EditProfile';
import Saved from '../pages/Saved/Saved';
import Setting, {EditSettings} from '../pages/Setting';

const Main = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/articles" component={Article} />
      <Route exact path="/about" component={About} />
      <Route exact path="/article-category" component={ArticleCategory} />
      <Route exact path="/article-details" component={ArticleDetails} />
      <Route exact path="/article-search" component={ArticleSearch} />
      <Route exact path="/author-detail" component={AuthorDetails} />
      <Route exact path="/career" component={Career} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/companies" component={Companies} />
      <Route exact path="/company-description" component={CompanyDescription} />
      <Route exact path="/company-search-results" component={CompanySearch} />
      <Route exact path="/jobs" component={jobLanding} />
      <Route exact path="/job-description" component={jobDescription} />
      <Route exact path="/favourites" component={Saved} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/edit-profile" component={EditProfile} />
      <Route exact path="/settings" component={Setting} />
      <Route exact path="/edit-settings" component={EditSettings} />
    </Switch>
);

export default Main;
