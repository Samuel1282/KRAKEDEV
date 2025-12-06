calcularValorDescuento=function(monto, porcentajeDescuento){
    let valorDescuento;
    valorDescuento=monto*porcentajeDescuento/100;
return valorDescuento;
}
calcularIVA=function(monto){
    let valorIVA;
    valorIVA=monto*12/100;
return valorIVA;
}
calcularSubtotal=function(precio, cantidad){
    let valorSubTotal;
    valorSubTotal=precio*cantidad;
return valorSubTotal;
}
calcularTotal=function(subtotal, descuento, iva){
    let valorTotal;
    valorTotal=subtotal-descuento+iva;
return valorTotal;
}
