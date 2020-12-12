function busquedaDeAlimento()
{
    let principal = document.getElementById("Contenido");
    let busqueda = document.getElementById('alimentoBuscado').value;
    let inserccion = [
        {
            nombreBuscado: 'GoldFish',
            codigo: `<div class="info-pod">
            <img src="../Imagenes/foodFish.png">
            <h2>GoldFish</h2>
            <p style=" font-size: 3vw; color: black; font-family: Verdana,Arial;">
                sera Goldy Color Spirulina es el alimento colorante que 
                se compone de granulado cuidadosamente elaborado, para 
                carpas doradas grandes, variedades exigentes y otros 
                peces exigentes de agua fría.
                <br>

                sera Goldy Color Spirulina es el alimento colorante que 
                se compone de granulado cuidadosamente elaborado, para 
                carpas doradas grandes, variedades exigentes y otros 
                peces exigentes de agua fría.
            </p>
        </div>`, 
        },

        {
            nombreBuscado: 'FoodFish',
            codigo: `<div class="info-pod">
            <img src="../Imagenes/foofFish2.png">
            <h4>Food Fish</h4>
            <p style=" font-size: 3vw; color: black; font-family: Verdana,Arial;">
                sera Goldy Color Spirulina es el alimento colorante que 
                se compone de granulado cuidadosamente elaborado, para 
                carpas doradas grandes, variedades exigentes y otros 
                peces exigentes de agua fría.
            </p>
        </div>`,
        }
    ];
    


    alert(busqueda);
    inserccion.forEach(function (dato,indice)  {
        if( dato.nombreBuscado === busqueda)
        {
            alert(busqueda);
            principal.innerHTML = principal.innerHTML + inserccion[indice].codigo;
           vallidandoBusqueda(true);
        }
        else
        {
            vallidandoBusqueda(false);
        }
    });
    

     function vallidandoBusqueda (valor)
    {
        let nones = "<h1>nones</h1>";
        valor ?  alert("enocntrado") : principal.innerHTML = principal.innerHTML + nones; 
    }
 
};