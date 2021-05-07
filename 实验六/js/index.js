var photo = ['images/buy_1.png', 'images/buy_2.png', 'images/buy_3.png', 'images/buy_4.png', 'images/buy_5.png', 'images/buy_6.png']
var photo_box = document.getElementsByClassName('m-hd')
console.log(photo_box);

function thephoto() {
    for (var i = 0; i < photo_box.length; i++) {
        photo_box[i].style.background = "url(" + photo[i] + ")";
        photo_box[i].style.backgroundSize = "cover";
    }
}