const countries = [
    {
        id: 'russia',
        name: 'Россия',
        year: '2025',
        activity: 'Фристайл',
        position: { top: '20%', left: '65%' },
        gradient: 'linear-gradient(135deg, #355C7D, #6C5B7B, #C06C84)',
        rating: 5.0,
        location: 'Гудермес',
        description: 'Для того чтобы купить билеты и отправиться на трассу необходимо открыть депозит в банке. Наши сбережения: 2&nbsp;месяца&nbsp;21&nbsp;день, но есть и рабочие дни: 17&nbsp;дней.',
        cards: [
            { title: 'Маршрут', text: 'Путь, который мы преодолели, включая перелёт до Москвы, трансфер в Грозный и дорогу до Гудермеса.' },
            { title: 'Где остановиться', text: 'Мы выбрали уютный бутик‑отель в центре города с видом на горы.' },
            { title: 'Что посмотреть', text: 'Посетили традиционный горский рынок, исторический музей и базу фристайла.' },
            { title: 'Где поесть', text: 'Пробовали местные блюда в популярных кафе и ресторанах.' }
        ]
    },
    {
        id: 'usa',
        name: 'США',
        year: '2019, 2020',
        activity: 'Спортивный стант',
        position: { top: '34%', left: '16%' },
        gradient: 'linear-gradient(135deg, #1E3C72, #2A5298)',
        rating: 4.5,
        location: 'Калифорния',
        description: 'Наше путешествие по Калифорнии включало посещение национального парка Йосемити, где мы испытали самые известные маршруты по скалолазанию.',
        cards: [
            { title: 'Маршрут', text: 'Перелёт в Сан‑Франциско, аренда автомобиля и поездка в Йосемити.' },
            { title: 'Где остановиться', text: 'Кемпинг на территории парка с прекрасными видами.' },
            { title: 'Что посмотреть', text: 'Большие секвойи, Half Dome, водопады.' },
            { title: 'Где поесть', text: 'Пикники и еда в приюте.' }
        ]
    },
    {
        id: 'china',
        name: 'Китай',
        year: '2023',
        activity: 'Культурный тур',
        position: { top: '38%', left: '75%' },
        gradient: 'linear-gradient(135deg, #E96443, #904E95)',
        rating: 5.0,
        location: 'Шанхай',
        description: 'Мы исследовали старые кварталы Шанхая, наслаждались фонариками и атмосферой, посещали рынки и традиционные сады.',
        cards: [
            { title: 'Маршрут', text: 'Полёт в Шанхай, прогулки по набережной Бунд и поездки на метро.' },
            { title: 'Где остановиться', text: 'Современный отель с видом на панораму города.' },
            { title: 'Что посмотреть', text: 'Сад Юйюань, Храм Нефритового Будды, Шанхайский музей.' },
            { title: 'Где поесть', text: 'Улица со стритфудом и ресторан с димсам.' }
        ]
    },
    {
        id: 'italy',
        name: 'Италия',
        year: '2022',
        activity: 'Путешествие',
        position: { top: '34%', left: '49%' },
        gradient: 'linear-gradient(135deg, #FFAFBD, #FFC3A0)',
        rating: 4.8,
        location: 'Рим',
        description: 'Мы проводили время в Ватикане, посещали Колизей, наслаждались кофе и мороженым на уютных улочках.',
        cards: [
            { title: 'Маршрут', text: 'Обзорные экскурсии по Риму и поездки на Vespa.' },
            { title: 'Где остановиться', text: 'Апартаменты недалеко от Испанской лестницы.' },
            { title: 'Что посмотреть', text: 'Собор Святого Петра, Колизей, Форум.' },
            { title: 'Где поесть', text: 'Gelateria, локальные траттории и пиццерии.' }
        ]
    },
    {
        id: 'france',
        name: 'Франция',
        year: '2022',
        activity: 'Спорт',
        position: { top: '30%', left: '45%' },
        gradient: 'linear-gradient(135deg, #C06C84, #F67280)',
        rating: 4.7,
        location: 'Париж',
        description: 'Парижские каникулы включали посещение Триумфальной арки, Эйфелевой башни и прокат велосипедов по набережной Сены.',
        cards: [
            { title: 'Маршрут', text: 'Прогулки по Елисейским полям, обзорные экскурсии.' },
            { title: 'Где остановиться', text: 'Отель в Латинском квартале.' },
            { title: 'Что посмотреть', text: 'Лувр, Нотр‑Дам, Монмартр.' },
            { title: 'Где поесть', text: 'Бистро и пекарни с круассанами.' }
        ]
    },
    {
        id: 'sveden',
        name: 'Швеция',
        year: '2021',
        activity: 'Карнавал',
        position: { top: '22%', left: '48%' },
        gradient: 'linear-gradient(135deg, #56AB2F, #A8E063)',
        rating: 4.6,
        location: 'Рио‑де‑Жанейро',
        description: 'Карнавал в Рио — это яркие парады, самба и невероятная энергия. Мы также посетили статую Христа и пляжи.',
        cards: [
            { title: 'Маршрут', text: 'Прогулки по набережной Копакабана, экскурсия на Сахарную голову.' },
            { title: 'Где остановиться', text: 'Гостиница на пляже с видом на океан.' },
            { title: 'Что посмотреть', text: 'Статуя Христа‑Искупителя, Стадион Маракана.' },
            { title: 'Где поесть', text: 'Кафе с традиционным feijoada и churrasco.' }
        ]
    },
    {
        id: 'india',
        name: 'Мальдивы',
        year: '2020',
        activity: 'Йога‑тур',
        position: { top: '56%', left: '67.2%' },
        gradient: 'linear-gradient(135deg, #D74177, #FFE98A)',
        rating: 4.9,
        location: 'Гоа',
        description: 'На индийском побережье мы занимались йогой на рассвете, посещали старинные храмы и наслаждались специями.',
        cards: [
            { title: 'Маршрут', text: 'Путешествие по Гоа и его пляжам.' },
            { title: 'Где остановиться', text: 'Ашрам рядом с океаном.' },
            { title: 'Что посмотреть', text: 'Храмы, водопады, плантации специй.' },
            { title: 'Где поесть', text: 'Курсы индийской кухни и местные кафе.' }
        ]
    },
    {
        id: 'spain',
        name: 'Белорусь',
        year: '2020',
        activity: 'Футбол',
        position: { top: '27%', left: '52%' },
        gradient: 'linear-gradient(135deg, #355C7D, #6C5B7B, #C06C84)',
        rating: 4.5,
        location: 'Барселона',
        description: 'Мы посетили матчи Ла Лиги, прогулялись по готическому кварталу и дегустировали тапас.',
        cards: [
            { title: 'Маршрут', text: 'Гауди‑тур по Барселоне: Саграда Фамилия, Парк Гуэль.' },
            { title: 'Где остановиться', text: 'Хостел в центре города.' },
            { title: 'Что посмотреть', text: 'Готический квартал, пляж Барселонета.' },
            { title: 'Где поесть', text: 'Тапас‑бары и paella‑рестораны.' }
        ]
    },
    {
        id: 'canada',
        name: 'Казахстан',
        year: '2026',
        activity: 'Сноуборд',
        position: { top: '30%', left: '64%' },
        gradient: 'linear-gradient(135deg, #2193B0, #6DD5ED)',
        rating: 4.8,
        location: 'Ванкувер',
        description: 'Мы отправились на трассы Уистлера, изучали канадские Rockies и наслаждались зимними видами спорта.',
        cards: [
            { title: 'Маршрут', text: 'Перелёт до Ванкувера, поездка в Уистлер.' },
            { title: 'Где остановиться', text: 'Лодж у подножья гор.' },
            { title: 'Что посмотреть', text: 'Горнолыжные трассы, ледяные пещеры.' },
            { title: 'Где поесть', text: 'Кафе с горячим кленовым сиропом.' }
        ]
    },
    {
        id: 'japan',
        name: 'Корея',
        year: '2017',
        activity: 'Цветение сакуры',
        position: { top: '36.4%', left: '82%' },
        gradient: 'linear-gradient(135deg, #000428, #004E92)',
        rating: 5.0,
        location: 'Киото',
        description: 'Мы были в Японии на ханами: гуляли по паркам, посещали храмы и наслаждались спокойствием.',
        cards: [
            { title: 'Маршрут', text: 'Путешествие из Токио в Киото на синкансене.' },
            { title: 'Где остановиться', text: 'Рёкан в Киото.' },
            { title: 'Что посмотреть', text: 'Бамбуковый лес, храм Киемидзу‑дера.' },
            { title: 'Где поесть', text: 'Рамен, суши, традиционный чай.' }
        ]
    },
    {
        id: 'germany',
        name: 'Германия',
        year: '2016',
        activity: 'Октоберфест',
        position: { top: '26.8%', left: '47%' },
        gradient: 'linear-gradient(135deg, #1F4037, #99F2C8)',
        rating: 4.4,
        location: 'Мюнхен',
        description: 'Мы участвовали в знаменитом празднике Октоберфест, дегустировали сорта пива и гуляли по старому городу.',
        cards: [
            { title: 'Маршрут', text: 'Поездка по Баварии, посещение замков.' },
            { title: 'Где остановиться', text: 'Гостиница около площади Мариенплац.' },
            { title: 'Что посмотреть', text: 'Нойшванштайн, Английский сад.' },
            { title: 'Где поесть', text: 'Биргартен и традиционные пивные.' }
        ]
    },
    {
        id: 'mexico',
        name: 'Мексика',
        year: '2015',
        activity: 'Пляжный отдых',
        position: { top: '45%', left: '13.5%' },
        gradient: 'linear-gradient(135deg, #11998E, #38EF7D)',
        rating: 4.3,
        location: 'Канкун',
        description: 'Карибское море, белый песок и лазурная вода — наше идеальное место для релакса, с дайвингом и солнечными закатами.',
        cards: [
            { title: 'Маршрут', text: 'Полет до Канкуна и отдых на Ривьера‑Майя.' },
            { title: 'Где остановиться', text: 'Отель all‑inclusive на пляже.' },
            { title: 'Что посмотреть', text: 'Руины майя, острова Mujeres.' },
            { title: 'Где поесть', text: 'Тако, гуакамоле и маргариты.' }
        ]
    },
    {
        id: 'southafrica',
        name: 'Хорватия',
        year: '2014',
        activity: 'Сафари',
        position: { top: '31%', left: '49%' },
        gradient: 'linear-gradient(135deg, #F7971E, #FFD200)',
        rating: 4.9,
        location: 'Кейптаун',
        description: 'Мы отправились в национальный парк Крюгера, наблюдали за львами, слонами и жирафами, и поднялись на Столовую гору.',
        cards: [
            { title: 'Маршрут', text: 'Путешествие по Garden Route и сафари.' },
            { title: 'Где остановиться', text: 'Лоджи в заповеднике.' },
            { title: 'Что посмотреть', text: 'Столовая гора, мыс Доброй Надежды.' },
            { title: 'Где поесть', text: 'Морепродукты и местные вина.' }
        ]
    }
];

