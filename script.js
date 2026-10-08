console.log("1.script empezo");
const estaciones=[
    "Terminal Chimpu Ocllo",
    "Los Incas",
    "Andrés Belaunde",
    "22 de Agosto",
    "Las Vegas",
    "Universidad",
    "Terminal Naranjal",
    "Izaguirre",
    "Pacífico",
    "Independencia",
    "Los Jazmines",
    "Tomás Valle",
    "El Milagro",
    "Honorio Delgado",
    "UNI",
    "Parque del Trabajo",
    "Caquetá",
    "Ramón Castilla",
    "Tacna",
    "Jirón de la Unión",
    "Colmena",
    "Dos de Mayo",
    "Quilca",
    "España",
    "Estación Central",
    "Estadio Nacional",
    "México",
    "Canadá",
    "Javier Prado",
    "Canaval y Moreyra",
    "Comunidad Andina / Aramburú",
    "Domingo Orué",
    "Angamos",
    "Ricardo Palma",
    "Benavides",
    "28 de Julio",
    "Plaza de Flores",
    "Balta",
    "Bulevar",
    "Estadio Unión",
    "Escuela Militar",
    "Terán",
    "Rosario de Villa",
    "Terminal Matellini"
];

// Diccionario completo con la información de las estaciones
const datosEstaciones = {
  "Terminal Chimpu Ocllo": { 
    ubicacion: "Comas", 
    Tipo: "Terminal",
    Servicios: "Troncal y alimentadores",
    Conexiones: "Zone Norte de Comas",
    descripcion: "Es una de las terminales mas importantes del extremo norte del sistema Metropolitano." ,
    dato: "Permite la Conexion de miles de pasajeros provenientes de diferentes sectores de Comas"},


  "Los Incas": { 
    ubicacion: "Comas",
    Tipo: "Estación intermedia",
    Servicios: "Servicio troncal",
    Conexiones: "Zona de Comas",
    descripcion: "Es una estación ubicada en el tramo norte del Metropolitano y permite el acceso de pasajeros de la zona de Comas al sistema.",
    dato: "Forma parte del recorrido que conecta las zonas del norte de Lima con otros puntos importantes de la ciudad."
},

 "Andrés Belaunde": {
  ubicacion: "Comas",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Zona norte de Comas",
  descripcion: "Estación ubicada en el tramo norte del Metropolitano, en la avenida Túpac Amaru.",
  dato: "Sirve a una de las zonas más densamente pobladas del norte de Lima."
},

"22 de Agosto": {
  ubicacion: "Comas",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Zona norte de Comas",
  descripcion: "Estación ubicada en la avenida Túpac Amaru, en el distrito de Comas.",
  dato: "Su nombre rinde homenaje a una fecha histórica del distrito de Comas."
},

"Las Vegas": {
  ubicacion: "Comas",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Zona central de Comas",
  descripcion: "Estación intermedia del corredor norte que conecta Comas con el centro de Lima.",
  dato: "Es una de las estaciones con mayor flujo de pasajeros escolares y trabajadores en horas pico."
},

"Universidad": {
  ubicacion: "Comas",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Zona universitaria de Comas",
  descripcion: "Estación cercana a institutos y centros educativos del distrito de Comas.",
  dato: "Recibe gran afluencia de estudiantes universitarios y de institutos técnicos."
},
    
  "Terminal Naranjal": {
  ubicacion: "Independencia",
  Tipo: "Terminal",
  Servicios: "Troncal y alimentadores",
  Conexiones: "Zona sur de Independencia y límite con Los Olivos",
  descripcion: "Importante terminal del Metropolitano que conecta el norte de Lima con el corredor central.",
  dato: "Es el punto de inicio de muchas rutas alimentadoras que llegan desde Los Olivos y Comas."},

"Izaguirre": {
  ubicacion: "Independencia",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Avenida Izaguirre, Independencia",
  descripcion: "Estación ubicada en la intersección de la Túpac Amaru con la avenida Izaguirre.",
  dato: "Permite el acceso de pasajeros provenientes de zonas residenciales de Independencia."
},

"Pacífico": {
  ubicacion: "Independencia",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Zona comercial de Independencia",
  descripcion: "Estación del tramo norte ubicada cerca de la zona comercial del distrito de Independencia.",
  dato: "Cercana al mercado Unicachi, uno de los más grandes del norte de Lima."
},
  "Independencia": {
  ubicacion: "Independencia",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Avenida Independencia y Los Olivos",
  descripcion: "Estación que da nombre al distrito y articula el tránsito entre Comas e Independencia.",
  dato: "Una de las estaciones más transitadas del tramo norte del Metropolitano."
},
"Los Jazmines": {
  ubicacion: "Independencia",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Zona residencial de Independencia",
  descripcion: "Estación intermedia del tramo norte, ubicada en la avenida Túpac Amaru.",
  dato: "Sirve a zonas residenciales y colegios emblemáticos del distrito de Independencia."
},
"Tomás Valle": {
  ubicacion: "San Martín de Porres",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Avenida Tomás Valle hacia Los Olivos y SMP",
  descripcion: "Estación de conexión clave que articula la Túpac Amaru con la avenida Tomás Valle.",
  dato: "Permite acceder rápidamente a Los Olivos y zonas industriales de San Martín de Porres."
},
"El Milagro": {
  ubicacion: "San Martín de Porres",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Zona residencial de SMP",
  descripcion: "Estación ubicada en el tramo norte de la avenida Túpac Amaru, en SMP.",
  dato: "Zona de alto tránsito peatonal debido a la cercanía con mercados y colegios locales."
},
"Honorio Delgado": {
  ubicacion: "San Martín de Porres",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Hospital Hipólito Unanue y zona hospitalaria",
  descripcion: "Estación cercana al Instituto Nacional de Salud del Niño y centros médicos de la zona.",
  dato: "Es una de las estaciones de referencia para pacientes y trabajadores del sector salud del norte."
},
"UNI": {
  ubicacion: "Rímac",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Universidad Nacional de Ingeniería",
  descripcion: "Estación ubicada frente a la Universidad Nacional de Ingeniería, una de las más prestigiosas del país.",
  dato: "Miles de estudiantes de ingeniería usan esta estación a diario para acceder al campus de la UNI."
},
"Parque del Trabajo": {
  ubicacion: "Rímac",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Parque del Trabajo, zona norte del Rímac",
  descripcion: "Estación ubicada en el distrito del Rímac, cerca de áreas recreativas y residenciales.",
  dato: "El Parque del Trabajo es un espacio verde importante para los vecinos del Rímac."
},
"Caquetá": {
  ubicacion: "Rímac",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Mercado de Caquetá y puente hacia el centro",
  descripcion: "Estación ubicada en la avenida Caquetá, zona conocida por su activo mercado de aves y animales.",
  dato: "El Mercado de Caquetá es el más famoso de Lima para la venta de animales vivos y aves de corral."
},
"Dos de Mayo": {
  ubicacion: "Cercado de Lima",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Hospital Dos de Mayo y Plaza Dos de Mayo",
  descripcion: "Estación del centro de Lima cercana al histórico Hospital Dos de Mayo, fundado en el siglo XIX.",
  dato: "El Hospital Dos de Mayo es uno de los más antiguos e importantes del Perú, fundado en 1875."
},
"Ramón Castilla": {
  ubicacion: "Cercado de Lima",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Centro histórico de Lima",
  descripcion: "Estación de acceso al corazón del centro histórico de Lima, Patrimonio de la Humanidad.",
  dato: "Desde aquí se puede llegar caminando a la Plaza Mayor de Lima en pocos minutos."
},
"Tacna": {
  ubicacion: "Cercado de Lima",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Avenida Tacna y centro comercial del centro",
  descripcion: "Estación en pleno centro de Lima, sobre la avenida Tacna, una de las más transitadas de la ciudad.",
  dato: "La avenida Tacna es el eje comercial más importante del centro de Lima para textiles y electrónica."
},
"Jirón de la Unión": {
  ubicacion: "Cercado de Lima",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Calle peatonal Jirón de la Unión, Plaza Mayor",
  descripcion: "Estación ubicada en la icónica calle peatonal del centro histórico de Lima.",
  dato: "El Jirón de la Unión es la calle más famosa de Lima, con más de 400 años de historia."
},
"Colmena": {
  ubicacion: "Cercado de Lima",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Avenida Nicolás de Piérola (La Colmena)",
  descripcion: "Estación cerca de la avenida Nicolás de Piérola, conocida popularmente como La Colmena.",
  dato: "La Colmena es una de las avenidas más antiguas y concurridas del centro de Lima."
},
"Quilca": {
  ubicacion: "Cercado de Lima",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Jirón Quilca, zona cultural del centro",
  descripcion: "Estación cercana al jirón Quilca, famoso por sus librerías de segunda mano y galerías de arte.",
  dato: "El jirón Quilca es conocido como la 'calle de los libros' del centro histórico de Lima."
},
"España": {
  ubicacion: "Cercado de Lima",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Avenida España, límite con La Victoria",
  descripcion: "Estación ubicada en la avenida España, en el límite entre el Cercado de Lima y La Victoria.",
  dato: "La avenida España es reconocida por sus clínicas y centros médicos privados."
},
"Estación Central": {
  ubicacion: "La Victoria",
  Tipo: "Estación de transbordo",
  Servicios: "Troncal, alimentadores y conexión con el Metro de Lima (Línea 1)",
  Conexiones: "Metro de Lima Línea 1, Gamarra, La Victoria",
  descripcion: "Principal estación de transbordo del Metropolitano, permite la conexión con el Metro de Lima Línea 1.",
  dato: "Es la única estación donde el Metropolitano y el Metro de Lima se conectan directamente."
},
"Estadio Nacional": {
  ubicacion: "La Victoria",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Estadio Nacional del Perú, avenida José Díaz",
  descripcion: "Estación ubicada a metros del Estadio Nacional, el recinto deportivo más importante del Perú.",
  dato: "El Estadio Nacional tiene capacidad para más de 45,000 espectadores y alberga los partidos de la Selección Peruana."
},
"México": {
  ubicacion: "La Victoria",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Avenida México, La Victoria",
  descripcion: "Estación ubicada en la avenida México, en el corazón del distrito de La Victoria.",
  dato: "La Victoria es uno de los distritos con mayor actividad comercial e industrial de Lima."
},
"Canadá": {
  ubicacion: "La Victoria",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Avenida Canadá, San Borja y La Victoria",
  descripcion: "Estación en la avenida Canadá, límite entre La Victoria y San Borja.",
  dato: "La avenida Canadá es uno de los principales ejes viales que conecta el este con el oeste de Lima."
},
"Javier Prado": {
  ubicacion: "San Isidro",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Avenida Javier Prado, San Isidro y Miraflores",
  descripcion: "Estación estratégica de conexión con la avenida Javier Prado, uno de los ejes principales de Lima.",
  dato: "La avenida Javier Prado cruza Lima de este a oeste y conecta distritos como San Borja, La Molina y Ate."
},
"Canaval Moreyra": {
  ubicacion: "San Isidro",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Distrito financiero de San Isidro",
  descripcion: "Estación ubicada en el centro financiero más importante del Perú.",
  dato: "San Isidro concentra las sedes de los principales bancos, empresas multinacionales y embajadas del país."
},
"Aramburú": {
  ubicacion: "San Isidro",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Avenida Aramburú, Surquillo y San Isidro",
  descripcion: "Estación cercana a la sede de la Comunidad Andina de Naciones (CAN) y la avenida Aramburú.",
  dato: "La CAN es un organismo internacional que integra a Perú, Colombia, Ecuador y Bolivia."
},
"Domingo Orué": {
  ubicacion: "Surquillo",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Zona comercial de Surquillo",
  descripcion: "Estación ubicada en el distrito de Surquillo, zona de gran actividad comercial y gastronómica.",
  dato: "Surquillo es famoso por su mercado, uno de los preferidos por los chefs más reconocidos de Lima."
},
"Angamos": {
  ubicacion: "Surquillo",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Avenida Angamos, Surquillo y Miraflores",
  descripcion: "Estación en la avenida Angamos, una de las arterias comerciales más importantes del sur de Lima.",
  dato: "La avenida Angamos conecta Surquillo con Miraflores y es conocida por sus tiendas de tecnología y decoración."
},
"Ricardo Palma": {
  ubicacion: "Miraflores",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Parque Ricardo Palma, Miraflores",
  descripcion: "Estación en Miraflores, uno de los distritos más turísticos y modernos de Lima.",
  dato: "Ricardo Palma fue uno de los escritores peruanos más importantes del siglo XIX, autor de las Tradiciones Peruanas."
},
"Benavides": {
  ubicacion: "Miraflores",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Avenida Benavides, Miraflores y Surco",
  descripcion: "Estación ubicada en la avenida Benavides, importante eje comercial del sur de Lima.",
  dato: "La avenida Benavides conecta Miraflores con Santiago de Surco y alberga grandes centros comerciales."
},
"28 de Julio": {
  ubicacion: "Miraflores",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Avenida 28 de Julio, Miraflores",
  descripcion: "Estación en la avenida 28 de Julio, en pleno corazón de Miraflores.",
  dato: "El 28 de julio es el Día de la Independencia del Perú, celebrado desde 1821."
},
"Plaza de Flores": {
  ubicacion: "Miraflores",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Zona residencial y comercial de Miraflores",
  descripcion: "Estación cercana a la tradicional Plaza de Flores de Miraflores, punto de encuentro del distrito.",
  dato: "Miraflores es el distrito con más áreas verdes por habitante de toda Lima Metropolitana."
},
"Balta": {
  ubicacion: "Miraflores",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Avenida José Pardo, Miraflores y Barranco",
  descripcion: "Estación en el límite entre Miraflores y Barranco, cerca del malecón de la Costa Verde.",
  dato: "Desde aquí se puede llegar caminando al malecón de Miraflores con vista al Océano Pacífico."
},
"Bulevar": {
  ubicacion: "Barranco",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Zona bohemia de Barranco",
  descripcion: "Estación en el corazón de Barranco, el distrito más bohemio y artístico de Lima.",
  dato: "Barranco es conocido mundialmente como el barrio de los artistas, con galerías, bares y arquitectura colonial."
},
"Estadio Unión": {
  ubicacion: "Barranco",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Estadio Miguel Grau de Barranco",
  descripcion: "Estación cercana al Estadio Miguel Grau, recinto deportivo del distrito de Barranco.",
  dato: "Barranco tiene una de las comunidades deportivas más activas del sur de Lima."
},
"Escuela Militar": {
  ubicacion: "Chorrillos",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Escuela Militar de Chorrillos, zona sur",
  descripcion: "Estación cercana a la Escuela Militar de Chorrillos, la principal institución de formación del Ejército Peruano.",
  dato: "La Escuela Militar de Chorrillos forma oficiales del Ejército del Perú desde 1898."
},
"Terán": {
  ubicacion: "Chorrillos",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Zona residencial sur de Chorrillos",
  descripcion: "Estación del tramo sur del Metropolitano, en el distrito de Chorrillos.",
  dato: "Chorrillos es uno de los distritos más antiguos de Lima, con historia que data de la época prehispánica."
},
"Rosario de Villa": {
  ubicacion: "Chorrillos",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Zona sur de Chorrillos, Villa El Salvador",
  descripcion: "Estación cercana a la zona de Villa, en el extremo sur del corredor del Metropolitano.",
  dato: "La zona de Villa limita con el distrito de Villa El Salvador, uno de los ejemplos de organización vecinal más reconocidos del Perú."
},
"Terminal Matellini": {
  ubicacion: "Chorrillos",
  Tipo: "Terminal",
  Servicios: "Troncal y alimentadores",
  Conexiones: "Zona sur de Lima, Villa El Salvador y Chorrillos",
  descripcion: "Estación terminal del extremo sur del corredor del Metropolitano, punto de inicio y fin del recorrido.",
  dato: "El Metropolitano recorre aproximadamente 30 km desde Terminal Matellini hasta Terminal Chimpu Ocllo, atravesando 13 distritos de Lima."
}}



// Un solo listener para todos los botones
const botones = document.querySelectorAll(".estacion");
const panel = document.getElementById("panel-estacion");
const comentariosDiv = document.getElementById("comentarios-estacion");

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const nombreEstacion = boton.textContent.replace(/^\d+\.\s*/, "").trim();
    const info = datosEstaciones[nombreEstacion];

    if (info) {
      panel.innerHTML = `
        <div class="info-estacion">

            <h2>📍 ${nombreEstacion}</h2>

            <p>
                <strong>📌 Ubicación:</strong>
                ${info.ubicacion}
            </p>

            <p>
                <strong>🚏 Tipo:</strong>
                ${info.Tipo}
            </p>

            <p>
                <strong>🚌 Servicios:</strong>
                ${info.Servicios}
            </p>

            <p>
                <strong>🔄 Conexiones:</strong>
                ${info.Conexiones}
            </p>

            <div class="descripcion">
                <h3>📖 Descripción</h3>
                <p>${info.descripcion}</p>
            </div>

            <div class="dato">
                <h3>⭐ Dato interesante</h3>
                <p>${info.dato}</p>
            </div>

        </div>
      `;

      // Comentarios, debajo del mapa
      if (info.comentario) {
        comentariosDiv.innerHTML = `
          <h3>💬 Comentarios sobre ${nombreEstacion}</h3>
          <p>${info.comentario}</p>
        `;
        comentariosDiv.style.display = "block";
      } else {
        comentariosDiv.style.display = "none";
      }

    } else {
      panel.innerHTML = `
        <h2>${nombreEstacion}</h2>
        <p>Aún no hay información registrada para esta estación.</p>
      `;
      comentariosDiv.style.display = "none";
    }
  });
});

const btnComentario = document.getElementById("btn-comentario");
const formulario = document.getElementById("formulario-comentario");

btnComentario.addEventListener("click",function() {

    formulario.style.display = "block";
});

const btnPublicar = document.getElementById("btn-publicar");
const comentario = document.getElementById("comentario");
const tarjetas = document.getElementById("tarjetas-comentarios");

