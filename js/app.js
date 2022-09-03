
const loadMenuBar = async() =>{
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    const response = await fetch(url);
    const data = await response.json();
     displayMenu(data.data.news_category);
   
}


// show display 
const displayMenu = datas =>{
     const  menuBar = document.getElementById('menu-bar');
     for(const data of datas){
         console.log(data);

     const menuDiv = document.createElement('div');
     menuDiv.classList.add('a');
     menuDiv.innerHTML= `
           <a class=" text-decoration-none fw-semibold text-secondary ms-1 px-2" href="#">${data.category_name}</a>
     ` ;    
     menuBar.appendChild(menuDiv)
     }
     
    } 
    
    loadMenuBar();
