function compileCode() {
  const htmlCode = document.getElementById('html-editor').value;
  const cssCode = document.getElementById('css-editor').value;
  const jsCode = document.getElementById('js-editor').value;

  const outputFrame = document.getElementById('output-frame');
  const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;

  outputDocument.open();
  outputDocument.write(`
      <html>
      <head>
          <style>${cssCode}</style>
      </head>
      <body>${htmlCode}<script>${jsCode}</script></body>
      </html>
  `);
  outputDocument.close();
}


script.js
