let dc;
let aa1=document.querySelector(".aa1")
if(aa1){
    let aa2=aa1.textContent
    if(aa2.length>0){
        aa1.style.display="none"
        let aa3=aa2.split("")
        const aa4=aa3.map((item)=>{
            if(item!== " "){
                dc=`<div>${item}</div>`
            } else dc=`<div>&nbsp;</div>`
            return dc
        })
        let aa5=document.querySelector(".aa2")
        if(aa5){
            aa5.innerHTML=aa4.toString().replace(/,/g,"")
        }
    }
    let aa6=document.querySelectorAll(".aa2 div")
    let aa7=[]
    for(let i=1; i<=aa6.length; i++){
        aa7.push(i)
    }
    for(let a=aa7,i=a.length; i--;){
        let random=a.splice(Math.floor(Math.random()*(i+1)),1)[0]
        setTimeout(()=>{
            document
            .querySelector(`.aa2 div:nth-child(${random})`)
            .classList.add("ani1")
        },16*i)
    }
}