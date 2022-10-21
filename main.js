let basket = {
    additional: [],
};

el(".form-select").addEventListener("click", (e) => {
    el(".bread-size").innerHTML = "";
    basket.xamir = e.target.value;
    let non = document.createElement("span");
    non.innerHTML = `Noni:${basket.xamir}`;
    el(".bread-size").appendChild(non);
});

els(".size-item").forEach((element) => {
    element.addEventListener("click", (e) => {
        el(".d-size").innerHTML = "";
        basket.size = e.target.textContent;
        let diametr = document.createElement("span");
        diametr.innerHTML = `Kattaligi:${basket.size}`;
        el(".d-size").appendChild(diametr);
    });
});


// function check(){

//     // if(el('#pomidor').checked){
//     //     li.innerHTML = `${(el('.check-label').textContent)}`;
//     //     el('.ustida').appendChild(li);
//     // }else{9
//     //     el('.ustida').remove(li);
//     // }
// }

function check() {
    els('.check-label').forEach((e) => {

      e.children[0].addEventListener('change',()=>{
          if (e.children[0].checked) {
        let li = document.createElement('li');

        li.innerHTML = e.textContent

        el('.ustida').appendChild(li);
        } else {
            for (let i = 0; i < el('.ustida').children.length; i++) {
                if(el('.ustida').children[i].textContent == e.textContent ){
                    el('.ustida').removeChild(el('.ustida').children[i])
                }
                
            }
          }

      })
      
        // if(e.children[0].checked){
        //     console.log(7);
        //     console.log(e.textContent);
        // }

        // console.log(e);
        // if (e.checked) {
        //     // console.log(e);
        //     // li.innerHTML = `${(el('.check-label').textContent)}`;
        //     el('.ustida').appendChild(li);
        // } 
        // else {
        //     el('.ustida').remove(li);
        // }
       
    })
}
check()
    // el("#pomidor").addEventListener('click', check);
    // el("#kurka").addEventListener('click', check);

    // console.log(basket.additional);


