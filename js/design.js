function closer(){
var x= document.getElementById("btoggler");
x.click();
}
// The function actually applying the offset
window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});