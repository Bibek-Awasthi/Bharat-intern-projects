
function temp_converter(){
    let heading = document.getElementsByClassName("heading")[0];
    let celsius=Number(document.getElementById("celsius").value);
    let fahrenheit=null;
    let kelvin=null;
    console.log(typeof celsius);
    let fah=document.getElementById("fah");
    let kel=document.getElementById("kelvin");
    let res=document.getElementById("result");
    if((fah.checked)){
        fahrenheit=(((9/5)*celsius)+32);
        heading.innerHTML= `${celsius} °C to Fahrenheit`;
        res.value=fahrenheit.toFixed(2) +"°F";
    }
    else if((kel.checked)){
        kelvin=celsius+273;
        heading.innerHTML= `${celsius} °C to Kelvin`;
        res.value = kelvin.toFixed(2);
    }
    else{
        alert("please select");
    }
     
}