class McsModal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');
        @import "https://cdn.jsdelivr.net/gh/davidkupyn/technischools-recruit-modal/styles1.0.css";
        .mcs-modal-container {
          font-family: 'Rubik', sans-serif;
        }
      </style>
      <div class="mcs-modal-container">

      <main id="mcsModalOuter"
        class="z-max pointer-events-none opacity-0 transition-all ease-in py-6 fixed top-0 w-full min-h-screen grid place-items-center bg-black/80 px-6 sm:px-12 duration-150">
  
        <div id="mcsModal"
          class="relative lg:h-140 lg:w-192 flex flex-col gap-6 bg-mobile bg-cover sm:bg-desktop rounded-xl sm:py-14 sm:px-12 py-8 px-4 scale-75 transition-all ease-in-out delay-100 duration-150">
          <button id="mcsModalCloseBtn"
            class="absolute top-0 right-0 w-12 h-12 text-white transition-all grid place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-x">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
  
          <h2 class="text-white text-center text-2xl sm:text-4xl font-bold">Rodzicu!</h2>
          <div class="bg-white rounded-xl w-full h-full flex flex-col gap-4 items-center sm:px-8 sm:py-4 p-4">
            <h3 class="text-techni-pink-500 font-bold text-md text-center sm:text-xl">Najbliższe <br>
              <span class="uppercase text-xl sm:text-2xl">
                spotkania rekrutacyjne
              </span>
              <br>
              do Techni Schools:
            </h3>
            <div class="flex justify-around w-full text-sm sm:text-base">
              <p class="text-center text-gray-500">
                <span class="text-gray-600 font-semibold">Warszawa: </span> <br>
                07.02.2023 o 17:30 <br>
                ul. Okopowa 59 <br>
                (V piętro)
              </p>
              <p class="text-center text-gray-500">
                <span class="text-gray-600 font-semibold">Lublin: </span> <br>
                06.02.2023 o 17:30 <br>
                ul. Narutowicza 55b <br>
                (II piętro)
              </p>
            </div>
            <h4 class="text-center text-xs sm:text-sm text-gray-600 font-semibold">
              Zostaw swój numer telefonu, a my wyślemy
              <span class="text-techni-blue font-bold">
                przypomnienie SMS dzień
              </span>
              przed
              spotkaniem!
            </h4>
            <form class="grid place-items-center gap-4" id="telForm">
  
              <div class="flex gap-2">
                <input type="tel" id="tel"
                  class="w-full md:w-64 h-8 rounded-lg bg-gray-200 outline-none focus:border-techni-blue focus:border-2 transition-all duration-75 px-4 text-gray-60 text-sm sm:text-base"
                  placeholder="Numer telefonu" required>
                <button
                  class="aspect-square grid place-items-center h-8 rounded-lg bg-techni-pink-500 text-white hover:bg-techni-pink-600 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-send">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
              <div class="flex gap-4 items-center">
                <input class="accent-techni-blue w-6 h-6" type="checkbox" id="accept" required />
                <p class="text-xs sm:text-xs text-gray-500">
                  Wyrażam zgodę na przetwarzanie mobilnych danych osobowych podanych na powyższym
                  formularzu
                </p>
              </div>
              </h4>
            </form>
            <h3 class="hidden last:text-lg font-bold text-gray-600" id="closingMessage"><span class="text-green-500">Udało
                się!
              </span>Dziękujemy za przesłanie zgłoszenia!
            </h3>
            <h4 class="font-semibold text-gray-500">Rekrutacja: <span class="font-bold text-gray-600">721 221 299</span>
          </div>
        </div>
      </main>
    </div>
    `;
  }
}

customElements.define('mcs-modal', McsModal);
const btn = document.querySelector('#show');
const modalOuter = document.querySelector('#mcsModalOuter');
const modal = document.querySelector('#mcsModal');
const closeBtn = document.querySelector('#mcsModalCloseBtn');
const closingMessage = document.querySelector('#closingMessage');
let showModal = false;
let scrollPercent = 0;
let wasShown = false;
function closeModal() {
  modalOuter.classList.add('pointer-events-none');
  modalOuter.classList.add('opacity-0');
  modal.classList.remove('scale-100');
  modal.classList.add('scale-75');
  showModal = false;
  wasShown = true;
}

closeBtn.addEventListener('click', () => {
  closeModal();
});


window.addEventListener("scroll", function () {
  scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  scrollPercent = Math.round(scrollPercent * 10) / 10;

  if (scrollPercent == 0.5 && !showModal && !wasShown) {
    showModal = true;
    modalOuter.classList.remove('pointer-events-none');
    modalOuter.classList.remove('pointer-events-none');
    modalOuter.classList.remove('opacity-0');
    modal.classList.remove('scale-75')
    modal.classList.add('scale-100');
  }
});

const telForm = document.querySelector('#telForm');

telForm.addEventListener('submit', (e) => {
  e.preventDefault();
  tel = telForm.querySelector('#tel').value;
  accept = telForm.querySelector('#accept').checked;
  console.log(tel, accept, 'tel, accept')

  if (tel.length < 9 || !accept) {
    return;
  }

  fetch(`https://api.telegram.org/bot5082109821:AAF3O5Deve1T7pgFiEYpsSUyuZ1dXLBzQ6s/sendMessage?chat_id=-733321960&text=Nowy%20Zapis%20%20na%20spotkanie%20informacyjne%3A%0A${tel}`)
    .then(res => res.json())
    .then(res => {
      if (res.ok) {
        telForm.classList.add('hidden');
        closingMessage.classList.remove('hidden');
        setTimeout(() => {
          if (showModal)
            closeModal();
        }, 5000);
      }
    })
});

