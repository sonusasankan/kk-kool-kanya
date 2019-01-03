/*
** data in this file
** list of cities which will be constant
  *cityname
  *imgUrl
**details of companies
  *id
  *Name
*/


var topCompaniesDetails = [
    {
      cityName: 'Bengaluru',
      imgUrl: 'https://loremflickr.com/g/100/100/paris',
      companies: [
        {
          companyName: 'Google India',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 10
        },
        {
          companyName: 'American Express India',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 7
        },
        {
          companyName: 'Ujjivan Financial Services Private Ltd.',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 5
        },
        {
          companyName: 'SAP Labs India Private Ltd',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 8
        },
        {
          companyName: 'Intuit Technology Services',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 5
        },
        {
          companyName: 'Cisco Systems (India) Private Ltd',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 9
        },
        {
          companyName: 'EMC, India',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 4
        },
        {
          companyName: 'Infosys, India',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 6
        },
        {
          companyName: 'American Express India',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 5
        }
      ]
    },
    {
      cityName: 'Delhi',
      imgUrl: 'https://loremflickr.com/g/100/100/paris',
      companies: [
        {
          companyName: 'HCL Technologies',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 10
        },
        {
          companyName: 'Tata Consultancy Services',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 7
        },
        {
          companyName: 'Accenture',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 5
        },
        {
          companyName: 'Genpact',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 8
        },
        {
          companyName: 'Aricent',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 5
        },
        {
          companyName: 'IBM',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 9
        },
        {
          companyName: 'EMC, India',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 4
        },
        {
          companyName: 'Wipro, India',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 6
        }
      ]
    },
    {
      cityName: 'Pune',
      imgUrl: 'https://loremflickr.com/g/100/100/paris',
      companies: [
        {
          companyName: 'Tech Mahindra',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 10
        },
        {
          companyName: 'Cognizant Technology Solutions',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 7
        },
        {
          companyName: 'Accenture',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 5
        },
        {
          companyName: 'Genpact',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 8
        },
        {
          companyName: 'Aricent',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 5
        },
        {
          companyName: 'Amdocs',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 9
        },
        {
          companyName: 'Syntel, India',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 4
        },
        {
          companyName: 'Capegemini, India',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 6
        }
      ]
    },
    {
      cityName: 'Hyderabad',
      imgUrl: 'https://loremflickr.com/g/100/100/paris',
      companies: [
        {
          companyName: 'Deloitte',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 10
        },
        {
          companyName: 'Amazon',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 7
        },
        {
          companyName: 'Accenture',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 5
        },
        {
          companyName: 'Genpact',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 8
        },
        {
          companyName: 'Oracle',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 5
        },
        {
          companyName: 'Amdocs',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 9
        },
        {
          companyName: 'Microsoft, India',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 4
        },
        {
          companyName: 'Capegemini, India',
          imgUrl: 'https://loremflickr.com/g/100/100/rio',
          rating: 6
        }
      ]
    }
  ]
var response = JSON.stringify(topCompaniesDetails);

var getDetails = function(){
  return response;
}

module.exports = getDetails;