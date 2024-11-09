let prf = document.querySelector('.prf-menu');
let nex = document.querySelector('.next');
let nex2 = document.querySelector('.nex2');
// ------
let settingmenu = document.querySelector('.settingmenu');
let sttbtn = document.querySelector(".set-btn");
//  ---------------
let extConfirmation = document.querySelector(".extConfirmation");
let exitbtn = document.querySelector('.exitbtn');
let cancelbtn = document.querySelector(".Cancel-btn");





nex.addEventListener('click', () => {
    prf.classList.toggle('activeprf-menu')
    nex.classList.toggle('activenext')
});
nex2.addEventListener('click', () => {
    prf.classList.toggle('activeprf-menu')
    setTimeout(function () {
        nex.classList.toggle('activenext')
    }, 400)
})



document.addEventListener('click', e => {
    if (!prf.contains(e.target) && !nex.contains(e.target) && !nex2.contains(e.target)) {
        prf.classList.remove('activeprf-menu')
        nex.classList.remove('activenext')
    }
    if (!settingmenu.contains(e.target) && !sttbtn.contains(e.target)) {
        settingmenu.classList.remove("activesettingmenu")
    }
})
//   ----------------------------------- SETTING MENUE ----------------------------------------
sttbtn.addEventListener("click", () => {
    settingmenu.classList.toggle("activesettingmenu")
})

// ---
exitbtn.addEventListener("click", () => {
    extConfirmation.classList.toggle("activeextConfirmation")
})
cancelbtn.addEventListener("click", () => {
    extConfirmation.classList.toggle("activeextConfirmation")
})
//  COEUR TOGLLE FOR LIK SND REMOVE LIK ))___________+++

let coeur = document.querySelectorAll('.coeur');
let arrcoeur = Array.from(coeur);

coeur.forEach(function (c) {
    c.addEventListener("click", () => {
        let cindex = arrcoeur.indexOf(c)
        arrcoeur[cindex].classList.toggle('activecoeur')
        if (arrcoeur[cindex].src.match('image/coeur.png')) {
            arrcoeur[cindex].src = 'image/coeur2.png'
        }
        else {
            arrcoeur[cindex].src = 'image/coeur.png'
        }
    })
})

// SCROLL THE PULISH POST OF USER -----------------------
function gaft() {
    let arr_imagesrc = [
        'mercdes/i3-removebg-preview.png',
        "mercdes/i7-removebg-preview.png",
        "mercdes/i8-removebg-preview.png",
        "mercdes/m10-removebg-preview.png",
        "mercdes/m9-removebg-preview.png",
        "m/ip15-removebg-preview.png",
        "m/ip4-removebg-preview.png",
        "m/ip7-removebg-preview (1).png",
        "m/m5-removebg-preview.png",
        "m/m8-removebg-preview.png"
    ]

    let appel_igm = document.querySelector('.appel-igm');
    let clas_appell = document.querySelector('.clas-appell');
    let clas_appelr = document.querySelector('.clas-appelr');
    let a = 0;
    appel_igm.src = arr_imagesrc[a]
    clas_appell.style.visibility = 'hidden';
    clas_appelr.addEventListener('click', function () {

        if (a < arr_imagesrc.length - 1) {
            a++;
        }

        if (a > 0 && a < arr_imagesrc.length) {
            clas_appell.style.visibility = 'visible';
            appel_igm.src = arr_imagesrc[a]
        }


        if (a == arr_imagesrc.length - 1) {
            clas_appelr.style.visibility = 'hidden';
        }

        console.log(a)


    })


    clas_appell.addEventListener('click', function () {

        if (a > 0 && a <= arr_imagesrc.length) {
            appel_igm.src = arr_imagesrc[a - 1]
        }

        if (a > 0) {
            clas_appelr.style.visibility = 'visible';
            a--;
        }
        if (a == 0) {
            clas_appell.style.visibility = 'hidden';

        }
        console.log(a)

    })
}


gaft();




let conimg_video = document.querySelectorAll(".cont-img-video");
let scrolleft = document.querySelectorAll(".scrolleft");
let scrollright = document.querySelectorAll(".scrollright");
let arrscrolleft = Array.from(scrolleft);
let arrscrollright = Array.from(scrollright);

scrollright.forEach(btnr => {
    btnr.addEventListener('click',
        function () {
            let btnrindex = arrscrollright.indexOf(btnr)
            conimg_video[btnrindex].scrollBy(1000, 0)
        })
});

