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
    
    buscandoInformacion();
    function buscandoInformacion()
    {
        let validando = false;
        inserccion.forEach(function (dato,indice)  {
            if( dato.nombreBuscado === busqueda)
            {
                principal.innerHTML = principal.innerHTML + inserccion[indice].codigo;
                vallidandoBusqueda(true);
                validando = true;
            }
        });

        validando
        ? console.log("nada")
        : vallidandoBusqueda(false);

    };
    
    
    

     function vallidandoBusqueda (valor)
    {
        
        valor ?  alert("¡Encontrado!") : alert("¡No encontrado!"); 
    }
 
};