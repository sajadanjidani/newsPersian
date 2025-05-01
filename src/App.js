import './App.css';

import Navbar from './component/navbar/navbar';
import MuiContainer from './component/muiContainer/muiContainer';
import MuiBigBox from './component/muiBigBox/muiBigBox';
import MultiBoxContainer from './component/multiBoxContainer/multiBoxContainer';
import SliderContainer from './component/sliderContainer/sliderContainer';
import ItemSlider from './component/itemSlider/itemSlider';
import MuiSmallBox from './component/muiSmallBox/muiSmallBox';
import Footer from './component/footer/footer';

function App() {

  let titleMuiContainer = [
    {id: 1, title: 'جدیدترین اخبار'},
    {id: 2, title: 'جدیدترین اخبار فوتبالی'},
    {id: 3, title: 'جنجالی ترین اخبار فوتبالی'},
    {id: 4, title: 'دیگر اخبار فوتبالی'},
    {id: 5, title: 'جدیدترین اخبار بازیها'},
    {id: 6, title: 'جنجالی ترین اخبار بازیها'},
    {id: 7, title: 'دیگر اخبار بازیها'},
    {id: 8, title: 'جدیدترین اخبار فیلم و سریال'},
    {id: 9, title: 'جنجالی ترین اخبار فیلم و سریال'},
    {id: 10, title: 'دیگر اخبار فیلم و سریال'},
  ]

  let newSliderNews = [
    {id: 1, title: 'بازی اتلتیکومادرید و منچستریونایتد', imageSrc: 'image/itemSlider/New/atleticVsmanchester.jpg'},
    {id: 2, title: 'محمدرضا گلزار : بازیگر یا خواننده ؟', imageSrc: 'image/itemSlider/New/golzaaar.webp'},
    {id: 3, title: 'رئال بتیس در برابر فیورنتینا', imageSrc: 'image/itemSlider/New/RealBetisVsFiorentina.png'},
    {id: 4, title: 'وینرونی : رونالدو یعنی رونالدو نازاریو', imageSrc: 'image/itemSlider/New/ronaldo.jpg'},
  ]

  // Footbal Info News

  let newFootbalNews = [
    {id: 1, title: 'فوتبال رئال مادرید و بارسلونا', imageSrc: 'image/itemSlider/Footbal/New/RealMadridVsBarselona.jpg'},
    {id: 2, title: 'فوتبال رئال مادرید و اتلتیکو مادرید', imageSrc: 'image/itemSlider/Footbal/New/RealMadridVsAtleticoMadrid.jpg'},
    {id: 3, title: 'فوتبال رئال مادرید و اتلتیکو بیلبائو', imageSrc: 'image/itemSlider/Footbal/New/RealMadridVsAtleticoBilbao.jpg'},
    {id: 4, title: 'فوتبال رئال مادرید و آرسنال', imageSrc: 'image/itemSlider/Footbal/New/RealMadridVsArsenal.jpg'},
    {id: 5, title: 'فوتبال بارسلونا و اتلتیکو مادرید', imageSrc: 'image/itemSlider/Footbal/New/BarcelonaVsatleticoMadrid.jpg'},
  ]

  let controversialFootbalNews = [
    {id: 1, title: 'فوتبال بارسلونا و اینترمیلان', imageSrc: 'image/itemSlider/Footbal/Controversial/BarcelonaVsInter.jpg'},
    {id: 2, title: 'فوتبال اینترمیلان و اس میلان', imageSrc: 'image/itemSlider/Footbal/Controversial/AcMilanVsInterMilan.jpg'},
    {id: 3, title: 'فوتبال اتلتیکو مادرید و اتلتیکو بیلبائو', imageSrc: 'image/itemSlider/Footbal/Controversial/AtleticoMadridVsAthleticBilbao.jpeg'},
    {id: 4, title: 'فوتبال دورتمند و بایرن موریخ', imageSrc: 'image/itemSlider/Footbal/Controversial/DortmundVsBayernmunich.webp'},
    {id: 5, title: 'فوتبال منچستریونایتد و منچسترسیتی', imageSrc: 'image/itemSlider/Footbal/Controversial/ManchesterCityVsManchesterUnited.jpg'},
  ]

  let otherFootbalNews = [
    {id: 1,title: 'فوتبال الاتحاد و الهلال',imageSrc: 'image/itemSlider/Footbal/Other/AlHilalVsAlIttihad.jpg'},
    {id: 2,title: 'فوتبال النصر و الهلال',imageSrc: 'image/itemSlider/Footbal/Other/AlNasrVsAlHilal.webp'},
    {id: 3,title: 'فوتبال النصر و الاتحاد',imageSrc: 'image/itemSlider/Footbal/Other/AlIttihadVsAlNassr.jpg'},
    {id: 4,title: 'فوتبال النصر و اینترمیامی',imageSrc: 'image/itemSlider/Footbal/Other/InterMiamiVsAlNassr.jpg'},
  ]

  // Game Info News

  let newGameNews = [
    {id: 1, title: 'Surviving Mars: پایونیر در ماه می در متا کوئست فرود می آید', imageSrc: 'image/itemSlider/Game/New/SurvivingMars.jpg'},
    {id: 2, title: 'GunGame : برسی یکی از بهترین بازی های شوتر', imageSrc: 'image/itemSlider/Game/New/GunGame.jpg'},
    {id: 3, title: 'Elder Scrolls IV : رتبه بندی سری های مختلف', imageSrc: 'image/itemSlider/Game/New/ElderScrolls.jpg'},
    {id: 4, title: 'Evil Dead : تارخ عرضه نسخه جدید', imageSrc: 'image/itemSlider/Game/New/EvilDead.jpg'},
    {id: 5, title: 'Forza : قیمت بازی فورزا در PS5', imageSrc: 'image/itemSlider/Game/New/Forza.jpg'},
  ]

  let controversialGameNews = [
    {id: 1, title: 'The Elder Scrolls IV: نسخه ریمستر در حال برسی است', imageSrc: 'image/itemSlider/Game/Controversial/ElderScrolls.jpg'},
    {id: 2, title: 'Rival Stars Horse Racing: شبیه ساز اسب سواری با VR امکان پذیر شد ؟', imageSrc: 'image/itemSlider/Game/Controversial/Horse Racing.jpg'},
    {id: 3, title: 'Clair Obscur: در DLC جدید چند باس فایت وجود دارد ؟', imageSrc: 'image/itemSlider/Game/Controversial/Clair Obscur.jpg'},
    {id: 4, title: 'Assassin\'s Creed Shadows : تاریخ انتشار لو رفت', imageSrc: 'image/itemSlider/Game/Controversial/AssassinCreedShadows.jpg'},
    {id: 5, title: 'تشابه عجیب بازی جدید راکستار با هیتمن', imageSrc: 'image/itemSlider/Game/Controversial/Remedy.jpg'},
  ]

  let otherGameNews = [
    {id: 1, title: 'دشمن های روی مخ یا دوست های بامزه', imageSrc: 'image/itemSlider/Game/Other/Gust.avif'},
    {id: 2, title: 'اپدیت جدید در اند در راه است ؟', imageSrc: 'image/itemSlider/Game/Other/endUpdate.webp'},
    {id: 3, title: 'ویدیو جدید از جی تی ای شیش', imageSrc: 'image/itemSlider/Game/Other/Gta6.webp'},
    {id: 4, title: 'پابجی در برابر کالاف', imageSrc: 'image/itemSlider/Game/Other/pubgVsCallof.webp'},
  ]

  // Video Info News

  let newVideoNews = [
    {id: 1, title: 'بهترین سریال های علمی تخیلی آمریکایی', imageSrc: 'image/itemSlider/Video/New/BestVideo.jpg'},
    {id: 2, title: '۵ سریال کره‌ای مدرسه‌ای پرطرفدار که ذهن‌تو منفجر می‌کنن!', imageSrc: 'image/itemSlider/Video/New/5koraFilm.jpg'},
    {id: 3, title: 'بهترین انیمه های کمدی تاریخ که تماشای آن ها را نباید از دست داد!', imageSrc: 'image/itemSlider/Video/New/BestAnime.jpg'},
    {id: 4, title: 'بهترین سریال های علمی تخیلی اکشن', imageSrc: 'image/itemSlider/Video/New/bestSerial.jpg'},
    {id: 5, title: 'تقلب بهاره افشاری در پدرخوانده!', imageSrc: 'image/itemSlider/Video/New/gadfather.jpg'},
  ]

  let controversialVideoNews = [
    {id: 1, title: 'بازگشت مهران مدیری به تلویزیون با طنز جدید!', imageSrc: 'image/itemSlider/Video/Controversial/mehranModiri.jpg'},
    {id: 2, title: 'از بی‌ مادری تا ماشین میلیاردی؛', imageSrc: 'image/itemSlider/Video/Controversial/Afshar.jpg'},
    {id: 3, title: 'عنوان رسمی Spider Man 4 فاش شد!', imageSrc: 'image/itemSlider/Video/Controversial/SpiderMan.jpg'},
    {id: 4, title: 'خداحافظی با ریچارد چمبرلین', imageSrc: 'image/itemSlider/Video/Controversial/rechald.jpg'},
    {id: 5, title: 'خودکشی کارگردان برنامه احسان علیخانی', imageSrc: 'image/itemSlider/Video/Controversial/killself.jpg'},
  ]

  let otherVideoNews = [
    {id: 1, title: 'وقتی ستاره‌ها نجوا می‌کنند', imageSrc: 'image/itemSlider/Video/Other/whenStar.jpg'},
    {id: 2, title: 'قیمت بلیت سینما به 100 هزار تومان رسید', imageSrc: 'image/itemSlider/Video/Other/bilitePrice.jpg'},
    {id: 3, title: '5 بازیگر، 1 جایزه', imageSrc: 'image/itemSlider/Video/Other/5Acter1Award.jpg'},
    {id: 4, title: 'جو لاندو: ستاره تلویزیون که در آتش‌ سوزی بی‌ خانمان شد', imageSrc: 'image/itemSlider/Video/Other/fireHome.webp'},
  ]

  return (
    <div className="App">

      {/* header */}
      <Navbar></Navbar>

      {/* new News slider */}
      <MuiContainer {...titleMuiContainer[0]}>
        <SliderContainer>
            <ItemSlider {...newSliderNews[0]}></ItemSlider>
            <ItemSlider {...newSliderNews[1]}></ItemSlider>
            <ItemSlider {...newSliderNews[2]}></ItemSlider>
            <ItemSlider {...newSliderNews[3]}></ItemSlider>
        </SliderContainer>
      </MuiContainer>

      {/* - - start footbal section - - */}

      {/* new footbal News */}
      <MuiContainer {...titleMuiContainer[1]}>
        <MuiBigBox {...{...newFootbalNews[0]}}></MuiBigBox>
        <MultiBoxContainer>
            <MuiSmallBox {...newFootbalNews[1]}></MuiSmallBox>
            <MuiSmallBox {...newFootbalNews[2]}></MuiSmallBox>
            <MuiSmallBox {...newFootbalNews[3]}></MuiSmallBox>
            <MuiSmallBox {...newFootbalNews[4]}></MuiSmallBox>
        </MultiBoxContainer>
      </MuiContainer>

      {/* The most controversial footbal News */}
      <MuiContainer {...titleMuiContainer[2]}>
        <MultiBoxContainer>
            <MuiSmallBox {...controversialFootbalNews[1]}></MuiSmallBox>
            <MuiSmallBox {...controversialFootbalNews[2]}></MuiSmallBox>
            <MuiSmallBox {...controversialFootbalNews[3]}></MuiSmallBox>
            <MuiSmallBox {...controversialFootbalNews[4]}></MuiSmallBox>
        </MultiBoxContainer>
        <MuiBigBox {...controversialFootbalNews[0]}></MuiBigBox>
      </MuiContainer>

      {/* other footbal News slider */}
      <MuiContainer {...titleMuiContainer[3]}>
        <SliderContainer>
            <ItemSlider {...otherFootbalNews[0]}></ItemSlider>
            <ItemSlider {...otherFootbalNews[1]}></ItemSlider>
            <ItemSlider {...otherFootbalNews[2]}></ItemSlider>
            <ItemSlider {...otherFootbalNews[3]}></ItemSlider>
        </SliderContainer>
      </MuiContainer>

      {/* - - end footbal section - - */}

      {/* - - start game section - - */}

      {/* new game News */}
      <MuiContainer {...titleMuiContainer[4]}>
        <MuiBigBox {...newGameNews[0]}></MuiBigBox>
        <MultiBoxContainer>
            <MuiSmallBox {...newGameNews[1]}></MuiSmallBox>
            <MuiSmallBox {...newGameNews[2]}></MuiSmallBox>
            <MuiSmallBox {...newGameNews[3]}></MuiSmallBox>
            <MuiSmallBox {...newGameNews[4]}></MuiSmallBox>
        </MultiBoxContainer>
      </MuiContainer>

      {/* The most controversial game News */}
      <MuiContainer {...titleMuiContainer[5]}>
        <MultiBoxContainer>
            <MuiSmallBox {...controversialGameNews[1]}></MuiSmallBox>
            <MuiSmallBox {...controversialGameNews[2]}></MuiSmallBox>
            <MuiSmallBox {...controversialGameNews[3]}></MuiSmallBox>
            <MuiSmallBox {...controversialGameNews[4]}></MuiSmallBox>
        </MultiBoxContainer>
        <MuiBigBox {...controversialGameNews[0]}></MuiBigBox>
      </MuiContainer>

      {/* other game News slider */}
      <MuiContainer {...titleMuiContainer[6]}>
        <SliderContainer>
            <ItemSlider {...otherGameNews[0]}></ItemSlider>
            <ItemSlider {...otherGameNews[1]}></ItemSlider>
            <ItemSlider {...otherGameNews[2]}></ItemSlider>
            <ItemSlider {...otherGameNews[3]}></ItemSlider>
        </SliderContainer>
      </MuiContainer>

      {/* - - end footbal section - - */}

      {/* - - start video section - - */}

      {/* new video News */}
      <MuiContainer {...titleMuiContainer[7]}>
        <MuiBigBox {...newVideoNews[0]}></MuiBigBox>
        <MultiBoxContainer>
            <MuiSmallBox {...newVideoNews[1]}></MuiSmallBox>
            <MuiSmallBox {...newVideoNews[2]}></MuiSmallBox>
            <MuiSmallBox {...newVideoNews[3]}></MuiSmallBox>
            <MuiSmallBox {...newVideoNews[4]}></MuiSmallBox>
        </MultiBoxContainer>
      </MuiContainer>

      {/* The most controversial video News */}
      <MuiContainer {...titleMuiContainer[8]}>
        <MultiBoxContainer>
            <MuiSmallBox {...controversialVideoNews[0]}></MuiSmallBox>
            <MuiSmallBox {...controversialVideoNews[1]}></MuiSmallBox>
            <MuiSmallBox {...controversialVideoNews[2]}></MuiSmallBox>
            <MuiSmallBox {...controversialVideoNews[3]}></MuiSmallBox>
        </MultiBoxContainer>
        <MuiBigBox {...controversialVideoNews[4]}></MuiBigBox>
      </MuiContainer>

      {/* other game News slider */}
      <MuiContainer {...titleMuiContainer[9]}>
        <SliderContainer>
            <ItemSlider {...otherVideoNews[0]}></ItemSlider>
            <ItemSlider {...otherVideoNews[1]}></ItemSlider>
            <ItemSlider {...otherVideoNews[2]}></ItemSlider>
            <ItemSlider {...otherVideoNews[3]}></ItemSlider>
        </SliderContainer>
      </MuiContainer>

      {/* - - end video section - - */}

      {/* footer */}
      <Footer></Footer>

    </div>
  );
}

export default App;
