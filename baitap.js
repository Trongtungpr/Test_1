
function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
  }

  
  const box4 = document.querySelector(".box2");
  const btn2 = document.querySelector(".btn2");
  btn2.onclick = function(){
      let arrayColor = ["yellow" ,'black', 'gray', 'pink' , 'orange' , 'green'];
      box4.style.backgroundColor = arrayColor[Math.floor(Math.random() * arrayColor.length)]
  }
  
  

  
  const btn3 = document.querySelector(".btn3");
  const box5 = document.querySelector(".box3");
  const box6 = document.querySelector(".box4");
  
  btn3.onclick = function(){
  
          let temp = box5.innerText;
          box5.innerText = box6.innerText;
          box6.innerText = temp;
      
  }

  const btn4 = document.querySelector(".btn4");
  const box7 = document.querySelector(".box5");
  let index = 14;
  btn4.onclick = function(){
      index += 1;
      box7.style.fontSize = index+"px";
  }