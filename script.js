const App = {};

App.canvas    = document.getElementById('canvas');
App.context2d = App.canvas.getContext('2d');


(function () {
    function resize() {
        App.canvas.width  = document.body.clientWidth;
        App.canvas.height = document.body.clientHeight;
    }
    
    window.addEventListener("resize", resize, false);
    resize();
})();
