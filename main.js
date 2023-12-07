var emails = ["vendedor@gmail.com", "gestor@gmail.com"];
var passes = ["vend123","gest123"];
var mail = "";
var pass = "";
var add, del, upd, rep;
let stock = [];
let price = [];
let maxP = [];
let total = 0;
let desc = 0;

for (let i = 0; i < 12; i++) {
    maxP[i] = 30;
    stock[i] = Math.floor(Math.random() * 30);
    price[i] = Math.floor(1000+Math.random() * 10000);
}

function sh() {
    input = document.getElementById("search").value;
    for (let i = 0; i < 12; i++) {
        if(input == `A`+i){
            document.getElementById(i).scrollIntoView();
        }
        
    }
}
function auth(){
    mail = document.getElementById("email").value;
    pass = document.getElementById("pass").value;
    if(mail == emails[0] && pass == passes[0]){inicioSesion("vendedor");}else if(mail == emails[1] && pass == passes[1]){inicioSesion("gestor");}else{alert("Usted no está autorizado.")}
    document.getElementById("iniSes").reset();
}

function productos() {
    products = document.getElementById("productos");
    products.innerHTML="";
    for (let i = 0; i < 12; i++) {
        products.innerHTML+=`
        <div class="card " id="`+i+`" style="width: 18rem;">
            <img src="./producto.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">A`+i+`</h5>
                <p class="card-text">Precio: </p>
                <p class="card-text">`+price[i]+`</p>
                <p class="card-text">En inventario: </p>
                <p class="card-text">`+stock[i]+`</p>
                <p class="card-text">En stock: </p>
                <p class="card-text">`+(maxP[i]-stock[i])+`</p>
                <div class="opcionesGestor d-flex flex-column gap-3">
                <a  class="d-flex justify-content-center btn btn-primary" id="add" onclick="addP(`+i+`)">Agregar</a>
                <a  class="d-flex justify-content-center btn btn-primary" id="del" onclick="delP(`+i+`)">Eliminar</a>
                <a  class="d-flex justify-content-center btn btn-primary" id="upd" onclick="updP(`+i+`)">Actualizar precio</a>
                <a  class="d-flex justify-content-center btn btn-primary" id="upd" onclick="comP(`+i+`)">Comprar</a>
                </div>
            </div>
        </div>
        `
        
    }

}

function inicioSesion(user) {
    if(user=="vendedor"){
        let navbar = document.getElementById("navbar");
        navbar.innerHTML = `   <nav class="navbar navbar-expand-lg bg-body-tertiary w-100" id="navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Store</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#main" onclick="noshow('product')">Home</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Productos
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#0">A0</a></li>
                            <li><a class="dropdown-item" href="#1">A1</a></li>
                            <li><a class="dropdown-item" href="#2">A2</a></li>
                            <li><a class="dropdown-item" href="#3">A3</a></li>
                            <li><a class="dropdown-item" href="#4">A4</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#5">A5</a></li>
                            <li><a class="dropdown-item" href="#6">A6</a></li>
                            <li><a class="dropdown-item" href="#7">A7</a></li>
                            <li><a class="dropdown-item" href="#8">A8</a></li>
                            <li><a class="dropdown-item" href="#9">A9</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#10">A10</a></li>
                            <li><a class="dropdown-item" href="#11">A11</a></li>
                           
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onclick="noshow('support')">Solicitudes</a>
                    </li>
                    <li class="nav-item">
                            <a class="nav-link" onclick="noshow('fact'),factura()">Factura</a>
                        </li>
                </ul>
                <form class="d-flex" role="search" >
                    <input  class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search" >
                    <button class="btn btn-outline-success"  type="submit" onclick="sh()">Search</button>
                </form>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link"  >Vendedor</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" onclick=" cerrarSesion()"  >Cerrar Sesión</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>`
        
    }

    if(user=="gestor"){
        let navbar = document.getElementById("navbar");
        navbar.innerHTML = `   <nav class="navbar navbar-expand-lg bg-body-tertiary w-100" id="navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Store</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#main" onclick="noshow('product')">Home</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Productos
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#0">A0</a></li>
                            <li><a class="dropdown-item" href="#1">A1</a></li>
                            <li><a class="dropdown-item" href="#2">A2</a></li>
                            <li><a class="dropdown-item" href="#3">A3</a></li>
                            <li><a class="dropdown-item" href="#4">A4</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#5">A5</a></li>
                            <li><a class="dropdown-item" href="#6">A6</a></li>
                            <li><a class="dropdown-item" href="#7">A7</a></li>
                            <li><a class="dropdown-item" href="#8">A8</a></li>
                            <li><a class="dropdown-item" href="#9">A9</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#10">A10</a></li>
                            <li><a class="dropdown-item" href="#11">A11</a></li>
                           
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onclick="noshow('support')">Solicitudes</a>
                    </li>
                    <li class="nav-item">
                            <a class="nav-link" onclick="noshow('fact'),factura()">Factura</a>
                        </li>
                </ul>
                <form class="d-flex" role="search" >
                    <input  class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search" >
                    <button class="btn btn-outline-success"  type="submit" onclick="sh()">Search</button>
                </form>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link"  >Gestor</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" onclick=" cerrarSesion()"  >Cerrar Sesión</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>`;
    }

}