btnPublicar.addEventListener("click", function() {

    const texto = comentario.value;

    if (texto.trim() === "") {
        alert("Escribe un comentario primero.");
        return;
    }

    const nuevaTarjeta = document.createElement("div");

    nuevaTarjeta.classList.add("comentario");

    nuevaTarjeta.innerHTML = `
        <h3>⭐⭐⭐⭐⭐</h3>
        <p>${texto}</p>
        <span>- Nuevo pasajero</span>
    `;

    tarjetas.appendChild(nuevaTarjeta);

    comentario.value = "";

    formulario.style.display = "none";

});

const btnInicio = document.getElementById("btn-inicio");
const btnServicios = document.getElementById("btn-servicios");
const btnAlimentadores = document.getElementById("btn-alimentadores");

const paginaInicio = document.getElementById("pagina-inicio");
const paginaServicios = document.getElementById("servicios");
const paginaAlimentadores = document.getElementById("alimentadores");

const btnHorarios = document.getElementById("btn-horarios");
const paginaHorarios = document.getElementById("horarios");

paginaAlimentadores.style.display = "none";


btnInicio.addEventListener("click", function(event) {

    event.preventDefault();

    paginaInicio.style.display = "block";
    paginaServicios.style.display = "none";
    paginaAlimentadores.style.display = "none";
    paginaHorarios.style.display = "none";   


    btnServicios.classList.remove("activo");
    btnHorarios.classList.remove("activo");  
    btnInicio.classList.add("activo");


});

btnServicios.addEventListener("click", function(event){

    event.preventDefault();

    paginaInicio.style.display = "none";
    paginaServicios.style.display = "block";
    paginaAlimentadores.style.display = "none";
    paginaHorarios.style.display = "none";  

    btnInicio.classList.remove("activo");
    btnHorarios.classList.remove("activo");   
    btnServicios.classList.add("activo");

    
    buscadorRutas.value = "";

    
    resultadosRutas.innerHTML = "";

    
    infoRuta.innerHTML = "";


    window.scrollTo(0, 0);

});



btnAlimentadores.addEventListener("click", function(event) {

    event.preventDefault();

    paginaInicio.style.display = "none";
    paginaServicios.style.display = "none";
    paginaAlimentadores.style.display = "block";
    paginaHorarios.style.display = "none";  

});

btnHorarios.addEventListener("click", function(event){

    event.preventDefault();

    paginaInicio.style.display = "none";
    paginaServicios.style.display = "none";
    paginaAlimentadores.style.display = "none";
    paginaHorarios.style.display = "block";

    btnInicio.classList.remove("activo");
    btnServicios.classList.remove("activo");
    btnHorarios.classList.add("activo");

    dibujarSelectores();
    dibujarHorarios();

    window.scrollTo(0, 0);

});

const buscadorRutas = document.getElementById("buscador-rutas");
const resultadosRutas = document.getElementById("resultados-rutas");
const infoRuta = document.getElementById("info-ruta")

console.log(buscadorRutas);
console.log(resultadosRutas);

const rutasAlimentadoras = {

    "chimpu ocllo": [
        "San Juan de Dios",
        "Universitaria",
        "Torre Blanca"
    ],

    "universidad": [
        "Trapiche"
    ],

    "naranjal": [
        "Naranjal",
        "Antúnez de Mayolo",
        "Belaunde",
        "Bertello",
        "Izaguirre",
        "La Ensenada",
        "Los Alisos",
        "Los Olivos",
        "Milagros de Jesús",
        "Payet",
        "Puente Piedra",
        "Puno",
        "Tahuantinsuyo",
        "Carabayllo",
        "Collique"
    ],

    "matellini": [
        "Cedros de Villa",
        "América",
        "Los Próceres",
        "Villa El Salvador"
    ]

};


buscadorRutas.addEventListener("input", function() {

    const busqueda = buscadorRutas.value.toLowerCase().trim();

    resultadosRutas.innerHTML = "";
    infoRuta.innerHTML = "";

    if (busqueda === "") {
        return;
    }

   const resultados = Object.keys(rutasAlimentadoras).filter(function(ruta) {
    return ruta === busqueda;
});

    if (resultados.length === 0) {
        resultadosRutas.innerHTML = `
            <div class="sin-resultados">
                <p>❌ No encontramos una ruta relacionada con "${busqueda}".</p>
            </div>
        `;
        return;
    }

    resultados.forEach(function(ruta) {

        const rutas = rutasAlimentadoras[ruta];

        const nombreEstacion =
        ruta.charAt(0).toUpperCase() + ruta.slice(1);

        let listaRutas = "";

        rutas.forEach(function(nombreRuta) {
          listaRutas += `
            <button class="boton-ruta" data-ruta="${nombreRuta}">
            🚌 ${nombreRuta}
             </button>
        `;
      });

        resultadosRutas.innerHTML += `
            <div class="tarjeta-ruta">

                <h3>🚉 ${ruta}</h3>

                <p>Rutas alimentadoras relacionadas:</p>

                <div class="rutas-lista">
                  ${listaRutas}
                </div>

                

            </div>
        `;
    });

});

const datosAlimentadores = {
  "Puno": {
    descripcion: "Ruta alimentadora que conecta la zona de Puno con el Terminal Naranjal.",
    zona: "Zona Norte",
    conexion: "Terminal Naranjal"
  },

  "Naranjal": {
    descripcion: "Ruta alimentadora que conecta diferentes zonas cercanas con el Terminal Naranjal.",
    zona: "Zona Norte",
    conexion: "Terminal Naranjal"
  },

  "Antúnez de Mayolo": {
    descripcion: "Ruta alimentadora que conecta la zona de Antúnez de Mayolo con el Terminal Naranjal.",
    zona: "Zona Norte",
    conexion: "Terminal Naranjal"
  },

  "Belaunde": {
    descripcion: "Ruta alimentadora que conecta la zona de Belaunde con el Terminal Naranjal.",
    zona: "Zona Norte",
    conexion: "Terminal Naranjal"
  },

  "Bertello": {
    descripcion: "Ruta alimentadora que conecta la zona de Bertello con el Terminal Naranjal.",
    zona: "Zona Norte",
    conexion: "Terminal Naranjal"
  },

  "Izaguirre": {
    descripcion: "Ruta alimentadora que conecta la zona de Izaguirre con el Terminal Naranjal.",
    zona: "Zona Norte",
    conexion: "Terminal Naranjal"
  },

  "La Ensenada": {
    descripcion: "Ruta alimentadora que conecta la zona de La Ensenada con el Terminal Naranjal.",
    zona: "Zona Norte",
    conexion: "Terminal Naranjal"
  },

  "Los Alisos": {
    descripcion: "Ruta alimentadora que conecta la zona de Los Alisos con el Terminal Naranjal.",
    zona: "Zona Norte",
    conexion: "Terminal Naranjal"
  },

  "Los Olivos": {
    descripcion: "Ruta alimentadora que conecta la zona de Los Olivos con el Terminal Naranjal.",
    zona: "Zona Norte",
    conexion: "Terminal Naranjal"
  },

  "Milagros de Jesús": {
    descripcion: "Ruta alimentadora que conecta la zona de Milagros de Jesús con el Terminal Naranjal.",
    zona: "Zona Norte",
    conexion: "Terminal Naranjal"
  },

  "Tahuantinsuyo": {
    descripcion: "Ruta alimentadora que conecta la zona de Tahuantinsuyo con el Terminal Naranjal.",
    zona: "Zona Norte",
    conexion: "Terminal Naranjal"
  },

  "Puente Piedra": {
    descripcion: "Ruta alimentadora que conecta Puente Piedra con el Terminal Naranjal.",
    zona: "Zona Norte",
    conexion: "Terminal Naranjal"
  },

  "Payet": {
    descripcion: "Ruta alimentadora que conecta la zona de Payet con el Terminal Naranjal.",
    zona: "Zona Norte",
    conexion: "Terminal Naranjal"
  },

  "San Juan de Dios": {

    descripcion: "Ruta alimentadora que conecta San Juan de Dios con el Terminal Chimpu Ocllo.",

    zona: "Comas",

    conexion: "Terminal Chimpu Ocllo"

},

"Universitaria": {

    descripcion: "Ruta alimentadora que conecta la zona de Universitaria con el Terminal Chimpu Ocllo.",

    zona: "Comas",

    conexion: "Terminal Chimpu Ocllo"

},

"Carabayllo": {

    descripcion: "Ruta alimentadora que conecta Carabayllo con el Terminal Chimpu Ocllo.",

    zona: "Carabayllo",

    conexion: "Terminal Chimpu Ocllo"

},

"Carabayllo Expreso Mañana": {

    descripcion: "Ruta alimentadora expreso que conecta Carabayllo con el Terminal Naranjal en el turno mañana.",

    zona: "Carabayllo",

    conexion: "Terminal Naranjal"

},

"Carabayllo Expreso Noche": {

    descripcion: "Ruta alimentadora expreso que conecta Carabayllo con el Terminal Naranjal en el turno noche.",

    zona: "Carabayllo",

    conexion: "Terminal Naranjal"

},

"Torre Blanca": {

    descripcion: "Ruta alimentadora que conecta Torre Blanca con el Terminal Chimpu Ocllo.",

    zona: "Carabayllo",

    conexion: "Terminal Chimpu Ocllo"

},

"Trapiche": {

    descripcion: "Ruta alimentadora que conecta la zona de Trapiche con la estación Universidad.",

    zona: "Comas",

    conexion: "Estación Universidad"

},

"Collique": {

    descripcion: "Ruta alimentadora que conecta la zona de Collique con la estación Los Incas.",

    zona: "Comas",

    conexion: "Estación Los Incas"

},

"Cedros de Villa": {

    descripcion: "Ruta alimentadora que conecta la zona de Cedros de Villa con el Terminal Matellini.",

    zona: "Chorrillos",

    conexion: "Terminal Matellini"

},

"América": {

    descripcion: "Ruta alimentadora que conecta la zona de América con el Terminal Matellini.",

    zona: "Chorrillos",

    conexion: "Terminal Matellini"

},

"Los Próceres": {

    descripcion: "Ruta alimentadora que conecta la zona de Los Próceres con el Terminal Matellini.",

    zona: "Chorrillos",

    conexion: "Terminal Matellini"

},

"Villa El Salvador": {

    descripcion: "Ruta alimentadora que conecta la zona de Villa El Salvador con el Terminal Matellini.",

    zona: "Villa El Salvador",

    conexion: "Terminal Matellini"

},
};

