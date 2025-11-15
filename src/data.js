
const getLogoUrl = (name) => {

  const initials = name.split(' ').map(word => word[0]).join('').substring(0, 2);
  
  
  return `https://ui-avatars.com/api/?name=${initials}&background=random&color=FFFFFF&size=128`;
};

export const mockCompanies = [
  {
    id: 1,
    name: 'Graffersid Web and App Development',

    logoUrl: getLogoUrl('Graffersid Web'), 
    location: '816, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P.)',
    city: 'Indore',
    foundedOn: '2016-01-01',
  },
  {
    id: 2,
    name: 'Code Tech Company',

    logoUrl: getLogoUrl('Code Tech'),
    location: '414, Kanha Appartment, Bhawarkua, Indore (M.P.)',
    city: 'Indore',
    foundedOn: '2018-03-15',
  },
  {
    id: 3,
    name: 'Innogent Pvt. Ltd.',

    logoUrl: getLogoUrl('Innogent'),
    location: '910, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P.)',
    city: 'Indore',
    foundedOn: '2020-07-22',
  },
  {
    id: 4,
    name: 'TechMinds Solutions',
 
    logoUrl: getLogoUrl('TechMinds'),
    location: '123, Silicon Valley, Pune',
    city: 'Pune',
    foundedOn: '2019-11-01',
  }
];

export const mockReviews = [

  { id: 101, companyId: 1, reviewerName: 'Rohan Sharma', subject: 'Best Dev Company!', text: 'Great experience working with them. Highly skilled team.', rating: 5 },
  { id: 102, companyId: 1, reviewerName: 'Priya Patel', subject: 'Good, but slow', text: 'The project was delivered, but it took more time than expected.', rating: 3 },
  

  { id: 103, companyId: 2, reviewerName: 'Amit Jain', subject: 'Amazing Work!', text: 'They built my app perfectly. 10/10 would recommend.', rating: 4 },

 
  { id: 104, companyId: 4, reviewerName: 'Sneha Rao', subject: 'Average Service', text: 'The service was okay, nothing extraordinary. Support was decent.', rating: 3 },
  { id: 105, companyId: 4, reviewerName: 'Vikram Singh', subject: 'Excellent Support', text: 'Their support team is top-notch. Solved all my queries.', rating: 5 },
];