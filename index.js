let btn = document.getElementById("btn");
let qrText = document.getElementById("qrText");
let imageBox = document.getElementById("img-box");
let qrImage = document.getElementById("qrimage");

btn.addEventListener("click", () => {
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imageBox.classList.add("show-img");
    }
    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove(error);
        },1000);
    }
   
});


