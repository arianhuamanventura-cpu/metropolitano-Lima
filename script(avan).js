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
"Canaval y Moreyra": {
  ubicacion: "San Isidro",
  Tipo: "Estación intermedia",
  Servicios: "Servicio troncal",
  Conexiones: "Distrito financiero de San Isidro",
  descripcion: "Estación ubicada en el centro financiero más importante del Perú.",
  dato: "San Isidro concentra las sedes de los principales bancos, empresas multinacionales y embajadas del país."
},
"Comunidad Andina / Aramburú": {
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

paginaAlimentadores.style.display = "none";


btnInicio.addEventListener("click", function(event) {

    event.preventDefault();

    paginaInicio.style.display = "block";
    paginaServicios.style.display = "none";
    paginaAlimentadores.style.display = "none";


    btnServicios.classList.remove("activo");
    btnInicio.classList.add("activo");


});

btnServicios.addEventListener("click", function(event){

    event.preventDefault();

    paginaInicio.style.display = "none";
    paginaServicios.style.display = "block";
    paginaAlimentadores.style.display = "none";

    btnInicio.classList.remove("activo");
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
        "Carabayllo",
        "Torre Blanca"
    ],

    "los incas": [
        "Collique"
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
        "Tahuantinsuyo"
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
}

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

        let listaIda;
        let listaVuelta;

        // BELAUNDE tiene recorridos diferentes
        if(ruta === "Belaunde" || 
          ruta === "Tahuantinsuyo" ||
          ruta === "Milagros de Jesús" ||
          ruta === "Puno"
        ){

            listaIda = datosRecorrido.ida;
            listaVuelta = datosRecorrido.vuelta;

        }

        // LAS DEMÁS RUTAS mantienen el sistema actual
        else {

            listaIda = datosRecorrido;
            listaVuelta = [...datosRecorrido].reverse();

        }

        const infoRuta = document.getElementById("recorrido-ruta");

        infoRuta.innerHTML = `

            <div class="contenedor-recorrido">

                <!-- RUTA DE IDA -->

                <div class="ruta-ida">

                    <h3>🚍 Naranjal → ${ruta}</h3>

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

                    <h3>🚍 ${ruta} → Naranjal</h3>

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

                    <p>
                        Selecciona un paradero para ver más detalles.
                    </p>

                </div>

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
console.log("2.script termino")
