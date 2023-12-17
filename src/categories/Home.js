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

function Home(){
    unsplash.search.getPhotos({
        query:`Classic Art`,
        page:1,
        perPage:12,
        orientation:'portrait'
      }).then(result=>{
        if(result.type==='success'){
          const photos=result.response.results;
          console.log(photos)
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
        }else{
          console.error("Something Went Wrong:",result.errors);
        }
      }).catch(error => {
        console.error('Error:', error);
    })
      

}
export default  Home 