const recorridos = {

    "Puente Piedra": [
        "Yanbal",
        "Prolima",
        "Acobamba",
        "Shangri-La",
        "Tres Ruedas (Domingos)",
        "Establo",
        "Famesa",
        "Rosa Luz",
        "Cementerio (Domingos)",
        "Tottus"
    ],
"Bertello": [
    "Unger",
    "Hospital Los Olivos",
    "Marcará",
    "Las Palmeras",
    "Universitaria",
    "Huandoy",
    "Portales de Naranjal",
    "Santo Domingo",
    "Jardines de Naranjal",
    "Los Alisos",
    "Los Olivos",
    "Izaguirre",
    "Dominicos",
    "Pacasmayo",
    "Bertello",
    "Los Pinos"
],
"Belaunde": {

    ida: [
        "La Merced",
        "Politécnico",
        "Correo",
        "Colegio Israel",
        "Banco de La Nación",
        "Cipreses",
        "San Martín",
        "1 de Mayo",
        "Larco Herrera",
        "San Pablo",
        "Huáscar",
        "3 de Octubre"
    ],

    vuelta: [
        "3 de Octubre",
        "Talara",
        "Carabayllo",
        "San Pablo",
        "Larco Herrera",
        "1 de Mayo",
        "San Martín",
        "Cipreses",
        "Belaunde",
        "Banco de La Nación",
        "Puno",
        "Correo",
        "Politécnico",
        "La Merced"
     ]
   },

"Tahuantinsuyo": {

    ida: [
        "Huáscar",
        "Paracas",
        "Cahuide",
        "Pisac",
        "Quipaypampa",
        "Yauri",
        "Vilcanota",
        "Mascaypacha"
    ],

    vuelta: [
        "Mascaypacha",
        "Cusihuallar",
        "Yanaoca",
        "Huatanay",
        "Muquiyauyos",
        "Indoamérica",
        "Tiahuanaco",
        "Túpac Amaru"
    ]

},

"Milagros de Jesús": {

    ida: [
        "Politécnico",
        "Cueto Fernandini",
        "Santa Rosa",
        "Banco de la Nación",
        "Belaunde",
        "Mercado Chacra Cerro",
        "La Pascana",
        "Cáceres (Jamaica)",
        "Miguel Grau",
        "Francisco Bolognesi",
        "Fe y Alegría",
        "José Olaya",
        "Sánchez Cerro",
        "Huascarán",
        "Julio C. Tello",
        "Cañete",
        "Santa Rosa",
        "San Pedro (Final)"
    ],
  

    vuelta: [
        "San Pedro (Inicial)",
        "San Miguel",
        "Santa Clara",
        "Arnaldo Márquez",
        "Revolución",
        "La Mar",
        "Sánchez Cerro",
        "Jorge Chávez",
        "Fe y Alegría",
        "Grifo Año Nuevo",
        "Miguel Grau (Velasco)",
        "Jamaica",
        "La Pascana",
        "Mercado Chacra Cerro",
        "Banco de la Nación",
        "Reniec",
        "Mega 80",
        "Politécnico"
    ]
  },


"Puno": {

    ida: [
        "La Cincuenta",
        "La Merced",
        "Politécnico",
        "Cueto Fernandini",
        "Correo",
        "España",
        "Edelnor",
        "Lima",
        "Piura",
        "La Habana",
        "Progreso",
        "Vallejo (Final)"
    ],

    vuelta: [
        "Vallejo (Inicial)",
        "24 de Agosto",
        "La Habana",
        "Piura",
        "Lima",
        "Túpac Amaru",
        "España",
        "Correo",
        "Mega 80",
        "Politécnico",
        "La Merced",
        "La Cincuenta"
    ]
},

"Antúnez de Mayolo": {

    ida: [
        "Galeano",
        "Las Palmeras",
        "Amarantos",
        "Telefónica",
        "Plaza Vea",
        "Mercado Covida",
        "Telefónica",
        "Universitaria",
        "San Francisco",
        "12 de Octubre",
        "Puente Camote",
        "Alcides Vigo",
        "Coopip",
        "Nísperos (Final)"
    ],

    vuelta: [
        "Nísperos (Inicial)",
        "Coopip",
        "Santa Rosa",
        "Puente Camote",
        "12 de Octubre",
        "San Francisco",
        "Río Santa",
        "Telefónica",
        "Mercado Covida",
        "Plaza Vea",
        "Acacias",
        "Amarantos",
        "Las Palmeras",
        "Galeano"
    ]

},

"La Ensenada": {

    ida: [
        "Hospital Los Olivos",
        "Tres Postes",
        "Universitaria",
        "Santa Elvira",
        "Huandoy",
        "San Martín",
        "Los Rosales",
        "2 de Octubre",
        "Los Portales",
        "Cordialidad",
        "Honradez",
        "Calle 27",
        "Parque Los Portales",
        "Alborada",
        "Rosedal",
        "Comisaría",
        "Palmeras",
        "Conquistadores",
        "Ca 5 (Final)"
    ],

    vuelta: [
        "Ca 5 (Inicial)",
        "23 de Agosto",
        "Botica",
        "El Rosedal",
        "Las Granadas",
        "Alborada",
        "Parque Los Portales",
        "Calle 2",
        "Honradez",
        "Los Próceres",
        "Los Portales",
        "2 de Octubre",
        "Los Rosales",
        "San Martín",
        "Central",
        "Santa Elvira",
        "Universitaria",
        "Tres Postes",
        "Marañón",
        "Hospital Los Olivos"
    ]

},

"Los Alisos": {
    ida: [
        "Maracuyá",
        "Galeano",
        "Las Palmeras",
        "El Naranjal",
        "Universitaria",
        "Girasoles",
        "Huandoy",
        "Las Malvas",
        "Avenida C (Final)"
    ],

    vuelta: [
        "Avenida C (Inicial)",
        "El Rosario",
        "Huandoy",
        "Avenida A",
        "Universitaria",
        "El Naranjal",
        "Las Palmeras",
        "Galeano",
        "Maracuyá"
    ]
},

"Los Olivos": {
    ida: [
        "Jade",
        "Calle 9",
        "Calle 3",
        "Avenida B",
        "Santa Rosa",
        "Calle 2"
    ],

    vuelta: [
        "Canta",
        "Santa Rosa",
        "Avenida B",
        "Kodak",
        "Calle 9",
        "Jade"
    ]
},

"Payet": {
    ida: [
        "Huáscar",
        "Calle 3",
        "Río Sapi",
        "Antisuyo",
        "J. G. Condorcanqui",
        "Posta",
        "Progreso",
        "Alca",
        "Real Felipe",
        "4 de Noviembre (Final)"
    ],

    vuelta: [
        "4 de Noviembre (Inicial)",
        "José Olaya",
        "Huaytapampa",
        "Progreso",
        "Posta",
        "Calle Marco",
        "Calle 17",
        "Huamachuco",
        "Calle 1",
        "Túpac Amaru"
    ]
},

"Naranjal": {
    ida: [
        "Terminal Naranjal",
        "Marcara",
        "Las Palmeras",
        "Universitaria",
        "Huandoy",
        "Portales de Naranjal",
        "Jircan",
        "Las Américas",
        "Pacasmayo",
        "Central",
        "Paramonga (Final)"
    ],
    vuelta: [
        "Paramonga (Inicial)",
        "Central",
        "Pacasmayo",
        "Las Américas",
        "Jircan",
        "Portales de Naranjal",
        "Huandoy",
        "Universitaria",
        "Las Palmeras",
        "Marcara",
        "Terminal Naranjal"
    ]
},

"Izaguirre": {
    ida: [
        "Daniel Fernández",
        "Santos Chocano",
        "Las Palmeras",
        "El Amargón",
        "Estibina",
        "San Francisco",
        "12 de Octubre",
        "Santa Rosa (Final)"
    ],
    vuelta: [
        "Santa Rosa (Inicial)",
        "12 de Octubre",
        "San Francisco",
        "Universitaria",
        "Estibina",
        "Conococha",
        "Mayolo",
        "Santos Chocano",
        "Ignacio Merino",
        "Plaza Vea",
        "Túpac Amaru"
    ]
},

"San Juan de Dios": {

    ida: [
        "Los Incas",
        "San Felipe",
        "Condorcanqui",
        "Módulo Sigo XXI",
        "Chimpu Ocllo",
        "Mercado Frontera",
        "Chany",
        "Paradero 39",
        "Paradero Q",
        "Paradero U",
        "Calle 5",
        "Salamanca",
        "Edén",
        "Rinconada",
        "Esmeralda",
        "Santa Rosa",
        "San Pedro",
        "Cooperativa",
        "El Pino",
        "San Antonio",
        "Lark",
        "Haras",
        "Condominio Real",
        "Casuarinas",
        "Maestro",
        "Polos (Final)"
    ],

    vuelta: [
        "Polos (Inicial)",
        "Maestro",
        "Casuarinas",
        "Condominio Real",
        "Haras",
        "Lark",
        "San Antonio",
        "El Pino",
        "Cooperativa",
        "San Pedro",
        "Santa Rosa",
        "Esmeralda",
        "Rinconada",
        "Edén",
        "Salamanca",
        "Calle 5",
        "Paradero U",
        "Paradero Q",
        "Paradero 39",
        "Chany",
        "Mercado Frontera",
        "Chimpu Ocllo",
        "Módulo Sigo XXI",
        "Condorcanqui",
        "San Felipe",
        "Los Incas"
    ]
},

"Universitaria": {

    ida: [
        "Universitaria (Inicial)",
        "Alborada",
        "El Paraiso",
        "San Carlos",
        "San Felipe",
        "Chimpu Ocllo",
        "Paucartambo",
        "Valle Chillón",
        "Club Deportivo",
        "Camino Real",
        "Las Lomas",
        "Manuel Prado",
        "Billinghurts",
        "Pacayal",
        "Calle 2",
        "Calle 1",
        "Periurbana (Final)"
    ],

    vuelta: [
        "Periurbana (Inicial)",
        "Calle 5",
        "Pacayal",
        "Calle 2",
        "Manuel Prado",
        "Santa Cruz",
        "Camino Real",
        "Manco Cápac",
        "Terminal",
        "Paucartambo",
        "Antisuyo",
        "Chimpu Ocllo",
        "San Felipe",
        "San Carlos",
        "El Paraiso",
        "La Alborada",
        "Universitaria (Final)"
    ]
},

"Carabayllo": {

    ida: [
        "Cueto Fernandini",
        "España",
        "Santa Rosa",
        "Belaunde",
        "La Pascana",
        "Miguel Grau (Velasco)",
        "Fe y Alegría",
        "Hospital",
        "San Felipe",
        "Santa Isabel",
        "Chimpu Ocllo",
        "La Flor",
        "Caudivilla",
        "Manco Cápac (Merino)",
        "José Pardo",
        "Villa Esperanza",
        "Ciro Alegría",
        "La Cumbre",
        "Augusto B. Leguía",
        "Plaza El Progreso",
        "Lenín (Final)"
    ],

    vuelta: [
        "Lenín (Inicial)",
        "Plaza El Progreso",
        "Túpac Amaru",
        "Augusto B. Leguía",
        "La Cumbre",
        "Ciro Alegría",
        "Cedros",
        "Villa Esperanza",
        "José Pardo",
        "Manco Cápac (Merino)",
        "Caudivilla",
        "La Flor",
        "Chimpu Ocllo",
        "Santa Isabel",
        "San Felipe",
        "San Carlos",
        "Hospital",
        "Fe y Alegría",
        "Miguel Grau (Velasco)",
        "La Pascana",
        "Belaunde",
        "Reniec",
        "España",
        "Mega 80"
    ]
},

"Carabayllo Expreso Mañana": {

    ida: [
        "España",
        "Belaunde",
        "La Pascana",
        "Miguel Grau (Velasco)",
        "Hospital",
        "San Felipe",
        "Chimpu Ocllo",
        "Caudivilla",
        "Manco Cápac (Merino)",
        "Villa Esperanza",
        "Ciro Alegría",
        "La Cumbre",
        "Augusto B. Leguía",
        "Plaza El Progreso",
        "Lenín (Final)"
    ],

    vuelta: [
        "Lenín (Inicial)",
        "Plaza El Progreso",
        "Túpac Amaru",
        "Augusto B. Leguía",
        "La Cumbre",
        "Ciro Alegría",
        "Cedros",
        "Villa Esperanza",
        "José Pardo",
        "Manco Cápac (Merino)",
        "Caudivilla",
        "La Flor",
        "Chimpu Ocllo",
        "Santa Isabel",
        "San Felipe",
        "San Carlos",
        "Hospital",
        "Miguel Grau (Velasco)",
        "La Pascana",
        "Belaunde",
        "España"
    ]
},

"Carabayllo Expreso Noche": {

    ida: [
        "España",
        "Belaunde",
        "La Pascana",
        "Miguel Grau (Velasco)",
        "Hospital",
        "San Felipe",
        "Santa Isabel",
        "Chimpu Ocllo",
        "La Flor",
        "Caudivilla",
        "Manco Cápac (Merino)",
        "José Pardo",
        "Villa Esperanza",
        "Ciro Alegría",
        "La Cumbre",
        "Augusto B. Leguía",
        "Plaza El Progreso",
        "Lenín (Final)"
    ],

    vuelta: [
        "Lenín (Inicial)",
        "Plaza El Progreso",
        "Augusto B. Leguía",
        "La Cumbre",
        "Ciro Alegría",
        "Villa Esperanza",
        "José Pardo",
        "Manco Cápac (Merino)",
        "Caudivilla",
        "Chimpu Ocllo",
        "Hospital",
        "Miguel Grau (Velasco)",
        "La Pascana",
        "Belaunde",
        "España"
    ]
},

"Torre Blanca": {

    ida: [
        "Terminal Chimpu Ocllo",
        "Machuca",
        "21",
        "Huascarán",
        "Vega",
        "San Antonio",
        "Pisa",
        "Mercado",
        "El Carmen",
        "Avenida 3",
        "Torre Blanca (Final)"
    ],

    vuelta: [
        "Torre Blanca (Inicial)",
        "Avenida 3",
        "El Carmen",
        "Mercado",
        "Pisa",
        "San Antonio",
        "Vega",
        "Progreso",
        "21",
        "Machuca",
        "Terminal Chimpu Ocllo"
    ]
},


"Trapiche": {

    ida: [
        "Estación Universidad (Inicial)",
        "Villasol",
        "Yanbal",
        "Plaza Vea",
        "El Álamo",
        "Botica",
        "El Pinar",
        "Kiosko",
        "Los Incas",
        "Alameda El Pinar",
        "Oficina",
        "San Felipe",
        "Remanso",
        "Peycar (Final)"
    ],

    vuelta: [
        "Peycar (Inicial)",
        "Remanso",
        "San Felipe",
        "Oficina",
        "Alameda El Pinar",
        "Los Incas",
        "Kiosko",
        "El Pinar",
        "Botica",
        "El Álamo",
        "Segunda de Pro",
        "La Amistad",
        "Plaza Vea",
        "Yanbal",
        "Villasol",
        "Estación Universidad (Final)"
    ]
},

"Collique": {

    ida: [
        "La Merced",
        "Correo",
        "España",
        "Colegio Israel",
        "Santa Rosa",
        "Banco de la Nación",
        "Belaunde",
        "Mercado Chacra Cerro",
        "La Pascana",
        "Cáceres (Jamaica)",
        "Miguel Grau (Velasco)",
        "Francisco Bolognesi",
        "Fe y Alegría",
        "Sánchez Cerro",
        "Julio C. Tello",
        "Cerro de Pasco",
        "Ramón Castilla",
        "Andahuaylas",
        "Piura",
        "Francisco de Zela (Final)"
    ],

    vuelta: [
        "Francisco de Zela (Inicial)",
        "Piura",
        "Alcides Carrión",
        "Ramón Castilla",
        "Arica",
        "Julio C. Tello",
        "Sánchez Cerro",
        "Fe y Alegría",
        "Grifo Año Nuevo",
        "Miguel Grau (Velasco)",
        "Jamaica",
        "La Pascana",
        "Mercado Chacra Cerro",
        "Belaunde",
        "Banco de la Nación",
        "Reniec",
        "Puno",
        "España",
        "Correo",
        "La Merced"
    ]
},

"Cedros de Villa": {

    ida: [
        "Huaylas",
        "Alameda Sur",
        "Los Pinos",
        "Plaza Vea",
        "Las Camelias",
        "Cedros de Villa",
        "Ballestas",
        "Isla Española (Final)"
    ],

    vuelta: [
        "Isla Española (Inicial)",
        "Aruba",
        "Las Tortugas",
        "Cedros de Villa",
        "San Lorenzo",
        "Plaza Vea",
        "Machupicchu",
        "10 de Noviembre",
        "Santa Anita"
    ]
},

"América": {

    ida: [
        "Óvalo La Curva",
        "Guardia Peruana",
        "El Sol",
        "Paradero C",
        "Los Naranjos",
        "Calle 3",
        "Velasco Alvarado",
        "Santa Rosa",
        "Mártir Olaya",
        "Mártires",
        "Unión",
        "Panamericana"
    ],

    vuelta: [
        "Paradero E",
        "Unión",
        "Mártires",
        "Micaela Bastidas",
        "Unanue",
        "Velasco Alvarado",
        "Vista Alegre",
        "Los Naranjos",
        "Paradero B",
        "Los Meteoros",
        "Guardia Peruana",
        "Óvalo La Curva"
    ]
},

"Los Próceres": {

    ida: [
        "Calango",
        "Guardia Peruana",
        "El Sol",
        "Alipio Ponce",
        "Los Incas",
        "Vista Alegre",
        "Villa Alegre",
        "Alcides Vigo",
        "Las Crucetas",
        "D. Tristan y Moscoso"
    ],

    vuelta: [
        "Las Crucetas",
        "Alcides Vigo",
        "Parque Villa Alegre",
        "Los Incas",
        "Centro Instrucción PNP",
        "Los Meteoros",
        "Guardia Peruana",
        "Calango",
        "Óvalo la Curva"
    ]
},

"Villa El Salvador": {

    ida: [
        "INR",
        "Confraternidad",
        "Pantanos de Villa",
        "Santa Rosa",
        "Panamericana Sur",
        "Almacenes",
        "Villa Panamericana",
        "Pastor Sevilla",
        "Micaela Bastidas",
        "Álamos",
        "Velasco Alvarado",
        "César Vallejo",
        "José Carlos Mariátegui",
        "200 Millas",
        "Parque Zonal Huáscar"
    ],

    vuelta: [
        "José Carlos Mariátegui",
        "César Vallejo",
        "Velasco Alvarado",
        "Álamos",
        "Micaela Bastidas",
        "Pastor Sevilla",
        "Villa Panamericana",
        "Almacenes",
        "Panamericana Sur",
        "Santa Rosa",
        "Pantanos de Villa",
        "Lavalle"
    ]
},

};

const informacionParaderos = {

    "Shangri-La": {
        ubicacion: "Puente Piedra",
        tipo: "Paradero alimentador",
        servicios: "Ruta Puente Piedra ↔ Naranjal",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado en la zona de Shangri-La.",
        dato: "Muy utilizado por los vecinos de la zona."
    },

    "Acobamba": {
        ubicacion: "Puente Piedra",
        tipo: "Paradero alimentador",
        servicios: "Ruta Puente Piedra ↔ Naranjal",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero de conexión hacia el Metropolitano.",
        dato: "Tiene alta demanda en horas punta."
    },

    "Yanbal": {
    ubicacion: "Puente Piedra",
    tipo: "Paradero alimentador",
    servicios: "Ruta Puente Piedra ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero ubicado cerca de la zona de Yanbal, utilizado por los vecinos para acceder al servicio alimentador.",
    dato: "Es uno de los primeros puntos de embarque de la ruta alimentadora de Puente Piedra."
},

"Prolima": {
    ubicacion: "Puente Piedra",
    tipo: "Paradero alimentador",
    servicios: "Ruta Puente Piedra ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero que brinda acceso a sectores residenciales y comerciales de la zona.",
    dato: "Recibe una importante cantidad de pasajeros durante las horas punta."
},

"Tres Ruedas (Domingos)": {
    ubicacion: "Puente Piedra",
    tipo: "Paradero alimentador especial",
    servicios: "Ruta Puente Piedra ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero atendido por el servicio alimentador durante los días domingo.",
    dato: "Su operación está enfocada en atender la demanda de movilidad de fin de semana."
},

"Establo": {
    ubicacion: "Puente Piedra",
    tipo: "Paradero alimentador",
    servicios: "Ruta Puente Piedra ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero ubicado en una zona residencial de Puente Piedra.",
    dato: "Permite la conexión de los vecinos con el sistema troncal del Metropolitano."
},

"Famesa": {
    ubicacion: "Puente Piedra",
    tipo: "Paradero alimentador",
    servicios: "Ruta Puente Piedra ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero cercano a establecimientos comerciales e industriales de la zona.",
    dato: "Es utilizado diariamente por trabajadores y estudiantes."
},

"Rosa Luz": {
    ubicacion: "Puente Piedra",
    tipo: "Paradero alimentador",
    servicios: "Ruta Puente Piedra ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero que brinda acceso a diversos sectores urbanos de Puente Piedra.",
    dato: "Presenta una demanda constante de pasajeros durante gran parte del día."
},

"Cementerio (Domingos)": {
    ubicacion: "Puente Piedra",
    tipo: "Paradero alimentador especial",
    servicios: "Ruta Puente Piedra ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero habilitado para facilitar el acceso de los usuarios durante los domingos.",
    dato: "Es especialmente utilizado por visitantes que se dirigen a la zona del cementerio."
},

"Tottus": {
    ubicacion: "Puente Piedra",
    tipo: "Paradero alimentador",
    servicios: "Ruta Puente Piedra ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero ubicado cerca del centro comercial y supermercado Tottus de Puente Piedra.",
    dato: "Es uno de los puntos con mayor movimiento de pasajeros debido a la actividad comercial de la zona."
},

"Unger": {
    ubicacion: "Los Olivos",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero ubicado en la zona de Unger, utilizado por los usuarios del servicio alimentador Bertello.",
    dato: "Es uno de los puntos iniciales del recorrido alimentador."
},

"Hospital Los Olivos": {
    ubicacion: "Los Olivos",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero cercano al Hospital Municipal Los Olivos.",
    dato: "Es frecuentemente utilizado por pacientes, visitantes y personal médico."
},

"Marcará": {
    ubicacion: "Los Olivos",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero ubicado en la avenida Marcará.",
    dato: "Conecta diversos sectores residenciales de la zona."
},

"Las Palmeras": {
    ubicacion: "Los Olivos",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero ubicado cerca de la avenida Las Palmeras.",
    dato: "Es utilizado diariamente por estudiantes y trabajadores."
},

"Universitaria": {
    ubicacion: "Los Olivos",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero situado en la avenida Universitaria.",
    dato: "Permite la conexión con una de las principales avenidas de Lima Norte."
},

"Huandoy": {
    ubicacion: "Los Olivos",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero ubicado en la zona de Huandoy.",
    dato: "Es una parada importante para los vecinos del sector."
},

"Portales de Naranjal": {
    ubicacion: "Los Olivos",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero cercano a la urbanización Portales de Naranjal.",
    dato: "Facilita el acceso al sistema Metropolitano."
},

"Santo Domingo": {
    ubicacion: "Los Olivos",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero ubicado en la zona de Santo Domingo.",
    dato: "Cuenta con una importante afluencia de pasajeros."
},

"Jardines de Naranjal": {
    ubicacion: "Los Olivos",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero cercano a la urbanización Jardines de Naranjal.",
    dato: "Es uno de los últimos paraderos antes de llegar a la terminal."
},

"Los Alisos": {
    ubicacion: "Los Olivos",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero ubicado en la avenida Los Alisos.",
    dato: "Conecta zonas comerciales y residenciales."
},

"Los Olivos": {
    ubicacion: "Los Olivos",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero ubicado en el distrito de Los Olivos.",
    dato: "Es una de las zonas con mayor movimiento de pasajeros de Lima Norte."
},

"Izaguirre": {
    ubicacion: "Los Olivos",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero ubicado sobre la avenida Carlos Izaguirre.",
    dato: "Permite la conexión con una de las avenidas más transitadas del distrito."
},

"Dominicos": {
    ubicacion: "San Martín de Porres",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero ubicado cerca de la avenida Dominicos.",
    dato: "Es utilizado por usuarios que se desplazan entre Los Olivos y SMP."
},

"Pacasmayo": {
    ubicacion: "San Martín de Porres",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero situado en la avenida Pacasmayo.",
    dato: "Brinda acceso a importantes zonas residenciales y comerciales."
},

"Bertello": {
    ubicacion: "San Martín de Porres",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero ubicado en la avenida Bertello, que da nombre a la ruta alimentadora.",
    dato: "Es uno de los principales puntos de referencia del recorrido."
},

"Los Pinos": {
    ubicacion: "San Martín de Porres",
    tipo: "Paradero alimentador",
    servicios: "Ruta Bertello ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero ubicado en la zona de Los Pinos.",
    dato: "Representa uno de los extremos del recorrido alimentador Bertello."
},

"La Merced": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero perteneciente al recorrido del alimentador Belaunde.",
    dato: "Es uno de los paraderos que aparece tanto en el recorrido de ida como en el de vuelta."
},

"Politécnico": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero del recorrido alimentador Belaunde.",
    dato: "Forma parte del tramo compartido entre la ida y la vuelta."
},

"Correo": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero utilizado por el servicio alimentador Belaunde.",
    dato: "Se encuentra dentro del recorrido de ida y vuelta."
},

