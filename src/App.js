import './App.css';

import Navbar from './component/navbar/navbar';
import MuiContainer from './component/muiContainer/muiContainer';
import MuiBigBox from './component/muiBigBox/muiBigBox';
import MultiBoxContainer from './component/multiBoxContainer/multiBoxContainer';
import SliderContainer from './component/sliderContainer/sliderContainer';
import ItemSlider from './component/itemSlider/itemSlider';
import Footer from './component/footer/footer';

function App() {

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

  return (
    <div className="App">
      {/* header */}
      <Navbar></Navbar>
      {/* slider one */}
      <MuiContainer>
        <SliderContainer>
            <ItemSlider {...sliderItemInfo[0]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[1]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[2]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[3]}></ItemSlider>
        </SliderContainer>
      </MuiContainer>
      <MuiContainer>
        <MuiBigBox></MuiBigBox>
        <MultiBoxContainer></MultiBoxContainer>
      </MuiContainer>
      <MuiContainer>
        <MultiBoxContainer></MultiBoxContainer>
        <MuiBigBox></MuiBigBox>
      </MuiContainer>
      {/* slider two */}
      <MuiContainer>
        <SliderContainer>
            <ItemSlider {...sliderItemInfo[4]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[5]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[6]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[7]}></ItemSlider>
        </SliderContainer>
      </MuiContainer>
      <MuiContainer>
        <MuiBigBox></MuiBigBox>
        <MultiBoxContainer></MultiBoxContainer>
      </MuiContainer>
      <MuiContainer>
        <MultiBoxContainer></MultiBoxContainer>
        <MuiBigBox></MuiBigBox>
      </MuiContainer>
      {/* slider three */}
      <MuiContainer>
        <SliderContainer>
            <ItemSlider {...sliderItemInfo[8]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[9]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[10]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[11]}></ItemSlider>
        </SliderContainer>
      </MuiContainer>
      <MuiContainer>
        <MuiBigBox></MuiBigBox>
        <MultiBoxContainer></MultiBoxContainer>
      </MuiContainer>
      <MuiContainer>
        <MultiBoxContainer></MultiBoxContainer>
        <MuiBigBox></MuiBigBox>
      </MuiContainer>
      {/* slider four */}
      <MuiContainer>
        <SliderContainer>
            <ItemSlider {...sliderItemInfo[12]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[13]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[14]}></ItemSlider>
            <ItemSlider {...sliderItemInfo[15]}></ItemSlider>
        </SliderContainer>
      </MuiContainer>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
