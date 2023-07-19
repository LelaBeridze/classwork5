function myFunction (){
    let x=document.getElementsByClassName("myTopnav")
    if (x.className === "topnav"){
        x.className += "responsive"
    }else{
        x.className = "topnav"
    }

}