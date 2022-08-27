const wrapper = document.querySelector('.wrapper');
const footer = document.querySelector('.footer');
const data = [
    {
       
        bolim: 'ABOUT US',
        info: 'About Us',
        contact: 'Contact Us',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        email:'© Copyright 2022 | drile | All right reserved.',
        
    },
    {
       
        bolim: 'ABOUT US',
        info: 'About Us',
        contact: 'Contact Us',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        email:'© Copyright 2022 | drile | All right reserved.',
        
    },
    {
       
        bolim: 'ABOUT US',
        info: 'About Us',
        contact: 'Contact Us',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        email:'© Copyright 2022 | drile | All right reserved.',
        
    },
 
]

data.map((item) =>{
    footer.innerHTML +=`
    <div class = "footerJs">
   
    <div class = "yunalishlar">
    <p> ${item.bolim} </p>
    <a href="#">${item.info}</a>
    <a href="#">${item.contact}</a>
    <a href="#">${item.privacy}</a>
    <a href="#">${item.terms}</a>
    </div>
    


    
    
    
    
    
    
    </div>
    <div class = "end">
    <a href="#">© Copyright 2022 | drile | All right reserved.</a>
    </div>
    
    `
})