arrscrolleft.forEach(btnr => {
    btnr.addEventListener('click',
        function () {
            let btnrindex = arrscrolleft.indexOf(btnr)
            conimg_video[btnrindex].scrollBy(-1000, 0)
        })
});

//-------------OPTIONS MENU SETTING ARE HERE SON -------------------

let options_menu = document.querySelectorAll(".options-menu");
let options_img = document.querySelectorAll(".options-img");
let arr_option = Array.from(options_img);
let arr_optionmenu = Array.from(options_menu);

options_img.forEach(function (iMg) {
    iMg.addEventListener('click', () => {
        let index_imgmenu = arr_option.indexOf(iMg);
        let index_menu = arr_optionmenu.indexOf(iMg);
        options_menu[index_imgmenu].classList.add("activeoptions-menu")
        iMg.classList.add("activeoptions-img")

        window.addEventListener("click", (e) => {
            if (!iMg.contains(e.target) && !arr_optionmenu[index_imgmenu].contains(e.target)) {
                iMg.classList.remove("activeoptions-img")
                arr_optionmenu[index_imgmenu].classList.remove("activeoptions-menu")

            }
        })
    })

})


//  page coment-*--------------------------------
function comentFunction() {
    let page_coment = document.querySelector(".pg-er-coment");
    let coment_btn = document.querySelectorAll(".coment-btn");
    let send_coment_btn = document.querySelector(".send-coment");
    let cancel_coment = document.querySelector(".cancel-coment");
    let coment_text = document.querySelector(".cment-text");


    let container_coments = document.querySelector(".coment-text")
    let form_comentaire = document.querySelector(".form-comentaire");
    let comentaire_text = document.querySelector(".comentaire-text");
    let imag_coment_user = document.querySelector(".imag-coment-user");

    coment_btn.forEach(function (btn) {

        btn.addEventListener("click", () => {
            page_coment.classList.toggle('activecoment')
            document.querySelector(".cment-text").focus()
            document.querySelector(".cment-text").value = ''
        })
    })

    coment_text.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            send_coment_btn.click();
        }
    });

    cancel_coment.addEventListener("click", () => {
        page_coment.classList.toggle('activecoment')
    })

    let arr_image = ['image/profil.png', 'mustapha iderkaoui'];

    let i_info = 0;


    let coment_username = document.querySelector(".coment-username");

    send_coment_btn.addEventListener("click", () => {
        let from_cloned = form_comentaire.cloneNode(true);
        label2.classList.remove("activelabel2")
        fermer_btn.classList.remove("activefermerbtn")
        if (coment_text.value != '' && arr_image[i_info] != undefined) {
            form_comentaire.before(from_cloned);
            imag_coment_user.src = arr_image[i_info];
            coment_username.innerHTML = arr_image[i_info + 1];
            comentaire_text.innerHTML = coment_text.value;
            container_coments.scrollBy(0, 100);
        }
        coment_text.value = ''


    })

    //   EMOJIS SPACE ARE HERE --------------------------

    let happy_face = document.querySelector(".happy-face");
    let label2 = document.querySelector(".label2")
    let fermer_btn = document.querySelector(".fermer-btn")
    let emojis = document.querySelectorAll('.label2 span');

    happy_face.addEventListener('click', function () {
        label2.classList.add("activelabel2")
        fermer_btn.classList.add("activefermerbtn")
    })
    fermer_btn.addEventListener("click", function () {
        label2.classList.remove("activelabel2")
        fermer_btn.classList.remove("activefermerbtn")
    })
    emojis.forEach(function (emoji) {
        emoji.addEventListener("click", function () {
            coment_text.value += emoji.innerHTML;

        })
    })

}
comentFunction()
// -SEND POST SPAVE HERE -----------------++++++++++++++++++++++++

