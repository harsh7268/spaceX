console.log('hii');
function func1(){
    url = 'https://api.spacexdata.com/v4/ships';
    fetch(url).then((response) =>{
        return response.json();
    }).then((data) =>{
        console.log(data);
        let str ='';
        for(let k of data){
           str +=`
           <div class="card bg-dark text-white main">
        <img src="${k.image}" class="card-img" alt="...">
        <div class="card-img-overlay">

         
        
          <h3 class="card-title">${k.name}</h3>  
          <a href="${k.link}" class="button">RE-Watch</a>
        </div>
      </div>
           `;
        }
        let mainBox = document.getElementById('mainBox');
        mainBox.innerHTML = str;

      let searchBtn = document.getElementById('searchBtn');
      let inputBox = document.getElementById('inputBox');
      let main = document.querySelectorAll('.main');
     searchBtn.addEventListener('click',(e) =>{


    
  e.preventDefault();
  Array.from(main).forEach((element) =>{
      let nameVal =element.getElementsByTagName('h3')[0].innerHTML;
      console.log(nameVal)
      if(nameVal.toLowerCase().includes(inputBox.value.toLowerCase())){
        
          element.style.display="block";
      }
      else{
        element.style.display="none";
      }
  })
 })
  

    });
    
}
func1();