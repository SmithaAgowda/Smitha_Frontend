const div=document.querySelector(".container");
const button = document.querySelector(".btn-1");

const tr=document.querySelector("#tr");
const table=document.querySelector("#tab");



button.addEventListener("click",mainfn)
function mainfn() {
    // fetch('https://p-9x7e.onrender.com/products/products')
    //   .then(response => response.json())
    //   .then(res =>{console.log(res.data);
    //     for (let i = 0; i < res.data.length; i++) {
    //         const para = document.createElement('p');
    //         para.innerText=res.data[i]._id+"===>"+res.data[i].pName;
    //         div.append(para);
            
    //     }

    //   } );

    fetch('https://p-9x7e.onrender.com/products/products')
    .then(response=>response.json())
    .then(res=>{console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
            const tr=document.createElement('tr');
            const td1=document.createElement('td')
            const td2=document.createElement('td')
            const td3=document.createElement('td')
            const td4=document.createElement('td')
            const td5=document.createElement('td')
            td1.innerText=res.data[i]._id;
            td2.innerText=res.data[i].pname;
            td3.innerText=res.data[i].desc;
            td4.innerText=res.data[i].price;
            td5.innerText=res.data[i].img;
            tr.append(td1,td2,td3,td4,td5);
            table.append(tr);
            
            
        }

    })


}