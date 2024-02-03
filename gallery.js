let imgElements = document.querySelectorAll('.preview')
for (var i = 0; i < imgElements.length; i++) {
   imgElements[i].setAttribute('tabindex', '0')
   imgElements[i].setAttribute('onfocus', 'upDate(this)')
   imgElements[i].setAttribute('onblur', 'unDo()')
}

function upDate(previewPic) {
   console.log('focus')
   document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`
   document.getElementById('image').innerHTML = previewPic.alt
}

function unDo() {
   console.log('blur')
   document.getElementById('image').style.backgroundImage = "url('')"
   document.getElementById('image').innerHTML = "Hover over an image below to display here."
}