"Colegio Israel": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde → 3 de Octubre",
    conexiones: "Recorrido de ida",
    descripcion: "Paradero perteneciente al recorrido de ida del alimentador Belaunde.",
    dato: "Este paradero corresponde al sentido de ida y no forma parte del recorrido de vuelta."
},

"Banco de La Nación": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero del servicio alimentador Belaunde.",
    dato: "Forma parte tanto del recorrido de ida como del recorrido de vuelta."
},

"Cipreses": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero perteneciente al recorrido del alimentador Belaunde.",
    dato: "Es compartido por ambos sentidos del recorrido."
},

"San Martín": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero utilizado por los pasajeros del servicio alimentador Belaunde.",
    dato: "Forma parte de los recorridos de ida y vuelta."
},

"1 de Mayo": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero correspondiente al recorrido del alimentador Belaunde.",
    dato: "Es atendido en ambos sentidos de la ruta."
},

"Larco Herrera": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero perteneciente al recorrido del servicio alimentador Belaunde.",
    dato: "Forma parte tanto de la ida como de la vuelta."
},

"San Pablo": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero utilizado por el alimentador Belaunde.",
    dato: "Está presente en ambos sentidos del recorrido."
},

"Huáscar": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde → 3 de Octubre",
    conexiones: "Recorrido de ida",
    descripcion: "Paradero perteneciente al recorrido de ida del alimentador Belaunde.",
    dato: "Este paradero aparece en la ida y no forma parte del recorrido de vuelta."
},

"3 de Octubre": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero que funciona como punto final del recorrido de ida y punto inicial del recorrido de vuelta.",
    dato: "Marca el cambio de sentido del recorrido del alimentador Belaunde."
},

"Talara": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero perteneciente al recorrido de vuelta del alimentador Belaunde.",
    dato: "Este paradero solamente aparece en el sentido de vuelta."
},

"Carabayllo": {
    ubicacion: "Carabayllo",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero correspondiente al recorrido de vuelta del alimentador Belaunde.",
    dato: "Forma parte únicamente del recorrido de retorno hacia Naranjal."
},

"Belaunde": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero perteneciente al recorrido de vuelta del alimentador Belaunde.",
    dato: "Este paradero aparece únicamente en el sentido de vuelta."
},

"Puno": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Belaunde → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero correspondiente al recorrido de vuelta del alimentador Belaunde.",
    dato: "Forma parte únicamente del recorrido de retorno hacia Naranjal."
},

"Paracas": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Tahuantinsuyo → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero perteneciente al recorrido de ida del alimentador Tahuantinsuyo.",
    dato: "Forma parte del tramo inicial del recorrido hacia Mascaypacha."
},

"Cahuide": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Tahuantinsuyo → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero correspondiente al recorrido de ida del alimentador Tahuantinsuyo.",
    dato: "Es uno de los paraderos ubicados antes de Pisac."
},

"Pisac": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Tahuantinsuyo → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero utilizado por el servicio alimentador Tahuantinsuyo.",
    dato: "Forma parte del recorrido de ida hacia Mascaypacha."
},

"Quipaypampa": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Tahuantinsuyo → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero perteneciente al recorrido de ida del alimentador Tahuantinsuyo.",
    dato: "Se encuentra en el tramo intermedio del recorrido hacia Mascaypacha."
},

"Yauri": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Tahuantinsuyo → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero correspondiente al recorrido de ida del alimentador Tahuantinsuyo.",
    dato: "Forma parte del tramo previo a Vilcanota."
},

"Vilcanota": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Tahuantinsuyo → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero utilizado por el alimentador Tahuantinsuyo durante su recorrido de ida.",
    dato: "Es uno de los últimos paraderos antes de llegar a Mascaypacha."
},

"Mascaypacha": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Tahuantinsuyo ↔ Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero que funciona como punto final del recorrido de ida y punto inicial del recorrido de vuelta.",
    dato: "Marca el cambio de sentido del recorrido del alimentador Tahuantinsuyo."
},

"Cusihuallar": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Tahuantinsuyo → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero perteneciente al recorrido de vuelta del alimentador Tahuantinsuyo.",
    dato: "Aparece únicamente en el sentido de retorno desde Mascaypacha."
},

"Yanaoca": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Tahuantinsuyo → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero correspondiente al recorrido de vuelta del alimentador Tahuantinsuyo.",
    dato: "Forma parte del tramo de retorno hacia el Terminal Naranjal."
},

"Huatanay": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Tahuantinsuyo → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero utilizado por el alimentador Tahuantinsuyo en el recorrido de vuelta.",
    dato: "Se encuentra después de Yanaoca en el sentido de retorno."
},

"Muquiyauyos": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Tahuantinsuyo → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero perteneciente al recorrido de vuelta del alimentador Tahuantinsuyo.",
    dato: "Forma parte del tramo de retorno hacia Naranjal."
},

"Indoamérica": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Tahuantinsuyo → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero correspondiente al recorrido de vuelta del alimentador Tahuantinsuyo.",
    dato: "Es uno de los paraderos del tramo final de retorno."
},

"Tiahuanaco": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Tahuantinsuyo → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero utilizado por el servicio alimentador Tahuantinsuyo durante su recorrido de vuelta.",
    dato: "Se encuentra cerca del tramo final antes de Túpac Amaru."
},

"Túpac Amaru": {
    ubicacion: "Lima Norte",
    tipo: "Paradero alimentador",
    servicios: "Ruta Tahuantinsuyo → Terminal Naranjal",
    conexiones: "Terminal Naranjal",
    descripcion: "Paradero correspondiente al recorrido de vuelta del alimentador Tahuantinsuyo.",
    dato: "Es el último paradero registrado del recorrido de vuelta."
},


};

  const informacionMilagros = {

        "Politécnico": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero perteneciente al recorrido de la ruta alimentadora Milagros de Jesús.",
            dato: "Es uno de los paraderos del recorrido del servicio."
        },

        "Cueto Fernandini": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero correspondiente al recorrido de la ruta alimentadora Milagros de Jesús.",
            dato: "Forma parte del tramo inicial del recorrido de ida."
        },

        "Santa Rosa": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero utilizado por el servicio alimentador Milagros de Jesús.",
            dato: "Aparece en el recorrido de ida de la ruta."
        },

        "Banco de la Nación": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero perteneciente al recorrido de la ruta alimentadora Milagros de Jesús.",
            dato: "Forma parte del recorrido del servicio."
        },

        "Belaunde": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero utilizado por la ruta alimentadora Milagros de Jesús.",
            dato: "Forma parte del tramo inicial del recorrido de ida."
        },

        "Mercado Chacra Cerro": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero correspondiente al recorrido de la ruta Milagros de Jesús.",
            dato: "Se encuentra dentro del recorrido de ida y vuelta."
        },

        "La Pascana": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero utilizado por el servicio alimentador Milagros de Jesús.",
            dato: "Forma parte del recorrido de ida y vuelta."
        },

        "Cáceres (Jamaica)": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero perteneciente al recorrido de ida del alimentador Milagros de Jesús.",
            dato: "Se encuentra después de La Pascana."
        },

        "Miguel Grau": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero correspondiente al recorrido de ida de Milagros de Jesús.",
            dato: "Forma parte del tramo intermedio del recorrido."
        },

        "Francisco Bolognesi": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero utilizado por la ruta alimentadora Milagros de Jesús.",
            dato: "Forma parte del recorrido de ida."
        },

        "Fe y Alegría": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero perteneciente al recorrido de la ruta Milagros de Jesús.",
            dato: "Aparece en el recorrido de ida y también en el de vuelta."
        },

        "José Olaya": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero correspondiente al recorrido de ida de Milagros de Jesús.",
            dato: "Se encuentra antes de Sánchez Cerro."
        },

        "Sánchez Cerro": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero utilizado por la ruta alimentadora Milagros de Jesús.",
            dato: "Aparece tanto en el recorrido de ida como en el de vuelta."
        },

        "Huascarán": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero perteneciente al recorrido de ida de Milagros de Jesús.",
            dato: "Se encuentra después de Sánchez Cerro."
        },

        "Julio C. Tello": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero correspondiente al recorrido de ida.",
            dato: "Forma parte del tramo previo a Cañete."
        },

        "Cañete": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero perteneciente al recorrido de ida.",
            dato: "Se encuentra antes de Santa Rosa y San Pedro."
        },

        "San Pedro (Final)": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Punto final del recorrido de ida de Milagros de Jesús.",
            dato: "Marca el final del recorrido de ida."
        },

        "San Pedro (Inicial)": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Punto inicial del recorrido de vuelta de Milagros de Jesús.",
            dato: "Desde este punto comienza el recorrido de retorno."
        },

        "San Miguel": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero correspondiente al recorrido de vuelta.",
            dato: "Se encuentra después de San Pedro en el sentido de retorno."
        },

        "Santa Clara": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero perteneciente al recorrido de vuelta.",
            dato: "Forma parte del tramo inicial del retorno."
        },

        "Arnaldo Márquez": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero utilizado durante el recorrido de vuelta.",
            dato: "Forma parte del tramo de retorno hacia Naranjal."
        },

        "Revolución": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero correspondiente al recorrido de vuelta.",
            dato: "Se encuentra antes de La Mar."
        },

        "La Mar": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero utilizado por el servicio durante el recorrido de vuelta.",
            dato: "Forma parte del tramo de retorno."
        },

        "Jorge Chávez": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero correspondiente al recorrido de vuelta.",
            dato: "Forma parte del tramo de retorno hacia Naranjal."
        },

        "Grifo Año Nuevo": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero utilizado durante el recorrido de vuelta.",
            dato: "Se encuentra después de Fe y Alegría."
        },

        "Miguel Grau (Velasco)": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero perteneciente al recorrido de vuelta.",
            dato: "Forma parte del tramo de retorno."
        },

        "Jamaica": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero correspondiente al recorrido de vuelta.",
            dato: "Se encuentra después de Miguel Grau (Velasco)."
        },

        "Reniec": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero perteneciente al recorrido de vuelta.",
            dato: "Forma parte del tramo final antes de llegar a Politécnico."
        },

        "Mega 80": {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Milagros de Jesús",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero correspondiente al tramo final del recorrido de vuelta.",
            dato: "Se encuentra antes de Politécnico."
        }

    };


// 👇 AQUÍ VA LA FUNCIÓN

function mostrarInformacion(nombreParadero, ruta){ 

    let info;

    // HUÁSCAR EN TAHUANTINSUYO
    if(nombreParadero === "Huáscar" && ruta === "Tahuantinsuyo"){

        info = {
            ubicacion: "Lima Norte",
            tipo: "Paradero alimentador",
            servicios: "Tahuantinsuyo",
            conexiones: "Terminal Naranjal",
            descripcion: "Paradero inicial del recorrido de ida de la ruta alimentadora Tahuantinsuyo.",
            dato: "Desde Huáscar comienza el recorrido hacia Paracas, Cahuide, Pisac y los demás paraderos hasta Mascaypacha."
        };

    }

    // HUÁSCAR EN BELAUNDE
else if(nombreParadero === "Huáscar" && ruta === "Belaunde"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Belaunde",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de ida de la ruta alimentadora Belaunde.",
        dato: "Forma parte del tramo final antes de llegar a 3 de Octubre."
    };

}

else if(nombreParadero === "La Cincuenta" && ruta === "Puno"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial de la ruta alimentadora Puno.",
        dato: "Desde este punto comienza el recorrido hacia Vallejo."
    };

}

else if(nombreParadero === "La Merced" && ruta === "Puno"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Puno.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}


else if(nombreParadero === "Politécnico" && ruta === "Puno"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Puno.",
        dato: "Forma parte de los recorridos de ida y vuelta entre La Cincuenta y Vallejo."
    };

}

else if(nombreParadero === "Cueto Fernandini" && ruta === "Puno"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado en el recorrido de ida de la ruta alimentadora Puno.",
        dato: "Se encuentra entre Politécnico y Correo."
    };

}

else if(nombreParadero === "Correo" && ruta === "Puno"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Puno.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}



else if(nombreParadero === "Politécnico" && ruta === "Belaunde"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Belaunde",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Belaunde.",
        dato: "Forma parte del tramo compartido entre el recorrido de ida y vuelta."
    };

}

else if(nombreParadero === "La Merced" && ruta === "Puno"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Puno.",
        dato: "Forma parte de los recorridos de ida y vuelta entre La Cincuenta y Vallejo."
    };

}

else if(nombreParadero === "Correo" && ruta === "Puno"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado dentro del recorrido de la ruta alimentadora Puno.",
        dato: "Es uno de los paraderos compartidos por ambos sentidos del recorrido."
    };

}

else if(nombreParadero === "Mega 80" && ruta === "Puno"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de retorno hacia Naranjal.",
        dato: "Se encuentra antes de Politécnico durante la vuelta."
    };

}

else if(nombreParadero === "España" && ruta === "Puno"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Puno.",
        dato: "Forma parte del tramo central del recorrido."
    };

}

else if(nombreParadero === "Lima" && ruta === "Puno"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero del recorrido alimentador Puno.",
        dato: "Es atendido durante los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Túpac Amaru" && ruta === "Puno"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta de la ruta Puno.",
        dato: "No debe confundirse con el paradero homónimo de otras rutas."
    };

}

else if(nombreParadero === "24 de Agosto" && ruta === "Puno"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Forma parte del tramo inicial del retorno."
    };

}

else if(nombreParadero === "Vallejo (Inicial)" && ruta === "Puno"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial del recorrido de vuelta.",
        dato: "Desde aquí comienza el retorno hacia Naranjal."
    };

}

else if(nombreParadero === "Vallejo (Final)" && ruta === "Puno"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero final del recorrido de ida de la ruta alimentadora Puno.",
        dato: "Aquí termina el recorrido antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Progreso" && ruta === "Puno"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Se encuentra antes de llegar a Vallejo."
    };

}

else if(nombreParadero === "Edelnor" && ruta === "Puno"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Se encuentra después de España."
    };

}

else if(nombreParadero === "Piura" && ruta === "Puno"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Puno.",
        dato: "Se encuentra en el tramo previo a La Habana."
    };

}

else if(nombreParadero === "La Habana" && ruta === "Puno"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Puno",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente a la ruta alimentadora Puno.",
        dato: "Forma parte de ambos sentidos del recorrido entre La Cincuenta y Vallejo."
    };

}

// ===== ANTÚNEZ DE MAYOLO =====

else if(nombreParadero === "Galeano" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial de la ruta alimentadora Antúnez de Mayolo.",
        dato: "Desde este punto comienza el recorrido hacia Nísperos."
    };

}

else if(nombreParadero === "Las Palmeras" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Antúnez de Mayolo.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Amarantos" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado en el recorrido principal de la ruta.",
        dato: "Es atendido en ambos sentidos del recorrido."
    };

}

else if(nombreParadero === "Telefónica" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Antúnez de Mayolo.",
        dato: "Aparece más de una vez dentro del recorrido de la ruta."
    };

}

else if(nombreParadero === "Plaza Vea" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero cercano al centro comercial Plaza Vea.",
        dato: "Es uno de los puntos con mayor movimiento de pasajeros."
    };

}

else if(nombreParadero === "Mercado Covida" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero cercano al mercado Covida.",
        dato: "Es un importante punto comercial de Lima Norte."
    };

}

else if(nombreParadero === "Universitaria" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado sobre la avenida Universitaria.",
        dato: "Forma parte únicamente del recorrido de ida."
    };

}

else if(nombreParadero === "San Francisco" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de la ruta.",
        dato: "Se encuentra presente en ambos sentidos."
    };

}

else if(nombreParadero === "12 de Octubre" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al tramo central del recorrido.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Puente Camote" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero importante de conexión dentro de la ruta.",
        dato: "Es atendido en ambos sentidos."
    };

}

else if(nombreParadero === "Alcides Vigo" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Se encuentra antes de llegar a Coopip."
    };

}

else if(nombreParadero === "Coopip" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Antúnez de Mayolo.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Nísperos (Final)" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero final del recorrido de ida.",
        dato: "Aquí culmina el trayecto antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Nísperos (Inicial)" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial del recorrido de vuelta.",
        dato: "Desde este punto comienza el retorno hacia Naranjal."
    };

}

else if(nombreParadero === "Santa Rosa" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de vuelta.",
        dato: "Forma parte del tramo inicial de retorno."
    };

}

else if(nombreParadero === "Río Santa" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Se encuentra entre San Francisco y Telefónica."
    };

}

else if(nombreParadero === "Acacias" && ruta === "Antúnez de Mayolo"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Antúnez de Mayolo",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de retorno.",
        dato: "Es uno de los últimos paraderos antes de Amarantos."
    };

}

// ===== ENSENADA =====

else if(nombreParadero === "Hospital Los Olivos" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial de la ruta alimentadora Ensenada.",
        dato: "Desde este punto comienza el recorrido hacia Calle 5."
    };

}

else if(nombreParadero === "Tres Postes" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de la ruta Ensenada.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Universitaria" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado sobre la avenida Universitaria.",
        dato: "Es atendido en ambos sentidos del recorrido."
    };

}

else if(nombreParadero === "Santa Elvira" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido alimentador Ensenada.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Huandoy" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Se encuentra antes de San Martín."
    };

}

else if(nombreParadero === "San Martín" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta Ensenada.",
        dato: "Está presente tanto en la ida como en la vuelta."
    };

}

else if(nombreParadero === "Los Rosales" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero del recorrido alimentador Ensenada.",
        dato: "Forma parte de ambos sentidos de la ruta."
    };

}

else if(nombreParadero === "2 de Octubre" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero importante del recorrido.",
        dato: "Se encuentra en los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Los Portales" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta Ensenada.",
        dato: "Es utilizado en ambos sentidos del recorrido."
    };

}

else if(nombreParadero === "Cordialidad" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Forma parte del tramo previo a Honradez."
    };

}

