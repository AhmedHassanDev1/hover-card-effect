let prev = document.querySelector('.box_btn .prev');
let next = document.querySelector('.box_btn .next');
let cards = document.getElementsByClassName('cards');
let list = ['https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*', 
            'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8fDA%3D', 
             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgmaZezVq20-wupnPbb27Zun0w-cjmOkuaA&s',
              'https://www.animalfriends.co.uk/siteassets/media/images/article-images/cat-articles/38_afi_article1_caring-for-a-kitten-tips-for-the-first-month.png'],
  list_clone;
let first_el = list[0];
for (let i = 0; i < cards.length; i++) {
  list_clone = list.slice();
  list_clone[0] = list_clone[i];
  list_clone[i] = first_el;
  for (let k = (j = 0); j < cards[i].children.length; j++) {
    if (cards[i].children[j].classList.contains('big_card')) {
      cards[i].children[j].style.backgroundImage = `url(${list_clone[k]})`;
      k++;
      console.log(k);
    }
  }
}
console.log(cards);
function forword() {
  let target, current_target;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains('active')) {
      target = i;
      cards[i].style.transformOrigin = `center right`;
      cards[i].classList.remove('active');
    }
  }
  current_target = target == cards.length - 1 ? 0 : target + 1;
  cards[current_target].style.transformOrigin = `center left`;
  cards[current_target].classList.add('active');
}
function backword() {
  let target, current_target;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains('active')) {
      target = i;
      cards[i].style.transformOrigin = `center left`;
      cards[i].classList.remove('active');
    }
  }
  current_target = target == 0 ? cards.length - 1 : target - 1;
  cards[current_target].style.transformOrigin = `center right`;
  cards[current_target].classList.add('active');
}
next.onclick = function () {
  console.log(next);
  forword();
};
prev.onclick = function () {
  backword();
};