function sendPostFunc() {
    let send_post_btn = document.querySelectorAll(".send-post-btn");
    let arrsend_post_btn = Array.from(send_post_btn)
    let list_sendPost = document.querySelectorAll('.list-sendPost');

    let ending_send = document.querySelectorAll(".end-send-post")
    let arrending_send = Array.from(ending_send)
    let spinner = document.querySelectorAll('.spinner');

    let remove_imgend = document.querySelectorAll('.send-msg-img')

    let msg_sen_nonsend = document.querySelector('.msg-sen-nonsend')


    send_post_btn.forEach((btn) => {
        btn.addEventListener('click', function () {
            let indx2 = arrsend_post_btn.indexOf(btn);
            list_sendPost[indx2].classList.add("activelist-sendPosdt");
            ending_send[indx2].classList.add("activeend-send-post")
            remove_imgend[indx2].classList.remove("remove-imgend")
            window.addEventListener('click', function (e) {
                if (!list_sendPost[indx2].contains(e.target) && !ending_send[indx2].contains(e.target) && !btn.contains(e.target)) {
                    list_sendPost[indx2].classList.remove("activelist-sendPosdt");
                    ending_send[indx2].classList.remove("activeend-send-post")
                    remove_imgend[indx2].classList.add("remove-imgend")
                }
            })
        })

    })



    let friend_send_post = document.querySelectorAll('.list-sendPost div');
    let checked_img = document.querySelectorAll('.checked-img');
    let checked_im = Array.from(checked_img)
    friend_send_post.forEach(function (dv) {
        dv.addEventListener("click", () => {
            let friend_send_pos = Array.from(friend_send_post)
            let indexdv = friend_send_pos.indexOf(dv)
            dv.classList.toggle("checked-div")
            checked_im[indexdv].classList.toggle('activecheckedimg')

        })
    })

    function msgFunction() {
        msg_sen_nonsend.classList.remove('activemsg-sen-nonsend')
    }

    ending_send.forEach(function (ntb) {
        ntb.addEventListener('click', function () {
            let indx3 = arrending_send.indexOf(ntb);
            spinner[indx3].classList.add('activespinner')
            setTimeout(function () {
                spinner[indx3].classList.remove('activespinner')
                list_sendPost[indx3].classList.remove("activelist-sendPosdt");
                ending_send[indx3].classList.remove("activeend-send-post");
                msg_sen_nonsend.classList.add('activemsg-sen-nonsend')

            }, 2000)
            setTimeout(msgFunction, 4000)
            remove_imgend[indx3].classList.add("remove-imgend")
        })
    })
}
sendPostFunc()

// THE TOGGLE OF FOLLOW / FOLOWING  CODE IN THE NEXTS LIGNES ==========

let folbtn = document.querySelectorAll('.folbtn');
let arrfolbtn = Array.from(folbtn);
let notifie = document.querySelectorAll(".notifie");

folbtn.forEach(function (btnf) {
    btnf.addEventListener('click', function () {
        let bntfindx = arrfolbtn.indexOf(btnf);

        if (btnf.innerHTML == 'Follow') {
            btnf.innerHTML = 'Following'
            btnf.classList.add('activefolbtn')
            notifie[bntfindx].classList.add('activenotifie')
        }
        else {
            btnf.innerHTML = 'Follow'
            btnf.classList.remove('activefolbtn')
            notifie[bntfindx].classList.remove('activenotifie')
            notifie[bntfindx].classList.remove('activetrinng')

        }
    })
})
notifie.forEach(jr => {
    jr.addEventListener('click', function () {
        jr.classList.add("activetrinng")
    })
});




//   PPORFIL CODING IN THE NXT LIGNS SON +++---------------------
var btn_prfdet = document.querySelector(".btn-prfdet");
var pg_prof_det = document.querySelector(".profile-details ")
var btn_bacF_pgprfo = document.querySelector(".bckFpg-det");
btn_prfdet.addEventListener("click", () => {
    pg_prof_det.classList.add("active-page-edit")
})
btn_bacF_pgprfo.addEventListener("click", () => {
    pg_prof_det.classList.remove("active-page-edit")

})
btn_bacF_pgprfo.addEventListener('mouseover', () => {
    document.querySelector(".bkP").classList.add("adclr")
})

btn_bacF_pgprfo.addEventListener('mouseleave', () => {
    document.querySelector(".bkP").classList.remove("adclr")
})
let inpt_changeimg = document.querySelector('#change-img');
let btn_changeimg = document.querySelector('.change-prfimg');
let imgprofi = document.querySelector('.img-profil img');
let imgprofid = document.querySelector('.img-profiled img');

btn_changeimg.onclick = () => {
    inpt_changeimg.click()
}
inpt_changeimg.onchange = () => {
    imgprofi.src = URL.createObjectURL(inpt_changeimg.files[0])
    imgprofid.src = URL.createObjectURL(inpt_changeimg.files[0])
}




// username 



var btn_info = document.querySelector(".btn-info");
var contanej = document.querySelector('.contanej');
var jdwl = document.querySelectorAll(".jdwl");
btn_info.addEventListener("click", function () {
    btn_info.classList.toggle("btn-infod");
    contanej.classList.toggle("contanejd");

    jdwl.forEach(function (jdw) {
        jdw.classList.toggle("marg")

    })
})


var btnedit_info = document.querySelector(".btnedit-info");