else if(nombreParadero === "Honradez" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta Ensenada.",
        dato: "Se encuentra en ambos sentidos del recorrido."
    };

}

else if(nombreParadero === "Calle 27" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Forma parte del tramo central de la ruta."
    };

}

else if(nombreParadero === "Parque Los Portales" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado cerca de la urbanización Los Portales.",
        dato: "Es atendido en ambos sentidos."
    };

}

else if(nombreParadero === "Alborada" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido alimentador.",
        dato: "Forma parte de la ida y la vuelta."
    };

}

else if(nombreParadero === "Rosedal" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Se encuentra antes de Comisaría."
    };

}

else if(nombreParadero === "Comisaría" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero cercano a una dependencia policial de la zona.",
        dato: "Forma parte únicamente del recorrido de ida."
    };

}

else if(nombreParadero === "Palmeras" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Se encuentra antes de Conquistadores."
    };

}

else if(nombreParadero === "Conquistadores" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de ida.",
        dato: "Es uno de los últimos paraderos antes de Calle 5."
    };

}

else if(nombreParadero === "Ca 5 (Final)" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero final del recorrido de ida.",
        dato: "Aquí concluye el trayecto antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Ca 5 (Inicial)" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial del recorrido de vuelta.",
        dato: "Desde aquí comienza el retorno hacia Naranjal."
    };

}

else if(nombreParadero === "23 de Agosto" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Forma parte del tramo inicial de retorno."
    };

}

else if(nombreParadero === "Botica" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de vuelta.",
        dato: "Se encuentra después de 23 de Agosto."
    };

}

else if(nombreParadero === "El Rosedal" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Forma parte del tramo previo a Las Granadas."
    };

}

else if(nombreParadero === "Las Granadas" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de retorno.",
        dato: "Se encuentra antes de Alborada."
    };

}

else if(nombreParadero === "Calle 2" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Forma parte del tramo central del retorno."
    };

}

else if(nombreParadero === "Los Próceres" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de vuelta.",
        dato: "Se encuentra entre Honradez y Los Portales."
    };

}

else if(nombreParadero === "Central" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Forma parte del tramo previo a Santa Elvira."
    };

}

else if(nombreParadero === "Marañón" && ruta === "La Ensenada"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Ensenada",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de vuelta.",
        dato: "Es uno de los últimos paraderos antes de llegar a Hospital Los Olivos."
    };

}

else if(nombreParadero === "Maracuyá" && ruta === "Los Alisos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Alisos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de la ruta alimentadora Los Alisos.",
        dato: "Forma parte del inicio del recorrido de ida hacia Avenida C."
    };

}

else if(nombreParadero === "Galeano" && ruta === "Los Alisos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Alisos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Los Alisos.",
        dato: "Es un punto compartido con otros servicios alimentadores de Lima Norte."
    };

}

else if(nombreParadero === "Las Palmeras" && ruta === "Los Alisos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Alisos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado dentro del recorrido de la ruta Los Alisos.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "El Naranjal" && ruta === "Los Alisos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Alisos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de la ruta alimentadora Los Alisos.",
        dato: "Se encuentra dentro del sector de Naranjal y permite la conexión con el sistema del Metropolitano."
    };

}

else if(nombreParadero === "Universitaria" && ruta === "Los Alisos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Alisos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado en las inmediaciones de la avenida Universitaria.",
        dato: "Es un punto de paso de la ruta Los Alisos y también aparece en otros recorridos alimentadores."
    };

}

else if(nombreParadero === "Girasoles" && ruta === "Los Alisos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Alisos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al tramo del recorrido hacia Avenida C.",
        dato: "Forma parte del recorrido de ida de la ruta Los Alisos."
    };

}

else if(nombreParadero === "Huandoy" && ruta === "Los Alisos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Alisos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de la ruta alimentadora Los Alisos.",
        dato: "Es un paradero compartido con otros servicios alimentadores de Lima Norte."
    };

}

else if(nombreParadero === "Las Malvas" && ruta === "Los Alisos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Alisos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado en el tramo final del recorrido hacia Avenida C.",
        dato: "Se encuentra antes del punto final del recorrido de ida."
    };

}

else if(nombreParadero === "Avenida C (Final)" && ruta === "Los Alisos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Alisos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero final del recorrido de ida de la ruta Los Alisos.",
        dato: "Aquí termina el recorrido de ida antes de iniciar el trayecto de vuelta."
    };

}

else if(nombreParadero === "Avenida C (Inicial)" && ruta === "Los Alisos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Alisos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial del recorrido de vuelta de la ruta Los Alisos.",
        dato: "Desde este punto comienza el retorno hacia Maracuyá."
    };

}

else if(nombreParadero === "El Rosario" && ruta === "Los Alisos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Alisos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta de la ruta Los Alisos.",
        dato: "Forma parte del tramo inicial del retorno hacia Naranjal."
    };

}

else if(nombreParadero === "Avenida A" && ruta === "Los Alisos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Alisos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de vuelta de la ruta Los Alisos.",
        dato: "Se encuentra antes de llegar nuevamente a Universitaria."
    };

}

// ===== LOS OLIVOS =====

else if(nombreParadero === "Jade" && ruta === "Los Olivos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Olivos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Los Olivos.",
        dato: "Es el punto de inicio del recorrido de ida y también uno de los últimos paraderos del recorrido de vuelta."
    };

}

else if(nombreParadero === "Calle 9" && ruta === "Los Olivos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Olivos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de la ruta alimentadora Los Olivos.",
        dato: "Es atendido tanto durante el recorrido de ida como durante el recorrido de vuelta."
    };

}

else if(nombreParadero === "Calle 3" && ruta === "Los Olivos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Olivos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida de la ruta Los Olivos.",
        dato: "Se encuentra entre Calle 9 y Avenida B."
    };

}

else if(nombreParadero === "Avenida B" && ruta === "Los Olivos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Olivos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Los Olivos.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Santa Rosa" && ruta === "Los Olivos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Olivos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de la ruta Los Olivos.",
        dato: "Es un paradero compartido por los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Calle 2" && ruta === "Los Olivos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Olivos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero final del recorrido de ida de la ruta Los Olivos.",
        dato: "Aquí termina el recorrido de ida antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Canta" && ruta === "Los Olivos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Olivos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al inicio del recorrido de vuelta de la ruta Los Olivos.",
        dato: "Desde este punto comienza el recorrido de retorno."
    };

}

else if(nombreParadero === "Kodak" && ruta === "Los Olivos"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Los Olivos",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de vuelta de la ruta Los Olivos.",
        dato: "Se encuentra entre Avenida B y Calle 9 durante el recorrido de retorno."
    };

}

// ===== PAYET =====

else if(nombreParadero === "Huáscar" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de la ruta alimentadora Payet.",
        dato: "Forma parte del tramo inicial del recorrido de ida."
    };

}

else if(nombreParadero === "Calle 3" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de la ruta alimentadora Payet.",
        dato: "Se encuentra después de Huáscar durante el recorrido de ida."
    };

}

else if(nombreParadero === "Río Sapi" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de la ruta Payet.",
        dato: "Forma parte del tramo inicial del recorrido hacia 4 de Noviembre."
    };

}

else if(nombreParadero === "Antisuyo" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado dentro del recorrido de la ruta alimentadora Payet.",
        dato: "Es atendido durante el recorrido de ida."
    };

}

else if(nombreParadero === "J. G. Condorcanqui" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Payet.",
        dato: "Forma parte del tramo intermedio del recorrido de ida."
    };

}

else if(nombreParadero === "Posta" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de la ruta Payet.",
        dato: "Es utilizado en los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Progreso" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente a la ruta alimentadora Payet.",
        dato: "Es un paradero compartido por los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Alca" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al tramo final del recorrido de ida.",
        dato: "Se encuentra antes de Real Felipe."
    };

}

else if(nombreParadero === "Real Felipe" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida de la ruta Payet.",
        dato: "Se encuentra antes del paradero final 4 de Noviembre."
    };

}

else if(nombreParadero === "4 de Noviembre (Final)" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero final del recorrido de ida de la ruta Payet.",
        dato: "Aquí termina el recorrido de ida antes de iniciar el retorno."
    };

}

else if(nombreParadero === "4 de Noviembre (Inicial)" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial del recorrido de vuelta de la ruta Payet.",
        dato: "Desde este punto comienza el retorno hacia el sector de Huáscar."
    };

}

else if(nombreParadero === "José Olaya" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de vuelta de la ruta Payet.",
        dato: "Forma parte del tramo inicial del recorrido de retorno."
    };

}

else if(nombreParadero === "Huaytapampa" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta de la ruta Payet.",
        dato: "Se encuentra antes de Progreso durante el retorno."
    };

}

else if(nombreParadero === "Calle Marco" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de vuelta de la ruta Payet.",
        dato: "Forma parte del tramo central del recorrido de retorno."
    };

}

else if(nombreParadero === "Calle 17" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Se encuentra después de Calle Marco durante el retorno."
    };

}

else if(nombreParadero === "Huamachuco" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de vuelta de la ruta Payet.",
        dato: "Forma parte del tramo previo a Calle 1."
    };

}

else if(nombreParadero === "Calle 1" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta de la ruta Payet.",
        dato: "Se encuentra cerca de la parte final del recorrido de retorno."
    };

}

else if(nombreParadero === "Túpac Amaru" && ruta === "Payet"){

    info = {
        ubicacion: "Independencia",
        tipo: "Paradero alimentador",
        servicios: "Payet",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al tramo final del recorrido de vuelta.",
        dato: "Es uno de los últimos puntos del recorrido antes de completar el retorno."
    };

}

else if(nombreParadero === "Terminal Naranjal" && ruta === "Naranjal"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Terminal de conexión",
        servicios: "Naranjal",
        conexiones: "Metropolitano",
        descripcion: "Terminal principal donde inicia y termina el recorrido del alimentador Naranjal.",
        dato: "Permite realizar conexión con los servicios del Metropolitano."
    };

}

else if(nombreParadero === "Marcara" && ruta === "Naranjal"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Naranjal",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado en el recorrido del alimentador Naranjal.",
        dato: "Es utilizado por pasajeros de la zona para acceder al sistema."
    };

}

else if(nombreParadero === "Las Palmeras" && ruta === "Naranjal"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Naranjal",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero que forma parte del recorrido del alimentador Naranjal.",
        dato: "Atiende a pasajeros de las zonas cercanas."
    };

}

else if(nombreParadero === "Universitaria" && ruta === "Naranjal"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Naranjal",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado en el recorrido del alimentador Naranjal.",
        dato: "Su ubicación permite atender a pasajeros que se desplazan por la zona."
    };

}

else if(nombreParadero === "Huandoy" && ruta === "Naranjal"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Naranjal",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero del recorrido del alimentador Naranjal.",
        dato: "Es un punto utilizado por pasajeros de las zonas cercanas."
    };

}

else if(nombreParadero === "Portales de Naranjal" && ruta === "Naranjal"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Naranjal",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero que forma parte del recorrido del alimentador Naranjal.",
        dato: "Permite el acceso al servicio desde la zona de Portales de Naranjal."
    };

}

else if(nombreParadero === "Jircan" && ruta === "Naranjal"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Naranjal",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado dentro del recorrido del alimentador Naranjal.",
        dato: "Atiende a los pasajeros que utilizan el servicio en esta zona."
    };

}

else if(nombreParadero === "Las Américas" && ruta === "Naranjal"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Naranjal",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido del alimentador Naranjal.",
        dato: "Facilita el desplazamiento de los usuarios hacia el terminal."
    };

}

else if(nombreParadero === "Pacasmayo" && ruta === "Naranjal"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Naranjal",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado en el trayecto del alimentador Naranjal.",
        dato: "Es utilizado por pasajeros que se desplazan por la zona."
    };

}

else if(nombreParadero === "Central" && ruta === "Naranjal"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Naranjal",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero que forma parte del recorrido del alimentador Naranjal.",
        dato: "Permite continuar el recorrido hacia los demás paraderos."
    };

}

else if(nombreParadero === "Paramonga (Final)" && ruta === "Naranjal"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Naranjal",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero final correspondiente al recorrido de ida del alimentador Naranjal.",
        dato: "Aquí culmina el recorrido de ida de la ruta."
    };

}

else if(nombreParadero === "Paramonga (Inicial)" && ruta === "Naranjal"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Naranjal",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial correspondiente al recorrido de vuelta del alimentador Naranjal.",
        dato: "Desde este punto comienza el recorrido de regreso hacia el Terminal Naranjal."
    };

}

else if(nombreParadero === "Daniel Fernández" && ruta === "Izaguirre"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Izaguirre",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial de la ruta alimentadora Izaguirre.",
        dato: "Desde este punto comienza el recorrido hacia Santa Rosa."
    };

}

else if(nombreParadero === "Santos Chocano" && ruta === "Izaguirre"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Izaguirre",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Izaguirre.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Las Palmeras" && ruta === "Izaguirre"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Izaguirre",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero ubicado sobre la avenida Las Palmeras.",
        dato: "Es uno de los principales puntos de tránsito de la ruta."
    };

}

else if(nombreParadero === "El Amargón" && ruta === "Izaguirre"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Izaguirre",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente al recorrido de ida.",
        dato: "Se encuentra entre Las Palmeras y Estibina."
    };

}

else if(nombreParadero === "Estibina" && ruta === "Izaguirre"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Izaguirre",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero de la ruta alimentadora Izaguirre.",
        dato: "Forma parte de ambos sentidos del recorrido."
    };

}

else if(nombreParadero === "San Francisco" && ruta === "Izaguirre"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Izaguirre",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero importante del recorrido alimentador.",
        dato: "Es atendido tanto en la ida como en la vuelta."
    };

}

else if(nombreParadero === "12 de Octubre" && ruta === "Izaguirre"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Izaguirre",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al tramo final del recorrido.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Santa Rosa (Final)" && ruta === "Izaguirre"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Izaguirre",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero final del recorrido de ida.",
        dato: "Aquí culmina el trayecto antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Santa Rosa (Inicial)" && ruta === "Izaguirre"){

    info = {
        ubicacion: "Los Olivos",
        tipo: "Paradero alimentador",
        servicios: "Izaguirre",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial del recorrido de vuelta.",
        dato: "Desde este punto comienza el retorno hacia Naranjal."
    };

}

// ===== SAN JUAN DE DIOS =====

else if(nombreParadero === "Los Incas" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero inicial de la ruta alimentadora San Juan de Dios.",
        dato: "Desde este punto comienza el recorrido de ida hacia Polos."
    };

}

else if(nombreParadero === "San Felipe" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Condorcanqui" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Se encuentra entre San Felipe y Módulo Sigo XXI."
    };

}

else if(nombreParadero === "Módulo Sigo XXI" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Se encuentra antes de Chimpu Ocllo en el recorrido de ida."
    };

}

else if(nombreParadero === "Chimpu Ocllo" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero de la ruta San Juan de Dios cercano al terminal.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Mercado Frontera" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero cercano al Mercado Frontera.",
        dato: "Es un punto con movimiento de pasajeros por la actividad comercial."
    };

}

else if(nombreParadero === "Chany" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Se encuentra después de Mercado Frontera en la ida."
    };

}

else if(nombreParadero === "Paradero 39" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Paradero Q" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Se encuentra entre Paradero 39 y Paradero U."
    };

}

else if(nombreParadero === "Paradero U" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Se encuentra antes de Calle 5 en el recorrido de ida."
    };

}

else if(nombreParadero === "Calle 5" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Salamanca" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Se encuentra entre Calle 5 y Edén."
    };

}

else if(nombreParadero === "Edén" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Rinconada" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Se encuentra entre Edén y Esmeralda."
    };

}

else if(nombreParadero === "Esmeralda" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Santa Rosa" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Se encuentra entre Esmeralda y San Pedro."
    };

}

else if(nombreParadero === "San Pedro" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Cooperativa" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Se encuentra entre San Pedro y El Pino."
    };

}

else if(nombreParadero === "El Pino" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "San Antonio" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Se encuentra entre El Pino y Lark."
    };

}

else if(nombreParadero === "Lark" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Haras" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Se encuentra entre Lark y Condominio Real."
    };

}

else if(nombreParadero === "Condominio Real" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Casuarinas" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Se encuentra entre Condominio Real y Maestro."
    };

}

else if(nombreParadero === "Maestro" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora San Juan de Dios.",
        dato: "Es el paradero anterior a Polos en la ida."
    };

}

else if(nombreParadero === "Polos (Final)" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero final del recorrido de ida.",
        dato: "Aquí termina el recorrido de ida antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Polos (Inicial)" && ruta === "San Juan de Dios"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "San Juan de Dios",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero inicial del recorrido de vuelta.",
        dato: "Desde este punto comienza el retorno hacia Los Incas."
    };

}

// ===== UNIVERSITARIA =====

else if(nombreParadero === "Universitaria (Inicial)" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero inicial del recorrido de ida de la ruta alimentadora Universitaria.",
        dato: "Desde este punto comienza el recorrido hacia Periurbana."
    };

}

else if(nombreParadero === "Alborada" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Se encuentra después de Universitaria (Inicial)."
    };

}

else if(nombreParadero === "El Paraiso" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora Universitaria.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "San Carlos" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora Universitaria.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "San Felipe" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora Universitaria.",
        dato: "Se encuentra antes de Chimpu Ocllo en el recorrido de ida."
    };

}

else if(nombreParadero === "Chimpu Ocllo" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero de la ruta Universitaria cercano al terminal.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Paucartambo" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora Universitaria.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Valle Chillón" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Se encuentra después de Paucartambo."
    };

}

else if(nombreParadero === "Club Deportivo" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Se encuentra entre Valle Chillón y Camino Real."
    };

}

else if(nombreParadero === "Camino Real" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora Universitaria.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Las Lomas" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Se encuentra entre Camino Real y Manuel Prado."
    };

}

else if(nombreParadero === "Manuel Prado" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora Universitaria.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Billinghurts" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Se encuentra antes de Pacayal."
    };

}

