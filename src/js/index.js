import {createApi} from 'unsplash-js';
import ModernArt from '../categories/ModernArt';
import Classics from '../categories/Classics';
import Cubism from '../categories/Cubism';
import Sculptures from '../categories/Sculptures';
import AbstractArt from '../categories/AbstractArt';
import Home from '../categories/Home';




Home();
 let likedPhotos=[];


const gallery=document.getElementById('gallery');
let modernArt=document.getElementById('modern-art')
let classics=document.getElementById('classics')
let sculptures=document.getElementById('sculptures')
let cubism=document.getElementById('cubism')
let abstractArt=document.getElementById('abstract-art')
let favourite=document.getElementById('favourite');
let title=document.getElementById('title');







modernArt.addEventListener('click',ModernArt);
classics.addEventListener('click',Classics);
cubism.addEventListener('click',Cubism);
sculptures.addEventListener('click',Sculptures);
abstractArt.addEventListener('click',AbstractArt);
title.addEventListener('click',Home);

gallery.addEventListener('click',(e)=>{
    if(e.target.tagName==='IMG'){

        const imageBox=e.target.closest('.image-box');
        const favouriteElements=imageBox.querySelector('.favourite');
     
        const imageId=e.target.getAttribute('id');
        const imageUrl=e.target.getAttribute('src');

        if(favouriteElements.innerHTML.includes('fa-solid')){
          favouriteElements.innerHTML = '<i class="fa-regular fa-heart"></i>';
      } else {
          favouriteElements.innerHTML = '<i class="fa-solid fa-heart"></i>';
      }

        if(!likedPhotos.some(photo=>photo.id===imageId)){
            likedPhotos.push({
                id:imageId,
                url:imageUrl
            })
        }
    }
})


gallery.addEventListener('dblclick',(e)=>{
  console.log('clicked')
  if(e.target.tagName==='IMG'){
    console.log(e.target.id)
  }
})

favourite.addEventListener('click',()=>{

   const addedPhotos=likedPhotos.map(photo=>
    `
            <div class="image-box">
              <div class="image"> 
                <img id="${photo.id}" src="${photo.url}"/>
              </div>
              <div class="favourite"><i class="fa-solid fa-heart"></i></div>
            
            </div>`
            )
  gallery.innerHTML=addedPhotos.join(' ');  
})

