function getCoffee() {
    var drinkName = prompt('Что вы хотите выпить? (coffee)').toLowerCase()
    if(drinkName === 'coffee'){
      var coffee = prompt('Какое кофе? (black/with milk)').toLowerCase()
    coffee === 'black' ? alert ('One black coffee coming right up!') : 'with milk' ? alert('One coffee with milk coming right up!') : alert('We dont have that coffee')
    }else{
      alert('Такого напитка нет')
    }
  }
  getCoffee()