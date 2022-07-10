const sectionEl = document.querySelector('.detail-section');

const a = document.createElement('a');
const imgEl = document.createElement('img');

a.href = `../`;
const params = new URLSearchParams(window.location.search);

imgEl.src = `../assets/${params.get('id')}.png`;

a.classList.add('detail-item');

a.append(imgEl);
sectionEl.append(a);
