let canvas = document.querySelector('#mycanvas');
let ctx = canvas.getContext("2d");
ctx.font = "30px Arial";

let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');
let text3 = document.querySelector('#text3');

/*
let ctext1 = document.querySelector('#ctext1');
let ctext2 = document.querySelector('#ctext2');
let ctext3 = document.querySelector('#ctext3');
let ctx1 = ctext1.getContext("2d");
let ctx2 = ctext2.getContext("2d");
let ctx3 = ctext3.getContext("2d");
ctx1.font = "30px Arial";
ctx2.font = "30px Arial";
ctx3.font = "30px Arial";
*/

let myFile = document.querySelector('#myfile');
let myFile1 = document.querySelector('#myfile1');

let generate = document.querySelector('#generate');



let createArea = (e,top,left,n) => {
    let ta = document.querySelector(`.tArea${n}`)
  if(ta){
      console.log('yes');
      ta.parentNode.removeChild(ta);
      let textArea = document.createElement('canvas');
  textArea.className = `tArea${n}`;
  document.appendChild(textArea);
  textArea.style.position = 'absolute';
  textArea.style.width = '400px';
  textArea.style.height = '400px';
  textArea.style.top = `${top}px`;
  textArea.style.left = `${left}px`;
  textArea.style.border = "1px solid";
  textArea.draggable = "true";

  cctx = textArea.getContext("2d");
  cctx.font = " 30px Impact";
 
  cctx.fillText(e.target.value, 10, 50);
  //ctx.drawImage(textArea, 0,0);
      }else{
          console.log('no');
  let textArea = document.createElement('canvas');
  textArea.className = `tArea${n}`;
  document.appendChild(textArea);
  textArea.style.position = 'absolute';
  textArea.style.width = '400px';
  textArea.style.height = '75px';
  textArea.style.top = `${top}px`;
  textArea.style.left = `${left}px`;
  textArea.style.border = "1px solid";
  textArea.draggable = "true";

  cctx = textArea.getContext("2d");
  cctx.font = "30px Impact";
 
  cctx.fillText(e.target.value, 10, 50);
  //ctx.drawImage(textArea,10,50);
  }
}


text1.addEventListener('keyup',e =>{
    createArea(e,0,0,1);
})

text2.addEventListener('keyup',e =>{
   createArea();
})

text3.addEventListener('keyup',e =>{
   
})

window.addEventListener('load', function(){
   
    myFile1.addEventListener('change',e =>{
        let reader = new FileReader();
        reader.onload = function(e){
            let image = new Image();
            image.onload = function(){
              let imgArea = document.createElement('canvas');
              imgArea.className = 'iArea';
              item.appendChild(imgArea);
              imgArea.style.position = 'absolute';
              imgArea.style.width = '200px';
              imgArea.style.height = '200px';
              imgArea.style.top = '0px';
              imgArea.style.left = '0px';
              imgArea.style.border = "1px solid";
              imgArea.draggable = "true";
              ictx = imgArea.getContext("2d");
              imgArea.width = image.width;
              imgArea.height = image.height;
                ictx.drawImage(image,0,0);
            }
            image.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    })  
})


window.addEventListener('load', function(){
   
  myFile.addEventListener('change',e =>{
      let reader = new FileReader();
      reader.onload = function(e){
          let image = new Image();
          image.onload = function(){
            let imgArea = document.createElement('canvas');
            imgArea.className = 'iArea';
            item.appendChild(imgArea);
            imgArea.style.position = 'absolute';
            imgArea.style.width = '400px';
            imgArea.style.height = '400px';
            imgArea.style.top = '0px';
            imgArea.style.left = '0px';
            imgArea.style.border = "1px solid";
            imgArea.draggable = "true";
            ictx = imgArea.getContext("2d");
            imgArea.width = image.width;
            imgArea.height = image.height;
              ictx.drawImage(image,0,0);
          }
          image.src = e.target.result;
      }
      reader.readAsDataURL(e.target.files[0]);
  })  
})

generate.addEventListener('click',e =>{
    e.preventDefault();
   
})


