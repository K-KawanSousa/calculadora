
function escreve(car){
    let res= document.querySelector('#res'),
    txt= res.value;
    
    document.querySelector('#res').value= txt+ car;

}

function limpa(){
    document.querySelector('#res').value= "";
}

function apaga(){
    let  res= document.querySelector('#res').value;
    document.querySelector('#res').value= res.replace(/.$/, '');
}

function calc(){
    let res= document.querySelector('#res').value;

    document.querySelector('#hist').value= res;
    document.querySelector('#res').value= eval(res);
}