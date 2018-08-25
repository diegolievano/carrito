function guardar(){
    
    function tabla (MartilloSencillo, img, $300, cantidad){
        
        this.MartilloSencillo=MartilloSencillo;
        this.img=img;
        this.$300=$300;
        this.cantidad=cantidad;
      
    }
 
    nuevatabla = new tabla("MartilloSencillo", "img", "$300", "cantidad");
    
    agregar();
}
var insertar = [];
function agregar(){
    insertar.push(nuevatabla);
    
    document.getElementById("tab").innerHTML += '<tbody><td>'+nuevatabla.img+'</td><td>'+nuevatabla.MartilloSencillo+'</td><td></td>'+nuevatabla.$300+'<td></td>'+nuevatabla.cantidad+'<td></td></tbody>';
    
};


function guardar1(){
    
    function tabla1 (Martillo, img2, $200, cantidad){
        
        this.Martillo=Martillo;
        this.img2=img2;
        this.$200=$200;
        this.cantidad=cantidad;
      
    }
 
    nuevatabla1 = new tabla1("Martillo", "img2", "$200", "cantidad");
    
    agregar1();
}
var insertar1 = [];
function agregar1(){
    insertar1.push(nuevatabla1);
    
    document.getElementById("tab1").innerHTML += '<tbody><td>'+nuevatabla1.img2+'</td><td>'+nuevatabla1.Martillo+'</td><td></td>'+nuevatabla1.$200+'<td></td>'+nuevatabla1.cantidad+'<td></td></tbody>';
    
};


function guardar2(){
    
    function tabla2 (Martillo_acero, img3, $250, cantidad){
        
        this.Martillo_acero=Martillo_acero;
        this.img3=img3;
        this.$250=$250;
        this.cantidad=cantidad;
      
    }
 
    nuevatabla2 = new tabla2("Martillo_acero", "img3", "$250", "cantidad");
    
    agregar2();
}
var insertar2 = [];
function agregar2(){
    insertar2.push(nuevatabla2);
    
    document.getElementById("tab2").innerHTML += '<tbody><td>'+nuevatabla2.img3+'</td><td>'+nuevatabla2.Martillo_acero+'</td><td></td>'+nuevatabla2.$250+'<td></td>'+nuevatabla2.cantidad+'<td></td></tbody>';
    
};


function guardar3 (){

    function tabla3(Motosierra_staley, img4, $400, cantidad){
        this.Motosierra_staley=Motosierra_staley;
        this.img4=img4;
        this.$400=$400;
        this.cantidad=cantidad;
}
nuevatabla3 = new tabla3("Motosierra_stanley","img4","$400", "cantidad");

agregar3();
}
var insertar3 =[];
function agregar3 (){

    insertar3.push(nuevatabla3);

    document.getElementById("tab3").innerHTML += '<tbody><td>'+nuevatabla3.img4+'</td><td>'+nuevatabla3.Motosierra_staley+'</td><td></td>'+nuevatabla3.$400+'<td></td>'+nuevatabla3.cantidad+'<td></td></tbody>';
};


function guardar4(){
    function tabla4 (Garden_machete, img5, $100, cantidad){

    this.Garden_machete=Garden_machete;
    this.img5=img5;
    this.$100=$100;
    this.cantidad=cantidad;
}

nuevatabla4 = new tabla4 ("Garden_machete","img5", "$100", "cantidad");
 agregar4();
}
var inserta4 = [];

function agregar4(){
    inserta4.push(nuevatabla4);

    document.getElementById("tab4").innerHTML += '<tbody><td>'+nuevatabla4.img5+'</td><td>'+nuevatabla4.Garden_machete+'</td><td></td>'+nuevatabla4.$100+'<td></td>'+nuevatabla4.cantidad+'<td></td></tbody>';


};


