const $ = document;
let locationHash = window.location.hash

// exmaple db
let db = [
  {id: 'newSliderNewsFootbal3', title: 'رئال بتیس در برابر فیورنتینا', imageSrc: '../image/itemSlider/New/RealBetisVsFiorentina.png'},
  {id: 'newSliderNewsFootbal4', title: 'وینرونی : رونالدو یعنی رونالدو نازاریو', imageSrc: '../image/itemSlider/New/ronaldo.jpg'},
  {id: 'newSliderNewsFootbal1', title: 'بازی اتلتیکومادرید و منچستریونایتد', imageSrc: '../image/itemSlider/New/atleticVsmanchester.jpg'},
  {id: 'newSliderNewsVideo2', title: 'محمدرضا گلزار : بازیگر یا خواننده ؟', imageSrc: '../image/itemSlider/New/golzaaar.webp'},
  {
    id: 'newSliderNews1',
    title: "بازی اتلتیکومادرید و منچستریونایتد",
    imageSrc: "../image/itemSlider/New/atleticVsmanchester.jpg",
  },
  {
    id: 'newSliderNews2',
    title: "محمدرضا گلزار : بازیگر یا خواننده ؟",
    imageSrc: "../image/itemSlider/New/golzaaar.webp",
  },
  {
    id: 'newSliderNews3',
    title: "رئال بتیس در برابر فیورنتینا",
    imageSrc: "../image/itemSlider/New/RealBetisVsFiorentina.png",
  },
  {
    id: 'newSliderNews4',
    title: "وینرونی : رونالدو یعنی رونالدو نازاریو",
    imageSrc: "../image/itemSlider/New/ronaldo.jpg",
  },
  {
    id: 'newFootbalNews1',
    title: "فوتبال رئال مادرید و بارسلونا",
    imageSrc: "../image/itemSlider/Footbal/New/RealMadridVsBarselona.jpg",
  },
  {
    id: 'newFootbalNews2',
    title: "فوتبال رئال مادرید و اتلتیکو مادرید",
    imageSrc: "../image/itemSlider/Footbal/New/RealMadridVsAtleticoMadrid.jpg",
  },
  {
    id: 'newFootbalNews3',
    title: "فوتبال رئال مادرید و اتلتیکو بیلبائو",
    imageSrc: "../image/itemSlider/Footbal/New/RealMadridVsAtleticoBilbao.jpg",
  },
  {
    id: 'newFootbalNews4',
    title: "فوتبال رئال مادرید و آرسنال",
    imageSrc: "../image/itemSlider/Footbal/New/RealMadridVsArsenal.jpg",
  },
  {
    id: 'newFootbalNews5',
    title: "فوتبال بارسلونا و اتلتیکو مادرید",
    imageSrc: "../image/itemSlider/Footbal/New/BarcelonaVsatleticoMadrid.jpg",
  },
  {
    id: 'controversialFootbalNews1',
    title: "فوتبال بارسلونا و اینترمیلان",
    imageSrc: "../image/itemSlider/Footbal/Controversial/BarcelonaVsInter.jpg",
  },
  {
    id: 'controversialFootbalNews2',
    title: "فوتبال اینترمیلان و اس میلان",
    imageSrc: "../image/itemSlider/Footbal/Controversial/AcMilanVsInterMilan.jpg",
  },
  {
    id: 'controversialFootbalNews3',
    title: "فوتبال اتلتیکو مادرید و اتلتیکو بیلبائو",
    imageSrc:
      "../image/itemSlider/Footbal/Controversial/AtleticoMadridVsAthleticBilbao.jpeg",
  },
  {
    id: 'controversialFootbalNews4',
    title: "فوتبال دورتمند و بایرن موریخ",
    imageSrc:
      "../image/itemSlider/Footbal/Controversial/DortmundVsBayernmunich.webp",
  },
  {
    id: 'controversialFootbalNews5',
    title: "فوتبال منچستریونایتد و منچسترسیتی",
    imageSrc:
      "../image/itemSlider/Footbal/Controversial/ManchesterCityVsManchesterUnited.jpg",
  },
  {
    id: 'otherFootbalNews1',
    title: "فوتبال الاتحاد و الهلال",
    imageSrc: "../image/itemSlider/Footbal/Other/AlHilalVsAlIttihad.jpg",
  },
  {
    id: 'otherFootbalNews2',
    title: "فوتبال النصر و الهلال",
    imageSrc: "../image/itemSlider/Footbal/Other/AlNasrVsAlHilal.webp",
  },
  {
    id: 'otherFootbalNews3',
    title: "فوتبال النصر و الاتحاد",
    imageSrc: "../image/itemSlider/Footbal/Other/AlIttihadVsAlNassr.jpg",
  },
  {
    id: 'otherFootbalNews4',
    title: "فوتبال النصر و اینترمیامی",
    imageSrc: "../image/itemSlider/Footbal/Other/InterMiamiVsAlNassr.jpg",
  },
  {
    id: 'newGameNews1',
    title: "Surviving Mars: پایونیر در ماه می در متا کوئست فرود می آید",
    imageSrc: "../image/itemSlider/Game/New/SurvivingMars.jpg",
  },
  {
    id: 'newGameNews2',
    title: "GunGame : برسی یکی از بهترین بازی های شوتر",
    imageSrc: "../image/itemSlider/Game/New/GunGame.jpg",
  },
  {
    id: 'newGameNews3',
    title: "Elder Scrolls IV : رتبه بندی سری های مختلف",
    imageSrc: "../image/itemSlider/Game/New/ElderScrolls.jpg",
  },
  {
    id: 'newGameNews4',
    title: "Evil Dead : تارخ عرضه نسخه جدید",
    imageSrc: "../image/itemSlider/Game/New/EvilDead.jpg",
  },
  {
    id: 'newGameNews5',
    title: "Forza : قیمت بازی فورزا در PS5",
    imageSrc: "../image/itemSlider/Game/New/Forza.jpg",
  },
  {
    id: 'controversialGameNews1',
    title: "The Elder Scrolls IV: نسخه ریمستر در حال برسی است",
    imageSrc: "../image/itemSlider/Game/Controversial/ElderScrolls.jpg",
  },
  {
    id: 'controversialGameNews2',
    title: "Rival Stars Horse Racing: شبیه ساز اسب سواری با VR امکان پذیر شد ؟",
    imageSrc: "../image/itemSlider/Game/Controversial/Horse Racing.jpg",
  },
  {
    id: 'controversialGameNews3',
    title: "Clair Obscur: در DLC جدید چند باس فایت وجود دارد ؟",
    imageSrc: "../image/itemSlider/Game/Controversial/Clair Obscur.jpg",
  },
  {
    id: 'controversialGameNews4',
    title: "Assassin's Creed Shadows : تاریخ انتشار لو رفت",
    imageSrc: "../image/itemSlider/Game/Controversial/AssassinCreedShadows.jpg",
  },
  {
    id: 'controversialGameNews5',
    title: "تشابه عجیب بازی جدید راکستار با هیتمن",
    imageSrc: "../image/itemSlider/Game/Controversial/Remedy.jpg",
  },
  {
    id: 'otherGameNews1',
    title: "دشمن های روی مخ یا دوست های بامزه",
    imageSrc: "../image/itemSlider/Game/Other/Gust.avif",
  },
  {
    id: 'otherGameNews2',
    title: "اپدیت جدید در اند در راه است ؟",
    imageSrc: "../image/itemSlider/Game/Other/endUpdate.webp",
  },
  {
    id: 'otherGameNews3',
    title: "ویدیو جدید از جی تی ای شیش",
    imageSrc: "../image/itemSlider/Game/Other/Gta6.webp",
  },
  {
    id: 'otherGameNews4',
    title: "پابجی در برابر کالاف",
    imageSrc: "../image/itemSlider/Game/Other/pubgVsCallof.webp",
  },
  {
    id: 'newVideoNews1',
    title: "بهترین سریال های علمی تخیلی آمریکایی",
    imageSrc: "../image/itemSlider/Video/New/BestVideo.jpg",
  },
  {
    id: 'newVideoNews2',
    title: "۵ سریال کره‌ای مدرسه‌ای پرطرفدار که ذهن‌تو منفجر می‌کنن!",
    imageSrc: "../image/itemSlider/Video/New/5koraFilm.jpg",
  },
  {
    id: 'newVideoNews3',
    title: "بهترین انیمه های کمدی تاریخ که تماشای آن ها را نباید از دست داد!",
    imageSrc: "../image/itemSlider/Video/New/BestAnime.jpg",
  },
  {
    id: 'newVideoNews4',
    title: "بهترین سریال های علمی تخیلی اکشن",
    imageSrc: "../image/itemSlider/Video/New/bestSerial.jpg",
  },
  {
    id: 'newVideoNews5',
    title: "تقلب بهاره افشاری در پدرخوانده!",
    imageSrc: "../image/itemSlider/Video/New/gadfather.jpg",
  },
  {
    id: 'controversialVideoNews1',
    title: "بازگشت مهران مدیری به تلویزیون با طنز جدید!",
    imageSrc: "../image/itemSlider/Video/Controversial/mehranModiri.jpg",
  },
  {
    id: 'controversialVideoNews2',
    title: "از بی‌ مادری تا ماشین میلیاردی؛",
    imageSrc: "../image/itemSlider/Video/Controversial/Afshar.jpg",
  },
  {
    id: 'controversialVideoNews3',
    title: "عنوان رسمی Spider Man 4 فاش شد!",
    imageSrc: "../image/itemSlider/Video/Controversial/SpiderMan.jpg",
  },
  {
    id: 'controversialVideoNews4',
    title: "خداحافظی با ریچارد چمبرلین",
    imageSrc: "../image/itemSlider/Video/Controversial/rechald.jpg",
  },
  {
    id: 'controversialVideoNews5',
    title: "خودکشی کارگردان برنامه احسان علیخانی",
    imageSrc: "../image/itemSlider/Video/Controversial/killself.jpg",
  },
  {
    id: 'otherVideoNews1',
    title: "وقتی ستاره‌ها نجوا می‌کنند",
    imageSrc: "../image/itemSlider/Video/Other/whenStar.jpg",
  },
  {
    id: 'otherVideoNews2',
    title: "قیمت بلیت سینما به 100 هزار تومان رسید",
    imageSrc: "../image/itemSlider/Video/Other/bilitePrice.jpg",
  },
  {
    id: 'otherVideoNews3',
    title: "5 بازیگر، 1 جایزه",
    imageSrc: "../image/itemSlider/Video/Other/5Acter1Award.jpg",
  },
  {
    id: 'otherVideoNews4',
    title: "جو لاندو: ستاره تلویزیون که در آتش‌ سوزی بی‌ خانمان شد",
    imageSrc: "../image/itemSlider/Video/Other/fireHome.webp",
  },
]

