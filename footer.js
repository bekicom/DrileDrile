const footer = document.querySelector("footer");
const footerJs = document.querySelector(".footerJs");

const logo = [
    {
        logo: 'Drive'
    }
];

// logo.map((iteem) =>{
//     footer.innerHTML +=`
//     <div  class = "logo">
//     <p>${iteem.logo}</p>
//     </div>
    
//     `
// })




const data = [
    {
        logo: 'ABOUT US',
        abaot: 'About Us',
        contact: 'Contact Us',
        privac: 'Privacy Policy',
        terms: 'Terms of Service',
    },
    
    {
        logo: 'COMPANY',
        abaot: ' Explore World',
        contact: 'Trending Video',
        privac: 'Book a Trip',
        terms: 'Visit Gallery',
    },
    {
        logo: 'USEFUL LINKS',
        abaot: 'Buy this theme',
        contact: 'Drile Landing',
        privac: 'Documentation',
        terms: 'Video tutorial',
    },
    {
        logo: 'FOLLOW US',
        abaot: 'Facebook',
        contact: 'Twitter',
        privac: 'Instagram',
        terms: '',
    },
    
];




data.forEach((item) =>{
    footerJs.innerHTML +=`
   
    <div class="yonalish">
    <p>${item.logo}</p>
    <a href="#">${item.abaot}</a>
    <a href="#">${item.contact}</a>
    <a href="#">${item.privac}</a>
    <a href="#">${item.terms}</a>
    </div>
        
    
    
    
    `

});

