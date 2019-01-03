var majorIndustry = [
    {
        sector: 'Banking',
        numberOfCompanies: 126
    },
    {
        sector: 'Textile',
        numberOfCompanies: 16
    },
    {
        sector: 'Chemical',
        numberOfCompanies: 12
    },
    {
        sector: 'Petroleum',
        numberOfCompanies: 26
    },
    {
        sector: 'Software',
        numberOfCompanies: 8
    },
    {
        sector: 'Food Processing',
        numberOfCompanies: 321
    },
    {
        sector: 'Pottery',
        numberOfCompanies: 45
    },
    {
        sector: 'Telecom',
        numberOfCompanies: 6
    },
    {
        sector: 'Machinery',
        numberOfCompanies: 312
    },
    {
        sector: 'Logistics',
        numberOfCompanies: 1
    },
    {
        sector: 'Automobile',
        numberOfCompanies: 24
    },
]

var response = JSON.stringify(majorIndustry);

var getMajorIndustry = function(){
    return response;
}

module.exports = getMajorIndustry;