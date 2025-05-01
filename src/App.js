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

  let sliderItemInfo = [
    // slider one
    {id: 1,title: 'فوتبال رئال مادرید و بارسلونا',imageSrc: 'image/itemSlider/RealMadridVsBarselona.jpg'},
    {id: 2,title: 'فوتبال رئال مادرید و اتلتیکو مادرید',imageSrc: 'image/itemSlider/RealMadridVsAtleticoMadrid.jpg'},
    {id: 3,title: 'فوتبال رئال مادرید و اتلتیکو بیلبائو',imageSrc: 'image/itemSlider/RealMadridVsAtleticoBilbao.jpg'},
    {id: 4,title: 'فوتبال رئال مادرید و آرسنال',imageSrc: 'image/itemSlider/RealMadridVsArsenal.jpg'},
    // slider two
    {id: 5,title: 'فوتبال بارسلونا و اتلتیکو مادرید',imageSrc: 'image/itemSlider/BarcelonaVsatleticoMadrid.jpg'},
    {id: 6,title: 'فوتبال بارسلونا و اینترمیلان',imageSrc: 'image/itemSlider/BarcelonaVsInter.jpg'},
    {id: 7,title: 'فوتبال اینترمیلان و اس میلان',imageSrc: 'image/itemSlider/AcMilanVsInterMilan.jpg'},
    {id: 8,title: 'فوتبال پرسپولیس و استقلال',imageSrc: 'image/itemSlider/EsteghlalVsPersepolis.jpg'},
    // slider three
    {id: 9,title: 'فوتبال سپاهان و ذوب آهن',imageSrc: 'image/itemSlider/ZobahanVsSpahan.jpg'},
    {id: 10,title: 'فوتبال اتلتیکو مادرید و اتلتیکو بیلبائو',imageSrc: 'image/itemSlider/AtleticoMadridVsAthleticBilbao.jpeg'},
    {id: 11,title: 'فوتبال دورتمند و بایرن موریخ',imageSrc: 'image/itemSlider/DortmundVsBayernmunich.webp'},
    {id: 12,title: 'فوتبال منچستریونایتد و منچسترسیتی',imageSrc: 'image/itemSlider/ManchesterCityVsManchesterUnited.jpg'},
    // slider four
    {id: 13,title: 'فوتبال الاتحاد و الهلال',imageSrc: 'image/itemSlider/AlHilalVsAlIttihad.jpg'},
    {id: 14,title: 'فوتبال النصر و الهلال',imageSrc: 'image/itemSlider/AlNasrVsAlHilal.webp'},
    {id: 15,title: 'فوتبال النصر و الاتحاد',imageSrc: 'image/itemSlider/AlIttihadVsAlNassr.jpg'},
    {id: 16,title: 'فوتبال النصر و اینترمیامی',imageSrc: 'image/itemSlider/InterMiamiVsAlNassr.jpg'},
  ]

  // Footbal Info News

  let newFootbalNews = [
    {id: 1, title: 'فوتبال رئال مادرید و بارسلونا', imageSrc: 'image/itemSlider/RealMadridVsBarselona.jpg'},
    {id: 2, title: 'فوتبال رئال مادرید و اتلتیکو مادرید', imageSrc: 'image/itemSlider/RealMadridVsAtleticoMadrid.jpg'},
    {id: 3, title: 'فوتبال رئال مادرید و اتلتیکو بیلبائو', imageSrc: 'image/itemSlider/RealMadridVsAtleticoBilbao.jpg'},
    {id: 4, title: 'فوتبال رئال مادرید و آرسنال', imageSrc: 'image/itemSlider/RealMadridVsArsenal.jpg'},
    {id: 5, title: 'فوتبال بارسلونا و اتلتیکو مادرید', imageSrc: 'image/itemSlider/BarcelonaVsatleticoMadrid.jpg'},
  ]

  let controversialFootbalNews = [
    {id: 1, title: '', imageSrc: ''},
    {id: 2, title: '', imageSrc: ''},
    {id: 3, title: '', imageSrc: ''},
    {id: 4, title: '', imageSrc: ''},
  ]

  let otherFootbalNews = [
    {id: 1, title: '', imageSrc: ''},
    {id: 2, title: '', imageSrc: ''},
    {id: 3, title: '', imageSrc: ''},
    {id: 4, title: '', imageSrc: ''},
  ]

  // Game Info News

  let newGameNews = [
    {id: 1, title: '', imageSrc: ''},
    {id: 2, title: '', imageSrc: ''},
    {id: 3, title: '', imageSrc: ''},
    {id: 4, title: '', imageSrc: ''},
    {id: 5, title: '', imageSrc: ''},
  ]

  let controversialGameNews = [
    {id: 1, title: '', imageSrc: ''},
    {id: 2, title: '', imageSrc: ''},
    {id: 3, title: '', imageSrc: ''},
    {id: 4, title: '', imageSrc: ''},
  ]

  let otherGameNews = [
    {id: 1, title: '', imageSrc: ''},
    {id: 2, title: '', imageSrc: ''},
    {id: 3, title: '', imageSrc: ''},
    {id: 4, title: '', imageSrc: ''},
  ]

  // Video Info News

  let newVideoNews = [
    {id: 1, title: '', imageSrc: ''},
    {id: 2, title: '', imageSrc: ''},
    {id: 3, title: '', imageSrc: ''},
    {id: 4, title: '', imageSrc: ''},
    {id: 5, title: '', imageSrc: ''},
  ]

  let controversialVideoNews = [
    {id: 1, title: '', imageSrc: ''},
    {id: 2, title: '', imageSrc: ''},
    {id: 3, title: '', imageSrc: ''},
    {id: 4, title: '', imageSrc: ''},
  ]

  let otherVideoNews = [
    {id: 1, title: '', imageSrc: ''},
    {id: 2, title: '', imageSrc: ''},
    {id: 3, title: '', imageSrc: ''},
    {id: 4, title: '', imageSrc: ''},
  ]

  return (
    <div className="App">

      {/* header */}
      <Navbar></Navbar>

      {/* new News slider */}
      <MuiContainer {...titleMuiContainer[0]}>
        <SliderContainer>
            <ItemSlider {...sliderItemInfo[0]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[1]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[2]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[3]}></ItemSlider>
        </SliderContainer>
      </MuiContainer>

      {/* - - start footbal section - - */}

      {/* new footbal News */}
      <MuiContainer {...titleMuiContainer[1]}>
        <MuiBigBox {...{...newFootbalNews[0]}}></MuiBigBox>
        <MultiBoxContainer>
            <MuiSmallBox {...newFootbalNews[2]}></MuiSmallBox>
            <MuiSmallBox {...newFootbalNews[3]}></MuiSmallBox>
            <MuiSmallBox {...newFootbalNews[4]}></MuiSmallBox>
            <MuiSmallBox {...newFootbalNews[5]}></MuiSmallBox>
        </MultiBoxContainer>
      </MuiContainer>

      {/* The most controversial footbal News */}
      <MuiContainer {...titleMuiContainer[2]}>
        <MultiBoxContainer>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
        </MultiBoxContainer>
        <MuiBigBox></MuiBigBox>
      </MuiContainer>

      {/* other footbal News slider */}
      <MuiContainer {...titleMuiContainer[3]}>
        <SliderContainer>
            <ItemSlider {...sliderItemInfo[4]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[5]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[6]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[7]}></ItemSlider>
        </SliderContainer>
      </MuiContainer>

      {/* - - end footbal section - - */}

      {/* - - start game section - - */}

      {/* new game News */}
      <MuiContainer {...titleMuiContainer[4]}>
        <MuiBigBox></MuiBigBox>
        <MultiBoxContainer>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
        </MultiBoxContainer>
      </MuiContainer>

      {/* The most controversial game News */}
      <MuiContainer {...titleMuiContainer[5]}>
        <MultiBoxContainer>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
        </MultiBoxContainer>
        <MuiBigBox></MuiBigBox>
      </MuiContainer>

      {/* other game News slider */}
      <MuiContainer {...titleMuiContainer[6]}>
        <SliderContainer>
            <ItemSlider {...sliderItemInfo[8]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[9]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[10]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[11]}></ItemSlider>
        </SliderContainer>
      </MuiContainer>

      {/* - - end footbal section - - */}

      {/* - - start video section - - */}

      {/* new video News */}
      <MuiContainer {...titleMuiContainer[7]}>
        <MuiBigBox></MuiBigBox>
        <MultiBoxContainer>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
        </MultiBoxContainer>
      </MuiContainer>

      {/* The most controversial video News */}
      <MuiContainer {...titleMuiContainer[8]}>
        <MultiBoxContainer>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
            <MuiSmallBox></MuiSmallBox>
        </MultiBoxContainer>
        <MuiBigBox></MuiBigBox>
      </MuiContainer>

      {/* other game News slider */}
      <MuiContainer {...titleMuiContainer[9]}>
        <SliderContainer>
            <ItemSlider {...sliderItemInfo[12]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[13]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[14]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[15]}></ItemSlider>
        </SliderContainer>
      </MuiContainer>

      {/* - - end video section - - */}

      {/* footer */}
      <Footer></Footer>

    </div>
  );
}

export default App;
