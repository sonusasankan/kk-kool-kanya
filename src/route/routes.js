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
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/articles" component={Article} />
      <Route path="/about" component={About} />
      <Route path="/article-category" component={ArticleCategory} />
      <Route path="/article-details" component={ArticleDetails} />
      <Route path="/article-search" component={ArticleSearch} />
      <Route path="/author-detail" component={AuthorDetails} />
      <Route path="/career" component={Career} />
      <Route path="/team" component={Team} />
      <Route path="/posts" component={Posts} />
      <Route path="/companies" component={Companies} />
      <Route path="/company-description" component={CompanyDescription} />
      <Route path="/company-search-results" component={CompanySearch} />
      <Route path="/jobs" component={jobLanding} />
      <Route path="/job-description" component={jobDescription} />
      <Route path="/favourites" component={Saved} />
      <Route path="/profile" component={Profile} />
      <Route path="/edit-profile" component={EditProfile} />
      <Route path="/settings" component={Setting} />
      <Route path="/edit-settings" component={EditSettings} />
    </Switch>
  </div>
);

export default Main;
