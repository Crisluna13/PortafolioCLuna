function generarPDF() {
    // Crear un nuevo documento PDF utilizando jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar texto al PDF
    doc.text('Este es un PDF generado dinámicamente!', 10, 10);

    // Descargar el PDF con el nombre "Motoko.pdf"
    doc.save('negociacion.pdf');
}

function generarPDF2() {
    // Crear un nuevo documento PDF utilizando jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar texto al PDF
    doc.text('Este es un PDF generado dinámicamente!', 10, 10);

    // Descargar el PDF con el nombre "Motoko.pdf"
    doc.save('Cris.pdf');
}

function generarPDF3() {
    // Crear un nuevo documento PDF utilizando jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar texto al PDF
    doc.text('Este es un PDF generado dinámicamente!', 10, 10);

    // Descargar el PDF con el nombre "Motoko.pdf"
    doc.save('Motoko.pdf');
}


function cv() {
    // Crear un nuevo documento PDF utilizando jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar texto al PDF
    doc.text('Este es un PDF generado dinámicamente!', 10, 10);

    // Descargar el PDF con el nombre "Motoko.pdf"
    doc.save('Curriculum_Vitae.pdf');
}


function uni() {
    // Obtener el elemento al que deseas desplazar
    const section = document.getElementById('carrerau');
    
    // Usar el método scrollIntoView para hacer un desplazamiento suave
    section.scrollIntoView({
        behavior: 'smooth' // Hace que el desplazamiento sea suave
    });



    
}


function skillsx() {
    // Obtener el elemento al que deseas desplazar
    const section = document.getElementById('skillsx');
    
    // Usar el método scrollIntoView para hacer un desplazamiento suave
    section.scrollIntoView({
        behavior: 'smooth' // Hace que el desplazamiento sea suave
    });
}


function inicio() {
    // Obtener el elemento al que deseas desplazar
    const section = document.getElementById('inicio');
    
    // Usar el método scrollIntoView para hacer un desplazamiento suave
    section.scrollIntoView({
        behavior: 'smooth' // Hace que el desplazamiento sea suave
    });
}

function pro() {
    // Obtener el elemento al que deseas desplazar
    const section = document.getElementById('pro');
    
    // Usar el método scrollIntoView para hacer un desplazamiento suave
    section.scrollIntoView({
        behavior: 'smooth' // Hace que el desplazamiento sea suave
    });
}

function cursosd() {
    // Obtener el elemento al que deseas desplazar
    const section = document.getElementById('cursosd');
    
    // Usar el método scrollIntoView para hacer un desplazamiento suave
    section.scrollIntoView({
        behavior: 'smooth' // Hace que el desplazamiento sea suave
    });
}


function conntt() {
    // Obtener el elemento al que deseas desplazar
    const section = document.getElementById('conntt');
    
    // Usar el método scrollIntoView para hacer un desplazamiento suave
    section.scrollIntoView({
        behavior: 'smooth' // Hace que el desplazamiento sea suave
    });
}

function toggleMenu() {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('show');
}