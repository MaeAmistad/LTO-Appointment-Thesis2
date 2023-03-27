
nextL.addEventListener('click' , (e) => {

    var list1 = document.getElementById("selectText1").value;
    var list2 = document.getElementById("selectText2").value;
    var list3 = document.getElementById("selectText3").value;
    var list4 = document.getElementById("selectText4").value;
    var list5 = document.getElementById("selectText5").value;

    if(list1 == "s"){
        Swal.fire({
            title: 'Please choose type of transaction to proceed.',
            confirmButtonColor: '#132aaa',
            width:500,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    // else if(list2 == "s" || list5 == "s"){
    //     Swal.fire({
    //         title: 'Please choose type of transaction to proceed.',
    //         confirmButtonColor: '#132aaa',
    //         width:500,
    //         showClass: {
    //           popup: 'animate__animated animate__fadeInDown'
    //         },
    //         hideClass: {
    //           popup: 'animate__animated animate__fadeOutUp'
    //         }
    //       })
    // }
    else{

        window.location = 'c_PIform.html'
    }
})

back1.addEventListener('click' , (e) => {
    // window.location = "c_calendar.html";
    history.back();
})

var list1 = document.getElementById("selectText1");
var list2 = document.getElementById("selectText2");
var list3 = document.getElementById("selectText3");
var list4 = document.getElementById("selectText4");
var list5 = document.getElementById("selectText5");

document.getElementById("spn").style.display="none";
document.getElementById("sprn").style.display="none";
document.getElementById("npdln").style.display="none";
document.getElementById("npdlrn").style.display="none";
document.getElementById("pdln").style.display="none";
document.getElementById("pdlrn").style.display="none";
document.getElementById("cln").style.display="none";
document.getElementById("clrn").style.display="none";
document.getElementById("dlplct").style.display="none";
document.getElementById("cofd").style.display="none";
document.getElementById("chngeClssfctn").style.display="none";
document.getElementById("addtnlCd").style.display="none";
document.getElementById("ExpiredDLvfdl").style.display="none";
document.getElementById("chngeCT").style.display="none";

document.getElementById("rr_ca").style.display="none";
document.getElementById("rr_ccs").style.display="none";
document.getElementById("rr_cn").style.display="none";
document.getElementById("cl_rrccc").style.display="none";
document.getElementById("cl_rrcoa").style.display="none";
document.getElementById("cl_rrcopd").style.display="none";
document.getElementById("cl_rrlost").style.display="none";

document.getElementById("renewal").style.display="none";
document.getElementById("dplomt").style.display="none";
document.getElementById("oevsez").style.display="none";
document.getElementById("forhre").style.display="none";
document.getElementById("stolnrcovrd").style.display="none";
document.getElementById("Rctivtncd").style.display="none";

document.getElementById("mv_toa").style.display="none";
document.getElementById("license").style.display="none";
document.getElementById("lic_rr").style.display="none";

// for dropdown function
function trnsct(){

    if(list1.value == "lscnc"){
        document.getElementById("license").style.display="block";
        document.getElementById("mv_toa").style.display="none";

        document.getElementById("renewal").style.display="none";
        document.getElementById("dplomt").style.display="none";
        document.getElementById("oevsez").style.display="none";
        document.getElementById("forhre").style.display="none";
        document.getElementById("stolnrcovrd").style.display="none";
        document.getElementById("Rctivtncd").style.display="none";

    }
    else if(list1.value == "mtrvhcl"){
        document.getElementById("mv_toa").style.display="block";
        document.getElementById("license").style.display="none";

        document.getElementById("rr_ca").style.display="none";
        document.getElementById("rr_ccs").style.display="none";
        document.getElementById("rr_cn").style.display="none";

        document.getElementById("spn").style.display="none";
        document.getElementById("sprn").style.display="none";
        document.getElementById("npdln").style.display="none";
        document.getElementById("npdlrn").style.display="none";
        document.getElementById("pdln").style.display="none";
        document.getElementById("pdlrn").style.display="none";
        document.getElementById("cln").style.display="none";
        document.getElementById("clrn").style.display="none";
        document.getElementById("dlplct").style.display="none";
        document.getElementById("cofd").style.display="none";
        document.getElementById("chngeClssfctn").style.display="none";
        document.getElementById("addtnlCd").style.display="none";
        document.getElementById("ExpiredDLvfdl").style.display="none";
        document.getElementById("chngeCT").style.display="none";
    }
    else{
        document.getElementById("mv_toa").style.display="none";
        document.getElementById("license").style.display="none";
    }

    // for storage
    if (list1.value == "lscnc"){
        var  tot = "Licensing"
    }
    else if(list1.value == "mtrvhcl"){
        var  tot = "Motor Vehicle Registration"
    }
    
    localStorage.setItem("tot",tot.toUpperCase());

}

function laaf_lic(){
// sp
if(list2.value == "sp" && list3.value == "nw"){
    document.getElementById("spn").style.display="block";
    document.getElementById("sprn").style.display="none";
    document.getElementById("npdln").style.display="none";
    document.getElementById("npdlrn").style.display="none";
    document.getElementById("pdln").style.display="none";
    document.getElementById("pdlrn").style.display="none";
    document.getElementById("cln").style.display="none";
    document.getElementById("clrn").style.display="none";
    document.getElementById("dlplct").style.display="none";
    document.getElementById("cofd").style.display="none";
    document.getElementById("chngeClssfctn").style.display="none";
    document.getElementById("addtnlCd").style.display="none";
    document.getElementById("ExpiredDLvfdl").style.display="none";
    document.getElementById("chngeCT").style.display="none";

}
else if (list2.value == "sp" && list3.value == "rnw"){
    document.getElementById("sprn").style.display="block";
    document.getElementById("spn").style.display="none";
    document.getElementById("npdln").style.display="none";
    document.getElementById("npdlrn").style.display="none";
    document.getElementById("pdln").style.display="none";
    document.getElementById("pdlrn").style.display="none";
    document.getElementById("cln").style.display="none";
    document.getElementById("clrn").style.display="none";
    document.getElementById("dlplct").style.display="none";
    document.getElementById("cofd").style.display="none";
    document.getElementById("chngeClssfctn").style.display="none";
    document.getElementById("addtnlCd").style.display="none";
    document.getElementById("ExpiredDLvfdl").style.display="none";
    document.getElementById("chngeCT").style.display="none";
}
// npdl
else if(list2.value == "npdl" && list3.value == "nw"){
    document.getElementById("npdln").style.display="block";
    document.getElementById("spn").style.display="none";
    document.getElementById("sprn").style.display="none";
    document.getElementById("npdlrn").style.display="none";
    document.getElementById("pdln").style.display="none";
    document.getElementById("pdlrn").style.display="none";
    document.getElementById("cln").style.display="none";
    document.getElementById("clrn").style.display="none";
    document.getElementById("dlplct").style.display="none";
    document.getElementById("cofd").style.display="none";
    document.getElementById("chngeClssfctn").style.display="none";
    document.getElementById("addtnlCd").style.display="none";
    document.getElementById("ExpiredDLvfdl").style.display="none";
    document.getElementById("chngeCT").style.display="none";
}
else if (list2.value == "npdl" && list3.value == "rnw"){
    document.getElementById("npdlrn").style.display="block";
    document.getElementById("sprn").style.display="none";
    document.getElementById("spn").style.display="none";
    document.getElementById("npdln").style.display="none";
    document.getElementById("pdln").style.display="none";
    document.getElementById("pdlrn").style.display="none";
    document.getElementById("cln").style.display="none";
    document.getElementById("clrn").style.display="none";
    document.getElementById("dlplct").style.display="none";
    document.getElementById("cofd").style.display="none";
    document.getElementById("chngeClssfctn").style.display="none";
    document.getElementById("addtnlCd").style.display="none";
    document.getElementById("ExpiredDLvfdl").style.display="none";
    document.getElementById("chngeCT").style.display="none";
}
// pdl
else if(list2.value == "pdl" && list3.value == "nw"){
    document.getElementById("pdln").style.display="block";
    document.getElementById("npdln").style.display="none";
    document.getElementById("spn").style.display="none";
    document.getElementById("sprn").style.display="none";
    document.getElementById("npdlrn").style.display="none";
    document.getElementById("pdlrn").style.display="none";
    document.getElementById("cln").style.display="none";
    document.getElementById("clrn").style.display="none";
    document.getElementById("dlplct").style.display="none";
    document.getElementById("cofd").style.display="none";
    document.getElementById("chngeClssfctn").style.display="none";
    document.getElementById("addtnlCd").style.display="none";
    document.getElementById("ExpiredDLvfdl").style.display="none";
    document.getElementById("chngeCT").style.display="none";
}
else if (list2.value == "pdl" && list3.value == "rnw"){
    document.getElementById("pdlrn").style.display="block";
    document.getElementById("npdlrn").style.display="none";
    document.getElementById("sprn").style.display="none";
    document.getElementById("spn").style.display="none";
    document.getElementById("npdln").style.display="none";
    document.getElementById("pdln").style.display="none";
    document.getElementById("cln").style.display="none";
    document.getElementById("clrn").style.display="none";
    document.getElementById("dlplct").style.display="none";
    document.getElementById("cofd").style.display="none";
    document.getElementById("chngeClssfctn").style.display="none";
    document.getElementById("addtnlCd").style.display="none";
    document.getElementById("ExpiredDLvfdl").style.display="none";
    document.getElementById("chngeCT").style.display="none";
}
// cl
else if(list2.value == "cl" && list3.value == "nw"){
    document.getElementById("cln").style.display="block";
    document.getElementById("pdln").style.display="none";
    document.getElementById("npdln").style.display="none";
    document.getElementById("spn").style.display="none";
    document.getElementById("sprn").style.display="none";
    document.getElementById("npdlrn").style.display="none";
    document.getElementById("pdlrn").style.display="none";
    document.getElementById("clrn").style.display="none";
    document.getElementById("dlplct").style.display="none";
    document.getElementById("cofd").style.display="none";
    document.getElementById("chngeClssfctn").style.display="none";
    document.getElementById("addtnlCd").style.display="none";
    document.getElementById("ExpiredDLvfdl").style.display="none";
    document.getElementById("chngeCT").style.display="none";
}
else if (list2.value == "cl" && list3.value == "rnw"){
    document.getElementById("clrn").style.display="block";
    document.getElementById("pdlrn").style.display="none";
    document.getElementById("npdlrn").style.display="none";
    document.getElementById("sprn").style.display="none";
    document.getElementById("spn").style.display="none";
    document.getElementById("npdln").style.display="none";
    document.getElementById("pdln").style.display="none";
    document.getElementById("cln").style.display="none";
    document.getElementById("dlplct").style.display="none";
    document.getElementById("cofd").style.display="none";
    document.getElementById("chngeClssfctn").style.display="none";
    document.getElementById("addtnlCd").style.display="none";
    document.getElementById("ExpiredDLvfdl").style.display="none";
    document.getElementById("chngeCT").style.display="none";
    
}
else if (list3.value == "dplct"){
    document.getElementById("dlplct").style.display="block";
    document.getElementById("clrn").style.display="none";
    document.getElementById("pdlrn").style.display="none";
    document.getElementById("npdlrn").style.display="none";
    document.getElementById("sprn").style.display="none";
    document.getElementById("spn").style.display="none";
    document.getElementById("npdln").style.display="none";
    document.getElementById("pdln").style.display="none";
    document.getElementById("cln").style.display="none";
    document.getElementById("cofd").style.display="none"; 
    document.getElementById("chngeClssfctn").style.display="none";
    document.getElementById("addtnlCd").style.display="none";
    document.getElementById("ExpiredDLvfdl").style.display="none";
    document.getElementById("chngeCT").style.display="none";
}
else if (list3.value == "cfdl"){
    document.getElementById("cofd").style.display="block";
    document.getElementById("dlplct").style.display="none";
    document.getElementById("clrn").style.display="none";
    document.getElementById("pdlrn").style.display="none";
    document.getElementById("npdlrn").style.display="none";
    document.getElementById("sprn").style.display="none";
    document.getElementById("spn").style.display="none";
    document.getElementById("npdln").style.display="none";
    document.getElementById("pdln").style.display="none";
    document.getElementById("cln").style.display="none";
    document.getElementById("chngeClssfctn").style.display="none";
    document.getElementById("addtnlCd").style.display="none"; 
    document.getElementById("ExpiredDLvfdl").style.display="none";
    document.getElementById("chngeCT").style.display="none";
}
else if (list3.value == "acc"){
    document.getElementById("addtnlCd").style.display="block"; 
    document.getElementById("cofd").style.display="none";
    document.getElementById("dlplct").style.display="none";
    document.getElementById("clrn").style.display="none";
    document.getElementById("pdlrn").style.display="none";
    document.getElementById("npdlrn").style.display="none";
    document.getElementById("sprn").style.display="none";
    document.getElementById("spn").style.display="none";
    document.getElementById("npdln").style.display="none";
    document.getElementById("pdln").style.display="none";
    document.getElementById("cln").style.display="none";
    document.getElementById("chngeClssfctn").style.display="none";
    document.getElementById("ExpiredDLvfdl").style.display="none";
    document.getElementById("chngeCT").style.display="none";

}
else if (list3.value == "cdlc"){    
    document.getElementById("chngeClssfctn").style.display="block";
    document.getElementById("cofd").style.display="none";
    document.getElementById("dlplct").style.display="none";
    document.getElementById("clrn").style.display="none";
    document.getElementById("pdlrn").style.display="none";
    document.getElementById("npdlrn").style.display="none";
    document.getElementById("sprn").style.display="none";
    document.getElementById("spn").style.display="none";
    document.getElementById("npdln").style.display="none";
    document.getElementById("pdln").style.display="none";
    document.getElementById("cln").style.display="none";
    document.getElementById("addtnlCd").style.display="none"; 
    document.getElementById("ExpiredDLvfdl").style.display="none";
    document.getElementById("chngeCT").style.display="none";
}
else if (list3.value == "edlvfdl"){
    document.getElementById("ExpiredDLvfdl").style.display="block";
    document.getElementById("addtnlCd").style.display="none"; 
    document.getElementById("cofd").style.display="none";
    document.getElementById("dlplct").style.display="none";
    document.getElementById("clrn").style.display="none";
    document.getElementById("pdlrn").style.display="none";
    document.getElementById("npdlrn").style.display="none";
    document.getElementById("sprn").style.display="none";
    document.getElementById("spn").style.display="none";
    document.getElementById("npdln").style.display="none";
    document.getElementById("pdln").style.display="none";
    document.getElementById("cln").style.display="none";
    document.getElementById("chngeClssfctn").style.display="none";
    document.getElementById("chngeCT").style.display="none";

}
else if (list3.value == "cct"){ 
    document.getElementById("chngeCT").style.display="block";   
    document.getElementById("chngeClssfctn").style.display="none";
    document.getElementById("cofd").style.display="none";
    document.getElementById("dlplct").style.display="none";
    document.getElementById("clrn").style.display="none";
    document.getElementById("pdlrn").style.display="none";
    document.getElementById("npdlrn").style.display="none";
    document.getElementById("sprn").style.display="none";
    document.getElementById("spn").style.display="none";
    document.getElementById("npdln").style.display="none";
    document.getElementById("pdln").style.display="none";
    document.getElementById("cln").style.display="none";
    document.getElementById("addtnlCd").style.display="none"; 
    document.getElementById("ExpiredDLvfdl").style.display="none";
    
}
else{
    document.getElementById("spn").style.display="none";
    document.getElementById("sprn").style.display="none";
    document.getElementById("npdln").style.display="none";
    document.getElementById("npdlrn").style.display="none";
    document.getElementById("pdln").style.display="none";
    document.getElementById("pdlrn").style.display="none";
    document.getElementById("cln").style.display="none";
    document.getElementById("clrn").style.display="none";
    document.getElementById("dlplct").style.display="none";
    document.getElementById("cofd").style.display="none";
    document.getElementById("chngeClssfctn").style.display="none";
    document.getElementById("addtnlCd").style.display="none";
    document.getElementById("ExpiredDLvfdl").style.display="none";
    document.getElementById("chngeCT").style.display="none";
}

if (list2.value == "sp"){
    var laa = "Student-Driver's Permit"
}
else if (list2.value == "npdl"){
    var laa = "Non-Professional Driver's License"
}
else if (list2.value == "pdl"){
    var laa = "Professional Driver's License"
}
else if (list2.value == "cl"){
    var laa = "Conductor's License"
}

if (list3.value == "nw"){
    var toa = "New"
}
else if (list3.value == "rnw"){
    var toa = "Renewal"
}
else if (list3.value == "cfdl"){
    var toa = "Conversion of Foreign DL"
}
else if (list3.value == "acc"){
    var toa = "Addiotional Code or Category"
}
else if (list3.value == "cdlc"){
    var toa = "Change of DL Classification"
}
else if (list3.value == "edlvfdl"){
    var toa = "Expired DL with Valid FDL"
}
else if (list3.value == "dplct"){
    var toa = "Duplicate"
}
else if (list3.value == "dcardc"){
    var toa = "Dropping of Category or Add'l or Removal of Driving Conditions"
}
else if (list3.value == "rr"){
    var toa = "Revision of Records"
}
else if (list3.value == "edl"){
    var toa = "Enhancement of DL"
}
else if (list3.value == "cct"){
    var toa = "Change of Clutch Type"
}

    localStorage.setItem("laa",laa.toUpperCase());
    localStorage.setItem("toa",toa.toUpperCase());

// revision of records
    if(list3.value == "rr"){
        document.getElementById("lic_rr").style.display="block";
    }
    else{
        document.getElementById("lic_rr").style.display="none";
    }

}

function lic_rr(){
    if (list4.value == "rrca"){
        document.getElementById("rr_ca").style.display="block";
        document.getElementById("rr_ccs").style.display="none";
        document.getElementById("rr_cn").style.display="none";  

        var rvsnofrcrds = "Change Address"
    }
    else if(list4.value == "rrccs"){
        document.getElementById("rr_ccs").style.display="block";
        document.getElementById("rr_ca").style.display="none";
        document.getElementById("rr_cn").style.display="none"; 

        var rvsnofrcrds = "Change Civil Status"
    }
    else if (list4.value == "rrcn" || list4.value == "rrcbd"){
        document.getElementById("rr_cn").style.display="block"; 
        document.getElementById("rr_ccs").style.display="none";
        document.getElementById("rr_ca").style.display="none";
    }
    else{   
        document.getElementById("rr_ca").style.display="none";
        document.getElementById("rr_ccs").style.display="none";
        document.getElementById("rr_cn").style.display="none";
    }

    if (list4.value == "rrcn"){
        var rvsnofrcrds = "Change Name"
    }
    else if (list4.value == "rrcbd"){
        var rvsnofrcrds = "Change Birth date"
    }
    else if (list4.value == "rro"){
        var rvsnofrcrds = "Others"
    }

    localStorage.setItem("rvsnofrcrds",rvsnofrcrds.toUpperCase());

}

function mv_toa(){
    if (list5.value == "rnwl" && list1.value == "mtrvhcl"){
        document.getElementById("renewal").style.display="block";
        document.getElementById("dplomt").style.display="none";
        document.getElementById("oevsez").style.display="none";
        document.getElementById("forhre").style.display="none";
        document.getElementById("stolnrcovrd").style.display="none";
        document.getElementById("Rctivtncd").style.display="none";

        var toa = "Renewal"
    }
    else if(list5.value == "pr" && list1.value == "mtrvhcl"){
        document.getElementById("renewal").style.display="none";
        document.getElementById("dplomt").style.display="block";
        document.getElementById("oevsez").style.display="none";
        document.getElementById("forhre").style.display="none";
        document.getElementById("stolnrcovrd").style.display="none";
        document.getElementById("Rctivtncd").style.display="none";

        var toa = "Diplomat"
    }
    else if (list5.value == "oev" && list1.value == "mtrvhcl"){
        document.getElementById("renewal").style.display="none";
        document.getElementById("dplomt").style.display="none";
        document.getElementById("oevsez").style.display="block";
        document.getElementById("forhre").style.display="none";
        document.getElementById("stolnrcovrd").style.display="none";
        document.getElementById("Rctivtncd").style.display="none";

        var toa = "Other Exempt Vehicle (OEV) under Special Economic Zones"
    }
    else if (list5.value == "frhr" && list1.value == "mtrvhcl"){
        document.getElementById("renewal").style.display="none";
        document.getElementById("dplomt").style.display="none";
        document.getElementById("oevsez").style.display="none";
        document.getElementById("forhre").style.display="block";
        document.getElementById("stolnrcovrd").style.display="none";
        document.getElementById("Rctivtncd").style.display="none"; 

        var toa = "For Hire"
    }
    else if(list5.value == "stlnrcvrd" && list1.value == "mtrvhcl"){
        document.getElementById("renewal").style.display="none";
        document.getElementById("dplomt").style.display="none";
        document.getElementById("oevsez").style.display="none";
        document.getElementById("forhre").style.display="none";
        document.getElementById("stolnrcovrd").style.display="block";
        document.getElementById("Rctivtncd").style.display="none";

        var toa = "Stolen and Recovered"
    }
    else if (list5.value == "rctvtnstrg" && list1.value == "mtrvhcl"){
        document.getElementById("renewal").style.display="none";
        document.getElementById("dplomt").style.display="none";
        document.getElementById("oevsez").style.display="none";
        document.getElementById("forhre").style.display="none";
        document.getElementById("stolnrcovrd").style.display="none";
        document.getElementById("Rctivtncd").style.display="block";

        var toa = "Reactivation of Storage"
    }
    else{
        document.getElementById("renewal").style.display="none";
        document.getElementById("dplomt").style.display="none";
        document.getElementById("oevsez").style.display="none";
        document.getElementById("forhre").style.display="none";
        document.getElementById("stolnrcovrd").style.display="none";
        document.getElementById("Rctivtncd").style.display="none";
    }

    localStorage.setItem("toa",toa.toUpperCase());
}

