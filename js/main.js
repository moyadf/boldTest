const writeBtn = document.querySelector('.write-btn');
const inputEl = document.querySelector('.to-copy');

writeBtn.addEventListener('click', () => {
  const inputValue = inputEl.value.trim();
  if (inputValue) {
    navigator.clipboard.writeText(inputValue)
      .then(() => {
        inputEl.value = '';
        if (writeBtn.innerText !== 'Copied!') {
          const originalText = writeBtn.innerText;
          writeBtn.innerText = 'Copiado!';
          setTimeout(() => {
            writeBtn.innerText = originalText;
          }, 1500);
        }
      })
      .catch(err => {
        console.log('Something went wrong', err);
      })
  }
});

/**
 *
 */

let listElm = document.querySelector('#infinite-list');

let emailRandomArr = [
  "jo**********@g*******",
  "pi**********@e*******",
  "jh****@g*************",
  "an**********@h*******",
  "ve****@g*************",
  "zx****@g*************",
  "yy****@g*************",
  "tk****@g*************",
  "qw****@g*************",
  "as****@g*************",
  "mt****@g*************",
  "po****@g*************",
  "la****@g*************",
];

let referredRandomArr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5"
];

let nextItem = 4;
let loadMore = function() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight ) {
    for (let i = 0; i < 160; i++) {
      let randomItem = emailRandomArr[Math.floor(Math.random()*emailRandomArr.length)];
      let randomReferred = referredRandomArr[Math.floor(Math.random()*referredRandomArr.length)];
      let item = document.createElement('li');

      item.innerHTML = `
           <section class="results">
               <span class="number-position">${nextItem++}</span>
               <span class="email-position">${randomItem}</span>
               <span class="referred-position">${randomReferred}</span>
           </section>
       `;
      listElm.appendChild(item);
    }
  }
};

// Initially load some items.
loadMore();
