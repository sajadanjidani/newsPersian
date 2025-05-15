const $ = document;

// exmaple db
let newFootbalNews = [
    {id: 1, title: 'فوتبال رئال مادرید و بارسلونا', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsBarselona.jpg'},
    {id: 2, title: 'فوتبال رئال مادرید و اتلتیکو مادرید', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsAtleticoMadrid.jpg'},
    {id: 3, title: 'فوتبال رئال مادرید و اتلتیکو بیلبائو', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsAtleticoBilbao.jpg'},
    {id: 4, title: 'فوتبال رئال مادرید و آرسنال', imageSrc: '../image/itemSlider/Footbal/New/RealMadridVsArsenal.jpg'},
    {id: 5, title: 'فوتبال بارسلونا و اتلتیکو مادرید', imageSrc: '../image/itemSlider/Footbal/New/BarcelonaVsatleticoMadrid.jpg'},
]

// get element
const slider = $.querySelector('.slider')

// create function
const addItemSlider = () => {
    newFootbalNews.forEach(news => {
        slider.insertAdjacentHTML('beforeend',`
            <div>
                <div class='imageboxSI'>
                    <img class='imageSlider' src="${news.imageSrc}" alt='itemPoster' />
                </div>
                <h3 class='titleSI'>${news.title}</h3>
            </div>
            `)
    })
}

// add event
window.addEventListener('load',addItemSlider)