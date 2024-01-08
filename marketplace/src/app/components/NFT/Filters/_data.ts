export const colorFilter = {
    defaultValue: 'black',
    options: [
      { label: 'Black', value: 'black' },
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
      { label: 'Purple', value: 'purple' },
    ],
  }
  
  export const sizeFilter = {
    defaultValue: 'kindle',
    options: [
      { label: 'kindle', value: 'kindle' },
      { label: 'print', value: 'print' },
      { label: 'both', value: 'both' },
    ],
  }
  
  export const priceFilter = {
    formatOptions: {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    },
    defaultValue: [20, 25],
    min: 20,
    max: 100,
  }
  
  export const filterTags = ['Mens', 'kindle', '$0-$200', 'Black']
  
  export const blueFilters = {
    defaultValue: ['harper', 'wiley'],
    options: [
      { label: `O'Reilley`, value: `o'reilley`, count: 18 },
      { label: 'Harper', value: 'harper', count: 6 },
      { label: 'Wiley', value: 'wiley', count: 9 },
      { label: 'MIT', value: 'mit', count: 3 },
      { label: 'Harvard', value: 'harvard', count: 2 },
      { label: 'Collins', value: 'collins', count: 1 },
    ],
  }
  
  export const genderFilter = {
    defaultValue: [],
    options: [
      { label: 'Applications', count: 18, value: 'apps' },
      { label: 'Cutting-edge', count: 24, value: 'breakthrough' },
      { label: 'Gaming', count: 2, value: 'gaming' },
    ],
  }
  
//   @dev - Adjust as needed for proper routing between subpages
  export const breadcrumbData = [
    { label: 'Home', slug: '/' },
    {
      label: 'Market',
      slug: '/',
    },
    {
      label: 'Book Collections',
      slug: 'market/books',
    },
  ]