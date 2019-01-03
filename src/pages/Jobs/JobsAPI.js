// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const JobsAPI = {
  jobs: [
    { number: 1, name: 'UI Designer', position: 'mid level' },
    { number: 2, name: 'UX designer', position: 'senior level' },
    { number: 3, name: 'SEO Specialist', position: 'senior level' },
    { number: 5, name: 'HR Executive', position: 'Mid level' },
    { number: 6, name: 'HR Executive2', position: 'Mid level' },
    { number: 7, name: 'HR Executive3', position: 'Mid level' },
    { number: 8, name: 'HR Executive4', position: 'Mid level' },
    { number: 9, name: 'HR Executive5', position: 'Mid level' },
    { number: 10, name: 'HR Executive6', position: 'Mid level' },
    { number: 11, name: 'HR Executive7', position: 'Mid level' },
    { number: 12, name: 'HR Executive8', position: 'Mid level' },
    { number: 13, name: 'HR Executive9', position: 'Mid level' },
    { number: 14, name: 'HR Executive10', position: 'Mid level' },
    { number: 15, name: 'HR Executive11', position: 'Mid level' },
    { number: 16, name: 'HR Executive12', position: 'Mid level' },
    { number: 17, name: 'HR Executive13', position: 'Mid level' },
    { number: 18, name: 'HR Executive14', position: 'Mid level' },
    { number: 19, name: 'HR Executive15', position: 'Mid level' },
    { number: 20, name: 'HR Executive16', position: 'Mid level' },
    { number: 21, name: 'HR Executive17', position: 'Mid level' },
    { number: 22, name: 'HR Executive18', position: 'Mid level' },
    { number: 23, name: 'HR Executive19', position: 'Mid level' },
    { number: 24, name: 'HR Executive20', position: 'Mid level' },
    { number: 25, name: 'HR Executive21', position: 'Mid level' },
    { number: 26, name: 'HR Executive22', position: 'Mid level' },
    { number: 27, name: 'HR Executive23', position: 'Mid level' },
    { number: 28, name: 'HR Executive24', position: 'Mid level' },

  ],
  all() { return this.jobs; },
  get(id) {
    const isJob = p => p.name === id;
    return (
      this.jobs.find(isJob));
  },
};

export default JobsAPI;