else if(nombreParadero === "Pacayal" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora Universitaria.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Calle 2" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero perteneciente a la ruta alimentadora Universitaria.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Calle 1" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Es el paradero anterior a Periurbana en la ida."
    };

}

else if(nombreParadero === "Periurbana (Final)" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero final del recorrido de ida.",
        dato: "Aquí termina el recorrido de ida antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Periurbana (Inicial)" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero inicial del recorrido de vuelta.",
        dato: "Desde este punto comienza el retorno hacia Universitaria."
    };

}

else if(nombreParadero === "Calle 5" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Forma parte del tramo inicial del retorno."
    };

}

else if(nombreParadero === "Santa Cruz" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Se encuentra entre Manuel Prado y Camino Real."
    };

}

else if(nombreParadero === "Manco Cápac" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Se encuentra entre Camino Real y Terminal."
    };

}

else if(nombreParadero === "Terminal" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Se encuentra antes de Paucartambo en el retorno."
    };

}

else if(nombreParadero === "Antisuyo" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Se encuentra entre Paucartambo y Chimpu Ocllo."
    };

}

else if(nombreParadero === "La Alborada" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Es el paradero anterior al final del retorno."
    };

}

else if(nombreParadero === "Universitaria (Final)" && ruta === "Universitaria"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Universitaria",
        conexiones: "Terminal Chimpu Ocllo",
        descripcion: "Paradero final del recorrido de vuelta.",
        dato: "Aquí termina el recorrido de retorno de la ruta Universitaria."
    };

}

// ===== CARABAYLLO (REGULAR, EXPRESO MAÑANA Y EXPRESO NOCHE) =====

else if(nombreParadero === "Cueto Fernandini" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial del recorrido de ida de la ruta Carabayllo regular.",
        dato: "Solo se atiende en la ruta regular."
    };

}

else if(nombreParadero === "España" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a las rutas alimentadoras de Carabayllo.",
        dato: "En los expresos es el paradero inicial de la ida y el último de la vuelta."
    };

}

else if(nombreParadero === "Santa Rosa" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida de la ruta regular.",
        dato: "Se encuentra entre España y Belaunde."
    };

}

else if(nombreParadero === "Belaunde" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a las rutas alimentadoras de Carabayllo.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "La Pascana" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a las rutas alimentadoras de Carabayllo.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Miguel Grau (Velasco)" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a las rutas alimentadoras de Carabayllo.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Fe y Alegría" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta Carabayllo regular.",
        dato: "Los expresos no se detienen en este paradero."
    };

}

else if(nombreParadero === "Hospital" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero cercano a un centro de salud de la zona.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "San Felipe" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a las rutas alimentadoras de Carabayllo.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Santa Isabel" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta regular y al expreso noche.",
        dato: "El expreso mañana no se detiene en la ida, pero sí en la vuelta."
    };

}

else if(nombreParadero === "Chimpu Ocllo" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a las rutas alimentadoras de Carabayllo.",
        dato: "Forma parte de los recorridos de ida y vuelta de las tres rutas."
    };

}

else if(nombreParadero === "La Flor" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a las rutas alimentadoras de Carabayllo.",
        dato: "El expreso mañana solo lo atiende en la vuelta."
    };

}

else if(nombreParadero === "Caudivilla" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a las rutas alimentadoras de Carabayllo.",
        dato: "Forma parte de los recorridos de ida y vuelta de las tres rutas."
    };

}

else if(nombreParadero === "Manco Cápac (Merino)" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a las rutas alimentadoras de Carabayllo.",
        dato: "Forma parte de los recorridos de ida y vuelta de las tres rutas."
    };

}

else if(nombreParadero === "José Pardo" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a las rutas alimentadoras de Carabayllo.",
        dato: "El expreso mañana solo lo atiende en la vuelta."
    };

}

else if(nombreParadero === "Villa Esperanza" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a las rutas alimentadoras de Carabayllo.",
        dato: "Forma parte de los recorridos de ida y vuelta de las tres rutas."
    };

}

else if(nombreParadero === "Ciro Alegría" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a las rutas alimentadoras de Carabayllo.",
        dato: "Forma parte de los recorridos de ida y vuelta de las tres rutas."
    };

}

else if(nombreParadero === "La Cumbre" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a las rutas alimentadoras de Carabayllo.",
        dato: "Forma parte de los recorridos de ida y vuelta de las tres rutas."
    };

}

else if(nombreParadero === "Augusto B. Leguía" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a las rutas alimentadoras de Carabayllo.",
        dato: "Forma parte de los recorridos de ida y vuelta de las tres rutas."
    };

}

else if(nombreParadero === "Plaza El Progreso" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero cercano a la plaza El Progreso.",
        dato: "Es el paradero anterior a Lenín en la ida y el siguiente a Lenín en la vuelta."
    };

}

else if(nombreParadero === "Lenín (Final)" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero final del recorrido de ida.",
        dato: "Aquí termina el recorrido de ida antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Lenín (Inicial)" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana" || ruta === "Carabayllo Expreso Noche")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial del recorrido de vuelta.",
        dato: "Desde este punto comienza el retorno hacia España."
    };

}

else if(nombreParadero === "Túpac Amaru" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta de la ruta regular y del expreso mañana."
    };

}

else if(nombreParadero === "Cedros" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta de la ruta regular y del expreso mañana."
    };

}

else if(nombreParadero === "San Carlos" && (ruta === "Carabayllo" || ruta === "Carabayllo Expreso Mañana")){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Se encuentra entre San Felipe y Hospital en el retorno."
    };

}

else if(nombreParadero === "Reniec" && ruta === "Carabayllo"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta de la ruta regular.",
        dato: "Se encuentra entre Belaunde y España."
    };

}

else if(nombreParadero === "Mega 80" && ruta === "Carabayllo"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: ruta,
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero final del recorrido de vuelta de la ruta regular.",
        dato: "Aquí termina el retorno de la ruta Carabayllo regular."
    };
}

// ===== TORRE BLANCA =====

else if(nombreParadero === "Terminal Chimpu Ocllo" && ruta === "Torre Blanca"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Torre Blanca",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial del recorrido de ida de la ruta alimentadora Torre Blanca.",
        dato: "Desde este punto comienza la ida hacia Torre Blanca y aquí termina la vuelta."
    };

}

else if(nombreParadero === "Machuca" && ruta === "Torre Blanca"){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: "Torre Blanca",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Torre Blanca.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "21" && ruta === "Torre Blanca"){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: "Torre Blanca",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Torre Blanca.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Huascarán" && ruta === "Torre Blanca"){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: "Torre Blanca",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Se encuentra entre 21 y Vega."
    };

}

else if(nombreParadero === "Vega" && ruta === "Torre Blanca"){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: "Torre Blanca",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Torre Blanca.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "San Antonio" && ruta === "Torre Blanca"){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: "Torre Blanca",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Torre Blanca.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Pisa" && ruta === "Torre Blanca"){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: "Torre Blanca",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Torre Blanca.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Mercado" && ruta === "Torre Blanca"){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: "Torre Blanca",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero cercano a un mercado de la zona.",
        dato: "Es un punto con movimiento de pasajeros por la actividad comercial."
    };

}

else if(nombreParadero === "El Carmen" && ruta === "Torre Blanca"){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: "Torre Blanca",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Torre Blanca.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Avenida 3" && ruta === "Torre Blanca"){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: "Torre Blanca",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Torre Blanca.",
        dato: "Es el paradero anterior a Torre Blanca en la ida y el siguiente en la vuelta."
    };

}

else if(nombreParadero === "Torre Blanca (Final)" && ruta === "Torre Blanca"){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: "Torre Blanca",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero final del recorrido de ida.",
        dato: "Aquí termina el recorrido de ida antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Torre Blanca (Inicial)" && ruta === "Torre Blanca"){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: "Torre Blanca",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial del recorrido de vuelta.",
        dato: "Desde este punto comienza el retorno hacia Terminal Chimpu Ocllo."
    };

}

else if(nombreParadero === "Progreso" && ruta === "Torre Blanca"){

    info = {
        ubicacion: "Carabayllo",
        tipo: "Paradero alimentador",
        servicios: "Torre Blanca",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta, entre Vega y 21."
    };

}

else if(nombreParadero === "Estación Universidad (Inicial)" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero inicial del recorrido de ida de la ruta alimentadora Trapiche.",
        dato: "Desde este punto comienza el recorrido hacia Peycar."
    };

}

else if(nombreParadero === "Villasol" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero perteneciente a la ruta alimentadora Trapiche.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Yanbal" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero perteneciente a la ruta alimentadora Trapiche.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Plaza Vea" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero cercano al centro comercial Plaza Vea.",
        dato: "Es uno de los puntos con mayor movimiento de pasajeros."
    };

}

else if(nombreParadero === "El Álamo" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero perteneciente a la ruta alimentadora Trapiche.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Botica" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero perteneciente a la ruta alimentadora Trapiche.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "El Pinar" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero perteneciente a la ruta alimentadora Trapiche.",
        dato: "Se encuentra cerca de Alameda El Pinar."
    };

}

else if(nombreParadero === "Kiosko" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero perteneciente a la ruta alimentadora Trapiche.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Los Incas" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero perteneciente a la ruta alimentadora Trapiche.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Alameda El Pinar" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero ubicado en la zona de Alameda El Pinar.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Oficina" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero perteneciente a la ruta alimentadora Trapiche.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "San Felipe" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero perteneciente a la ruta alimentadora Trapiche.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Remanso" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero perteneciente a la ruta alimentadora Trapiche.",
        dato: "Es el paradero anterior a Peycar en la ida y el siguiente en la vuelta."
    };

}

else if(nombreParadero === "Peycar (Final)" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero final del recorrido de ida.",
        dato: "Aquí termina el recorrido de ida antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Peycar (Inicial)" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero inicial del recorrido de vuelta.",
        dato: "Desde este punto comienza el retorno hacia Estación Universidad."
    };

}

else if(nombreParadero === "Segunda de Pro" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta, entre El Álamo y La Amistad."
    };

}

else if(nombreParadero === "La Amistad" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta, entre Segunda de Pro y Plaza Vea."
    };

}

else if(nombreParadero === "Estación Universidad (Final)" && ruta === "Trapiche"){

    info = {
        ubicacion: "Comas",
        tipo: "Paradero alimentador",
        servicios: "Trapiche",
        conexiones: "Estación Universidad",
        descripcion: "Paradero final del recorrido de vuelta.",
        dato: "Aquí termina el retorno de la ruta Trapiche."
    };

}

// ===== COLLIQUE =====

else if(nombreParadero === "La Merced" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Collique.",
        dato: "Desde este punto comienza la ida y aquí termina la vuelta."
    };

}

else if(nombreParadero === "Correo" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Collique.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "España" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Collique.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Colegio Israel" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre España y Santa Rosa."
    };

}

else if(nombreParadero === "Santa Rosa" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre Colegio Israel y Banco de la Nación."
    };

}

else if(nombreParadero === "Banco de la Nación" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Collique.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Belaunde" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Collique.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Mercado Chacra Cerro" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Collique.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "La Pascana" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Collique.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Cáceres (Jamaica)" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Se encuentra después de La Pascana en la ida."
    };

}

else if(nombreParadero === "Miguel Grau (Velasco)" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Collique.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Francisco Bolognesi" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre Miguel Grau (Velasco) y Fe y Alegría."
    };

}

else if(nombreParadero === "Fe y Alegría" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Collique.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Sánchez Cerro" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Collique.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Julio C. Tello" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Collique.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Cerro de Pasco" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, después de Julio C. Tello."
    };

}

else if(nombreParadero === "Ramón Castilla" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Collique.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Andahuaylas" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre Ramón Castilla y Piura."
    };

}

else if(nombreParadero === "Piura" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero perteneciente a la ruta alimentadora Collique.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Francisco de Zela (Final)" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero final del recorrido de ida.",
        dato: "Aquí termina el recorrido de ida antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Francisco de Zela (Inicial)" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero inicial del recorrido de vuelta.",
        dato: "Desde este punto comienza el retorno hacia La Merced."
    };

}

else if(nombreParadero === "Alcides Carrión" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Se encuentra entre Piura y Ramón Castilla en el retorno."
    };

}

else if(nombreParadero === "Arica" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Se encuentra entre Ramón Castilla y Julio C. Tello en el retorno."
    };

}

else if(nombreParadero === "Grifo Año Nuevo" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Se encuentra entre Fe y Alegría y Miguel Grau (Velasco) en el retorno."
    };

}

else if(nombreParadero === "Jamaica" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Se encuentra después de Miguel Grau (Velasco) en el retorno."
    };

}

else if(nombreParadero === "Reniec" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Se encuentra entre Banco de la Nación y Puno en el retorno."
    };

}

else if(nombreParadero === "Puno" && ruta === "Collique"){

    info = {
        ubicacion: "Lima Norte",
        tipo: "Paradero alimentador",
        servicios: "Collique",
        conexiones: "Terminal Naranjal",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Se encuentra entre Reniec y España en el retorno."
    };

}

else if(nombreParadero === "Huaylas" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero inicial del recorrido de ida de la ruta alimentadora Cedros de Villa.",
        dato: "Desde este punto comienza el recorrido hacia Isla Española."
    };

}

else if(nombreParadero === "Alameda Sur" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre Huaylas y Los Pinos."
    };

}

else if(nombreParadero === "Los Pinos" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre Alameda Sur y Plaza Vea."
    };

}

else if(nombreParadero === "Plaza Vea" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero cercano al centro comercial Plaza Vea.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Las Camelias" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre Plaza Vea y Cedros de Villa."
    };

}

else if(nombreParadero === "Cedros de Villa" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero que da nombre a la ruta alimentadora Cedros de Villa.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Ballestas" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Es el paradero anterior a Isla Española (Final) en la ida."
    };

}

else if(nombreParadero === "Isla Española (Final)" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero final del recorrido de ida.",
        dato: "Aquí termina el recorrido de ida antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Isla Española (Inicial)" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero inicial del recorrido de vuelta.",
        dato: "Desde este punto comienza el retorno hacia Santa Anita."
    };

}

else if(nombreParadero === "Aruba" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta, después de Isla Española (Inicial)."
    };

}

else if(nombreParadero === "Las Tortugas" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta, entre Aruba y Cedros de Villa."
    };

}

else if(nombreParadero === "San Lorenzo" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta, entre Cedros de Villa y Plaza Vea."
    };

}

else if(nombreParadero === "Machupicchu" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta, entre Plaza Vea y 10 de Noviembre."
    };

}

else if(nombreParadero === "10 de Noviembre" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta, entre Machupicchu y Santa Anita."
    };

}

else if(nombreParadero === "Santa Anita" && ruta === "Cedros de Villa"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Cedros de Villa",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero final del recorrido de vuelta.",
        dato: "Aquí termina el retorno de la ruta Cedros de Villa."
    };

}

else if(nombreParadero === "Óvalo La Curva" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero inicial del recorrido de ida de la ruta alimentadora América.",
        dato: "Desde este punto comienza la ida y aquí termina la vuelta."
    };

}

else if(nombreParadero === "Guardia Peruana" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora América.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "El Sol" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre Guardia Peruana y Paradero C."
    };

}

else if(nombreParadero === "Paradero C" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre El Sol y Los Naranjos."
    };

}

else if(nombreParadero === "Los Naranjos" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora América.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Calle 3" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre Los Naranjos y Velasco Alvarado."
    };

}

else if(nombreParadero === "Velasco Alvarado" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora América.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Santa Rosa" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre Velasco Alvarado y Mártir Olaya."
    };

}

else if(nombreParadero === "Mártir Olaya" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre Santa Rosa y Mártires."
    };

}

else if(nombreParadero === "Mártires" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora América.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Unión" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora América.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Panamericana" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero final del recorrido de ida, sobre la Panamericana Sur.",
        dato: "Aquí termina el recorrido de ida antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Paradero E" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero inicial del recorrido de vuelta.",
        dato: "Desde este punto comienza el retorno hacia Terminal Matellini."
    };

}

else if(nombreParadero === "Micaela Bastidas" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta, entre Mártires y Unanue."
    };

}

else if(nombreParadero === "Unanue" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta, entre Micaela Bastidas y Velasco Alvarado."
    };

}

else if(nombreParadero === "Vista Alegre" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta, entre Velasco Alvarado y Los Naranjos."
    };

}

else if(nombreParadero === "Paradero B" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta, entre Los Naranjos y Los Meteoros."
    };

}

else if(nombreParadero === "Los Meteoros" && ruta === "América"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "América",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta, entre Paradero B y Guardia Peruana."
    };

}

else if(nombreParadero === "Calango" && ruta === "Los Próceres"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Los Próceres",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero inicial del recorrido de ida de la ruta alimentadora Los Próceres.",
        dato: "Desde este punto comienza la ida y es de los últimos paraderos de la vuelta."
    };

}

else if(nombreParadero === "Guardia Peruana" && ruta === "Los Próceres"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Los Próceres",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora Los Próceres.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "El Sol" && ruta === "Los Próceres"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Los Próceres",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre Guardia Peruana y Alipio Ponce."
    };

}

else if(nombreParadero === "Alipio Ponce" && ruta === "Los Próceres"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Los Próceres",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre El Sol y Los Incas."
    };

}

else if(nombreParadero === "Los Incas" && ruta === "Los Próceres"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Los Próceres",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora Los Próceres.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Vista Alegre" && ruta === "Los Próceres"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Los Próceres",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre Los Incas y Villa Alegre."
    };

}

else if(nombreParadero === "Villa Alegre" && ruta === "Los Próceres"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Los Próceres",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre Vista Alegre y Alcides Vigo."
    };

}

