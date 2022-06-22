const speakerList = [
  {
    image: 'images/speaker_01.png',
    title: 'Yohai benkler',
    position: 'Professor at Harvard Law School',
    qoute: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
  {
    image: 'images/speaker_02.png',
    title: 'Jeon Gil-nam',
    position: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    qoute: 'By developing Asias first Internet protocol network SDN and leading Koreas first private line Internet connection in 1990 , it ushered in the era of the Internet in earnest.',
  },
  {
    image: 'images/speaker_03.png',
    title: 'Noh So-young',
    position: 'Art Center Nabi Director, CC Korea Director',
    qoute: 'As the author of <Digital Art Art of Our Time>, he opened Art Center Nabi, Korea s first digital art institution in 2000, and is currently serving.',
  },
  {
    image: 'images/speaker_04.png',
    title: 'Julia Leda',
    position: 'Head of the Young Pirates of Europe',
    qoute: 'European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU s copyright law in July.',
  },
  {
    image: 'images/speaker_05.png',
    title: 'Layla Tretikov',
    position: 'Secretary General of the Wikimedia Foundation',
    qoute: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people, nearly half of the world s population.',
  },
  {
    image: 'images/speaker_06.png',
    title: 'Ryan Merkley',
    position: 'Creative Commons CEO, Former Mozilla Foundation COO',
    qoute: 'He led open source projects at the Mozilla Foundation, and joined CC as CEO in 2014. He has been active in open movements such as open government and open source. ',
  },
];

for (let i = 0; i < speakerList.length; i += 1) {
  const speakerHolder = document.querySelector('#speakers-holder');
  const speaker = document.createElement('div');
  speaker.classList = 'speaker';
  speaker.innerHTML = `
    <div class="d-flex gap-4">
        <img class="speaker-image" src="${speakerList[i].image}" alt="speaker image">
        <div>
            <h2 class="speaker-title">${speakerList[i].title}</h2>
            <h3 class="speaker-position">${speakerList[i].position}</h3>
            <hr class="gray-underline">
            <p class="speaker-qoute">${speakerList[i].qoute}</p>
        </div>
    </div>`;
  speakerHolder.appendChild(speaker);
}
// menu button collapsible
const btn = document.querySelectorAll('.nav-links');
btn.forEach((element) => {
  element.addEventListener('click', () => {
    const menu = document.querySelector('#collapsible_menu');
    menu.classList.remove('show');
  });
});
