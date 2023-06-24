
nextL.addEventListener('click', (e) => {

    if (localStorage.getItem("tot") == null) {
        Swal.fire({
            title: 'Please choose type of transaction to proceed.',
            confirmButtonColor: '#132aaa',
            width: 500,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    // else if(localStorage.getItem("laa") == null){
    //     Swal.fire({
    //         title: 'Please complete your transaction to proceed.',
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
    // else if(localStorage.getItem("toa") == null){
    //     Swal.fire({
    //         title: 'Please complete your transaction to proceed.',
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
    // else if()
    else {
        window.location = 'c_PIform.html'
    }
})

back1.addEventListener('click', (e) => {
    // window.location = "c_calendar.html";
    history.back();
})

// hide all
var list1 = document.getElementById("selectText1");
var list2 = document.getElementById("selectText2");
var list3 = document.getElementById("selectText3");
var list4 = document.getElementById("selectText4");
var list5 = document.getElementById("selectText5");
// FOR HIDING REQ
document.getElementById("spn").style.display = "none";
document.getElementById("sprn").style.display = "none";
document.getElementById("npdln").style.display = "none";
document.getElementById("npdlrn").style.display = "none";
document.getElementById("pdln").style.display = "none";
document.getElementById("pdlrn").style.display = "none";
document.getElementById("cln").style.display = "none";
document.getElementById("clrn").style.display = "none";
document.getElementById("cl_dcardc").style.display = "none";
document.getElementById("dlplct").style.display = "none";
document.getElementById("cofd").style.display = "none";
document.getElementById("chngeClssfctn").style.display = "none";
document.getElementById("addtnlCd").style.display = "none";
document.getElementById("ExpiredDLvfdl").style.display = "none";
document.getElementById("chngeCT").style.display = "none";
document.getElementById("rr_cbd").style.display = "none";
document.getElementById("rr_lr").style.display = "none";
document.getElementById("rr_copd").style.display = "none";
document.getElementById("rr_cc").style.display = "none";


document.getElementById("rr_cadd").style.display = "none";
document.getElementById("rr_ccs").style.display = "none";
document.getElementById("rr_cn").style.display = "none";
document.getElementById("cl_rrccc").style.display = "none";
document.getElementById("cl_new").style.display = "none";
document.getElementById("cl_rrcoa").style.display = "none";
document.getElementById("cl_rrcopd").style.display = "none";
document.getElementById("cl_rrlost").style.display = "none";
document.getElementById("rr_cbd").style.display = "none";
document.getElementById("rr_lr").style.display = "none";
document.getElementById("rr_copd").style.display = "none";
document.getElementById("rr_cc").style.display = "none";
document.getElementById("dlplct").style.display = "none";

document.getElementById("renewal").style.display = "none";
document.getElementById("dplomt").style.display = "none";
document.getElementById("oevsez").style.display = "none";
document.getElementById("forhre").style.display = "none";
document.getElementById("stolnrcovrd").style.display = "none";
document.getElementById("Rctivtncd").style.display = "none";
document.getElementById("rr_cbd").style.display = "none";
document.getElementById("rr_lr").style.display = "none";
document.getElementById("rr_copd").style.display = "none";
document.getElementById("rr_cc").style.display = "none";



document.getElementById("mv_toa").style.display = "none";
document.getElementById("license").style.display = "none";
document.getElementById("lic_rr").style.display = "none";
document.getElementById("rr_cbd").style.display = "none";
document.getElementById("rr_lr").style.display = "none";
document.getElementById("rr_copd").style.display = "none";
document.getElementById("rr_cc").style.display = "none";


//FOR LICENSE AND MV
function trnsct() {

    if (list1.value == "lscnc") {
        document.getElementById("license").style.display = "block";
        document.getElementById("mv_toa").style.display = "none";

        document.getElementById("renewal").style.display = "none";
        document.getElementById("dplomt").style.display = "none";
        document.getElementById("oevsez").style.display = "none";
        document.getElementById("forhre").style.display = "none";
        document.getElementById("stolnrcovrd").style.display = "none";
        document.getElementById("Rctivtncd").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    else if (list1.value == "mtrvhcl") {
        document.getElementById("mv_toa").style.display = "block";
        document.getElementById("license").style.display = "none";

        document.getElementById("rr_ccs").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

        document.getElementById("rr_cn").style.display = "none";
        document.getElementById("rr_cadd").style.display = "none";

        document.getElementById("spn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";
        // document.getElementById("cl_edl").style.display="none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
    }
    else {
        document.getElementById("mv_toa").style.display = "none";
        document.getElementById("license").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";
        document.getElementById("dlplct").style.display = "none";

    }

    // for storage
    if (list1.value == "lscnc") {
        var tot = "Licensing"
    }
    else if (list1.value == "mtrvhcl") {
        var tot = "Motor Vehicle Registration"
    }

    localStorage.setItem("tot", tot.toUpperCase());
    console.log(localStorage.getItem('tot'))
}

function laaf_lic() {
    // SP NEW
    if (list2.value == "sp" && list3.value == "nw") {

        document.getElementById("spn").style.display = "block";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";
    }
    // SP RENEW
    else if (list2.value == "sp" && list3.value == "rnw") {
        document.getElementById("sprn").style.display = "block";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    // DL NEW
    else if (list2.value == "dl" && list3.value == "nw") {
        document.getElementById("npdln").style.display = "block";
        document.getElementById("spn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    // DL RENEW
    else if (list2.value == "dl" && list3.value == "rnw") {
        document.getElementById("npdlrn").style.display = "block";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    // CL NEW
    else if (list2.value == "cl" && list3.value == "nw") {
        document.getElementById("cln").style.display = "block";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    // CL RENEW
    else if (list2.value == "cl" && list3.value == "rnw") {
        document.getElementById("clrn").style.display = "block";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";


    }


    // else if (list3.value == "dplct"){
    //     document.getElementById("dlplct").style.display="block";
    //     document.getElementById("clrn").style.display="none";
    //     document.getElementById("pdlrn").style.display="none";
    //     document.getElementById("cl_dcardc").style.display="none";
    //     document.getElementById("npdlrn").style.display="none";
    //     document.getElementById("sprn").style.display="none";
    //     document.getElementById("spn").style.display="none";
    //     document.getElementById("npdln").style.display="none";
    //     document.getElementById("pdln").style.display="none";
    //     document.getElementById("cln").style.display="none";
    //     document.getElementById("cofd").style.display="none"; 
    //     document.getElementById("chngeClssfctn").style.display="none";
    //     document.getElementById("addtnlCd").style.display="none";
    //     document.getElementById("ExpiredDLvfdl").style.display="none";
    //     document.getElementById("chngeCT").style.display="none";
    // }

    // TRANSACTION WITH NO REQUIREMENTS
    else if (list2.value == "sp" && list3.value == "dcardc" || list2.value == "cl" && list3.value == "dcardc") {
        document.getElementById("cl_dcardc").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    else if (list2.value == "dl" && list3.value == "edl" || list2.value == "cl" && list3.value == "edl" || list2.value == "dl" && list3.value == "dcardc") {
        document.getElementById("cl_dcardc").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    else if (list2.value == "dl" && list3.value == "dplct" || list2.value == "cl" && list3.value == "edl" || list2.value == "dl" && list3.value == "dcardc") {
        document.getElementById("dlplct").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";


    }
    else if (list2.value == "sp" && list3.value == "dplct" || list2.value == "cl" && list3.value == "edl" || list2.value == "dl" && list3.value == "dcardc") {
        document.getElementById("dlplct").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";

    }
    else if (list2.value == "sp" && list3.value == "edl") {
        document.getElementById("cl_dcardc").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";

        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    else if (list2.value == "cl" && list3.value == "acc") {
        document.getElementById("cl_dcardc").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    else if (list2.value == "cl" && list3.value == "dplct") {
        document.getElementById("cl_dcardc").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    else if (list2.value == "cl" && list3.value == "cfdl") {
        document.getElementById("cl_dcardc").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    else if (list2.value == "cl" && list3.value == "cct") {
        document.getElementById("cl_dcardc").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }


    else if (list2.value == "cl" && list3.value == "cdlc") {
        document.getElementById("cl_dcardc").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    else if (list2.value == "cl" && list3.value == "edlvfdl") {
        document.getElementById("cl_dcardc").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }

    else if (list2.value == "sp" && list3.value == "cfdl" || list2.value == "sp" && list3.value == "acc") {
        document.getElementById("cl_dcardc").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    else if (list2.value == "sp" && list3.value == "edlvfdl" || list2.value == "sp" && list3.value == "cdlc") {
        document.getElementById("cl_dcardc").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";



    }
    else if (list2.value == "sp" && list3.value == "rr") {

        document.getElementById("cl_dcardc").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("lic_rr").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    else if (list2.value == "sp" && list3.value == "cct") {
        document.getElementById("cl_dcardc").style.display = "block";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    // OTHER TRANSACTION
    // CONVERSION OF FOREIGN DL
    else if (list3.value == "cfdl") {
        document.getElementById("cofd").style.display = "block";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("clrn").style.display = "none"

        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";

    }
    // ADDITIONAL CODE
    else if (list3.value == "acc") {
        document.getElementById("addtnlCd").style.display = "block";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    // CHANGE OF CLASSIFICATION
    else if (list3.value == "cdlc") {
        document.getElementById("chngeClssfctn").style.display = "block";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    // EXPIRED FOREIGN LICENSE
    else if (list3.value == "edlvfdl") {
        document.getElementById("ExpiredDLvfdl").style.display = "block";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    // CHANGE OF CLUTCH TYPE
    else if (list3.value == "cct") {
        document.getElementById("chngeCT").style.display = "block";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("spn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    else {
        document.getElementById("spn").style.display = "none";
        document.getElementById("sprn").style.display = "none";
        document.getElementById("npdln").style.display = "none";
        document.getElementById("npdlrn").style.display = "none";
        document.getElementById("pdln").style.display = "none";
        document.getElementById("pdlrn").style.display = "none";
        document.getElementById("cln").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none ";
        document.getElementById("clrn").style.display = "none";
        document.getElementById("dlplct").style.display = "none";
        document.getElementById("cofd").style.display = "none";
        document.getElementById("chngeClssfctn").style.display = "none";
        document.getElementById("addtnlCd").style.display = "none";
        document.getElementById("ExpiredDLvfdl").style.display = "none";
        document.getElementById("chngeCT").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";
        document.getElementById("cl_dcardc").style.display = "none";

    }

    if (list2.value == "sp") {
        var laa = "Student-Driver's Permit"
    }
    else if (list2.value == "dl") {
        var laa = "Driver's License"
    }
    else if (list2.value == "cl") {
        var laa = "Conductor's License"
    }
    if (list3.value == "nw") {
        var toa = "New"
    }
    else if (list3.value == "rnw") {
        var toa = "Renewal"
    }
    else if (list3.value == "cfdl") {
        var toa = "Conversion of Foreign DL"
    }
    else if (list3.value == "acc") {
        var toa = "ADDITIONAL DL CODE OR CATEGORY"
    }
    else if (list3.value == "cdlc") {
        var toa = "Change of DL Classification"
    }
    else if (list3.value == "edlvfdl") {
        var toa = "Expired DL with Valid FDL"
    }
    else if (list3.value == "dplct") {
        var toa = "Duplicate"
    }
    else if (list3.value == "dcardc") {
        var toa = "Dropping of Category or Add'l or Removal of Driving Conditions"
    }
    else if (list3.value == "rr") {
        var toa = "Revision of Records"
    }
    else if (list3.value == "cct") {
        var toa = "Change of Clutch Type"
    }

    //for payments 

    if (toa === "New" && laa === "Student-Driver's Permit") {
        var fees = "250.00"
    } if (toa === "Rewal" && laa === "Student-Driver's Permit") {
        var fees = "150.00"
    }
    if (toa === "New" && laa === "Driver's License") {
        var fees = "685.00"
    }
    if (toa === "Renewal" && laa === "Driver's License") {
        var fees = "585.00"
    }
    if (toa === "Renewal" && laa === "Conductor's License") {
        var fees = "585.00"
    }
    if (toa === "ADDITIONAL DL CODE OR CATEGORY" && laa === "Driver's License") {
        var fees = "425.00"
    }
    if (toa === "Change of DL Classification" && laa === "Driver's License") {
        var fees = "425.00"
    }
    if (toa === "Conversion of Foreign DL" && laa === "Driver's License") {
        var fees = "785.00"
    }
    if (toa === "Change of Clutch Type" && laa === "Driver's License") {
        var fees = "425.00"
    }
    if (toa === "Expired DL with Valid FDL" && laa === "Driver's License") {
        var fees = "785.00"
    }

    localStorage.setItem("laa", laa.toUpperCase());
    localStorage.setItem("toa", toa.toUpperCase());
    localStorage.setItem("fees", fees);

    console.log(localStorage.getItem('laa'))
    console.log(localStorage.getItem('toa'))
    console.log(localStorage.getItem('fees'))
    // FOR HIDING OF REVISION OF RECORDS
    if (list2.value == "sp") {
        document.getElementById("lic_rr").style.display = "none";
        document.getElementById("rr_ccs").style.display = "none";
        document.getElementById("rr_cadd").style.display = "none";
        document.getElementById("rr_cn").style.display = "none";
    }
    else if (list2.value == "dl" && list3.value == "rr") {
        document.getElementById("lic_rr").style.display = "block";
    }
    else if (list2.value == "cl" && list3.value == "rr") {
        document.getElementById("lic_rr").style.display = "block";
    }
    else {
        document.getElementById("lic_rr").style.display = "none";
    }
    // if(list3.value == "rr"){
    //     document.getElementById("lic_rr").style.display="block";
    // }
    // else{
    //     document.getElementById("lic_rr").style.display="none";
    // }

}

function lic_rr() {
    // change add req
    if (list2.value == "sp") {
        document.getElementById("lic_rr").style.display = "none";
        document.getElementById("rr_ccs").style.display = "none";
        document.getElementById("rr_cadd").style.display = "none";
        document.getElementById("rr_cn").style.display = "none";
    }
    else if (list2.value == "dl" && list3.value == "rr") {
        document.getElementById("lic_rr").style.display = "block";
    }
    else if (list2.value == "cl" && list3.value == "rr") {
        document.getElementById("lic_rr").style.display = "block";
    }
    else {
        document.getElementById("lic_rr").style.display = "none";
    }
    // if(list3.value == "rr"){
    //     document.getElementById("lic_rr").style.display="block";
    // }
    // else{
    //     document.getElementById("lic_rr").style.display="none";
    // }

}

function lic_rr() {
    // CHANGE ADDRESS
    if (list4.value == "rrca") {
        document.getElementById("rr_cadd").style.display = "block";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_ccs").style.display = "none";
        document.getElementById("rr_cn").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

        var rvsnofrcrds = "Change Address"
    }
    // CHANGE OF CIVIL STATUS
    else if (list4.value == "rrccs") {
        document.getElementById("rr_ccs").style.display = "block";
        document.getElementById("rr_cadd").style.display = "none";
        document.getElementById("rr_cn").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";


        var rvsnofrcrds = "Change Civil Status"
    }
    // CORRECTION OF NAME/ BIRTH DATE AND CHANGE NAME
    else if (list4.value == "rrcn" || list4.value == "rrcbd") {
        document.getElementById("rr_cn").style.display = "block";
        document.getElementById("rr_cadd").style.display = "none";
        document.getElementById("rr_ccs").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

    }
    // AWAN PAY NAKAKABIL NGA REQ NA, PAKIKITA NO ADDA
    if (list4.value == "rrcopd") {
        document.getElementById("rr_copd").style.display = "block";
        document.getElementById("rr_cadd").style.display = "none";
        document.getElementById("rr_ccs").style.display = "none";
        document.getElementById("rr_cn").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none"
        document.getElementById("rr_cc").style.display = "none";

        var rvsnofrcrds = "Change of Other Personal Details"
    }
    if (list4.value == "rrcopd") {
        document.getElementById("rr_copd").style.display = "block";
        document.getElementById("rr_cadd").style.display = "none";
        document.getElementById("rr_ccs").style.display = "none";
        document.getElementById("rr_cn").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

        var rvsnofrcrds = "Change of Other Personal Details"
    }


    if (list4.value == "rro") {
        document.getElementById("rr_cadd").style.display = "none";
        document.getElementById("rr_ccs").style.display = "none";
        document.getElementById("rr_cn").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";

        var rvsnofrcrds = "Others"
    }
    if (list4.value == "cc") {
        document.getElementById("rr_cc").style.display = "block";
        document.getElementById("rr_cadd").style.display = "none";
        document.getElementById("rr_ccs").style.display = "none";
        document.getElementById("rr_cn").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";
        document.getElementById("rr_cbd").style.display = "none";
        var rvsnofrcrds = "Change of Citizenship"
    }
    if (list4.value == "rrcbd") {
        document.getElementById("rr_cbd").style.display = "block";
        document.getElementById("rr_cc").style.display = "none";
        document.getElementById("rr_cadd").style.display = "none";
        document.getElementById("rr_ccs").style.display = "none";
        document.getElementById("rr_cn").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_lr").style.display = "none";

        var rvsnofrcrds = "Correction of Name/Birth Date"
    }
    if (list4.value == "lr") {
        document.getElementById("rr_cbd").style.display = "none";
        document.getElementById("rr_lr").style.display = "block";
        document.getElementById("rr_cadd").style.display = "none";
        document.getElementById("rr_ccs").style.display = "none";
        document.getElementById("rr_cn").style.display = "none";
        document.getElementById("rr_copd").style.display = "none";
        document.getElementById("rr_cc").style.display = "none";



        var rvsnofrcrds = "Lost/Replacement"
    }
    // else{   
    //     document.getElementById("rr_ccs").style.display="none";
    //     document.getElementById("rr_cn").style.display="none";
    //     // document.getElementById("rr_cadd").style.display="none";
    // }

    // if (list4.value == "rrcn"){
    //     var rvsnofrcrds = "Change Name"
    // }
    // else if (list4.value == "rrcbd"){
    //     var rvsnofrcrds = "Change Birth date"
    // }
    // else if (list4.value == "rro"){
    //     var rvsnofrcrds = "Others"
    // }

    localStorage.setItem("rvsnofrcrds", rvsnofrcrds.toUpperCase());
    localStorage.setItem("fees", "325.00")
    console.log(localStorage.getItem('rvsnofrcrds'))
    console.log(localStorage.getItem('fees'))

}

function mv_toa() {
    if (list5.value == "rnwl" && list1.value == "mtrvhcl") {
        document.getElementById("renewal").style.display = "block";
        document.getElementById("dplomt").style.display = "none";
        document.getElementById("oevsez").style.display = "none";
        document.getElementById("forhre").style.display = "none";
        document.getElementById("stolnrcovrd").style.display = "none";
        document.getElementById("Rctivtncd").style.display = "none";

        var toa = "Renewal"
    }
    else if (list5.value == "pr" && list1.value == "mtrvhcl") {
        document.getElementById("renewal").style.display = "none";
        document.getElementById("dplomt").style.display = "block";
        document.getElementById("oevsez").style.display = "none";
        document.getElementById("forhre").style.display = "none";
        document.getElementById("stolnrcovrd").style.display = "none";
        document.getElementById("Rctivtncd").style.display = "none";

        var toa = "Diplomat"
    }
    else if (list5.value == "oev" && list1.value == "mtrvhcl") {
        document.getElementById("renewal").style.display = "none";
        document.getElementById("dplomt").style.display = "none";
        document.getElementById("oevsez").style.display = "block";
        document.getElementById("forhre").style.display = "none";
        document.getElementById("stolnrcovrd").style.display = "none";
        document.getElementById("Rctivtncd").style.display = "none";

        var toa = "Other Exempt Vehicle (OEV) under Special Economic Zones"
    }
    else if (list5.value == "frhr" && list1.value == "mtrvhcl") {
        document.getElementById("renewal").style.display = "none";
        document.getElementById("dplomt").style.display = "none";
        document.getElementById("oevsez").style.display = "none";
        document.getElementById("forhre").style.display = "block";
        document.getElementById("stolnrcovrd").style.display = "none";
        document.getElementById("Rctivtncd").style.display = "none";

        var toa = "For Hire"
    }
    else if (list5.value == "stlnrcvrd" && list1.value == "mtrvhcl") {
        document.getElementById("renewal").style.display = "none";
        document.getElementById("dplomt").style.display = "none";
        document.getElementById("oevsez").style.display = "none";
        document.getElementById("forhre").style.display = "none";
        document.getElementById("stolnrcovrd").style.display = "block";
        document.getElementById("Rctivtncd").style.display = "none";

        var toa = "Stolen and Recovered"
    }
    else if (list5.value == "rctvtnstrg" && list1.value == "mtrvhcl") {
        document.getElementById("renewal").style.display = "none";
        document.getElementById("dplomt").style.display = "none";
        document.getElementById("oevsez").style.display = "none";
        document.getElementById("forhre").style.display = "none";
        document.getElementById("stolnrcovrd").style.display = "none";
        document.getElementById("Rctivtncd").style.display = "block";

        var toa = "Reactivation of Storage"
    }
    else {
        document.getElementById("renewal").style.display = "none";
        document.getElementById("dplomt").style.display = "none";
        document.getElementById("oevsez").style.display = "none";
        document.getElementById("forhre").style.display = "none";
        document.getElementById("stolnrcovrd").style.display = "none";
        document.getElementById("Rctivtncd").style.display = "none";
    }

    localStorage.setItem("toa", toa.toUpperCase());
    localStorage.setItem("fees", " ")
}