var pageEDIT = document.querySelector(".pageEDIT");
var finsheedit_tbn = document.querySelector(".finsheedit-tbn")
btnedit_info.addEventListener("click", function () {
    pageEDIT.classList.add("activepageEDIT");

})


window.addEventListener("click", function (e) {
    if (!btn_info.contains(e.target) && !contanej.contains(e.target) && !pageEDIT.contains(e.target)) {
        btn_info.classList.remove("btn-infod");
        contanej.classList.remove("contanejd");
        jdwl.forEach(function (jdw) {
            jdw.classList.remove("marg")

        })
    }
})


let inputs = document.querySelectorAll('.cntpage label input');
let arr_inputs = Array.from(inputs);

let editbtn = document.querySelectorAll('.editthis');
let arr_editbtn = Array.from(editbtn);

var edp = document.querySelectorAll('.edp')

inputs.forEach(function (inpt) {
    inpt.disabled = true;
    let indexbtnedit = arr_inputs.indexOf(inpt);

    window.addEventListener('click', function (e) {
        if (!inpt.contains(e.target) && !editbtn[indexbtnedit].contains(e.target)) {
            editbtn[indexbtnedit].innerHTML = 'Edit';
            editbtn[indexbtnedit].classList.remove("opa")
            inpt.disabled = true;
        }
    })


    inpt.onkeydown = function () {
        editbtn[indexbtnedit].innerHTML = 'Set';
    }
})




editbtn.forEach(function (edbtn) {

    edbtn.addEventListener("click", function () {
        let indxbtn = arr_editbtn.indexOf(edbtn);
        if (edbtn.innerHTML == 'Edit') {
            inputs[indxbtn].disabled = false;
            inputs[indxbtn].focus();
            edbtn.classList.add("opa")
            edbtn.innerHTML = 'Cancel'

        }

        else if (edbtn.innerHTML == 'Cancel') {
            inputs[indxbtn].disabled = true;
            edbtn.innerHTML = 'Edit';
            edbtn.classList.remove("opa")

        }
        else {
            inputs[indxbtn].disabled = true;
            edbtn.innerHTML = 'Edit';
            edbtn.classList.remove("opa")

        }
    })
})

// => VALIDDATION F EMAIL WNTWRED
let validEmail = /^[A-Za-z\._\-0-9]*[@][a-zA-Z]*[\.][a-z]{1,6}$/i
let btn_verification = document.querySelector(".mstVrf");
let vrfcode_page = document.querySelector(".vrfcode");
let inpt_vr_cs = document.querySelector(".inptcdresrv")
let inpt_emailuser = inputs[2];


inpt_emailuser.onkeydown = () => {
    edp[2].classList.remove('alertedp')
    inpt_emailuser.classList.remove('alertinpt')
    editbtn[2].innerHTML = 'Set';
}


inpt_emailuser.onchange = () => {
    if (!inpt_emailuser.value.match(validEmail)) {
        edp[2].classList.add('alertedp');
        inpt_emailuser.classList.add('alertinpt');
        btn_verification.classList.remove("activemstVrf")

    }
    else {
        btn_verification.classList.add("activemstVrf")
    }
}

btn_verification.addEventListener("click", () => {
    vrfcode_page.classList.add("activevrfcode");
    inpt_vr_cs.focus()
})

inpt_vr_cs.onkeydown = (ee) => {
    inpt_vr_cs.classList.remove("alertinpt")
    if (isNaN(ee.key) && ee.key != 'Backspace') {
        ee.preventDefault();
    }

}

var anul_vrfct = document.querySelector(".back1");
var loading2 = document.querySelector(".loading")
var loading22 = document.querySelector(".loading2")
var resendmsg = document.querySelector(".resendmsg");

resendmsg.addEventListener("click", () => {
    loading22.classList.add("activeloading2");
    resendmsg.disabled = true;
    setTimeout(() => {
        loading22.classList.remove("activeloading2");
        inpt_vr_cs.focus();

    }, 2000);

    setTimeout(() => {
        resendmsg.disabled = false;
    }, 14000);
})

anul_vrfct.addEventListener("click", () => {
    vrfcode_page.classList.remove("activevrfcode");
    btn_verification.disabled = true;
    loading2.classList.add("activeloading");
    setTimeout(() => {
        btn_verification.disabled = false;
        loading2.classList.remove("activeloading");
    }, 4000);
})

