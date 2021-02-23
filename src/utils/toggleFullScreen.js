const toggleFullScreen = (e, cb) => {
  if (document.fullscreenElement) {
    if (window.document.exitFullscreen) {
      window.document.exitFullscreen();
    } else if (window.document.webkitExitFullscreen) {
      window.document.webkitExitFullscreen();
    } else if (window.document.mozCancelFullScreen) {
      window.document.mozCancelFullScreen();
    } else if (window.document.msExitFullscreen) {
      window.document.msExitFullscreen();
    }
    cb();
  } else {
    if (e.requestFullscreen) {
      e.requestFullscreen();
    } else if (e.webkitRequestFullscreen) {
      e.webkitRequestFullscreen();
    } else if (e.mozRequestFullScreen) {
      e.mozRequestFullScreen();
    } else if (e.msRequestFullscreen) {
      e.msRequestFullscreen();
    }
    cb();
  }
};

export default toggleFullScreen;
