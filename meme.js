let bgcolor = document.querySelector('#bgcolor');
let textcolor = document.querySelector('#txtcolor');
let bgcolorv = document.querySelector('#bgcolorvalue');
let textcolorv = document.querySelector('#textcolorvalue');
let fontS = document.querySelector('#fontSize');
let fontSizev = document.querySelector('#fontSizev');
let FontList = document.querySelector('#fontList');
let fontStylev = document.querySelector('#fontStylev');
let bgImg = document.querySelector('#bgImg');
let canvas = document.querySelector('#mycanvas');
let ctx = canvas.getContext("2d");
let myFile = document.querySelector('#myfile');
let myFile1 = document.querySelector('#myfile1');
let isizew = document.querySelector('#isizew');
let isizeh = document.querySelector('#isizeh');
let text1 = document.querySelector('#text1');
let fffstyle = document.querySelector('#fffstyle');
let fontStyleValue = document.querySelector('#fontStylevalue');
let cb = document.querySelector('#cb');
let dwnld = document.querySelector('#dwnld');
let item = document.querySelector('#item');
console.log('canvas', canvas.getBoundingClientRect().top, canvas.offsetTop, item.offsetTop);


let fstyle = 'Impact';
let ffont = '50px';
let fffstylea = 'normal';

fontStylev.innerHTML = fstyle;
fontStyleValue.innerHTML = fffstylea;

function offset(el) {
  var convertPoint = window.webkitConvertPointFromNodeToPage;
  if ('getBoundingClientRect' in el) {
      var
          boundingRect = el.getBoundingClientRect(),
          body = document.body || document.getElementsByTagName("body")[0],
          clientTop = document.documentElement.clientTop || body.clientTop || 0,
          clientLeft = document.documentElement.clientLeft || body.clientLeft || 0,
          scrollTop = (window.pageYOffset || document.documentElement.scrollTop || body.scrollTop),
          scrollLeft = (window.pageXOffset || document.documentElement.scrollLeft || body.scrollLeft);
      return {
          top: boundingRect.top + scrollTop - clientTop,
          left: boundingRect.left + scrollLeft - clientLeft
      }
  } else if (convertPoint) {
      var
          zeroPoint = new WebKitPoint(0, 0),
          point = convertPoint(el, zeroPoint),
          scale = convertPoint(document.getElementById('scalingEl'), zeroPoint);
      return {
          top: Math.round(point.y * -200/scale.y),
          left: Math.round(point.x * -200/scale.x)
      }
  }
}

console.log(offset(canvas).top,'ll');



