import {createApi} from 'unsplash-js';

const unsplash=createApi({
    accessKey:`oElXi3EtVojupvPOc-MqLaYJkn14uNy6q1r3W-BScrE`
  });

  let like=false;

  function likeClicked(){
    let favourite=document.querySelectorAll('.favourite');
    favourite.forEach((element)=>{
      element.addEventListener('click',()=>console.log('clicked'))
      like= !like
    })
  }

 

function AbstractArt(){
  

    unsplash.search.getPhotos({
        query:'Abstract Art',
        page:1,
        perPage:12,
        orientation:'portrait'
      }).then(result=>{
        if(result.type==='success'){
          const photos=result.response.results;
          const getUrls=photos.map((i)=>{
            return `
            <div class="image-box">
              <div class="image"> 
                <img id="${i.id}" src="${i.urls.small}"/>
              </div>
              <div class="favourite">${like ? '<i class="fa-solid fa-heart"></i>':'<i class="fa-regular fa-heart"></i>'}</div>
            
            </div>`
          });
          gallery.innerHTML=getUrls.join(' ');
          likeClicked()
          
        }
      });
      

}
export default  AbstractArt 