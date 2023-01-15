
setInterval( carregar,500)
function carregar(){
    let hr = document.querySelector("#hora")
    let m = document.querySelector("#minuto")
    let seg = document.querySelector("#segundo")
    let dt = new Date();
    let hr1 = dt.getHours();
    let m1 = dt.getMinutes();
    let seg1 = dt.getSeconds();
    console.log(seg1)

    hr.innerHTML = hr1;
    m.innerHTML = m1;
    seg.innerHTML = seg1;
}