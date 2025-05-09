const $ = document ;
const container = $.querySelector('.container');

// DB List

let gameNews = [
    {id: 1, title: 'Surviving Mars: پایونیر در ماه می در متا کوئست فرود می آید', imageSrc: '../image/itemSlider/Game/New/SurvivingMars.jpg'},
    {id: 2, title: 'GunGame : برسی یکی از بهترین بازی های شوتر', imageSrc: '../image/itemSlider/Game/New/GunGame.jpg'},
    {id: 3, title: 'Elder Scrolls IV : رتبه بندی سری های مختلف', imageSrc: '../image/itemSlider/Game/New/ElderScrolls.jpg'},
    {id: 4, title: 'Evil Dead : تارخ عرضه نسخه جدید', imageSrc: '../image/itemSlider/Game/New/EvilDead.jpg'},
    {id: 5, title: 'Forza : قیمت بازی فورزا در PS5', imageSrc: '../image/itemSlider/Game/New/Forza.jpg'},
    {id: 6, title: 'The Elder Scrolls IV: نسخه ریمستر در حال برسی است', imageSrc: '../image/itemSlider/Game/Controversial/ElderScrolls.jpg'},
    {id: 7, title: 'Rival Stars Horse Racing: شبیه ساز اسب سواری با VR امکان پذیر شد ؟', imageSrc: '../image/itemSlider/Game/Controversial/Horse Racing.jpg'},
    {id: 8, title: 'Clair Obscur: در DLC جدید چند باس فایت وجود دارد ؟', imageSrc: '../image/itemSlider/Game/Controversial/Clair Obscur.jpg'},
    {id: 9, title: 'Assassin\'s Creed Shadows : تاریخ انتشار لو رفت', imageSrc: '../image/itemSlider/Game/Controversial/AssassinCreedShadows.jpg'},
]
let footbalNews = [
    {id: 1, title: 'فوتبال رئال مادرید و بارسلونا', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsBarselona.jpg'},
    {id: 2, title: 'فوتبال رئال مادرید و اتلتیکو مادرید', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsAtleticoMadrid.jpg'},
    {id: 3, title: 'فوتبال رئال مادرید و اتلتیکو بیلبائو', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsAtleticoBilbao.jpg'},
    {id: 4, title: 'فوتبال رئال مادرید و آرسنال', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsArsenal.jpg'},
    {id: 5, title: 'فوتبال بارسلونا و اتلتیکو مادرید', imageSrc: '../image/itemSlider/Footbal/New/BarcelonaVsatleticoMadrid.jpg'},
    {id: 6, title: 'فوتبال بارسلونا و اینترمیلان', imageSrc: '../image/itemSlider/Footbal/Controversial/BarcelonaVsInter.jpg'},
    {id: 7, title: 'فوتبال اینترمیلان و اس میلان', imageSrc: '../image/itemSlider/Footbal/Controversial/AcMilanVsInterMilan.jpg'},
    {id: 8, title: 'فوتبال اتلتیکو مادرید و اتلتیکو بیلبائو', imageSrc: '../image/itemSlider/Footbal/Controversial/AtleticoMadridVsAthleticBilbao.jpeg'},
    {id: 9, title: 'فوتبال دورتمند و بایرن موریخ', imageSrc: '../image/itemSlider/Footbal/Controversial/DortmundVsBayernmunich.webp'},
]
let videoNews = [
    {id: 1, title: 'بهترین سریال های علمی تخیلی آمریکایی', imageSrc: '../image/itemSlider/Video/New/BestVideo.jpg'},
    {id: 2, title: '۵ سریال کره‌ای مدرسه‌ای پرطرفدار که ذهن‌تو منفجر می‌کنن!', imageSrc: '../image/itemSlider/Video/New/5koraFilm.jpg'},
    {id: 3, title: 'بهترین انیمه های کمدی تاریخ که تماشای آن ها را نباید از دست داد!', imageSrc: '../image/itemSlider/Video/New/BestAnime.jpg'},
    {id: 4, title: 'بهترین سریال های علمی تخیلی اکشن', imageSrc: '../image/itemSlider/Video/New/bestSerial.jpg'},
    {id: 5, title: 'تقلب بهاره افشاری در پدرخوانده!', imageSrc: '../image/itemSlider/Video/New/gadfather.jpg'},
    {id: 6, title: 'بازگشت مهران مدیری به تلویزیون با طنز جدید!', imageSrc: '../image/itemSlider/Video/Controversial/mehranModiri.jpg'},
    {id: 7, title: 'از بی‌ مادری تا ماشین میلیاردی؛', imageSrc: '../image/itemSlider/Video/Controversial/Afshar.jpg'},
    {id: 8, title: 'عنوان رسمی Spider Man 4 فاش شد!', imageSrc: '../image/itemSlider/Video/Controversial/SpiderMan.jpg'},
    {id: 9, title: 'خداحافظی با ریچارد چمبرلین', imageSrc: '../image/itemSlider/Video/Controversial/rechald.jpg'},
]

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
    console.log(News)
    container.insertAdjacentHTML("beforeend", `
        <div class="item">
            <div class="imageBox">
                <img src="${News.imageSrc}">
            </div>
            <h1 class="title">${News.title}</h1>
        </div>
    `)
}

window.addEventListener('load', whatCategory)
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(e.target.href)
      window.location.href = e.target.href;
      window.location.reload();
    });
  });