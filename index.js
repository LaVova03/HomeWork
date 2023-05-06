const age = +prompt('Ваш рік народження?');
age ? age : alert('Шкода, що Ви не захотіли ввести свій рік народження');

const town = prompt('В якому місті ви проживаєте?');
town ? town : alert('Шкода, що Ви не захотіли ввести своє місто')

const favoriteSport = prompt("Який ваш улюблений вид спорту; 'Футбол', 'Бокс', 'Баскетбол'?");
favoriteSport ? favoriteSport : alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту');

const newAge = age ? `${'Вам'}  ${2023 - age}  ${'роки(ів)'}` : null;

const newTown = town.toUpperCase();
switch (newTown) {
    case '':
        newAge ? alert(`${newAge}`) : null;
        break;
    case 'КИЇВ':
        alert(`${newAge} ${'Ви проживаєте у столиці України'}`);
        break;
    case 'ВАШИНГТОН':
        alert(`${newAge} ${'Ви проживаєте у столиці США'}`);
        break;
    case 'ЛОНДОН':
        alert(`${newAge} ${'Ви проживаєте у столиці Англії'}`);
        break;
    default:
        alert(`${newAge}, ${'Ви проживаєте у місті '} ${town}`)
}

const newFavoriteSport = favoriteSport.toUpperCase();
switch (newFavoriteSport) {
    case '': break;
    case 'ФУТБОЛ':
        alert('Круто! Хочеш стати як Криштиану Роналду?');
        break;
    case 'БОКС':
        alert('Круто! Хочеш стати як Майк Тайсон?');
        break;
    case 'БАСКЕТБОЛ':
        alert('Круто! Хочеш стати як Майкл Джордан?');
        break;
    default:
        alert(`${favoriteSport} ${' чудовий спорт'}`);
}