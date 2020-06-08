var pods = document.getElementById("podstav");
var counter = 0;
var imgslide = document.querySelector(".slide");
var nav = document.querySelector(".nav");
var tup = document.querySelector(".tup");
var photos =[
    {img: "img/malikaheart.jpg", size:[450, 500], text:"Так много людей тебя любят, что эта любовь видна.", transform: "rotate(0deg)"},
    {img: "img/malikarods3.jpg", size:[550, 350], text:"Ты ладишь со всеми. И родственники и друзья.", transform: "rotate(0deg)"},
    {img: "img/malika.jpg", size:[300, 400], text:"Любое платье тебе подходит.", transform: "rotate(0deg)"},
    {img: "img/malikacup.jpg", size:[400, 400], text:"Чашка кофе успокоит всегда.", transform: "rotate(0deg)"},
    {img: "img/malikacveti.jpg", size:[300, 350], text:"Цветы - вещь хорошая.", transform: "rotate(0deg)"},
    {img: "img/malikadevc.jpg", size:[500, 350], text:"Ты хорошо чувствуешь себя хорошо в любой компании.", transform: "rotate(0deg)"},
    {img: "img/malikadevchonki.jpg", size:[400, 300], text:"Ты можешь поймать момент и сфотографироваться.", transform: "rotate(0deg)"},
    {img:  "img/malikagorka.jpg", size:[600, 400], text:"Поддержишь всегда. Даже на горке.", transform: "rotate(0deg)"},
    {img:  "img/malikaimama.jpg", size:[300, 400], text:"Сестре нужна помощь и ты там. Сестре нужна фотография и ты здесь.", transform: "rotate(0deg)"},
    {img:  "img/malikaplate.jpg", size:[300, 500], text:"Любое платье тебе подходит.", transform: "rotate(0deg)"},
    {img:  "img/malikaplem.jpg", size:[300, 400], text:"Мы любим тебя!", transform: "rotate(0deg)"},
    {img:  "img/malikapodruga.jpg", size:[400, 400], text:"Ты ладишь со всеми. И родственники и друзья.", transform: "rotate(0deg)"},
    {img:  "img/malikarods2.jpg", size:[550, 350], text:"Ты ладишь со всеми. И родственники и друзья.", transform: "rotate(0deg)"},
    {img:  "img/malikayoung.jpg", size:[600, 400], text:"Детство.", transform: "rotate(0deg)"},
    {img:  "img/malikayelflow.jpg", size:[350, 400], text:"Цветы - вещь красивая.", transform: "rotate(0deg)"},
    {img:  "img/malikapodrugalev.jpg", size:[400, 400], text:"Ты ладишь со всеми. И родственники и друзья.", transform: "rotate(0deg)"},
    {img:  "img/malikawb.jpg",  size:[400, 400], text:"Даже в чёрно-белых тонах ты красивая!😘", transform: "rotate(0deg)"},
    {img:  "img/malikaver.jpg",  size:[300, 400], text:"👸", transform: "rotate(0deg)"},
    {img:  "img/maikaataman.jpg",  size:[500, 400], text:"Если кто обидит зови его.", transform: "rotate(0deg)"},
    {img:  "img/malikakniga.jpg",  size:[400, 400], text:"Книга - друг на всю жизнь.", transform: "rotate(0deg)"},
    {img:  "img/malikarods.jpg",  size:[500, 400], text:"Ты ладишь со всеми. И родственники и друзья.", transform: "rotate(0deg)"},
    {img:  "img/malikamamtel.jpg",  size:[400, 500], text:"💛", transform: "rotate(0deg)"},
    {img:  "img/malikaserd.jpg",  size:[400, 400], text:"Так много людей тебя любят, что эта любовь видна.", transform: "rotate(0deg)"},
    {img:  "img/malikaruka.jpg",  size:[350, 500], text:"Путешествовать никогда не поздно!", transform: "rotate(0deg)"},
    {img:  "img/malikamuma.jpg",  size:[400, 500], text:"👧", transform: "rotate(0deg)"},
    {img:  "img/malikasaid.jpg",  size:[400, 500], text:"", transform: "rotate(0deg)"},
    {img:  "img/yosya.jpg",  size:[600, 400], text:"Семья - сила!💪", transform: "rotate(0deg)"},
    {img:  "img/ptich.jpg",  size:[400, 500], text:"Рисование это твой талант.", transform: "rotate(0deg)"},
    {img:  "img/hbd.jpg",  size:[400, 500], text:"С днём рождения!", transform: "rotate(0deg)"},
    {img:  "img/umashina.jpg",  size:[400, 400], text:"🚗", transform: "rotate(0deg)"},
    {img:  "img/tort.jpg",  size:[400, 400], text:"Ты можешь многое. И готовить тоже!😉", transform: "rotate(0deg)"},
    {img:  "img/snowwhite.jpg",  size:[400, 400], text:"Белоснежка", transform: "rotate(0deg)"},
    {img:  "img/sarvarpj.jpg",  size:[400, 500], text:"Сарвар в пижаме - хорошое название для сериала.😝", transform: "rotate(0deg)"},
    {img:  "img/mashina.jpg",  size:[400, 400], text:"😘", transform: "rotate(0deg)"},
    {img:  "img/cveti.jpg",  size:[400, 400], text:"🌷", transform: "rotate(0deg)"},
    {img:  "img/ahmedushka.jpg",  size:[400, 400], text:"Ахмедовы - сила!", transform: "rotate(0deg)"},
    {img:  "img/cosmetica.jpg",  size:[400, 400], text:"👸", transform: "rotate(0deg)"},
    {img:  "img/003.jpg",  size:[400, 500], text:"Подружки навсегда!", transform: "rotate(0deg)"},
    {img:  "img/005.png",  size:[350, 600], text:"Жирафы рулят!", transform: "rotate(0deg)"},
    {img:  "img/033.jpg",  size:[400, 600], text:"Моя племяша", transform: "rotate(0deg)"},
    {img:  "img/042.jpg",  size:[650, 400], text:"Мы едем, едем, едем в далёкие края. Хороши", transform: "rotate(0deg)"},
    {img:  "img/056.jpg",  size:[400, 400], text:"Чудо готовки", transform: "rotate(-90deg)"},
    {img:  "img/060.jpg",  size:[400, 400], text:"Чудо готовки", transform: "rotate(-90deg)"},
    {img:  "img/189.jpg",  size:[300, 600], text:"Зайчики🐰", transform: "rotate(0deg)"},
    {img:  "img/259.jpg",  size:[400, 500], text:"Худошник и лимон. Это слова которые заложены у меня в психику как родственные.", transform: "rotate(0deg)"},
    {img:  "img/317.jpg",  size:[400, 500], text:"Три Мушкетера", transform: "rotate(0deg)"},
    {img:  "img/353.jpg",  size:[400, 500], text:"Три Мушкетера", transform: "rotate(0deg)"},
    {img:  "img/531.jpg",  size:[470, 380], text:"Огоньки🏮", transform: "rotate(-90deg)"},
    {img:  "img/543.jpg",  size:[400, 500], text:"Капитан корабля. Земля, земля! 🌎", transform: "rotate(0deg)"},
    {img:  "img/562.jpg",  size:[400, 600], text:"Малика, Саидахмад, Мумтоза и... Петя Соловей🐦", transform: "rotate(0deg)"},
    {img:  "img/603.jpg",  size:[465, 400], text:"Снегоуборочники? Не слышали.😆", transform: "rotate(-90deg)"},
    {img:  "img/667.jpg",  size:[400, 400], text:"Бесконечность - не предел", transform: "rotate(-90deg)"},
    {img:  "img/714.jpg",  size:[500, 400], text:"Рядом с картинами ты в родной стихии.🌊 ", transform: "rotate(0deg)"},
    {img:  "img/729.jpg",  size:[400, 400], text:"Пончиков - много не бывает🍩", transform: "rotate(-90deg)"},
    {img:  "img/741.jpg",  size:[400, 500], text:"Петя Соловей🐦", transform: "rotate(-90deg)"},
    {img:  "img/758.jpg",  size:[400, 450], text:"Город свысока", transform: "rotate(-90deg)"},
    {img:  "img/772.jpg",  size:[400, 600], text:"Какие красивые облака", transform: "rotate(-90deg)"},
    {img:  "img/799.png",  size:[400, 550], text:"За афтографами у Малики в очередь", transform: "rotate(0deg)"},
    {img:  "img/806.jpg",  size:[500, 350], text:"СПМ - сообщество подруг Малики", transform: "rotate(0deg)"},
    {img:  "img/837.jpg",  size:[300, 500], text:"💚", transform: "rotate(90deg)"},

];
var strr = document.querySelector(".strr");
strr.addEventListener("click", next);
var strl = document.querySelector(".strl");
strl.addEventListener("click", prev);
function next(){
    if(counter == 59){
        imgslide.setAttribute("src", photos[0].img);
        imgslide.style.width = photos[0].size[0] + "px";
        imgslide.style.height = photos[0].size[1] + "px";
        tup.textContent = photos[0].text;
        tup.style.color = photos[0].color;
        counter=0;
        imgslide.style.transform = photos[0].transform;
        pods.textContent = counter+1;
        console.log(counter);
        imgslide.addEventListener("click", bolshe);
        imgslide.addEventListener("contextmenu", menshe);
        imgslide.addEventListener("mouseover", pokaz);
    }else{
        imgslide.setAttribute("src", photos[counter+1].img);
        counter++;
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        tup.textContent = photos[counter].text;
        tup.style.color = photos[counter].color;
        imgslide.style.transform = photos[counter].transform;
        pods.textContent = counter+1;
        console.log(counter);
        imgslide.addEventListener("click", bolshe);
        imgslide.addEventListener("contextmenu", menshe);
        imgslide.addEventListener("mouseover", pokaz);
}
}
function prev(){
    if(counter == 0){
        imgslide.setAttribute("src", photos[photos.length-1].img);
        counter = photos.length-1;
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        tup.textContent = photos[photos.length-1].text;
        tup.style.color = photos[photos.length-1].color;
        imgslide.style.transform = photos[photos.length-1].transform;
        pods.textContent = photos.length;
        console.log(counter);
        imgslide.addEventListener("click", bolshe);
        imgslide.addEventListener("contextmenu", menshe);
        imgslide.addEventListener("mouseover", pokaz);
    }else{
        imgslide.setAttribute("src", photos[counter-1].img);
        counter--;
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        pods.textContent = counter+1;
        imgslide.style.transform = photos[counter].transform;
        tup.textContent = photos[counter].text;
        tup.style.color = photos[counter].color;
        console.log(counter);
        imgslide.addEventListener("click", bolshe);
        imgslide.addEventListener("contextmenu", menshe);
        imgslide.addEventListener("mouseover", pokaz);
    }
}
function bolshe(){
    imgslide.style.height = photos[counter].size[1] + 10 + "px";
    imgslide.style.width = photos[counter].size[0] + 10 + "px";
    photos[counter].size[0] += 10;
    photos[counter].size[1] += 10;
    imgslide.addEventListener("click", bolshe);
    imgslide.addEventListener("contextmenu", menshe);
}
function menshe(){
    if(photos[counter].size[0] < 30 || photos[counter].size[1] < 30){
        
    }else{
    imgslide.style.height = photos[counter].size[1] - 10 + "px";
    imgslide.style.width = photos[counter].size[0] - 10 + "px";
    photos[counter].size[0] -= 10;
    photos[counter].size[1] -= 10;
    imgslide.addEventListener("click", bolshe);
    imgslide.addEventListener("contextmenu", menshe);
    }
}