window.addEventListener('load', function () {

  myFile1.addEventListener('change', e => {
    let reader = new FileReader();
    let x = window.matchMedia("(max-width:480px)");

    reader.onload = function (e) {
      let image = new Image();
      image.onload = function () {
        let imgArea = document.createElement('canvas');
        imgArea.className = 'iArea';
        imgArea.classList.add('draggable');
        imgArea.classList.add('resize-drag');


        //imgArea.classList.add('dropzone');
        document.body.appendChild(imgArea);
        imgArea.style.position = 'absolute';
        if (x.matches) {
          imgArea.style.width = '150px';
          imgArea.style.height = '150px';
          imgArea.style.top = `${offset(canvas).top}px`;
          imgArea.style.left = `${canvas.getBoundingClientRect().left}px`;
        } else {
          
          imgArea.style.width = '200px';
          imgArea.style.height = '200px';
          imgArea.style.top = `${offset(canvas).top}px`;
          imgArea.style.left = `${canvas.getBoundingClientRect().left}px`;
        }
        
        
        imgArea.style.border = "1px solid";
        imgArea.draggable = "true";
        ictx = imgArea.getContext("2d");
        imgArea.width = image.width;
        imgArea.height = image.height;
        ictx.drawImage(image, 0, 0);


      }
      image.src = e.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
  })
})


window.addEventListener('load', function () {

  myFile.addEventListener('change', e => {
    let reader = new FileReader();

    let x = window.matchMedia("(max-width:480px)");
    reader.onload = function (e) {
      let image = new Image();
      image.onload = function () {


        let imgArea = document.createElement('canvas');

        imgArea.className = 'ibArea';

        imgArea.classList.add('draggable');
        imgArea.classList.add('resize-drag');


        //imgArea.classList.add('dropzone');
        document.body.appendChild(imgArea);
        imgArea.style.position = 'absolute';
        imgArea.style.touchAction = 'none';
        if (x.matches) {
          imgArea.style.width = '300px';
          imgArea.style.height = '300px';
          imgArea.style.top = `${offset(canvas).top}px`;
          imgArea.style.left = `${canvas.getBoundingClientRect().left}px`;
        
        } else {
          imgArea.style.width = '400px';
          imgArea.style.height = '400px';
          imgArea.style.top = `${offset(canvas).top}px`;
          imgArea.style.left = `${canvas.getBoundingClientRect().left}px`;
        
        }
        imgArea.style.border = "1px solid";
        imgArea.draggable = "true";
        ictx = imgArea.getContext("2d");
        imgArea.width = image.width;
        imgArea.height = image.height;
        ictx.drawImage(image, 0, 0);

        console.log(canvas.width, canvas.height, image.width, image.height);
        imgArea.addEventListener('doubletap', e => {
          e.preventDefault();

          createArea(e);
        });


        imgArea.addEventListener('dblclick', e => {
          createArea(e);
        })
      }
      image.src = e.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
  })
})


let createArea = (e) => {

  let numberr = Math.random();
  console.log(numberr);
  let textArea = document.createElement('canvas');
  textArea.id = `n${numberr}`;
  textArea.className = 'tArea';
  textArea.classList.add('draggable');
  textArea.classList.add('resize-drag');
  document.body.appendChild(textArea);
  textArea.style.position = 'absolute';
  textArea.style.width = '200px';
  textArea.style.height = '100px';
  textArea.style.top = `${e.clientY}px`;
  textArea.style.left = `${e.clientX}px`;
  textArea.style.border = "1px solid";
  textArea.draggable = "true";

  textArea.addEventListener('touchmove', e => {
    console.log('dgst');
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted, set this to the previous value 
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
  })

  textArea.addEventListener('touchend', e => {
    console.log('dgstop');
    window.onscroll = function () { };

  })

  textArea.addEventListener('mouseleave', e =>{
    setTimeout(function(){
      e.target.style.border = 'none';
    },1000);
  })

  textArea.addEventListener('mouseenter',e =>{
    
      e.target.style.border = '1px solid';
    
  })

  cctx = textArea.getContext("2d");
  cctx.font = "50px Arial";
  cctx.fillText("Enter Text", 10, 50);
}



let enterText = event => {
  if (event.target.classList.contains("tArea")) {
    text1.focus();
    console.log(event.target
    );
    cttx = event.target.getContext("2d");
    text1.value = '';

    text1.addEventListener('keyup', e => {
      console.log(e);
      let str;
      if (bgcolor.value === '#ffffff') {
        console.log(parseInt(event.target.style.width, 10), parseInt(event.target.style.height, 10))
        cttx.clearRect(0, 0, +parseInt(event.target.style.width, 10) + 100, +parseInt(event.target.style.height, 10) + 100);
        // ctx.fillStyle = 'rgba(0,0,0,.2)';
        // cttx.fillRect(0,0,+parseInt(event.target.style.width,10) + 100,+parseInt(event.target.style.height,10) + 100);
        cttx.font = `${fffstylea} ${ffont} ${fstyle}`;
        str = e.target.value;
        let h = cttx.measureText(e.target.value).width;
        let metrics = cttx.measureText(e.target.value);
        let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
        let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
        console.log(`${fffstylea} ${ffont} ${fstyle}`, 'apple', h, fontHeight, actualHeight);
        let lines = str.split('\n');
        console.log(lines, 'll');

        cttx.fillStyle = textcolor.value;
        for (let j = 0; j < lines.length; j++) {
          cttx.fillText(lines[j], 10, 50 + (j * actualHeight + 10));
        }
      }
      else {
        console.log(parseInt(event.target.style.width, 10), parseInt(event.target.style.height, 10))
        cttx.clearRect(0, 0, +parseInt(event.target.style.width, 10) + 100, +parseInt(event.target.style.height, 10) + 100);
        cttx.font = `${fffstylea} ${ffont} ${fstyle}`;
        console.log(`"${ffont} ${fstyle}"`, 'apple');
        str = e.target.value;
        let h = cttx.measureText(e.target.value).width;
        let metrics = cttx.measureText(e.target.value);
        let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
        let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
        console.log(`${fffstylea} ${ffont} ${fstyle}`, 'apple', h, fontHeight, actualHeight);
        let lines = str.split('\n');

        cttx.fillStyle = bgcolor.value;
        cttx.fillRect(0, 0, +parseInt(event.target.style.width, 10) + 100, +parseInt(event.target.style.height, 10) + 100);
        cttx.fillStyle = textcolor.value;
        for (let j = 0; j < lines.length; j++) {
          cttx.fillText(lines[j], 10, 50 + (j * actualHeight + 10));
        }
      }
    })
  }
}



let changeStyles = event => {
  ctttx = event.target.getContext("2d");

  bgcolor.addEventListener('change', e => {
    ctttx.fillStyle = e.target.value;
    ctttx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  })



  fontS.addEventListener('keyup', e => {
    fontSizev.innerHTML = e.target.value;
  })
}


interact('.resize-drag')
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },

    listeners: {
      move(event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)

        // update the element's style
        target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.height + 'px'

        // translate when resizing from top or left edges
        x += event.deltaRect.left
        y += event.deltaRect.top

        target.style.webkitTransform = target.style.transform =
          'translate(' + x + 'px,' + y + 'px)'

        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
      }
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
      }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 100, height: 50 }
      })
    ],

    inertia: true
  })
  .draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ]
  })



// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end(event) {
        var textEl = event.target.querySelector('p')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
            Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener(event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;



document.addEventListener('click', e => {
  if (e.target.classList.contains('tArea')) {
    // dragItem = e.target;
    enterText(e);
    changeStyles(e);
    window.addEventListener('scroll', e => {
      e.preventDefault();
    })



  }
  console.log(e.target);
  console.log();

});



canvas.addEventListener('dblclick', e => {
  console.log(e);
  console.log(e.clientX, e.clientY);
  createArea(e);
});

canvas.addEventListener('doubletap', e => {
  e.preventDefault();
  console.log(e);
  console.log(e.clientX, e.clientY);
  createArea(e);
});

window.addEventListener('touchstart', e => {

})

window.addEventListener('touchend', e => {

})

window.addEventListener('touchmoves', e => {
  e.preventDefault();
})



/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '#yes-drop',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
    draggableElement.classList.add('can-drop')
    draggableElement.textContent = 'Dragged in'
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target')
    event.relatedTarget.classList.remove('can-drop')
    event.relatedTarget.textContent = 'Dragged out'
  },
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped'
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  }
})

interact('.drag-drop')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { move: dragMoveListener }
  })




fffstyle.addEventListener('click', e => {
  fffstylea = e.target.id;
  fontStyleValue.innerHTML = e.target.id;
  console.log(e.target.id);
  console.log(fffstylea);

})




bgcolor.addEventListener('change', e => {
  bgcolorv.innerHTML = e.target.value;
})

textcolor.addEventListener('change', e => {
  textcolorv.innerHTML = e.target.value;
})

fontS.addEventListener('change', e => {
  ffont = `${e.target.value}px`;
  console.log(ffont);
  fontSizev.innerHTML = e.target.value;
})

FontList.addEventListener('click', e => {
  if (e.target.classList.contains('d-flex')) {

    fstyle = e.target.childNodes[1].childNodes[1].childNodes[0].childNodes[0].data;
    fontStylev.innerHTML = fstyle;
    console.log(e.target.childNodes[1].childNodes[1].childNodes[0].childNodes[0].data)
  } else if (e.target.className === 'ss') {
    console.log(e.target.childNodes[0].data);
    fstyle = e.target.childNodes[0].data;
    fontStylev.innerHTML = fstyle;
  }
})

window.addEventListener('beforeunload', e => {
  window.scrollTop(0);
})

cb.addEventListener('click', e =>{
  e.preventDefault();
  let ta = document.querySelector('.tArea');
  let ia = document.querySelector('.iArea');
  let ib = document.querySelector('.ibArea');

  if(ta){
  ta.remove();
  }
  if(ia){
  ia.remove();
  }
  if(ib){
  ib.remove();
  }
})

dwnld.addEventListener('click', e =>{
  alert('Download not available now!! Please Have a screenshot for better pixel clarity. Thanks:)');
})












