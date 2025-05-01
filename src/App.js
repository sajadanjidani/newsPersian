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
            <ItemSlider></ItemSlider>
            <ItemSlider></ItemSlider>
            <ItemSlider></ItemSlider>
            <ItemSlider></ItemSlider>
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
            <ItemSlider></ItemSlider>
            <ItemSlider></ItemSlider>
            <ItemSlider></ItemSlider>
            <ItemSlider></ItemSlider>
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
            <ItemSlider></ItemSlider>
            <ItemSlider></ItemSlider>
            <ItemSlider></ItemSlider>
            <ItemSlider></ItemSlider>
        </SliderContainer>
      </MuiContainer>

      {/* - - end video section - - */}

      {/* footer */}
      <Footer></Footer>

    </div>
  );
}

export default App;
