// Get the iframe element
var iframe = document.getElementsByName('editor')[0];

// Get the iframe's document object
var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

// Function to make the selected text bold
function makeBold(style) {
  iframeDoc.execCommand(style, false, null);
}

// Function to make the selected text italic
function makeItalic(style) {
  iframeDoc.execCommand(style, false, null);
}

// Function to make the selected text underline
function makeUnderline(style) {
  iframeDoc.execCommand(style, false, null);
}

// Function to change the font style
function FontStyle(propertyName, propertyValue) {
  iframeDoc.execCommand(propertyName, false, propertyValue);
}

// Add an event listener to the iframe to enable designMode
iframe.onload = function() {
  iframeDoc.designMode = 'on';
};
