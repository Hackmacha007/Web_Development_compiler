// function compileCode() {
//   const htmlCode = document.getElementById('html-editor').value;
//   const cssCode = document.getElementById('css-editor').value;
//   const jsCode = document.getElementById('js-editor').value;

//   const outputFrame = document.getElementById('output-frame');
//   const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;

//   outputDocument.open();
//   outputDocument.write(`
//       <html>
//       <head>
//           <style>${cssCode}</style>
//       </head>
//       <body>${htmlCode}<script>${jsCode}</script></body>
//       </html>
//   `);
//   outputDocument.close();
// }


// script.js

function compileCode() {
    // Get the values from the textareas
    var htmlCode = document.getElementById('html-editor').value;
    var cssCode = document.getElementById('css-editor').value;
    var jsCode = document.getElementById('js-editor').value;

    // Combine the code into a full HTML document
    var fullCode = '<html><head><style>' + cssCode + '</style></head><body>' + htmlCode + '<script>' + jsCode + '</script></body></html>';

    // Open a new window and display the output in an alert
    var newWindow = window.open();
    newWindow.alert(fullCode);
}
