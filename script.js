let monto = 0;
let conv1;
let conv2;
let conversion = 0;

let col2dolar = 0.00026;
let col2mex = 0.0053;
let col2euro = 0.00023;
let col2libra = 0.00019;

let dolar2col = 3773;
let dolar2mex = 20;
let dolar2euro = 0.86;
let dolar2libra = 0.73;

let mex2col = 187;
let mex2dolar = 0.050;
let mex2euro = 0.043;
let mex2libra = 0.036;

let euro2col = 4394;
let euro2dolar = 1.16;
let euro2mex = 23.50;
let euro2libra = 0.85;

let libra2col = 5205;
let libra2dolar = 1.38
let libra2euro = 1.18
let libra2mex = 27.76

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
});


   let mon1 = document.getElementById("c1");
        mon1.addEventListener("change", function() {
            console.log(mon1.value)
})

    let mon2 = document.getElementById("c2");
        mon2.addEventListener("change", function() {
            console.log(mon2.value)
})

    monto = document.getElementById('cantidad').value;

        (mon1.value)==='Dolar' && (mon2.value)==='PesoCol2' ?
        conversion = monto * dolar2col :
        (mon1.value)==='Dolar' && (mon2.value)==='Dolar2' ?
        conversion = monto * 1 :
        (mon1.value)==='Dolar' && (mon2.value)==='PesoMex2' ?
        conversion = monto * dolar2mex :
        (mon1.value)==='Dolar' && (mon2.value)==='Euro2' ?
        conversion = monto * dolar2euro :
        (mon1.value)==='Dolar' && (mon2.value)==='Libra2' ?
        conversion = monto * dolar2libra :
        (mon1.value)==='Euro' && (mon2.value)==='PesoCol2' ?
        conversion = monto * euro2col :
        (mon1.value)==='Euro' && (mon2.value)==='Euro2' ?
        conversion = monto * 1 :
        (mon1.value)==='Euro' && (mon2.value)==='PesoMex2' ?
        conversion = monto * euro2mex :
        (mon1.value)==='Euro' && (mon2.value)==='Dolar2' ?
        conversion = monto * euro2col :
        (mon1.value)==='Euro' && (mon2.value)==='Libra2' ?
        conversion = monto * euro2libra :
        (mon1.value)==='Libra' && (mon2.value)==='PesoCol2' ?
        conversion = monto * libra2col :
        (mon1.value)==='Libra' && (mon2.value)==='Libra2' ?
        conversion = monto * 1 :
        (mon1.value)==='Libra' && (mon2.value)==='PesoMex2' ?
        conversion = monto * libra2mex :
        (mon1.value)==='Libra' && (mon2.value)==='Dolar2' ?
        conversion = monto * libra2dolar :
        (mon1.value)==='Libra' && (mon2.value)==='Euro2' ?
        conversion = monto * libra2euro :
        (mon1.value)==='PesoCol' && (mon2.value)==='PesoCol2' ?
        conversion = monto * 1 :
        (mon1.value)==='PesoCol' && (mon2.value)==='PesoMex2' ?
        conversion = monto * col2mex :
        (mon1.value)==='PesoCol' && (mon2.value)==='Dolar2' ?
        conversion = monto * col2dolar :
        (mon1.value)==='PesoCol' && (mon2.value)==='Libra2' ?
        conversion = monto * col2libra :
        (mon1.value)==='PesoCol' && (mon2.value)==='Euro2' ?
        conversion = monto * col2euro :
        (mon1.value)==='PesoMex' && (mon2.value)==='PesoMex2' ?
        conversion = monto * 1 :
        (mon1.value)==='PesoMex' && (mon2.value)==='PesoCol2' ?
        conversion = monto * mex2col :
        (mon1.value)==='PesoMex' && (mon2.value)==='Dolar2' ?
        conversion = monto * mex2dolar :
        (mon1.value)==='PesoMex' && (mon2.value)==='Euro2' ?
        conversion = monto * mex2euro :
        (mon1.value)==='PesoMex' && (mon2.value)==='Libra2' ?
        conversion = monto * mex2libra :
        0;

        document.getElementById('total').value = '$' + conversion
        document.getElementById('cantidad').value = ''