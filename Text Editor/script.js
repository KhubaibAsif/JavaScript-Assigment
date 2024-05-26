// // Get the iframe element
// var iframe = document.getElementsByName('editor')[0];

// // Get the iframe's document object
// var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

// // Function to make the selected text bold
// function makeBold(style) {
//   iframeDoc.execCommand(style, false, null);
// }

// // Function to make the selected text italic
// function makeItalic(style) {
//   iframeDoc.execCommand(style, false, null);
// }

// // Function to make the selected text underline
// function makeUnderline(style) {
//   iframeDoc.execCommand(style, false, null);
// }

// // Function to change the font style
// function FontStyle(propertyName, propertyValue) {
//   iframeDoc.execCommand(propertyName, false, propertyValue);
// }

// // Add an event listener to the iframe to enable designMode
// iframe.onload = function() {
//   iframeDoc.designMode = 'on';
// };
var text = document.getElementById('text')
var Buttons = document.getElementsByClassName("action-btn");
var FontOption = document.getElementById('Font-Family')

console.log('action-btn', Buttons);

FontOption.addEventListener('change', function(){
  if(this.value === 'monospace')
    text.style.fontFamily = 'monospace' 

  if(this.value === 'Georgia')
    text.style.fontFamily = 'Georgia' 

  if(this.value === 'Times New Roman')
    text.style.fontFamily = 'Times New Roman' 

  if(this.value === 'Verdana')
    text.style.fontFamily = 'Verdana' 
})

for (var i = 0; i < Buttons.length; i++) {
  Buttons[i].addEventListener('click', function () {
    // console.log('this==>', this.innerText)


    switch (this.innerText) {
      case 'B':
        // console.log('FontWeight==>',text.style.fontWeight )
        if (text.style.fontWeight == 'bold') {
          text.style.fontWeight = 'normal'
        } else {
          text.style.fontWeight = 'bold'
        }

        break;
      case 'I':
        if (text.style.fontStyle == 'italic') {
          text.style.fontStyle = 'normal'
        } else {
          text.style.fontStyle = 'italic'
        }

        break;
      case 'U':
        if (text.style.textDecorationLine == 'underline') {
          text.style.textDecorationLine = 'none'
        } else {
          text.style.textDecorationLine = 'underline'
        }
        break;

    }
  }

  )
}