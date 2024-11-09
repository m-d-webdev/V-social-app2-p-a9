// DEUSIEM PAGE IWUQEFEEEWYWEQYFREWQRFERFOLBGFLERF

// let optionsHow = document.querySelectorAll(".opt1");


// let optionsT = document.querySelectorAll('.optionY');

// optionsT.forEach((n) => {

//     optionsHow.forEach((op) => {
 
//         op.addEventListener("click", () => {

//             // console.log(arr_op)
//             // optionsHow.forEach((al) => {
//             // })

//             op.classList.add("chooseopt1")

//         })
//     })
// })

let optionsHow = document.querySelectorAll(".opt1");
var arr_op = Array.from(optionsHow);
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let arr6 = [];
let arr7 = [];
let arr8 = [];
let arr9 = [];
let arr10 = [];
let arr11 = [];

for (var i = 0; i <= arr_op.length; i++) {
    if(i==0|| i==1||i==2){
        arr1.push(arr_op[i])
    }
    if (i == 3|| i==4 || i==5) {
        arr2.push(arr_op[i])
    }
    if (i == 6|| i==7 || i==8) {
        arr3.push(arr_op[i])
    }
    if (i == 9|| i==10 || i==11) {
        arr4.push(arr_op[i])
    }
    if (i == 12|| i==13 || i==14) {
        arr5.push(arr_op[i])
    }
    if (i == 15|| i==16 || i==17) {
        arr6.push(arr_op[i])
    }
    if (i == 18|| i==19 || i==20) {
        arr7.push(arr_op[i])
    }
    if (i == 21|| i==22 || i==23) {
        arr8.push(arr_op[i])
    }
    if (i == 24|| i==25 || i==26) {
        arr9.push(arr_op[i])
    }
    if (i == 27|| i==28 || i==29) {
        arr10.push(arr_op[i])
    }
    if (i == 30|| i==31 || i==32) {
        arr11.push(arr_op[i])
    }
}

arr1.forEach((op)=>{
     op.addEventListener("click", ()=>{
       arr1.forEach((y)=>{
        y.classList.remove("chooseopt1")
       })
       op.classList.add("chooseopt1")
     })
})
arr2.forEach((op)=>{
    op.addEventListener("click", ()=>{
      arr2.forEach((y)=>{
       y.classList.remove("chooseopt1")
      })
      op.classList.add("chooseopt1")
    })
})
arr3.forEach((op)=>{
    op.addEventListener("click", ()=>{
      arr3.forEach((y)=>{
       y.classList.remove("chooseopt1")
      })
      op.classList.add("chooseopt1")
    })
})
arr4.forEach((op)=>{
    op.addEventListener("click", ()=>{
      arr4.forEach((y)=>{
       y.classList.remove("chooseopt1")
      })
      op.classList.add("chooseopt1")
    })
})
arr5.forEach((op)=>{
    op.addEventListener("click", ()=>{
      arr5.forEach((y)=>{
       y.classList.remove("chooseopt1")
      })
      op.classList.add("chooseopt1")
    })
})
arr6.forEach((op)=>{
    op.addEventListener("click", ()=>{
      arr6.forEach((y)=>{
       y.classList.remove("chooseopt1")
      })
      op.classList.add("chooseopt1")
    })
})
arr7.forEach((op)=>{
    op.addEventListener("click", ()=>{
      arr7.forEach((y)=>{
       y.classList.remove("chooseopt1")
      })
      op.classList.add("chooseopt1")
    })
})
arr8.forEach((op)=>{
    op.addEventListener("click", ()=>{
      arr8.forEach((y)=>{
       y.classList.remove("chooseopt1")
      })
      op.classList.add("chooseopt1")
    })
})
arr9.forEach((op)=>{
    op.addEventListener("click", ()=>{
      arr9.forEach((y)=>{
       y.classList.remove("chooseopt1")
      })
      op.classList.add("chooseopt1")
    })
})
arr10.forEach((op)=>{
    op.addEventListener("click", ()=>{
      arr10.forEach((y)=>{
       y.classList.remove("chooseopt1")
      })
      op.classList.add("chooseopt1")
    })
})
arr11.forEach((op)=>{
    op.addEventListener("click", ()=>{
      arr11.forEach((y)=>{
       y.classList.remove("chooseopt1")
      })
      op.classList.add("chooseopt1")
    })
})

var btnonn_off= document.querySelectorAll(".n-f");
let sp = document.querySelectorAll(".n-f span")
let btnonn_off_arr= Array.from(btnonn_off);

btnonn_off.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    let indx = btnonn_off_arr.indexOf(btn)
    btn.classList.toggle('adcloblue');
    sp[indx].classList.toggle("activespa")
  })
})

var dv_choos= document.querySelectorAll(".cont-chosq");
let arr_dv_choos= Array.from(dv_choos)
let p_yat = document.querySelectorAll(".pt")

dv_choos.forEach((d) =>{
    d.addEventListener("mouseover" , ()=>{
      let dx= arr_dv_choos.indexOf(d);
      p_yat[dx].classList.add("actvpt")
    })
    d.addEventListener("mouseleave" , ()=>{
      let dx= arr_dv_choos.indexOf(d);
      p_yat[dx].classList.remove("actvpt")
    })
})

var btn_returndfst= document.querySelector(".btn-returndfst");
let img_ref= document.querySelector(".imf-fer")
btn_returndfst.addEventListener('mouseover',()=>{
   img_ref.classList.add("rota")
})
btn_returndfst.addEventListener('mouseleave', ()=>{
  img_ref.classList.remove("rota")
})



// BACK FROM THIS PAGE 
var btn_back= document.querySelector(".bk-frm-frcntr")
let p_back= document.querySelector(".bkP-2")
let pg_backed= document.querySelector(".a-back")
btn_back.addEventListener("mouseover", ()=>{
  p_back.classList.add("add-color")
})

btn_back.addEventListener("mouseleave", ()=>{
  p_back.classList.remove("add-color")
})

btn_back.addEventListener("click", ()=>{
  pg_backed.click()
})


// var arr_op= Array.from(optionsHow)

//         let INGX = arr_op.indexOf(op)
//         optionsHow[INGX -1].classList.remove("chooseopt1")
//         optionsHow[INGX +1].classList.remove("chooseopt1")