let nxtBTN = document.querySelector(".vrfnxt");
nxtBTN.addEventListener('click', () => {
    if (inpt_vr_cs.value.length < 6) {
        inpt_vr_cs.classList.add("alertinpt")
        inpt_vr_cs.focus();
    }
    else {
        loading22.classList.add("activeloading2");


        setTimeout(() => {
            vrfcode_page.classList.remove("activevrfcode");
            loading22.classList.remove("activeloading2");
            btn_verification.classList.remove("activemstVrf")
        }, 2000);
    }
})


// INPUT OF NUMBER SUHVStfgtugbu ol,loFVOLVIOUyv
let validNumber = /\d/
let inpt_phoneuser = inputs[3];
let pg_vrNumb = document.querySelector(".verifNumber");
var btn_vrf_numbr = document.querySelector(".canslvsnumb");
let btn_vrf_num = document.querySelector(".vrf-num-btn");

inpt_phoneuser.onkeydown = () => {
    edp[3].classList.remove('alertedp')
    inpt_phoneuser.classList.remove('alertinpt')
    editbtn[3].innerHTML = 'Set';
    btn_vrf_num.classList.remove("activemstVrf")

}

inpt_phoneuser.onchange = () => {
    if (!inpt_phoneuser.value.match(validNumber) || inpt_phoneuser.value.length > 14) {
        inpt_phoneuser.disabled = false;
        inpt_phoneuser.focus()
        edp[3].classList.add('alertedp');
        inpt_phoneuser.classList.add('alertinpt');
    }
    else {
        pg_vrNumb.classList.add("activevrfnumbv")
    }
}

btn_vrf_numbr.addEventListener("click", function () {
    pg_vrNumb.classList.remove("activevrfnumbv")
    btn_vrf_num.classList.add("activemstVrf")

})
btn_vrf_num.addEventListener("click", () => {
    pg_vrNumb.classList.add("activevrfnumbv")

})

var realinpt = document.querySelectorAll(".jdwl .tr");
finsheedit_tbn.addEventListener("click", function () {
    pageEDIT.classList.remove("activepageEDIT");
    realinpt[0].innerHTML = inputs[0].value
    realinpt[1].innerHTML = inputs[1].value
    realinpt[2].innerHTML = inputs[2].value
    realinpt[3].innerHTML = inputs[3].value
    realinpt[4].innerHTML = inputs[4].value
    realinpt[5].innerHTML = inputs[5].value
    realinpt[6].innerHTML = inputs[6].value

})

// visit text i\sd f=========------------------
var dvicntmedia = document.querySelectorAll(".media-profl div");
let dvicntmediaar = Array.from(dvicntmedia)


let phovred = document.querySelectorAll('.visithtml')
let phovredar = Array.from(phovred)

phovredar[0].style.backgroundColor = '#ff4ac6'
phovredar[1].style.backgroundColor = '#2b47ff'
phovredar[2].style.backgroundColor = '#ff0000'
phovredar[3].style.backgroundColor = '#5000c9';

var links = document.querySelectorAll('.links');

phovredar[0].onclick = () => {
    links[0].click();
}

phovredar[1].onclick = () => {
    links[1].click();
}
phovredar[2].onclick = () => {
    links[2].click();
}
phovredar[3].onclick = () => {
    links[3].click();
}

var editt = document.querySelectorAll(".editt");
let arreditt = Array.from(editt)
let namechaine = document.querySelectorAll(".inptnamechane");
let arrnamechaine = Array.from(namechaine);
editt.forEach((edtbtn) => {
    edtbtn.addEventListener("click", function () {
        let innd = arreditt.indexOf(edtbtn);
        namechaine[innd].disabled = false;
        namechaine[innd].focus();
    })
})

namechaine.forEach((inptr) => {
    inptr.disabled = true;
    window.addEventListener("click", (e) => {
        let iind = arrnamechaine.indexOf(inptr)
        if (!inptr.contains(e.target) && !editt[iind].contains(e.target)) {
            inptr.disabled = true;
        }
    })
})

dvicntmedia.forEach(function (dv) {
    dv.addEventListener("mouseover", function () {
        let indd = dvicntmediaar.indexOf(dv);
        editt[indd].classList.add("activeeditt");
        phovredar[indd].classList.add("activevisithtml");
    })


    dv.addEventListener("mouseleave", function () {
        let indd = dvicntmediaar.indexOf(dv);
        setTimeout(function () {
            editt[indd].classList.remove("activeeditt");
            phovredar[indd].classList.remove("activevisithtml")
        }, 800)
    })
})

// LOG OTHER PAGE 














let btn_prvsy_pg= document.querySelector(".btn-prvsy");
btn_prvsy_pg.addEventListener("click", ()=>{
    document.querySelector(".pg-pvs").click();
})