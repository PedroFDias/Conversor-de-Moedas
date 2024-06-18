function converter(){
    //Pegando valor da moeda
    var v1=document.getElementById('valor')
    var valor=v1.value
    //var resultado=document.getElementById('resultado')
    //var res=resultado.value
    console.log(valor)

    var moeda1=document.getElementById('moeda1')
    var moeda2=document.getElementById('moeda2')
    var mo1=moeda1.value
    var mo2=moeda2.value
    //console.log(mo1)

    if(valor<0){
        resultado.innerHTML="Valor Inválido"
    }
    else if(valor==""){
        resultado.innerHTML="Valor Branco"
    }
    else{
        if(mo1 =='Real'){
            if (mo2 == 'Dolar')
                resultado.innerHTML=valor/5.07+" USD"
            else if (mo2 == 'Real')
                resultado.innerHTML=valor+" BRL"
            else if(mo2 == 'Peso Argentino')
                resultado.innerHTML=valor*173.55+" ARS"
            else if(mo2=='Euro')
                resultado.innerHTML=valor*0.18+" EUR"
            else if(mo2=="Bitcoin")
                resultado.innerHTML=valor*0.0000031+" BTC"
        }
        else if(mo1=='Dolar'){
            if (mo2 == 'Dolar')
                resultado.innerHTML=valor+" USD"
            else if (mo2 == 'Real')
                resultado.innerHTML=valor*5.07+" BRL"
            else if(mo2 == 'Peso Argentino')
                resultado.innerHTML=valor*881.75+" ARS"
            else if(mo2=='Euro')
                resultado.innerHTML=valor*0.93+" EUR"
            else if(mo2=="Bitcoin")
                resultado.innerHTML=valor*0.000016+" BTC"
        }
        else if(mo1=='Peso Argentino'){
            if (mo2 == 'Dolar')
                resultado.innerHTML=valor*0.0011+" USD"
            else if (mo2 == 'Real')
                resultado.innerHTML=valor*0.0058+" BRL"
            else if(mo2 == 'Peso Argentino')
                resultado.innerHTML=valor+" ARS"
            else if(mo2=='Euro')
                resultado.innerHTML=(valor*0.0011)+" EUR"
            else if(mo2=="Bitcoin")
                resultado.innerHTML=valor*0+" BTC"
        }
        else if(mo1=='Euro'){
            if (mo2 == 'Dolar')
                resultado.innerHTML=valor*1.07+" USD"
            else if (mo2 == 'Real')
                resultado.innerHTML=valor*5.45+" BRL"
            else if(mo2 == 'Peso Argentino')
                resultado.innerHTML=valor*945.97+" ARS"
            else if(mo2=='Euro')
                resultado.innerHTML=valor+" EUR"
            else if(mo2=="Bitcoin")
                resultado.innerHTML=valor*0.000017+" BTC"
        }
        else if(mo1=='Bitcoin'){
            if (mo2 == 'Dolar')
                resultado.innerHTML=valor*62748.50+" USD"
            else if (mo2 =='Real')
                resultado.innerHTML=valor*318423.54+" BRL"
            else if(mo2 == 'Peso Argentino')
                resultado.innerHTML=valor*55880700+ " BTC"
            else if(mo2=='Euro')
                resultado.innerHTML=valor*58458.10+" EUR"
            else if(mo2=="Bitcoin")
                resultado.innerHTML=valor+" BTC"
        }
       
    } 
}