else if(nombreParadero === "Alcides Vigo" && ruta === "Los Próceres"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Los Próceres",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora Los Próceres.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Las Crucetas" && ruta === "Los Próceres"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Los Próceres",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora Los Próceres.",
        dato: "Es el paradero anterior a D. Tristan y Moscoso en la ida y el inicial de la vuelta."
    };

}

else if(nombreParadero === "D. Tristan y Moscoso" && ruta === "Los Próceres"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Los Próceres",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero final del recorrido de ida.",
        dato: "Aquí termina el recorrido de ida antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Parque Villa Alegre" && ruta === "Los Próceres"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Los Próceres",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero cercano al parque de la zona de Villa Alegre.",
        dato: "Solo se atiende en la vuelta, entre Alcides Vigo y Los Incas."
    };

}

else if(nombreParadero === "Centro Instrucción PNP" && ruta === "Los Próceres"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Los Próceres",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero cercano a un centro de instrucción de la Policía Nacional.",
        dato: "Solo se atiende en la vuelta, entre Los Incas y Los Meteoros."
    };

}

else if(nombreParadero === "Los Meteoros" && ruta === "Los Próceres"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Los Próceres",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de vuelta.",
        dato: "Solo se atiende en la vuelta, entre Centro Instrucción PNP y Guardia Peruana."
    };

}

else if(nombreParadero === "Óvalo la Curva" && ruta === "Los Próceres"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Los Próceres",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero final del recorrido de vuelta.",
        dato: "Aquí termina el retorno de la ruta Los Próceres."
    };

}

else if(nombreParadero === "INR" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero inicial del recorrido de ida de la ruta alimentadora Villa El Salvador.",
        dato: "Desde este punto comienza el recorrido hacia Parque Zonal Huáscar."
    };

}

else if(nombreParadero === "Confraternidad" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre INR y Pantanos de Villa."
    };

}

else if(nombreParadero === "Pantanos de Villa" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero ubicado cerca de la zona de Pantanos de Villa.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Santa Rosa" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Villa El Salvador",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora Villa El Salvador.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Panamericana Sur" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Villa El Salvador",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero ubicado sobre la Panamericana Sur.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Almacenes" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Villa El Salvador",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora Villa El Salvador.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Villa Panamericana" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Villa El Salvador",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora Villa El Salvador.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Pastor Sevilla" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Villa El Salvador",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora Villa El Salvador.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Micaela Bastidas" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Villa El Salvador",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora Villa El Salvador.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Álamos" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Villa El Salvador",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora Villa El Salvador.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "Velasco Alvarado" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Villa El Salvador",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora Villa El Salvador.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "César Vallejo" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Villa El Salvador",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora Villa El Salvador.",
        dato: "Forma parte de los recorridos de ida y vuelta."
    };

}

else if(nombreParadero === "José Carlos Mariátegui" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Villa El Salvador",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero perteneciente a la ruta alimentadora Villa El Salvador.",
        dato: "Forma parte de la ida y es el paradero inicial de la vuelta."
    };

}

else if(nombreParadero === "200 Millas" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Villa El Salvador",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero correspondiente al recorrido de ida.",
        dato: "Solo se atiende en la ida, entre José Carlos Mariátegui y Parque Zonal Huáscar."
    };

}

else if(nombreParadero === "Parque Zonal Huáscar" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Villa El Salvador",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero final del recorrido de ida, cercano al Parque Zonal Huáscar.",
        dato: "Aquí termina el recorrido de ida antes de iniciar el retorno."
    };

}

else if(nombreParadero === "Lavalle" && ruta === "Villa El Salvador"){

    info = {
        ubicacion: "Chorrillos",
        tipo: "Paradero alimentador",
        servicios: "Villa El Salvador",
        conexiones: "Terminal Matellini",
        descripcion: "Paradero final del recorrido de vuelta.",
        dato: "Aquí termina el retorno de la ruta Villa El Salvador."
    };

}

    // MILAGROS DE JESÚS
else if(ruta === "Milagros de Jesús"){

    info = informacionMilagros[nombreParadero];

}


    // DEMÁS PARADEROS
    else {

        info = informacionParaderos[nombreParadero];

    }

    if(!info){ 
        return; 
    } 
 
    const panel = document.getElementById("info-paradero"); 
 
    panel.innerHTML = ` 
 
        <h3>📍 ${nombreParadero}</h3> 
 
        <p><strong>📌 Ubicación:</strong> ${info.ubicacion}</p> 
 
        <p><strong>🏢 Tipo:</strong> ${info.tipo}</p> 
 
        <p><strong>🚌 Servicios:</strong> ${info.servicios}</p> 
 
        <p><strong>🔄 Conexiones:</strong> ${info.conexiones}</p> 
 
        <p><strong>📝 Descripción:</strong> ${info.descripcion}</p> 
 
        <p><strong>💡 Dato interesante:</strong> ${info.dato}</p> 
 
    `; 
}


buscadorRutas.addEventListener("input", function() { 
 
    const busqueda = buscadorRutas.value.toLowerCase().trim(); 
 
    resultadosRutas.innerHTML = ""; 
    infoRuta.innerHTML = "";

      const recorridoRuta =
        document.getElementById("recorrido-ruta").innerHTML = "";

    
 
    if (busqueda === "") { 
        return; 
    } 
 
    const resultados = Object.keys(rutasAlimentadoras).filter(function(ruta) { 
        return ruta === busqueda; 
    }); 
 
    if (resultados.length === 0) { 
       document.getElementById("recorrido-ruta").innerHTML = "";
        resultadosRutas.innerHTML = ` 
            <div class="sin-resultados"> 
                <p>❌ No encontramos una ruta relacionada con "${busqueda}".</p> 
            </div> 
        `; 
        return; 
    } 
 
    resultados.forEach(function(ruta) { 
 
        const rutas = rutasAlimentadoras[ruta]; 
 
        let listaRutas = ""; 
 
        rutas.forEach(function(nombreRuta) { 

            listaRutas += ` 
                <button class="boton-ruta" data-ruta="${nombreRuta}"> 
                    🚌 ${nombreRuta} 
                </button> 
            `; 

        }); 
 
        resultadosRutas.innerHTML += ` 
            <div class="tarjeta-ruta"> 
 
                <h3>🚉 ${ruta}</h3> 
 
                <p>Rutas alimentadoras relacionadas:</p> 
 
                <div class="rutas-lista"> 
                    ${listaRutas} 
                </div> 
 
            </div> 
        `; 

    });


    // 👇 AQUÍ buscamos los botones recién creados

    const botonesRuta = document.querySelectorAll(".boton-ruta");


    botonesRuta.forEach(function(boton) { 

        boton.addEventListener("click", function() { 
          document.getElementById("recorrido-ruta").innerHTML = "";

            const nombreRuta = boton.dataset.ruta; 

            const datos = datosAlimentadores[nombreRuta]; 

            if (!datos) { 
                return; 
            } 

            const infoRuta = document.getElementById("info-ruta");

 infoRuta.innerHTML = `
            <div class="info-alimentador">

                <h3>🚌 ${nombreRuta}</h3>

                <p>${datos.descripcion}</p>

                <p>
                    <strong>📍 Zona:</strong>
                    ${datos.zona}
                </p>

                <p>
                    <strong>🚉 Conexión:</strong>
                    ${datos.conexion}
                </p>

                <button 
                class="boton-recorrido"
                data-ruta="${nombreRuta}">
                    🗺️ Ver recorrido
                </button>

            </div>
        `;

        });
    });
});

document.addEventListener("click", function(event){

    if(event.target.classList.contains("boton-recorrido")){

        const ruta = event.target.dataset.ruta;

        const datosRecorrido = recorridos[ruta];

        if(!datosRecorrido){
            return;
        }

        // Las tres versiones de Carabayllo
        const variantesCarabayllo = [
            { nombre: "Carabayllo", etiqueta: "Regular" },
            { nombre: "Carabayllo Expreso Mañana", etiqueta: "Expreso Mañana" },
            { nombre: "Carabayllo Expreso Noche", etiqueta: "Expreso Noche" }
        ];

        const esCarabayllo = variantesCarabayllo.some(function(v){
            return v.nombre === ruta;
        });

        const origen = datosAlimentadores[ruta].conexion;

        let listaIda;
        let listaVuelta;

        if(ruta === "Belaunde" || 
          ruta === "Tahuantinsuyo" ||
          ruta === "Milagros de Jesús" ||
          ruta === "Puno" ||
          ruta === "Antúnez de Mayolo" ||
          ruta === "La Ensenada" ||
          ruta === "Los Alisos" ||
          ruta === "Los Olivos" ||
          ruta === "Payet" ||
          ruta === "Naranjal" ||
          ruta === "Izaguirre" ||
          ruta === "San Juan de Dios" ||
          ruta === "Universitaria" ||
          ruta === "Carabayllo" ||
          ruta === "Carabayllo Expreso Mañana" ||
          ruta === "Carabayllo Expreso Noche" ||
          ruta === "Torre Blanca" ||
          ruta === "Trapiche" ||
          ruta === "Collique" ||
          ruta === "Cedros de Villa" ||
          ruta === "América" ||
          ruta === "Los Próceres" ||
          ruta === "Villa El Salvador"
        ){
            listaIda = datosRecorrido.ida;
            listaVuelta = datosRecorrido.vuelta;
        }
        else {
            listaIda = datosRecorrido;
            listaVuelta = [...datosRecorrido].reverse();
        }

        const infoRuta = document.getElementById("recorrido-ruta");

        infoRuta.innerHTML = `

            <div class="contenedor-recorrido ${esCarabayllo ? "con-variantes" : ""}">

                <!-- RUTA DE IDA -->
                <div class="ruta-ida">

                    <h3>🚍 ${origen} → ${ruta}</h3>

                    <div class="recorrido-linea">

                        <div class="bus-ruta">🚌</div>

                        ${listaIda.map(function(paradero){
                            return `
                                <div class="paradero-ruta">
                                    <span class="punto-paradero"></span>
                                    <button
                                        class="paradero-btn"
                                        data-paradero="${paradero}"
                                        data-ruta="${ruta}">
                                        ${paradero}
                                    </button>
                                </div>
                            `;
                        }).join("")}

                    </div>

                </div>

                <!-- RUTA DE VUELTA -->
                <div class="ruta-vuelta">

                    <h3>🚍 ${ruta} → ${origen}</h3>

                    <div class="recorrido-linea">

                        <div class="bus-ruta">🚌</div>

                        ${listaVuelta.map(function(paradero){
                            return `
                                <div class="paradero-ruta">
                                    <span class="punto-paradero"></span>
                                    <button
                                        class="paradero-btn"
                                        data-paradero="${paradero}"
                                        data-ruta="${ruta}">
                                        ${paradero}
                                    </button>
                                </div>
                            `;
                        }).join("")}

                    </div>

                </div>

                <!-- INFORMACIÓN -->
                <div id="info-paradero">

                    <h3>📍 Información del paradero</h3>

                    <p>Selecciona un paradero para ver más detalles.</p>

                </div>

                <!-- BOTONES AL COSTADO DE LA INFORMACIÓN -->
                ${esCarabayllo ? `
                    <div class="variantes-ruta">

                        <h3>🚦 Servicio</h3>

                        ${variantesCarabayllo.map(function(v){
                            return `
                                <button
                                    class="boton-recorrido boton-variante ${v.nombre === ruta ? "variante-activa" : ""}"
                                    data-ruta="${v.nombre}">
                                    ${v.etiqueta}
                                </button>
                            `;
                        }).join("")}

                    </div>
                ` : ""}

            </div>

        `;

    }

});

document.addEventListener("click", function(event) {

    if (event.target.classList.contains("paradero-btn")) {

        const paraderoDestino = event.target.closest(".paradero-ruta");
      const nombreParadero = 
    event.target.dataset.paradero;

const ruta = 
    event.target.dataset.ruta;

mostrarInformacion(nombreParadero, ruta);
        const linea = paraderoDestino.closest(".recorrido-linea");

        const bus = linea.querySelector(".bus-ruta");

        const paraderos = Array.from(
            linea.querySelectorAll(".paradero-ruta")
        );

        const posicionDestino = paraderos.indexOf(paraderoDestino);


        // Cancelar recorrido anterior

        if (linea.animacionBus) {
            clearInterval(linea.animacionBus);
        }


        // Primera vez que se usa el bus

        if (linea.posicionBus === undefined) {
            linea.posicionBus = 0;
        }


        let posicionActual = linea.posicionBus;


        function moverBus(indice) {

            const paradero = paraderos[indice];

            const posicion =
                paradero.offsetTop +
                (paradero.offsetHeight / 2) -
                (bus.offsetHeight / 2);

            bus.style.top = posicion + "px";

            


            // Resaltar estación actual

paraderos.forEach(function(item) {
    item.classList.remove("activo");
});

paradero.classList.add("activo");

document.activeElement.blur();

        }


        // Mostrar posición actual

        moverBus(posicionActual);


        // Si ya está en el destino

        if (posicionActual === posicionDestino) {
            return;
        }


        // Movimiento del bus

        linea.animacionBus = setInterval(function() {

            if (posicionActual < posicionDestino) {

                posicionActual++;

            } else if (posicionActual > posicionDestino) {

                posicionActual--;

            }

            moverBus(posicionActual);

            linea.posicionBus = posicionActual;


            if (posicionActual === posicionDestino) {

                clearInterval(linea.animacionBus);

                linea.animacionBus = null;

            }

        }, 500);

    }

});

const SIN = { norte: [], sur: [] };

const ambos = function(h){
    return { norte: [h], sur: [h] };
};

const horarios = [

    { nombre: "Regular A", tipo: "regular", sigla: "A", color: "#1ea7e1",
      semana:  { norte: ["05:35 - 23:00"], sur: ["05:00 - 23:00"] },
      sabado:  { norte: ["05:35 - 23:00"], sur: ["05:00 - 23:00"] },
      domingo: { norte: ["05:35 - 22:00"], sur: ["05:00 - 23:00"] } },

    { nombre: "Regular B", tipo: "regular", sigla: "B", color: "#f7941d",
      semana: ambos("10:00 - 23:00"), sabado: ambos("05:00 - 23:00"), domingo: ambos("05:00 - 22:00") },

    { nombre: "Regular C", tipo: "regular", sigla: "C", color: "#00a77e",
      semana: ambos("05:00 - 23:00"), sabado: ambos("05:00 - 23:00"), domingo: ambos("05:00 - 22:00") },

    { nombre: "Regular D", tipo: "regular", sigla: "D", color: "#7b2d8e",
      semana: ambos("05:00 - 10:00"), sabado: SIN, domingo: SIN },

    { nombre: "Expreso 1", tipo: "expreso", sigla: "1", color: "#9aa5c4",
      semana:  { norte: ["05:30 - 21:00"], sur: ["05:00 - 21:00"] },
      sabado:  { norte: ["06:30 - 21:00"], sur: ["06:00 - 21:00"] },
      domingo: { norte: ["06:30 - 21:00"], sur: ["06:00 - 21:00"] } },

    { nombre: "Expreso 2", tipo: "expreso", sigla: "2", color: "#2e3a8c",
      semana: { norte: ["17:00 - 21:00"], sur: ["05:00 - 09:00"] },
      sabado: { norte: ["12:30 - 15:30"], sur: ["06:00 - 09:00"] },
      domingo: SIN },

    { nombre: "Expreso 3", tipo: "expreso", sigla: "3", color: "#b8860b",
      semana: { norte: ["17:00 - 21:00"], sur: [] },
      sabado: { norte: ["12:30 - 15:30"], sur: [] },
      domingo: SIN },

    { nombre: "Expreso 5", tipo: "expreso", sigla: "5", color: "#c2185b",
      semana: ambos("09:00 - 17:00"), sabado: ambos("05:15 - 20:20"), domingo: SIN },

    { nombre: "Expreso 6", tipo: "expreso", sigla: "6", color: "#444444",
      semana: { norte: [], sur: ["05:30 - 10:00"] }, sabado: SIN, domingo: SIN },

    { nombre: "Expreso 7", tipo: "expreso", sigla: "7", color: "#8b0000",
      semana: { norte: [], sur: ["05:30 - 09:00"] }, sabado: SIN, domingo: SIN },

    { nombre: "Expreso 8", tipo: "expreso", sigla: "8", color: "#e91e8c",
      semana: { norte: ["17:00 - 21:00"], sur: ["17:00 - 20:20"] }, sabado: SIN, domingo: SIN },

    { nombre: "Expreso 9", tipo: "expreso", sigla: "9", color: "#7aa0a8",
      semana: ambos("05:30 - 09:00"), sabado: SIN, domingo: SIN },

    { nombre: "Expreso 10", tipo: "expreso", sigla: "10", color: "#1bbf94",
      semana: { norte: [], sur: ["06:00 - 09:00"] }, sabado: SIN, domingo: SIN },

    { nombre: "Expreso 11", tipo: "expreso", sigla: "11", color: "#6a1b9a",
      semana: { norte: ["05:45 - 10:45"], sur: ["05:00 - 10:00"] }, sabado: SIN, domingo: SIN },

    { nombre: "Expreso 12", tipo: "expreso", sigla: "12", color: "#5d4037",
      semana: { norte: [], sur: ["05:45 - 10:00"] }, sabado: SIN, domingo: SIN },

    { nombre: "Expreso 13", tipo: "expreso", sigla: "13", color: "#12284c",
      semana: { norte: ["05:50 - 10:00"], sur: ["05:00 - 10:00"] }, sabado: SIN, domingo: SIN },

    { nombre: "Súper Expreso", tipo: "especial", sigla: "SX", color: "#c6e03a", txt: "#222",
      semana: { norte: ["17:00 - 21:00"], sur: ["05:30 - 09:00"] },
      sabado: { norte: [], sur: ["06:00 - 09:00"] },
      domingo: SIN },

    { nombre: "Súper Expreso Norte", tipo: "especial", sigla: "SXN", color: "#f9d71c", txt: "#222",
      semana: { norte: ["05:00 - 10:00", "16:30 - 20:30"],
                sur: ["05:30 - 10:00", "17:00 - 21:00", "06:00 - 08:30 (22 de Agosto)"] },
      sabado: SIN, domingo: SIN },

    { nombre: "Lechucero", tipo: "especial", sigla: "L", color: "#666666",
      nota: "Solo viernes y sábados",
      diasActivos: ["viernes", "sabado"],
      semana: ambos("23:30 - 04:00"), sabado: ambos("23:30 - 04:00"), domingo: SIN }

];