let newFootbalNews = [
    {id: 'newFootbalNews1', title: 'فوتبال رئال مادرید و بارسلونا', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsBarselona.jpg'},
    {id: 'newFootbalNews2', title: 'فوتبال رئال مادرید و اتلتیکو مادرید', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsAtleticoMadrid.jpg'},
    {id: 'newFootbalNews3', title: 'فوتبال رئال مادرید و اتلتیکو بیلبائو', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsAtleticoBilbao.jpg'},
    {id: 'newFootbalNews4', title: 'فوتبال رئال مادرید و آرسنال', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsArsenal.jpg'},
    {id: 'newFootbalNews5', title: 'فوتبال بارسلونا و اتلتیکو مادرید', imageSrc: '../image/itemSlider/Footbal/New/BarcelonaVsatleticoMadrid.jpg'},
]
let newGameNews = [
    {id: 'newGameNews1', title: 'Surviving Mars: پایونیر در ماه می در متا کوئست فرود می آید', imageSrc: '../image/itemSlider/Game/New/SurvivingMars.jpg'},
    {id: 'newGameNews2', title: 'GunGame : برسی یکی از بهترین بازی های شوتر', imageSrc: '../image/itemSlider/Game/New/GunGame.jpg'},
    {id: 'newGameNews3', title: 'Elder Scrolls IV : رتبه بندی سری های مختلف', imageSrc: '../image/itemSlider/Game/New/ElderScrolls.jpg'},
    {id: 'newGameNews4', title: 'Evil Dead : تارخ عرضه نسخه جدید', imageSrc: '../image/itemSlider/Game/New/EvilDead.jpg'},
    {id: 'newGameNews5', title: 'Forza : قیمت بازی فورزا در PS5', imageSrc: '../image/itemSlider/Game/New/Forza.jpg'},
]
let newVideoNews = [
    {id: 'newVideoNews1', title: 'بهترین سریال های علمی تخیلی آمریکایی', imageSrc: '../image/itemSlider/Video/New/BestVideo.jpg'},
    {id: 'newVideoNews2', title: '۵ سریال کره‌ای مدرسه‌ای پرطرفدار که ذهن‌تو منفجر می‌کنن!', imageSrc: '../image/itemSlider/Video/New/5koraFilm.jpg'},
    {id: 'newVideoNews3', title: 'بهترین انیمه های کمدی تاریخ که تماشای آن ها را نباید از دست داد!', imageSrc: '../image/itemSlider/Video/New/BestAnime.jpg'},
    {id: 'newVideoNews4', title: 'بهترین سریال های علمی تخیلی اکشن', imageSrc: '../image/itemSlider/Video/New/bestSerial.jpg'},
    {id: 'newVideoNews5', title: 'تقلب بهاره افشاری در پدرخوانده!', imageSrc: '../image/itemSlider/Video/New/gadfather.jpg'},
]

// get element
const slider = $.querySelector(".slider");
const mainContainer = $.querySelector('.mainContainer')
const menuModule = document.querySelector('#menuModule')
const coverModule = document.querySelector('#coverModule')
const openIcon = document.querySelector('#openMenu')
const closeIcon = document.querySelector('#closeMenu')

// create function
const checkNewsAddress = () => {
  let id = window.location.hash.slice(1);
  db.forEach(news => {
    if(news.id === id){
      mainContainer.insertAdjacentHTML('beforeend',`
        <div class="imgaebox">
          <img class='imageNews' src='${news.imageSrc}'/>
        </div>
        <h1 class="titleText">${news.title}</h1>
        <p class="contentText">test</p>
        `)
    }
  })
  whatSlider()
}

const whatSlider = () => {
  let Footbal = window.location.hash.includes('Footbal');
  let Game = window.location.hash.includes('Game');
  let Video = window.location.hash.includes('Video');
  
  if(Footbal){
    addItemSlider(newFootbalNews)
  }else if(Game){
    addItemSlider(newGameNews)
  }else if(Video){
    addItemSlider(newVideoNews)
  }

};

const addItemSlider = listSlider => {
  for (let count = 0; count < 4; count++) {
    let href = '#' + listSlider[count].id
    slider.insertAdjacentHTML('beforeend',`
        <a onClick='clickHandler()' href=${href}>
            <div class='imageboxSI'>
                <img class='imageSlider' src='${listSlider[count].imageSrc}' alt='itemPoster'></img>
            </div>
            <h3 class='titleSI'>${listSlider[count].title}</h3>
        </a>
      `)
  }
}

const clickHandler = () => {
  setTimeout(() => {
    if(window.location.hash !== locationHash){
      window.location.reload();
    }
  }, 1)
}

const openMenu = () => {
    openIcon.style.display = 'none'
    closeIcon.style.display = 'block'
    menuModule.style.display = 'block'
    coverModule.style.display = 'block'
}
const closeMenu = () => {
    openIcon.style.display = 'block'
    closeIcon.style.display = 'none'
}
const moduleHandler = () => {
    menuModule.style.display = 'none'
    coverModule.style.display = 'none'
    openIcon.style.display = 'block'
    closeIcon.style.display = 'none'
}

// add event
window.addEventListener("load", checkNewsAddress);
coverModule.addEventListener('click', moduleHandler)
openIcon.addEventListener('click', openMenu)
closeIcon.addEventListener('click', closeMenu)