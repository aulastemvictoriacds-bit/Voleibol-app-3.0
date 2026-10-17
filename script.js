// Datos con toda la información
const informacion = {
    que: {
        titulo: "¿Qué son?",
        imagen: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300",
        texto: "Son profesionales que diseñan, crean y cuidan sistemas informáticos, redes, software y bases de datos para resolver problemas de las personas y empresas."
    },
    hacen: {
        titulo: "¿Qué hacen?",
        imagen: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300",
        lista: [
            "Crean páginas y aplicaciones web",
            "Protegen la información y la seguridad",
            "Conectan redes y computadoras",
            "Organizan bases de datos"
        ]
    },
    donde: {
        titulo: "¿Dónde trabajan?",
        imagen: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300",
        texto: "En empresas de tecnología, bancos, hospitales, gobiernos, universidades o trabajando por su cuenta desde cualquier lugar."
    },
    importante: {
        titulo: "¿Por qué son importantes?",
        imagen: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300",
        texto: "Hacen posible todo lo que usamos en el mundo digital: celulares, banca en línea, educación, redes sociales y mucho más."
    }
};

// Función para mostrar la información
function mostrar(id) {
    // Quitar el estado "activo" de todos los botones
    const todosLosBotones = document.querySelectorAll('button');
    todosLosBotones.forEach(boton => boton.classList.remove('activo'));
    
    // Marcar como activo el botón presionado
    event.target.classList.add('activo');

    // Obtener la caja donde va la información
    const caja = document.getElementById('caja-info');
    const datos = informacion[id];

    // Construir el contenido
    let contenido = `
        <h2>${datos.titulo}</h2>
        <img src="${datos.imagen}" alt="${datos.titulo}">
    `;

    // Agregar texto o lista según corresponda
    if (datos.texto) {
        contenido += `<p>${datos.texto}</p>`;
    }
    if (datos.lista) {
        contenido += '<ul>';
        datos.lista.forEach(item => {
            contenido += `<li>✅ ${item}</li>`;
        });
        contenido += '</ul>';
    }

    // Mostrar todo en la caja
    caja.innerHTML = contenido;
}