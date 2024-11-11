import React, { useEffect, useState } from "react";
import './widget.css';

// function createCopyButton(highlightDiv) {
//   const button = document.querySelector('#widget').createElement("button");
//   button.className = "copy-code-button";
//   button.type = "button";
//   button.innerText = "Copy";
//   button.addEventListener("click", () =>
//     copyCodeToClipboard(button, highlightDiv)
//   );
//   addCopyButtonToDom(button, highlightDiv);
// }

// async function copyCodeToClipboard(button, highlightDiv) {
//   const codeToCopy = highlightDiv.querySelector(":last-child > .chroma > code")
//     .innerText;
//   try {
//     result = await navigator.permissions.query({ name: "clipboard-write" });
//     if (result.state == "granted" || result.state == "prompt") {
//       await navigator.clipboard.writeText(codeToCopy);
//     } else {
//       copyCodeBlockExecCommand(codeToCopy, highlightDiv);
//     }
//   } catch (_) {
//     copyCodeBlockExecCommand(codeToCopy, highlightDiv);
//   } finally {
//     codeWasCopied(button);
//   }
// }

// function copyCodeBlockExecCommand(codeToCopy, highlightDiv) {
//   const textArea = document.createElement("textArea");
//   textArea.contentEditable = "true";
//   textArea.readOnly = "false";
//   textArea.className = "copyable-text-area";
//   textArea.value = codeToCopy;
//   highlightDiv.insertBefore(textArea, highlightDiv.firstChild);
//   const range = document.createRange();
//   range.selectNodeContents(textArea);
//   const sel = window.getSelection();
//   sel.removeAllRanges();
//   sel.addRange(range);
//   textArea.setSelectionRange(0, 999999);
//   document.execCommand("copy");
//   highlightDiv.removeChild(textArea);
// }

// function codeWasCopied(button) {
//   button.blur();
//   button.innerText = "Copied!";
//   setTimeout(function () {
//     button.innerText = "Copy";
//   }, 2000);
// }

// function addCopyButtonToDom(button, highlightDiv) {
//   highlightDiv.insertBefore(button, highlightDiv.firstChild);
//   const wrapper = document.querySelector('#widget').createElement("div");
//   wrapper.className = "highlight-wrapper";
//   highlightDiv.parentNode.insertBefore(wrapper, highlightDiv);
//   wrapper.appendChild(highlightDiv);
// }

// document
//   .querySelectorAll(".highlight")
//   .forEach((highlightDiv) => createCopyButton(highlightDiv));
var Iframe = ({width='100vw', height='111vh', initScript=''}) => {
    return(         
      <div style={{width: width, height: height}}>          
        <script src={initScript} type="javascript"></script>
        {/* <iframe src={props.src} height={props.height} width={props.width}/>        */}
      </div>
    )
  
}
// this shall be only seen to the orgadmin role user upon signing in
export const EmbedWidgetPage = () => {
  useEffect(() => {
    // const headEl = doc 
    
    // const widgetEl = document.querySelector('div#a');
    // _if.src = 'http://localhost:5000/vanna';
    // widgetEl.innerHTML = 'DYNAMIC ::Hello from Embed widget';
    // add to head element
    // const _if = document.createElement('iframe');
    // _if.src = 'http://localhost:5000/vanna';
    // _if.height = '800px';
    // _if.width = '800px';
    // widgetEl.appendChild(_if);
  }, []);
  
  return (
    <div>
      <h2>AMA Widget snippet</h2>
      <div className="highlight">
        <b>copy below inside the head tag </b>
        <pre className="chroma">
            
          <code className="language-python" data-lang="python" style={{"height":200}}>
            &lt;script src="http://localhost:5000/vanna/widget?key=123456" type="text/javascript"&gt;&lt;/script&gt;
          </code>
        </pre>
      </div>
      <div id="a"></div>
      <div className="bg-white-100 dark:bg-slate-900">
        <div x-id="widget"></div>
        <Iframe
          height="60vh"
          width="60vw"
          initScript="http://localhost:5000/vanna/widget?key=123456&emulate=1"></Iframe>
      </div>
      
    </div>
  );
};

export default EmbedWidgetPage;
