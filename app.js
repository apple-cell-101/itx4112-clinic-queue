// Select DOM elements
const form = document.querySelector('#queue-form');
const codeInput = document.querySelector('#patient-code');
const serviceSelect = document.querySelector('#service-type');
const queueList = document.querySelector('#queue-list');

// Allow the sample starting card's "Served" button to work
document.querySelectorAll('.served-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.closest('.patient-card').remove();
  });
});

// Listen for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const patientCode = codeInput.value.trim();
  const serviceName = serviceSelect.value;

  if (!patientCode) return;

  // Create patient card
  const card = document.createElement('article');
  card.classList.add('patient-card');

  const infoDiv = document.createElement('div');

  const codeText = document.createElement('p');
  codeText.classList.add('code');
  codeText.textContent = patientCode;

  const serviceText = document.createElement('p');
  serviceText.classList.add('service');
  serviceText.textContent = serviceName;

  // Create Served button
  const servedBtn = document.createElement('button');
  servedBtn.type = 'button';
  servedBtn.classList.add('served-btn');
  servedBtn.textContent = 'Served';

  // Remove card when Served is clicked
  servedBtn.addEventListener('click', function () {
    card.remove();
  });

  // Add elements to card
  infoDiv.appendChild(codeText);
  infoDiv.appendChild(serviceText);
  card.appendChild(infoDiv);
  card.appendChild(servedBtn);

  // Add card to waiting queue
  queueList.appendChild(card);

  // Clear input
  codeInput.value = '';
});