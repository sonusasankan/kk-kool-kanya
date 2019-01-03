var companies = [
    {
      id: 1,
      name: "Godrej",
      rating: 4.5,
      location: ["bangalore", "Chennai", "Mumbai"],
      industry: "Consumer Products",
      totalOpenings: 20,
      image: "https://picsum.photos/200/150/?random"
    },
    {
      id: 2,
      name: "IBM",
      rating: 4.0,
      location: ["bangalore", "Chennai"],
      industry: "Information Technology",
      totalOpenings: 12,
      image: "https://picsum.photos/200/150/?random"

    },
    {
      id: 3,
      name: "Tata Consultancy Service",
      rating: 4.2,
      location: ["bangalore"],
      industry: "Information Technology",
      totalOpenings: 20,
      image: "https://picsum.photos/200/150/?random"

    },
    {
      id: 4,
      name: "Atlassian",
      rating: 4.3,
      location: ["Indore"],
      industry: "Information technology",
      totalOpenings: 25,
      image: "https://picsum.photos/200/150/?random"

    },
    {
      id: 5,
      name: "paytm",
      rating: 4.0,
      location: ["bangalore"],
      industry: "Fintech",
      totalOpenings: 50,
      image: "https://picsum.photos/200/150/?random"

    },
    {
      id: 6,
      name: "Facebook",
      rating: 4.5,
      location: ["bangalore", "gurgaon"],
      industry: "Social network",
      totalOpenings: 20,
      image: "https://picsum.photos/200/150/?random"

    },
    {
      id: 7,
      name: "flipkart",
      rating: 4.1,
      location: ["bangalore"],
      industry: "Information technology",
      totalOpenings: 34,
      image: "https://picsum.photos/200/150/?random"

    },
    {
      id: 8,
      name: "amazon",
      rating: 4.5,
      location: ["hyderabad"],
      industry: "information technology",
      totalOpenings: 24,
      image: "https://picsum.photos/200/150/?random"

    },
    {
      id: 9,
      name: "Uber",
      rating: 4.0,
      location: ["bangalore"],
      industry: "Information technology",
      totalOpenings: 56,
      image: "https://picsum.photos/200/150/?random"

    },
    {
      id: 10,
      name: "Swiggy",
      rating: 3.5,
      location: ["bangalore"],
      industry: "information technology",
      totalOpenings: 14,
      image: "https://picsum.photos/200/150/?random"

    }
  ]

var response = JSON.stringify(companies);

var getCompanies = function() {
  return response;
};

module.exports = getCompanies;
