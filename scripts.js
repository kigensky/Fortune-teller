function tellFortune(){

    let favColor = document.getElementById("favColor").value;
    let career;

    if(favColor === "Red"){
        career = "You will be a Manchester United fan";
    }else if(favColor === "green"){
        career = "You be a great farmer in your country";
    }else if(favColor === "blue"){
        career = "you will be the best Pilot";
    }else if(favColor === "yellow"){
        career = "You will be the best business person";
    }else{
        career = "Choose another color";
    }

    document.getElementById("fortune").innerHTML = career;
}
