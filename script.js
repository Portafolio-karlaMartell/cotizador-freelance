// script.js - Lógica del cotizador freelance

// Esperamos que cargue el DOM completamente
document.addEventListener('DOMContentLoaded', () => {

  // Seleccionamos los elementos principales
  const form = document.getElementById('quote-form');
  const totalDisplay = document.getElementById('total');
  const urgencySelect = document.getElementById('urgency');

  // Al cambiar los inputs, recalculamos el total
  form.addEventListener('change', calculateTotal);

  // Función para calcular el precio total
  function calculateTotal() {
    // Obtenemos los servicios seleccionados
    const selected = document.querySelectorAll('input[name=\"service\"]:checked');

    // Sumamos los valores de cada checkbox marcado
    let subtotal = 0;
    selected.forEach(service => {
      subtotal += Number(service.value);
    });

    // Obtenemos el multiplicador por urgencia (ej: 1.2 para +20%)
    const urgencyFactor = Number(urgencySelect.value);

    // Cálculo total final
    const total = subtotal * urgencyFactor;

    // Mostramos el resultado con 2 decimales
    totalDisplay.textContent = `$${total.toFixed(2)}`;
  }

  // Prevenimos que el formulario se envíe
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gracias por tu interés. Pronto recibirás una propuesta personalizada.');
  });
});