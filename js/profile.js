// Данные пользователя (в реальном приложении - с сервера)
const userData = {
    phone: '+79161234567',
    email: 'user@example.com',
    registrationDate: '2024-02-29',
    adCount: 6,
    foundAnimals: 3,
    ads: [
      // Примеры объявлений (замените на ваши данные)
      { status: 'active', district: 'Центральный', date: '2024-03-01', info: 'Потерялся кот, персидский', brand: 'нет', photo: 'photo1.jpg' },
      { status: 'active', district: 'Южный', date: '2024-03-05', info: 'Найдена собака, дворняжка', brand: 'есть', photo: 'photo2.jpg' },
      { status: 'moderating', district: 'Северный', date: '2024-03-08', info: 'Потерялся попугай, волнистый', brand: 'нет', photo: 'photo3.jpg' },
      { status: 'moderating', district: 'Западный', date: '2024-03-10', info: 'Найдена кошка, сиамская', brand: 'есть', photo: 'photo4.jpg' },
      { status: 'found', district: 'Восточный', date: '2024-03-15', info: 'Кот вернулся домой', brand: 'нет', photo: 'photo5.jpg' },
      { status: 'found', district: 'Южный', date: '2024-03-18', info: 'Собака найдена', brand: 'есть', photo: 'photo6.jpg' },
      { status: 'archived', district: 'Центральный', date: '2024-03-20', info: 'Объявление устарело', brand: 'нет', photo: 'photo7.jpg' },
      { status: 'archived', district: 'Северный', date: '2024-03-22', info: 'Объявление удалено', brand: 'есть', photo: 'photo8.jpg' }
    ]
  };
  
  function displayUserInfo() {
    document.getElementById('phone').textContent = userData.phone;
    document.getElementById('email').textContent = userData.email;
    document.getElementById('registrationDate').textContent = userData.registrationDate;
    document.getElementById('daysOnSite').textContent = calculateDaysOnSite(userData.registrationDate);
    document.getElementById('adCount').textContent = userData.adCount;
    document.getElementById('foundAnimals').textContent = userData.foundAnimals;
  }
  
  function calculateDaysOnSite(registrationDate) {
    const registration = new Date(registrationDate);
    const today = new Date();
    const diffTime = Math.abs(today - registration);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  
  function displayUserAds() {
    const adsContainer = document.getElementById('adsContainer');
    const adsByStatus = {};
    userData.ads.forEach(ad => {
      adsByStatus[ad.status] = adsByStatus[ad.status] || []; // Исправлено
      adsByStatus[ad.status].push(ad);
    });
  
    for (const status in adsByStatus) {
      const adGroup = document.createElement('div');
      adGroup.classList.add('ad-group', status);
      adGroup.innerHTML = <h3>${status.charAt(0).toUpperCase() + status.slice(1)}</h3>; // Исправлено
  
      adsByStatus[status].forEach(ad => {
        adGroup.appendChild(createAdItem(ad));
      });
      adsContainer.appendChild(adGroup);
    }
  }
  
  function createAdItem(ad) {
    const adItem = document.createElement('div');
    adItem.classList.add('ad-item');
    adItem.innerHTML = 
        <img src="${ad.photo}" alt="Фото животного">
        <div class="ad-info">
            <p>Район: ${ad.district}</p>
            <p>Дата: ${ad.date}</p>
            <p>Информация: ${ad.info}</p>
            <p>Клеймо: ${ad.brand}</p>
        </div>
    ;
  
    if (ad.status === 'active' || ad.status === 'moderating') { // Исправлено
      const actions = document.createElement('div');
      actions.classList.add('ad-actions');
      actions.innerHTML = 
          <button class="delete-btn">Удалить</button>
          <button class="edit-btn">Редактировать</button>
      ;
      adItem.appendChild(actions);
    }
    return adItem;
  }
  
  displayUserInfo();
  displayUserAds();