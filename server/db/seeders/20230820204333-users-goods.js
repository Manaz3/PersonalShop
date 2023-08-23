'use strict';
const { User, Good } = require('../models/user')
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await User.bulkCreate([{
    login: 'Maxim',
    password: await bcrypt.hash('123', 10),
    Goods: [
      {
        title: 'Массажёр жопы',
        image: 'https://tiande.com.ua/image/cache/data/product/9/90187v1-500x500.png',
        price: 1500,
        description: 'Удобный гаджет станет твоим личным домашним «массажистом» и отличной альтернативой салонным процедурам. Уделяя всего 10–15 минут в день проблемным зонам, очень скоро ты получишь великолепный результат!',
      },
      {
        title: 'Пряники',
        image: 'https://img1.russianfood.com/dycontent/images_upl/493/big_492872.jpg',
        price: 300,
        description: 'Пряник — мучное кондитерское изделие, выпекаемое из специального теста с добавлением мёда, орехов, специй, сухофрутов и повидла. Название «пряник» происходит от слова «пряный», т.е. созданный с использованием пряностей.'
      }
    ]
   },{
    login: 'Valera',
    password: await bcrypt.hash('123', 10),
    Goods: [
      {
        title: 'Ведро раков',
        image: 'https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/1787159/4lZQqbPCW7SP4nRnedhPQ.jpg',
        price: 1200,
        description: 'Раки - не самый популярный продукт, поэтому не во всяким магазине их можно встретить. Покупать их имеет смысл только живыми. Поэтому и искать следует лишь в тех местах, где есть я.',
      },
      {
        title: 'Ботинки Кабаныча "СУЕТ0Л0Г" ассорти',
        image: 'https://basetop.ru/wp-content/uploads/2023/04/podkraduli-696x392.jpg',
        price: 99999.99,
        description: 'В Рунете считается, что «подкрадули» – прямой перевод английского слова sneakers. Оно образовано от глагола to sneak - «подкрадываться».'
      }
    ]
   }, 
   {
      include: [Good]
   }])
  },

  async down (queryInterface, Sequelize) {
   await User.destroy({truncate: {cascade: true}})
  }
};
