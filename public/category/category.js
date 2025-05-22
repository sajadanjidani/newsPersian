const $ = document ;
const container = $.querySelector('.container');

// DB List

let gameNews = [
    {id: 'newGameNews1', title: 'Surviving Mars: پایونیر در ماه می در متا کوئست فرود می آید', imageSrc: '../image/itemSlider/Game/New/SurvivingMars.jpg'},
    {id: 'newGameNews2', title: 'GunGame : برسی یکی از بهترین بازی های شوتر', imageSrc: '../image/itemSlider/Game/New/GunGame.jpg'},
    {id: 'newGameNews3', title: 'Elder Scrolls IV : رتبه بندی سری های مختلف', imageSrc: '../image/itemSlider/Game/New/ElderScrolls.jpg'},
    {id: 'newGameNews4', title: 'Evil Dead : تارخ عرضه نسخه جدید', imageSrc: '../image/itemSlider/Game/New/EvilDead.jpg'},
    {id: 'newGameNews5', title: 'Forza : قیمت بازی فورزا در PS5', imageSrc: '../image/itemSlider/Game/New/Forza.jpg'},
    {id: 'controversialGameNews1', title: 'The Elder Scrolls IV: نسخه ریمستر در حال برسی است', imageSrc: '../image/itemSlider/Game/Controversial/ElderScrolls.jpg'},
    {id: 'controversialGameNews2', title: 'Rival Stars Horse Racing: شبیه ساز اسب سواری با VR امکان پذیر شد ؟', imageSrc: '../image/itemSlider/Game/Controversial/Horse Racing.jpg'},
    {id: 'controversialGameNews3', title: 'Clair Obscur: در DLC جدید چند باس فایت وجود دارد ؟', imageSrc: '../image/itemSlider/Game/Controversial/Clair Obscur.jpg'},
    {id: 'controversialGameNews4', title: 'Assassin\'s Creed Shadows : تاریخ انتشار لو رفت', imageSrc: '../image/itemSlider/Game/Controversial/AssassinCreedShadows.jpg'},
    {id: 'controversialGameNews5', title: 'تشابه عجیب بازی جدید راکستار با هیتمن', imageSrc: '../image/itemSlider/Game/Controversial/Remedy.jpg'},
    {id: 'otherGameNews1', title: 'دشمن های روی مخ یا دوست های بامزه', imageSrc: '../image/itemSlider/Game/Other/Gust.avif'},
    {id: 'otherGameNews2', title: 'اپدیت جدید در اند در راه است ؟', imageSrc: '../image/itemSlider/Game/Other/endUpdate.webp'},
    {id: 'otherGameNews3', title: 'ویدیو جدید از جی تی ای شیش', imageSrc: '../image/itemSlider/Game/Other/Gta6.webp'},
    {id: 'otherGameNews4', title: 'پابجی در برابر کالاف', imageSrc: '../image/itemSlider/Game/Other/pubgVsCallof.webp'},
]
let footbalNews = [
    {id: 'newSliderNewsFootbal3', title: 'رئال بتیس در برابر فیورنتینا', imageSrc: '../image/itemSlider/New/RealBetisVsFiorentina.png'},
    {id: 'newSliderNewsFootbal4', title: 'وینرونی : رونالدو یعنی رونالدو نازاریو', imageSrc: '../image/itemSlider/New/ronaldo.jpg'},
    {id: 'newSliderNewsFootbal1', title: 'بازی اتلتیکومادرید و منچستریونایتد', imageSrc: '../image/itemSlider/New/atleticVsmanchester.jpg'},
    {id: 'newFootbalNews1', title: 'فوتبال رئال مادرید و بارسلونا', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsBarselona.jpg'},
    {id: 'newFootbalNews2', title: 'فوتبال رئال مادرید و اتلتیکو مادرید', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsAtleticoMadrid.jpg'},
    {id: 'newFootbalNews3', title: 'فوتبال رئال مادرید و اتلتیکو بیلبائو', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsAtleticoBilbao.jpg'},
    {id: 'newFootbalNews4', title: 'فوتبال رئال مادرید و آرسنال', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsArsenal.jpg'},
    {id: 'newFootbalNews5', title: 'فوتبال بارسلونا و اتلتیکو مادرید', imageSrc: '../image/itemSlider/Footbal/New/BarcelonaVsatleticoMadrid.jpg'},
    {id: 'controversialFootbalNews1', title: 'فوتبال بارسلونا و اینترمیلان', imageSrc: '../image/itemSlider/Footbal/Controversial/BarcelonaVsInter.jpg'},
    {id: 'controversialFootbalNews2', title: 'فوتبال اینترمیلان و اس میلان', imageSrc: '../image/itemSlider/Footbal/Controversial/AcMilanVsInterMilan.jpg'},
    {id: 'controversialFootbalNews3', title: 'فوتبال اتلتیکو مادرید و اتلتیکو بیلبائو', imageSrc: '../image/itemSlider/Footbal/Controversial/AtleticoMadridVsAthleticBilbao.jpeg'},
    {id: 'controversialFootbalNews4', title: 'فوتبال دورتمند و بایرن موریخ', imageSrc: '../image/itemSlider/Footbal/Controversial/DortmundVsBayernmunich.webp'},
    {id: 'controversialFootbalNews5', title: 'فوتبال منچستریونایتد و منچسترسیتی', imageSrc: '../image/itemSlider/Footbal/Controversial/ManchesterCityVsManchesterUnited.jpg'},
    {id: 'otherFootbalNews1',title: 'فوتبال الاتحاد و الهلال',imageSrc: '../image/itemSlider/Footbal/Other/AlHilalVsAlIttihad.jpg'},
    {id: 'otherFootbalNews2',title: 'فوتبال النصر و الهلال',imageSrc: '../image/itemSlider/Footbal/Other/AlNasrVsAlHilal.webp'},
    {id: 'otherFootbalNews3',title: 'فوتبال النصر و الاتحاد',imageSrc: '../image/itemSlider/Footbal/Other/AlIttihadVsAlNassr.jpg'},
    {id: 'otherFootbalNews4',title: 'فوتبال النصر و اینترمیامی',imageSrc: '../image/itemSlider/Footbal/Other/InterMiamiVsAlNassr.jpg'},
]
let videoNews = [
    {id: 'newSliderNewsVideo2', title: 'محمدرضا گلزار : بازیگر یا خواننده ؟', imageSrc: '../image/itemSlider/New/golzaaar.webp'},
    {id: 'newVideoNews1', title: 'بهترین سریال های علمی تخیلی آمریکایی', imageSrc: '../image/itemSlider/Video/New/BestVideo.jpg'},
    {id: 'newVideoNews2', title: '۵ سریال کره‌ای مدرسه‌ای پرطرفدار که ذهن‌تو منفجر می‌کنن!', imageSrc: '../image/itemSlider/Video/New/5koraFilm.jpg'},
    {id: 'newVideoNews3', title: 'بهترین انیمه های کمدی تاریخ که تماشای آن ها را نباید از دست داد!', imageSrc: '../image/itemSlider/Video/New/BestAnime.jpg'},
    {id: 'newVideoNews4', title: 'بهترین سریال های علمی تخیلی اکشن', imageSrc: '../image/itemSlider/Video/New/bestSerial.jpg'},
    {id: 'newVideoNews5', title: 'تقلب بهاره افشاری در پدرخوانده!', imageSrc: '../image/itemSlider/Video/New/gadfather.jpg'},
    {id: 'controversialVideoNews1', title: 'بازگشت مهران مدیری به تلویزیون با طنز جدید!', imageSrc: '../image/itemSlider/Video/Controversial/mehranModiri.jpg'},
    {id: 'controversialVideoNews2', title: 'از بی‌ مادری تا ماشین میلیاردی؛', imageSrc: '../image/itemSlider/Video/Controversial/Afshar.jpg'},
    {id: 'controversialVideoNews3', title: 'عنوان رسمی Spider Man 4 فاش شد!', imageSrc: '../image/itemSlider/Video/Controversial/SpiderMan.jpg'},
    {id: 'controversialVideoNews4', title: 'خداحافظی با ریچارد چمبرلین', imageSrc: '../image/itemSlider/Video/Controversial/rechald.jpg'},
    {id: 'controversialVideoNews5', title: 'خودکشی کارگردان برنامه احسان علیخانی', imageSrc: '../image/itemSlider/Video/Controversial/killself.jpg'},
    {id: 'otherVideoNews1', title: 'وقتی ستاره‌ها نجوا می‌کنند', imageSrc: '../image/itemSlider/Video/Other/whenStar.jpg'},
    {id: 'otherVideoNews2', title: 'قیمت بلیت سینما به 100 هزار تومان رسید', imageSrc: '../image/itemSlider/Video/Other/bilitePrice.jpg'},
    {id: 'otherVideoNews3', title: '5 بازیگر، 1 جایزه', imageSrc: '../image/itemSlider/Video/Other/5Acter1Award.jpg'},
    {id: 'otherVideoNews4', title: 'جو لاندو: ستاره تلویزیون که در آتش‌ سوزی بی‌ خانمان شد', imageSrc: '../image/itemSlider/Video/Other/fireHome.webp'},
]

// get element

const menuModule = document.querySelector('#menuModule')
const coverModule = document.querySelector('#coverModule')
const openIcon = document.querySelector('#openMenu')
const closeIcon = document.querySelector('#closeMenu')

// create function

let locationHash = window.location.hash; 

const whatCategory = () => {
    if( locationHash === '#Game'){
        gameNews.forEach(News => {
            loadNews(News)
        })
    }else if( locationHash === '#Footbal'){
        footbalNews.forEach(News => {
            loadNews(News)
        })
    }else if( locationHash === '#Video'){
        videoNews.forEach(News => {
            loadNews(News)
        })
    }
}

const loadNews = News => {
    let href = '../newsContent/newsContent.html#' + News.id
    container.insertAdjacentHTML("beforeend", `
        <a href='${href}' class="item">
            <div class="imageBox">
                <img src="${News.imageSrc}">
            </div>
            <h1 class="title">${News.title}</h1>
        </a>
    `)
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

const clickHandler = () => {
  setTimeout(() => {
    if(window.location.hash !== locationHash){
        window.scrollTo(0, 0);
        window.location.reload();
    }
  }, 1)
}

// add event

window.addEventListener('load', whatCategory)
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(e.target.href)
      window.location.href = e.target.href;
      window.scrollTo(0, 0);
      window.location.reload();
    });
  });
coverModule.addEventListener('click', moduleHandler)
openIcon.addEventListener('click', openMenu)
closeIcon.addEventListener('click', closeMenu)