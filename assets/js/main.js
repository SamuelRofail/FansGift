/* function toggleplatform (){
    var h = document.getElementById("cards").offsetHeight;
    console.log(h);

    if (document.getElementById("toggleplatform").style.transform == "rotate(45deg)"){
        document.getElementById("toggleplatform").style.transform = "rotate(0deg)";
        document.getElementById("platforms").style.height = "58px";
        document.getElementById("platforms").style.transition = "0.4s";
        document.getElementById("toggleplatform").style.transition = "0.4s";

    }
    else {
        document.getElementById("toggleplatform").style.transform = "rotate(45deg)";
        document.getElementById("toggleplatform").style.transition = "0.4s";
        document.getElementById("platforms").style.height = h + 60+"px";
        document.getElementById("platforms").style.transition = "0.4s";
    }
}; */

function togglemenu (){
    if (document.getElementById("icontoggle").style.transform == "rotate(45deg)"){
        document.getElementById("icontoggle").style.transform = "rotate(0deg)";
        document.getElementById("navlinks").style.bottom = "0";
        document.getElementById("navlinks").style.zIndex = "-2";
        document.getElementById("content").style.marginTop = "0";
        document.getElementById("navlinks").style.transition = "0.4s";
        document.getElementById("content").style.transition = "0.4s";

    }
    else {
        document.getElementById("icontoggle").style.transform = "rotate(45deg)";
        document.getElementById("navlinks").style.bottom = "-100px";
        document.getElementById("navlinks").style.zIndex = "-2";
        document.getElementById("navlinks").style.transition = "0.4s";

        document.getElementById("content").style.marginTop = "120px";
        document.getElementById("content").style.transition = "0.4s";



    }
    
};
function op(num){
    var list = document.querySelectorAll("#list");
    var links = ["TikTok" , "Instagram" , "Twitter" , "Youtube"];
    var platform = document.querySelectorAll(".platformimg");
    var content = document.getElementById("content");
    var x =0;
    
    for (var i=0; i<platform.length;i++){
        if (num == links[i]){
            platform[i].style.opacity = "1";
            console.log(platform[i]);

            

        } else {
            platform[i].style.opacity = "0.5";
            platform[i].classList.remove("active");
            document.getElementsByClassName("card-body ")[i].style.boxShadow ="#000 0 0px 0px";4
            document.getElementsByClassName("card-header ")[i].style.boxShadow ="#000 0 0px 0px";


        }
        for (var j=0; j<links.length;j++){
        if (links[j] == num ){
           var url = document.getElementById("urllink");
           url.className = num;
           url.innerHTML = num + " link";
           
           if (j == 0 ){
            content.style.borderColor = "#000";
            document.getElementById("choseplatform").style.color = "#000";
            content.style.boxShadow ="#000 0 5px 10px 0px";
            document.getElementsByClassName("card-body ")[0].style.boxShadow ="#000 0 1px 1px";
            document.getElementsByClassName("card-header ")[0].style.boxShadow ="#000 0 1px 1px";
            document.getElementById("contentback").style.backgroundColor = "#000";
            document.getElementById("inputicon").innerHTML ="<path d='M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z'/>";
            url.innerHTML += " <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-tiktok' viewBox='0 0 16 16'><path d='M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z'/></svg>"
           }
           else if (j == 1 ){
            content.style.borderColor = "#933cb7";
            document.getElementById("choseplatform").style.color = "#933cb7";
            content.style.boxShadow ="#933cb7 0 5px 10px 0px";
            document.getElementsByClassName("card-body ")[1].style.boxShadow ="#933cb7 0 5px 10px 1px";
            document.getElementsByClassName("card-header ")[1].style.boxShadow ="#933cb7 0 1px 1px";
            document.getElementById("contentback").style.backgroundColor = "#933cb7";
            document.getElementById("inputicon").innerHTML ="<path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z'/>";
            url.innerHTML += " <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-instagram' viewBox='0 0 16 16'><path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z'/></svg>"
           }
           else if (j == 2 ){
            content.style.borderColor = "#1ea1f2";
            document.getElementById("choseplatform").style.color = "#1ea1f2";
            content.style.boxShadow ="#1ea1f2 0 5px 10px 0px";
            document.getElementsByClassName("card-body ")[2].style.boxShadow ="#1ea1f2 0 5px 10px 1px";
            document.getElementsByClassName("card-header ")[2].style.boxShadow ="#1ea1f2 0 1px 1px";
            document.getElementById("contentback").style.backgroundColor = "#1ea1f3";
            document.getElementById("inputicon").innerHTML = "<path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'/>";
            url.innerHTML += " <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-twitter' viewBox='0 0 16 16'><path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'/></svg>"
           }
           else if (j == 3 ){
            content.style.borderColor = "#ff0000";
            document.getElementById("choseplatform").style.color = "#ff0000";
            content.style.boxShadow ="#ff0000 0 5px 10px 0px";
            document.getElementsByClassName("card-body ")[3].style.boxShadow ="#ff0000 0 5px 10px 1px";
            document.getElementsByClassName("card-header ")[3].style.boxShadow ="#ff0000 0 1px 1px";
            document.getElementById("contentback").style.backgroundColor = "#ff0000";
            document.getElementById("inputicon").innerHTML = "<path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z'/>";
            url.innerHTML += " <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-youtube' viewBox='0 0 16 16'><path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z'/></svg>";
           }
           
        }
    }

        
    }
    
}



function showpassword(str){
    var icon = document.getElementById("passwordicon"+str);
    var input = document.getElementById("password"+str);
    if (input.attributes[0].value == "text") {
        input.attributes[0].value = "password";
        console.log(input.attributes[0]);

        icon.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-eye-fill' viewBox='0 0 16 16'><path d='M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z'/><path d='M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z'/></svg>";
    }
    else if (input.attributes[0].value == "password"){
        input.attributes[0].value = "text";
        console.log(input.attributes[0]);

        icon.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-eye-slash-fill' viewBox='0 0 16 16'><path d='m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z'/><path d='M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z'/></svg>"
    }
    
       
}

function changeregister(str){
    var login = document.getElementById("signin");
    var reg =document.getElementById("signup");
    if (str == "login"){
        login.style.left = "700px"
        reg.style.left = "0";
    }
    else {
        login.style.left = "0"  
        reg.style.left = "-700px";
    }
}