// Контейнер, куда будут добавлены маркеры
const markersContainer = document.getElementById('markers');

// Создание маркеров на карте
countries.forEach(country => {
    const marker = document.createElement('div');
    marker.classList.add('country-marker');
    marker.style.top = country.position.top;
    marker.style.left = country.position.left;
    marker.dataset.country = country.id;
    marker.innerHTML = `
        <div class="arrow"></div>
        <div><strong>${country.name}</strong><br><span style="color:#8fa9c5">${country.year} • ${country.activity}</span></div>
    `;
    markersContainer.appendChild(marker);
});

// Элементы модального окна
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModal');

// Функция открытия модального окна и заполнения контента
function openModal(countryId) {
    const country = countries.find(c => c.id === countryId);
    if (!country) return;
    // Очистить содержимое
    modalContent.innerHTML = '';
    // Верхняя часть
    const top = document.createElement('div');
    top.classList.add('modal-top');
    // Устанавливаем фон как градиент или изображение
    top.style.backgroundImage = country.gradient;
    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');
    const title = document.createElement('h2');
    title.textContent = `${country.name}. ${country.location}`;
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details');
    // Год
    const yearSpan = document.createElement('span');
    yearSpan.innerHTML = 'Год: ' + country.year;
    detailsDiv.appendChild(yearSpan);
    // Активность
    const activitySpan = document.createElement('span');
    activitySpan.innerHTML = country.activity;
    detailsDiv.appendChild(activitySpan);
    overlayDiv.appendChild(title);
    overlayDiv.appendChild(detailsDiv);
    top.appendChild(overlayDiv);
    // Нижняя часть
    const bottom = document.createElement('div');
    bottom.classList.add('modal-bottom');
    const descr = document.createElement('div');
    descr.classList.add('description');
    descr.innerHTML = country.description;
    bottom.appendChild(descr);
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('trip-info');
    country.cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('trip-card');
        const t = document.createElement('h3');
        t.textContent = card.title;
        const p = document.createElement('p');
        p.textContent = card.text;
        cardDiv.appendChild(t);
        cardDiv.appendChild(p);
        cardsContainer.appendChild(cardDiv);
    });
    bottom.appendChild(cardsContainer);
    // Добавляем части в контент
    modalContent.appendChild(top);
    modalContent.appendChild(bottom);
    // Показываем модальное окно
    modalOverlay.style.display = 'flex';
}

// Функция закрытия модального окна
function closeModal() {
    modalOverlay.style.display = 'none';
}

// Обработчик кликов по маркерам
markersContainer.addEventListener('click', (event) => {
    const marker = event.target.closest('.country-marker');
    if (marker) {
        const countryId = marker.dataset.country;
        openModal(countryId);
    }
});

// Обработчики закрытия
closeModalBtn.addEventListener('click', closeModal);
// Закрытие при клике по фону
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});