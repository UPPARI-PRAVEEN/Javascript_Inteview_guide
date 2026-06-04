let btn = document.getElementById("btn");

btn.onmouseover=()=>{
    let demo = document.getElementById("demo");

    let res = btn.classList.toggle("demo2");
    if(res){
        demo.style.display ="block"
    }else{
        demo.style.display ="none"
    }
}



btn.addEventListener('click', function(){
    window.location.href="./dummu.html"

})
