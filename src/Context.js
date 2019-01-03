import React, { Component } from 'react';

export const allJobs = [{
  id: '1',
  company: 'Google',
  position: 'Software Engineer',
  industry: 'Information Technology',
  location: 'Bangalore',
  rating: '4.5',
  label: 'Women Safety',
},
{
  id: '2',
  company: 'Axis',
  position: 'Account Manager',
  industry: 'Banking',
  location: 'Delhi',
  rating: '3.8',
  label: 'Salary & Benefits',
},
{
  id: '3',
  company: 'Cisco',
  position: 'HR Manager',
  industry: 'Information Technology',
  location: 'Pune',
  rating: '3.5',
  label: 'Learning opportunities',
},
{
  id: '4',
  company: 'Accenture',
  position: 'Project Manager',
  industry: 'Information Technology',
  location: 'Bangalore',
  rating: '4.1',
  label: 'Female Representatives',
},
{
  id: '5',
  company: 'Republic',
  position: 'News Reader',
  industry: 'Media',
  location: 'Delhi',
  rating: '3.2',
  label: 'Maternity Leaves',
},
{
  id: '6',
  company: 'myCompany',
  position: 'News Reader',
  industry: 'business',
  location: 'kochi',
  rating: '3.2',
  label: 'Maternity Leaves',
},
{
  id: '7',
  company: 'Wipro',
  position: 'HR Manager',
  industry: 'business',
  location: 'Bangalore',
  rating: '3.2',
  label: 'Maternity Leaves',
},
{
  id: '8',
  company: 'Netbramha',
  position: 'UX Designer',
  industry: 'IT',
  location: 'Bangalore',
  rating: '3.2',
  label: 'Work life balance',
},
{
  id: '9',
  company: 'Mindtree',
  position: 'Devops',
  industry: 'IT',
  location: 'kochi',
  rating: '3.2',
  label: 'Salary & Benefits',
},
{
  id: '10',
  company: 'American Express',
  position: 'fraud analytics',
  industry: 'Fintech',
  location: 'Bangalore',
  rating: '3.2',
  label: 'Maternity Leaves',
},
];
export const Context = React.createContext({
  jobs: allJobs,
});

export class Provider extends Component {
  render() {
    return (
      <Context.Provider value={allJobs}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

// export const Consumer = Context.Consumer;