function guardar5(){

    function tabla5(Motosierra_de_gasolina_poda, img6, $500, cantidad){
       
        this.Motosierra_de_gasolina_poda=Motosierra_de_gasolina_poda;
        this.$500=$500;
        this.img6=img6;
        this.cantidad=cantidad;
    }    
        nuevatabla5 = new tabla5 ("Motosierra_de_gasolina_poda","img6","$500"," cantidad");
        agregar5();
    }
    var insertar4 = [];
    function agregar5(){
      insertar4.push(nuevatabla5);

      document.getElementById("tab5").innerHTML += '<tbody><td>'+nuevatabla5.img6+'</td><td>'+nuevatabla5.Motosierra_de_gasolina_poda+'</td><td></td>'+nuevatabla5.$500+'<td></td>'+nuevatabla5.cantidad+'<td></td></tbody>';

    };



    function guardar6(){

        function tabla6 (Motosierra_STIHL, img7, $300, cantidad ){

            this.Motosierra_STIHL=Motosierra_STIHL;
            this.img7=img7;
            this.$300=$300;
            this.cantidad=cantidad;

        }
        nuevatabla6 = new tabla6 ("Motosierra_STHL","img7","$300","cantidad");
        agregar6();
    }

    var insertar5 = [];

    function agregar6 (){
        insertar5.push(nuevatabla6);
        
        document.getElementById("tab5").innerHTML += '<tbody><td>'+nuevatabla6.img7+'</td><td>'+nuevatabla6.Motosierra_STIHL+'</td><td></td>'+nuevatabla6.$300+'<td></td>'+nuevatabla6.cantidad+'<td></td></tbody>';

    };

  function guardar7(){

        function tabla7 (pala_coa_mangoDeMadera, img8, $300, cantidad ){

            this.pala_coa_mangoDeMadera=pala_coa_mangoDeMadera;
            this.img8=img8;
            this.$300=$300;
            this.cantidad=cantidad;

        }
        nuevatabla7 = new tabla7 ("pala_coa_mangoDeMadera","img8","$300","cantidad");
        agregar7();
    }

    var insertar6 = [];

    function agregar7 (){
        insertar6.push(nuevatabla7);
        
        document.getElementById("tab6").innerHTML += '<tbody><td>'+nuevatabla7.img8+'</td><td>'+nuevatabla7.pala_coa_mangoDeMadera+'</td><td></td>'+nuevatabla7.$300+'<td></td>'+nuevatabla7.cantidad+'<td></td></tbody>';

    };

    function guardar8(){

        function tabla8 (Serrucho_de_poda_plegable, img9, $300, cantidad){

            this.Serrucho_de_poda_plegable=Serrucho_de_poda_plegable;
            this.img9=img9;
            this.$300=$300;
            this.cantidad=cantidad;

        }
        nuevatabla8 = new tabla8 ("Serrucho_de_poda_plegable","img9","$300","cantidad");
        agregar8();
    }

    var insertar7 = [];

    function agregar8 (){
        insertar7.push(nuevatabla8);
        
        document.getElementById("tab7").innerHTML += '<tbody><td>'+nuevatabla8.img9+'</td><td>'+nuevatabla8.Serrucho_de_poda_plegable+'</td><td></td>'+nuevatabla8.$300+'<td></td>'+nuevatabla8.cantidad+'<td></td></tbody>';

    };


    function guardar9(){

        function tabla9 (Tramontina_machete, img10, $300, cantidad){

            this.Tramontina_machete=Tramontina_machete;
            this.img10=img10;
            this.$300=$300;
            this.cantidad=cantidad;

        }
        nuevatabla9 = new tabla9 ("Tramontina_machete","img10","$300","cantidad");
        agregar9();
    }

    var insertar8 = [];

    function agregar9 (){
        insertar8.push(nuevatabla9);
        
        document.getElementById("tab8").innerHTML += '<tbody><td>'+nuevatabla9.img10+'</td><td>'+nuevatabla9.Tramontina_machete+'</td><td></td>'+nuevatabla9.$300+'<td></td>'+nuevatabla9.cantidad+'<td></td></tbody>';

    };