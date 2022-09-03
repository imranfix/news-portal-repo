
const loadMenuBar = async() =>{
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    const response = await fetch(url);
    const data = await response.json();
     displayMenu(data.data.news_category);
   
}


// catagory section AIP display show- 
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

    // card section API 
    const loadCards = async() =>{
        const url = 'https://openapi.programming-hero.com/api/news/category/01';
        const response = await fetch(url);
        const data = await response.json();
         displayCard(data.data);
       
    }

//   card API display show
    const displayCard = datas =>{
        const  cardBar = document.getElementById('card-bar');
        datas.forEach(data =>{
            console.log(data);
   
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML= `
        <div class="card mb-3 d-flex" >
        <div class="col-md-4 col-sm-6">
        <img src="${data.thumbnail_url
        }" class="image-radious mt-2 img-fluid rounded-start p-3" alt="...">
      </div>
        <div class="col-md-8 col-sm-12">
            <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text text-secondary">${data.details.slice(0, 375) + '...'}</p>

        
        <div class="d-flex mt-2 mb-2">  
            <img src="${data.author.img}" class="test rounded-circle" alt="">
            <h6>${data.author.name}</h6>
            <h5 class="px-5 text-secondary"> <i class="fa-regular fa-eye"></i>${data.total_view}</h5>

            <div><button onclick="loadNewsDetails()" type="button" class="btn btn-info fw-semibold text-white ms-4"  data-bs-toggle="modal" data-bs-target="#newsModal">Details</button></div>
            

            
        </div>
           
        </div>
      </div>
      </div>
     
        ` ;    
        cardBar.appendChild(cardDiv)
        });
        
       } 




// card modal -
const loadNewsDetails = async() =>{
    const url = 'https://openapi.programming-hero.com/api/news/2e78e5e0310c2e9adbb6efb1a263e745';
    const response = await fetch(url);
    const data = await response.json();
     displayNewsDetails(data.data[0]);
   
}

    const displayNewsDetails = data =>{
        console.log(data);
        let modalTitle = document.getElementById('newsModalLabel');
        modalTitle.innerText = data.title;
        let newsDetails = document.getElementById('news-details');
        newsDetails.innerText = data.category_id;
        let newsView = document.getElementById('news-view');
        newsView.innerText =(data.total_view ? data.total_view : 'Total view: No found data');
        
        let detailsModal = document.getElementById('details-modal');
        detailsModal.innerText = data.details.slice(0, 180);
    }




    loadCards();

    loadMenuBar();
