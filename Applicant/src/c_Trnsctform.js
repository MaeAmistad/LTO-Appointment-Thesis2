
var list1 = document.getElementById("selectText1");
var list3 = document.getElementById("selectText3");

document.getElementById("mv_toa").style.display="none";
document.getElementById("license").style.display="none";
document.getElementById("lic_rr").style.display="none";

// for dropdown function
function trnsct(){
// new
    
    if(list1.value == "lscnc"){
        document.getElementById("mv_toa").style.display="none";
        document.getElementById("license").style.display="block";
    }
//renew
    else if(list1.value == "mtrvhcl"){
        document.getElementById("mv_toa").style.display="block";
        document.getElementById("license").style.display="none";
    }
    else{
        document.getElementById("mv_toa").style.display="none";
        document.getElementById("license").style.display="none";
    }


}
function toa_Lic(){
    if(list3.value == "rr"){
        document.getElementById("lic_rr").style.display="block";
    }
    else{
        document.getElementById("lic_rr").style.display="none";
    }
}
    