/* eslint-disable func-names */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-undef */
/* eslint-disable default-case */
const ifr = document.getElementById("JotFormIFrame-210533010656241");
if (ifr) {
  let { src } = ifr;
  let iframeParams = [];
  if (window.location.href && window.location.href.indexOf("?") > -1) {
    iframeParams = iframeParams.concat(
      window.location.href
        .substr(window.location.href.indexOf("?") + 1)
        .split("&")
    );
  }
  if (src && src.indexOf("?") > -1) {
    iframeParams = iframeParams.concat(
      src.substr(src.indexOf("?") + 1).split("&")
    );
    src = src.substr(0, src.indexOf("?"));
  }
  iframeParams.push("isIframeEmbed=1");
  ifr.src = `${src}?${iframeParams.join("&")}`;
}
window.handleIFrameMessage = function (e) {
  if (typeof e.data === "object") {
    return;
  }
  const args = e.data.split(":");
  if (args.length > 2) {
    iframe = document.getElementById(`JotFormIFrame-${args[args.length - 1]}`);
  } else {
    iframe = document.getElementById("JotFormIFrame");
  }
  if (!iframe) {
    return;
  }
  switch (args[0]) {
    case "scrollIntoView":
      iframe.scrollIntoView();
      break;
    case "setHeight":
      iframe.style.height = `${args[1]}px`;
      break;
    case "collapseErrorPage":
      if (iframe.clientHeight > window.innerHeight) {
        iframe.style.height = `${window.innerHeight}px`;
      }
      break;
    case "reloadPage":
      window.location.reload();
      break;
    case "loadScript":
      var src = args[1];
      if (args.length > 3) {
        src = `${args[1]}:${args[2]}`;
      }
      var script = document.createElement("script");
      script.src = src;
      script.type = "text/javascript";
      document.body.appendChild(script);
      break;
    case "exitFullscreen":
      if (document.fullscreenElement) {
        if (window.document.exitFullscreen) window.document.exitFullscreen();
        else if (window.document.mozCancelFullScreen)
          window.document.mozCancelFullScreen();
        else if (window.document.mozCancelFullscreen)
          window.document.mozCancelFullScreen();
        else if (window.document.webkitExitFullscreen)
          window.document.webkitExitFullscreen();
        else if (window.document.msExitFullscreen)
          window.document.msExitFullscreen();
      }
      break;
  }
  const isJotForm = e.origin.indexOf("jotform") > -1;
  if (
    isJotForm &&
    "contentWindow" in iframe &&
    "postMessage" in iframe.contentWindow
  ) {
    const urls = {
      docurl: encodeURIComponent(document.URL),
      referrer: encodeURIComponent(document.referrer),
    };
    iframe.contentWindow.postMessage(
      JSON.stringify({ type: "urls", value: urls }),
      "*"
    );
  }
};
if (window.addEventListener) {
  window.addEventListener("message", handleIFrameMessage, false);
} else if (window.attachEvent) {
  window.attachEvent("onmessage", handleIFrameMessage);
}
