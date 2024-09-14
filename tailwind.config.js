/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"], 
  theme: {
    extend: {
      colors: {
        'gray-1': 'rgba(102, 102, 102, 1)',
        'gray-2':'rgba(153, 153, 153, 1)',
        'gray-3':'rgba(77, 77, 77, 1)',
        'gray-4':'rgba(242, 242, 242, 1)',
        'gray-5':'rgba(247, 247, 247, 1)',
        'border-1':'rgba(128, 128, 128, 1)',
        'border-2':'rgba(230, 230, 230, 1)',
        'border-3':'rgba(179, 179, 179, 1)',
        'black-1':'rgba(0, 38, 3, 1)',
        'black-2':'rgba(26, 26, 26, 1)',
        'green-1':'rgba(0, 178, 7, 1)',
        'green-2':'rgba(132, 209, 135, 1)',
        'green-3':'rgba(44, 116, 47, 1)',
        'nav-bg':'rgba(51, 51, 51, 1)',
        'orange-1':'rgba(255, 138, 0, 1)',
        'yellow-1':'rgba(252, 201, 0, 1)',
        'red-1':'rgba(234, 75, 72, 1)',
        'blue-1':'rgba(35, 136, 255, 1)',
        
        
      },
    },
  },
  plugins: [
     require('daisyui'),
  ],
}