const dias = [
    { id: "lunes",     nombre: "Lunes",     grupo: "semana"  },
    { id: "martes",    nombre: "Martes",    grupo: "semana"  },
    { id: "miercoles", nombre: "Miércoles", grupo: "semana"  },
    { id: "jueves",    nombre: "Jueves",    grupo: "semana"  },
    { id: "viernes",   nombre: "Viernes",   grupo: "semana"  },
    { id: "sabado",    nombre: "Sábado",    grupo: "sabado"  },
    { id: "domingo",   nombre: "Domingo",   grupo: "domingo" }
];

const filtros = [
    { id: "todos",    nombre: "Todos" },
    { id: "regular",  nombre: "Regulares" },
    { id: "expreso",  nombre: "Expresos" },
    { id: "especial", nombre: "Especiales" }
];

const nombresDiaJS = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

let diaHoy = nombresDiaJS[new Date().getDay()];
let diaActual = diaHoy;
let filtroActual = "todos";

const selectorDias = document.getElementById("selector-dias");
const filtrosHorarios = document.getElementById("filtros-horarios");
const tituloDia = document.getElementById("titulo-dia");
const listaHorarios = document.getElementById("lista-horarios");


function obtenerHorario(servicio, dia){

    if(servicio.diasActivos && !servicio.diasActivos.includes(dia.id)){
        return SIN;
    }

    return servicio[dia.grupo];
}

function dibujarFranjas(lista){

    if(lista.length === 0){
        return `<span class="sin-servicio">Sin servicio</span>`;
    }

    return lista.map(function(franja){
        return `<span class="franja">${franja}</span>`;
    }).join("");
}

function dibujarSelectores(){

    selectorDias.innerHTML = dias.map(function(dia){
        return `
            <button class="dia-btn ${dia.id === diaActual ? "dia-activo" : ""}" data-dia="${dia.id}">
                ${dia.nombre}
                ${dia.id === diaHoy ? `<small class="tag-hoy">hoy</small>` : ""}
            </button>
        `;
    }).join("");

    filtrosHorarios.innerHTML = filtros.map(function(filtro){
        return `
            <button class="filtro-btn ${filtro.id === filtroActual ? "filtro-activo" : ""}" data-filtro="${filtro.id}">
                ${filtro.nombre}
            </button>
        `;
    }).join("");
}

function dibujarHorarios(){

    const dia = dias.find(function(d){
        return d.id === diaActual;
    });

    const visibles = horarios.filter(function(servicio){
        return filtroActual === "todos" || servicio.tipo === filtroActual;
    });

    let operando = 0;

    const tarjetas = visibles.map(function(servicio){

        const h = obtenerHorario(servicio, dia);
        const sinTodo = h.norte.length === 0 && h.sur.length === 0;

        if(!sinTodo){
            operando++;
        }

        return `
            <div class="horario-card ${sinTodo ? "sin-todo" : ""}">

                <div class="horario-cabecera">

                    <span class="horario-badge"
                          style="background:${servicio.color}; color:${servicio.txt || "white"}">
                        ${servicio.sigla}
                    </span>

                    <div>
                        <h3>${servicio.nombre}</h3>
                        ${servicio.nota ? `<small class="horario-nota">${servicio.nota}</small>` : ""}
                    </div>

                </div>

                <div class="horario-sentidos">

                    <div class="sentido sentido-norte">
                        <span class="sentido-titulo">⬆️ Rumbo Norte</span>
                        ${dibujarFranjas(h.norte)}
                    </div>

                    <div class="sentido sentido-sur">
                        <span class="sentido-titulo">⬇️ Rumbo Sur</span>
                        ${dibujarFranjas(h.sur)}
                    </div>

                </div>

            </div>
        `;

    }).join("");

    tituloDia.innerHTML =
        `📅 ${dia.nombre} · ${operando} de ${visibles.length} servicios operan`;

    listaHorarios.innerHTML = tarjetas;
}

selectorDias.addEventListener("click", function(event){

    const boton = event.target.closest(".dia-btn");

    if(!boton){
        return;
    }

    diaActual = boton.dataset.dia;

    dibujarSelectores();
    dibujarHorarios();
});

filtrosHorarios.addEventListener("click", function(event){

    const boton = event.target.closest(".filtro-btn");

    if(!boton){
        return;
    }

    filtroActual = boton.dataset.filtro;

    dibujarSelectores();
    dibujarHorarios();
});

dibujarSelectores();
dibujarHorarios();

setInterval(function(){

    const nuevoDia = nombresDiaJS[new Date().getDay()];

    if(nuevoDia !== diaHoy){

        const estabaEnHoy = (diaActual === diaHoy);

        diaHoy = nuevoDia;

        if(estabaEnHoy){
            diaActual = nuevoDia;
        }

        dibujarSelectores();
        dibujarHorarios();
    }

}, 60000);

// ===== HORARIOS DE ALIMENTADORES (DENTRO DE LA PAGINA HORARIOS) =====
// Va en script.js DESPUES del bloque de horarios de expresos
// y ANTES de:  console.log("2.script termino")
// Usa de ese bloque: dias, diaActual, selectorDias, dibujarFranjas

// ---------- DATOS ----------

const tramoH = function(titulo, ida, vuelta, etiquetas){

    etiquetas = etiquetas || {};

    return {
        titulo: titulo,
        ida: ida,
        vuelta: vuelta,
        etiquetaIda: etiquetas.ida || "",
        etiquetaVuelta: etiquetas.vuelta || ""
    };
};

const armarHorario = function(origen, destino, tramos, opciones){

    opciones = opciones || {};

    return {
        ida: origen + " → Paradero " + destino,
        vuelta: opciones.vuelta || ("Paradero " + destino + " → " + origen),
        tramos: tramos,
        nota: opciones.nota || ""
    };
};

// Horarios que se repiten en muchas rutas
const H_LS  = tramoH("Lunes a sábado", ["05:30 – 12:00"], ["05:00 – 23:30"]);
const H_DOM = tramoH("Domingo",        ["05:30 – 23:00"], ["05:00 – 22:30"]);
const H_DOM_CORTO = tramoH("Domingo",  ["05:30 – 11:00"], ["05:00 – 22:30"]);
const H_DOM_VUELTA_CORTA = tramoH("Domingo", ["05:30 – 23:00"], ["05:00 – 10:30"]);

const H_LV_TURNOS = tramoH("Lunes a viernes",
    ["09:00 – 17:00", "21:00 – 12:00"],
    ["09:00 – 17:00", "09:00 – 23:30"]);

const H_SAB = tramoH("Sábado", ["05:30 – 12:00"], ["05:00 – 23:30"]);


const horariosAlimentadores = {

    // ----- MATELLINI -----

    "América": armarHorario("Terminal Matellini", "Panamericana",
        [H_LS, H_DOM],
        { vuelta: "Paradero E → Terminal Matellini" }),

    "Cedros de Villa": armarHorario("Terminal Matellini", "Isla Española",
        [H_LS, H_DOM]),

    "Los Próceres": armarHorario("Terminal Matellini", "D. Tristan y Moscoso",
        [tramoH("Lunes a domingo", ["05:00 – 12:00"], ["05:00 – 12:00"])]),

    "Villa El Salvador": armarHorario("Terminal Matellini", "Parque Zonal Huáscar",
        [H_LS, H_DOM_VUELTA_CORTA]),

    // ----- NARANJAL -----

    "Naranjal": armarHorario("Terminal Naranjal", "Paramonga",
        [
            tramoH("Lunes a sábado", ["05:00 – 12:00"], ["05:00 – 12:00"]),
            tramoH("Domingo",        ["05:00 – 23:00"], ["05:00 – 23:00"])
        ]),

    "Antúnez de Mayolo": armarHorario("Terminal Naranjal", "Nísperos",
        [H_LS, H_DOM]),

    "Belaunde": armarHorario("Terminal Naranjal", "3 de Octubre",
        [H_LV_TURNOS, H_SAB, H_DOM]),

    "Bertello": armarHorario("Terminal Naranjal", "Los Pinos",
        [H_LS, H_DOM_CORTO]),

    "Izaguirre": armarHorario("Terminal Naranjal", "Santa Rosa",
        [H_LS, H_DOM_CORTO]),

    "La Ensenada": armarHorario("Terminal Naranjal", "Calle 5",
        [tramoH("Lunes a sábado",
            ["05:45 – 08:15", "17:00 – 21:00"],
            ["05:00 – 09:00", "18:00 – 21:30"])],
        { nota: "Funciona de lunes a sábado." }),

    "Los Alisos": armarHorario("Terminal Naranjal", "Avenida C",
        [H_LV_TURNOS, H_SAB, H_DOM]),

    "Los Olivos": armarHorario("Terminal Naranjal", "Calle 2",
        [H_LS, H_DOM]),

    "Milagros de Jesús": armarHorario("Terminal Naranjal", "San Pedro",
        [
            tramoH("Lunes a viernes",
                ["09:00 – 17:00", "21:00 – 12:00"],
                ["09:00 – 17:00", "21:00 – 23:30"]),
            tramoH("Sábado",  ["05:45 – 12:00"], ["05:00 – 23:30"]),
            tramoH("Domingo", ["05:45 – 23:00"], ["05:00 – 22:30"])
        ]),

    "Payet": armarHorario("Terminal Naranjal", "4 de Noviembre",
        [H_LS, H_DOM]),

    "Puente Piedra": armarHorario("Terminal Naranjal", "Tottus",
        [
            tramoH("Lunes a sábado", ["06:00 – 12:00"], ["05:45 – 23:00"]),
            tramoH("Domingo",        ["05:00 – 11:30"], ["05:00 – 22:30"])
        ]),

    "Puno": armarHorario("Terminal Naranjal", "Vallejo",
        [
            tramoH("Lunes a viernes",
                ["09:00 – 17:00", "21:00 – 12:00"],
                ["09:00 – 17:00", "21:00 – 23:30"]),
            H_SAB,
            H_DOM
        ]),

    "Tahuantinsuyo": armarHorario("Terminal Naranjal", "Mascaypacha",
        [H_LS, H_DOM]),

    // ----- LOS INCAS / UNIVERSIDAD -----

    "Collique": armarHorario("Estación Los Incas", "Río Seco",
        [H_LS, H_DOM]),

    "Trapiche": armarHorario("Estación Universidad", "El Álamo",
        [
            tramoH("Lunes a viernes · hora punta",
                ["06:00 – 08:30", "17:00 – 00:00"],
                ["05:00 – 09:00", "17:45 – 23:30"],
                {
                    ida: "Estación Universidad → Paradero Peycar",
                    vuelta: "Paradero Peycar → Estación Universidad"
                }),
            tramoH("Lunes a sábado · hora valle",
                ["06:00 – 00:00"],
                ["05:00 – 23:30"]),
            tramoH("Domingo",
                ["05:45 – 23:00"],
                ["05:00 – 22:30"])
        ]),

    // ----- CHIMPU OCLLO -----

    "San Juan de Dios": armarHorario("Terminal Chimpu Ocllo", "Polos",
        [H_LS, H_DOM_VUELTA_CORTA]),

    "Universitaria": armarHorario("Terminal Chimpu Ocllo", "Periurbana",
        [H_LS, H_DOM_VUELTA_CORTA]),

    "Carabayllo": armarHorario("Terminal Chimpu Ocllo", "Tokio",
        [
            tramoH("Lunes a sábado", ["05:30 – 00:00"], ["05:00 – 23:30"]),
            tramoH("Domingo",        ["05:30 – 23:00"], ["05:00 – 22:30"])
        ]),

    "Torre Blanca": armarHorario("Terminal Chimpu Ocllo", "Torre Blanca",
        [
            tramoH("Lunes a sábado", ["05:45 – 00:00"], ["05:00 – 23:30"]),
            tramoH("Domingo",        ["05:45 – 23:00"], ["05:00 – 22:30"])
        ])

};


// ---------- LOGICA ----------

const gruposAlim = [
    { id: "todos",      nombre: "Todos" },
    { id: "matellini",  nombre: "Matellini",               color: "#e67e22" },
    { id: "naranjal",   nombre: "Naranjal",                color: "#1ea7e1" },
    { id: "chimpu",     nombre: "Chimpu Ocllo",            color: "#D32F2F" },
    { id: "estaciones", nombre: "Los Incas / Universidad", color: "#00a77e" }
];

let filtroAlim = "todos";

const tabsHorarios  = document.getElementById("tabs-horarios");
const panelExpresos = document.getElementById("panel-expresos");
const panelAlim     = document.getElementById("panel-alimentadores");
const filtrosAlim   = document.getElementById("filtros-alim");
const tituloDiaAlim = document.getElementById("titulo-dia-alim");
const listaAlim     = document.getElementById("lista-alim");


// A que terminal pertenece cada alimentador (se deduce del origen)
function grupoDeAlim(h){

    if(h.ida.includes("Matellini")){
        return "matellini";
    }

    if(h.ida.includes("Naranjal")){
        return "naranjal";
    }

    if(h.ida.includes("Chimpu")){
        return "chimpu";
    }

    return "estaciones";
}


// A que dias aplica un tramo, segun su titulo
function diasDeTramoHA(titulo){

    if(titulo.includes("Lunes a domingo")){
        return ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
    }

    if(titulo.includes("Lunes a sábado")){
        return ["lunes","martes","miercoles","jueves","viernes","sabado"];
    }

    if(titulo.includes("Lunes a viernes")){
        return ["lunes","martes","miercoles","jueves","viernes"];
    }

    if(titulo.includes("Sábado")){
        return ["sabado"];
    }

    if(titulo.includes("Domingo")){
        return ["domingo"];
    }

    return [];
}


function dibujarFiltrosAlim(){

    filtrosAlim.innerHTML = gruposAlim.map(function(g){
        return `
            <button class="filtro-btn ${g.id === filtroAlim ? "filtro-activo" : ""}" data-grupo="${g.id}">
                ${g.nombre}
            </button>
        `;
    }).join("");
}


function dibujarHorariosAlim(){

    const dia = dias.find(function(d){
        return d.id === diaActual;
    });

    const nombres = Object.keys(horariosAlimentadores).filter(function(nombre){
        return filtroAlim === "todos" ||
               grupoDeAlim(horariosAlimentadores[nombre]) === filtroAlim;
    });

    let operando = 0;

    const tarjetasAlim = nombres.map(function(nombre){

        const h = horariosAlimentadores[nombre];

        const g = gruposAlim.find(function(x){
            return x.id === grupoDeAlim(h);
        });

        const tramos = h.tramos.filter(function(tr){
            return diasDeTramoHA(tr.titulo).includes(diaActual);
        });

        if(tramos.length > 0){
            operando++;
        }

        const cuerpo = tramos.length === 0

            ? `<span class="sin-servicio">Sin servicio este día</span>`

            : tramos.map(function(tr){

                const extra = tr.titulo.includes("·")
                    ? tr.titulo.split("·")[1].trim()
                    : "";

                return `
                    ${extra ? `<small class="al-extra">🕒 ${extra}</small>` : ""}

                    <div class="horario-sentidos al-sentidos">

                        <div class="sentido sentido-norte">
                            <span class="sentido-titulo">⬆️ ${tr.etiquetaIda || h.ida}</span>
                            ${dibujarFranjas(tr.ida)}
                        </div>

                        <div class="sentido sentido-sur">
                            <span class="sentido-titulo">⬇️ ${tr.etiquetaVuelta || h.vuelta}</span>
                            ${dibujarFranjas(tr.vuelta)}
                        </div>

                    </div>
                `;

            }).join("");

        return `
            <div class="horario-card ${tramos.length === 0 ? "sin-todo" : ""}">

                <div class="horario-cabecera">

                    <span class="horario-badge" style="background:${g.color}; color:white">🚌</span>

                    <div>
                        <h3>${nombre}</h3>
                        <small class="al-grupo">${g.nombre}</small>
                        ${h.nota ? `<small class="horario-nota"> · ${h.nota}</small>` : ""}
                    </div>

                </div>

                ${cuerpo}

            </div>
        `;

    }).join("");

    tituloDiaAlim.innerHTML =
        `📅 ${dia.nombre} · ${operando} de ${nombres.length} alimentadores operan`;

    listaAlim.innerHTML = tarjetasAlim;
}


// Pestañas Expresos / Alimentadores
if(tabsHorarios){
tabsHorarios.addEventListener("click", function(event){

    const boton = event.target.closest(".tab-btn");

    if(!boton){
        return;
    }

    tabsHorarios.querySelectorAll(".tab-btn").forEach(function(b){
        b.classList.remove("tab-activo");
    });

    boton.classList.add("tab-activo");

    if(boton.dataset.tab === "alimentadores"){

        panelExpresos.style.display = "none";
        panelAlim.style.display = "block";

        dibujarFiltrosAlim();
        dibujarHorariosAlim();

    } else {

        panelAlim.style.display = "none";
        panelExpresos.style.display = "block";
    }
});
}


// Filtros por terminal
filtrosAlim.addEventListener("click", function(event){

    const boton = event.target.closest(".filtro-btn");

    if(!boton){
        return;
    }

    filtroAlim = boton.dataset.grupo;

    dibujarFiltrosAlim();
    dibujarHorariosAlim();
});


// Cuando cambias de dia (los botones son compartidos con Expresos)
selectorDias.addEventListener("click", function(){
    dibujarHorariosAlim();
});


// Al abrir la pagina horarios
if(btnHorarios){
btnHorarios.addEventListener("click", function(){
    dibujarFiltrosAlim();
    dibujarHorariosAlim();
});
}


// Mantiene el cambio de dia a medianoche
setInterval(function(){
    dibujarHorariosAlim();
}, 60000);


dibujarFiltrosAlim();
dibujarHorariosAlim();
console.log("2.script termino")
