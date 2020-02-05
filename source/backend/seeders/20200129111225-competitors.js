'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


    let names = ['Иван', 'Петр', 'Федор', 'Евгений', 'Сергей', 'Михаил', 'Василий', 'Константин', 'Николай'],
      surnames = ['Иванов', 'Петров', 'Резнов', 'Курицын', 'Усольцев', 'Васильев', 'Бобров', 'Уваров'],
      secondNames = ['Иванович', 'Петрович', 'Федорович', 'Евгениьевич', 'Сергеевич', 'Михайлович', 'Васильевич', 'Константинович', 'Николаевич'],
      clubs = ['УКРФ', 'Золотой Сокол', 'Ночная стража', 'NoName', 'tramazzone', 'MwS', 'Rumata Fencing', 'HEMA Academy'],
      cities = [45, 66];

    let getRandom = function (arr) {
      return (arr[getRandomNum(arr)]);
    }

    let getRandomNum = function (arr) {
      return Math.floor(Math.random() * arr.length);
    }

    let result  = [];

    for(let i = 0; i < 10; i++ ){
      result.push({
        surname: getRandom(surnames),
        name: getRandom(names),
        secondName: getRandom(secondNames),
        club: getRandomNum(clubs),
        city: getRandom(cities),
        sex: 'male',
        birthDate: new Date( Math.floor(Math.random() * 975227920) ),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    return queryInterface.bulkInsert('Competitors', result);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Competitors', null, {});
  }
};