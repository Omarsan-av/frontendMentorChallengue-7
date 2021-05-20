let click = 0;
let updateClick = 0;
const ipad = window.matchMedia('screen and (max-width: 768px)');
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');

ipad.addListener(validation)

function validation(event)
{
      if(event.matches)
      {
         burgerButton.addEventListener('click', hideShow);
      }

      else
      {
         burgerButton.removeEventListener('click', hideShow);
      }
}

validation(ipad);

function hideShow()
{
      if(menu.classList.contains('is-active'))
      {
         menu.classList.remove('is-active');
      }
      
      else
      {
         menu.classList.add('is-active');
      }    
}

burgerButton.addEventListener("click", () =>
{  
   if (updateClick === 0)
   {
      burgerButton.src = "https://omarsav.com/pictures/frontmentor/icon-close.svg";
      menu.style.boxShadow = '0 20px 100px'
      click = 1;
      updateClick = click; 
   }
   
   else 
   {
      burgerButton.src = "https://omarsav.com/pictures/frontmentor/burger.svg";
      menu.style.boxShadow = 'none'
      click =  0;
      updateClick = click; 
   }
})

            

