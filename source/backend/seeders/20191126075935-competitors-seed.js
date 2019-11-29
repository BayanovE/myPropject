'use strict';



module.exports = {
  up: (queryInterface, Sequelize) => {

    let names = ['Иван', 'Петр', 'Федор', 'Евгений', 'Сергей', 'Михаил', 'Василий', 'Константин', 'Николай'],
    surnames = ['Иванов', 'Петров', 'Резнов', 'Курицын', 'Усольцев', 'Васильев', 'Бобров', 'Уваров'],
    secondNames = ['Иванович', 'Петрович', 'Федорович', 'Евгениьевич', 'Сергеевич', 'Михайлович', 'Васильевич', 'Константинович', 'Николаевич'],
    clubs = ['УКРФ', 'Золотой Сокол', 'Ночная стража', 'NoName', 'nramazzone', 'MwS', 'Rumata Fencing', 'HEMA Academy'],
    cities = [45, 66];

    let getRandom = function(arr) {
      return( arr[getRandomNum(arr)] );
    }

    let getRandomNum = function(arr) {
      return Math.floor(Math.random() * arr.length);
    }

    return queryInterface.bulkInsert('Competitors', Array(10).map(() => ({
      surname: getRandom(surnames),
      name: getRandom(names),
      secondName: getRandom(secondNames),
      club: getRandomNum(clubs),
      city: getRandom(cities),
      sex: 'male',
      birthDate: new Date( MathFloor(Math.random()*975227920) ),
      createdAt: new Date(),
      updatedAt: new Date()
    })), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Competitors', null, {});
  }
};
