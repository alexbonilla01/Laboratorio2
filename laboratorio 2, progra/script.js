// script.js
var clickExample1 = document.getElementById('clickExample1');
clickExample1.addEventListener('click', function() {
    if (this.style.backgroundColor !== 'lightgreen') {
        this.style.backgroundColor = 'lightgreen';
    } else {
        this.style.backgroundColor = '#ff0';
    }
});

var clickExample2 = document.getElementById('clickExample2');
clickExample2.addEventListener('click', function() {
    alert('Haz hecho click en el Ejemplo 2');
});

var clickExample3 = document.getElementById('clickExample3');
clickExample3.addEventListener('click', function() {
    if (this.textContent !== 'Haz hecho click') {
        this.textContent = 'Haz hecho click';
    } else {
        this.textContent = 'Ejemplo 3 - Haz click aquí';
    }
});

var mouseoverExample1 = document.getElementById('mouseoverExample1');
mouseoverExample1.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
});
mouseoverExample1.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#ff0';
});

var mouseoverExample2 = document.getElementById('mouseoverExample2');
mouseoverExample2.addEventListener('mouseover', function() {
    alert('Estás pasando el mouse por el Ejemplo 2');
});

var mouseoverExample3 = document.getElementById('mouseoverExample3');
mouseoverExample3.addEventListener('mouseover', function() {
    this.textContent = 'Estás pasando el mouse por aquí';
});
mouseoverExample3.addEventListener('mouseout', function() {
    this.textContent = 'Ejemplo 3 - Pasa el mouse por aquí';
});
