import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import JobsAPI from './Jobs/JobsAPI';

const Job = (props) => {
  const job = JobsAPI.get(props.match.params.id);
  if (!job) {
    return <div>Sorry, but the job was not found</div>;
  }
  return (
    <div>
      <h1>
        {job.name}
        {' '}
(#
        {job.number}
)
      </h1>
      <h2>
Position:
        {job.position}
      </h2>
      <Link to="/career">Back</Link>
    </div>
  );
};

const allJobs = () => (
  <ul>
    {JobsAPI.all().map(p => (
      <li key={p.number}>
        <Link to={`/career/${p.name}`}>{p.name}</Link>
      </li>
    ))}
  </ul>
);

class Career extends Component {
  render() {
    // const { jobs } = this.state;
    return (
      <div>
        <Switch>
          <Route exact path="/career" component={allJobs} />
          <Route url="" path="/career/:id" component={Job} />
        </Switch>
      </div>
    );
  }
}

export default Career;