function cerrarSesion() {
    var navbar = document.getElementById("navbar");
        navbar.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary w-100" id="navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Store</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#main" onclick="noshow('product')">Home</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Productos
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#0">A0</a></li>
                            <li><a class="dropdown-item" href="#1">A1</a></li>
                            <li><a class="dropdown-item" href="#2">A2</a></li>
                            <li><a class="dropdown-item" href="#3">A3</a></li>
                            <li><a class="dropdown-item" href="#4">A4</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#5">A5</a></li>
                            <li><a class="dropdown-item" href="#6">A6</a></li>
                            <li><a class="dropdown-item" href="#7">A7</a></li>
                            <li><a class="dropdown-item" href="#8">A8</a></li>
                            <li><a class="dropdown-item" href="#9">A9</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#10">A10</a></li>
                            <li><a class="dropdown-item" href="#11">A11</a></li>
                           
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onclick="noshow('support')">Solicitudes</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" onclick="noshow('fact'),factura()">Factura</a>
                </li>
                </ul>
                <form class="d-flex" role="search" >
                    <input  class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search" >
                    <button class="btn btn-outline-success"  type="submit" onclick="sh()">Search</button>
                </form>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" onclick=" noshow('login')"  >Iniciar Sesión</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>`
}

function addP(p){
    for (let i = 0; i < 12; i++) {
        if(p == i ){
            
            if( !(stock[i]>=maxP[i])){
                stock[i]++;
                productos();
            }
            
        }
    }
}

function delP(p){
    
    for (let i = 0; i < 12; i++) {
        if(p == i && stock[i] != 0){
            stock[i]--;
            productos();
        }
    }
}

function updP(p){
    
    for (let i = 0; i < 12; i++) {
        if(p == i){
            let inv = prompt('Ingrese el nuevo precio');
            document.getElementById(i).children.item(1).children.item(2).innerHTML = inv;
        }
    }
}

function comP(p) {
    for (let i = 0; i < 12; i++) {
        if(p == i && maxP[i]-stock[i]>0){
            
           total += price[i];
           console.log(total)
           maxP[i]--;
           productos();
        }
    }
}
function noshow(id) {
    if(id == "login"){
        document.getElementById("support").classList.add("noshow")
        document.getElementById("fact").innerHTML=""
        document.getElementById("product").classList.add("noshow")
        document.getElementById("login").classList.remove("noshow")
    }
    if(id == "support"){
        document.getElementById("login").classList.add("noshow")
        document.getElementById("fact").innerHTML=""
        document.getElementById("product").classList.add("noshow")
        document.getElementById("support").classList.remove("noshow")
    }
    if(id == "product"){
        document.getElementById("fact").innerHTML=""
        document.getElementById("support").classList.add("noshow")
        document.getElementById("login").classList.add("noshow")
        document.getElementById("product").classList.remove("noshow")
    }
    if(id == "fact"){
        document.getElementById("support").classList.add("noshow")
        document.getElementById("fact").classList.remove("noshow")
        document.getElementById("product").classList.add("noshow")
        document.getElementById("login").classList.add("noshow")
    }
    
}
function descu() {
    desc = parseInt(prompt('Ingrese descuento extra'));
    console.log(desc)
    factura();
}
function factura() {
   let factura = document.getElementById("fact");
   let iva = total-0.19*total;
   factura.innerHTML="";
   factura.innerHTML+=`
   <div class="card  " style="width: 18rem;">
       <img src="./producto.jpeg" class="card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title">Factura</h5>
           <p class="card-text">Precio: </p>
           <p class="card-text">`+total+`</p>
           <p class="card-text">Total menos descuento iva: </p>
           <p class="card-text">`+iva+`</p>
           <a  class="d-flex justify-content-center btn btn-primary" onclick="descu()" >Aplicar descuento extra</a>
           <p class="card-text">Descuento extra: </p>
           <p class="card-text">`+desc+`</p>
           <p class="card-text">TOTAL: </p>
           <p class="card-text">`+(iva-desc)+`</p>
           <div class="opcionesGestor d-flex flex-column gap-3">
           <a  class="d-flex justify-content-center btn btn-primary">Comprar</a>
           
           </div>
       </div>
   </div>
   `
}

