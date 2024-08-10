
const randomImages = [
    "https://www.liveabout.com/thmb/cx5ttimOzKbaeFpTCOmtmvJAxQA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tormented-by-burgers-599c43fb68e1a2001052d885.jpg",
    "https://media.istockphoto.com/id/157402340/photo/left-behind.jpg?s=612x612&w=0&k=20&c=ttF1xIAwRdL2v0UoL6Y_xdbpSQJzdVIokVdBBrM2I3Q=",
    "https://64.media.tumblr.com/51ce939c3b7570134515eea1c7eb59ff/tumblr_n2pgeb86ro1tw7pebo1_400.jpg",
    "https://www.chillbilldill.com/content/images/2023/08/weirdstockphoto1-2.jpg",
    "https://i.redd.it/i-love-redrawing-random-stock-photos-and-kim-dokja-v0-um8i6xwlzweb1.jpg?width=700&format=pjpg&auto=webp&s=e3e6cef19129cc30137504cd4ae706c8fb2c924a",
  "https://www.chillbilldill.com/content/images/2023/08/weirdstockphoto8-1.jpg",
  "https://preview.redd.it/dumb-idea-make-random-characters-from-stock-images-ill-go-v0-bd6ogn0x4vsb1.jpg?auto=webp&s=7ec702b44ca9476d06f51863e7baae4828b7b157",
  "https://i.insider.com/6011ac2b6dfbe10018e0049f?width=700",
  "https://i.redd.it/30xna00kaef41.jpg",
  "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/04/weird-dog-lizard-hybrid.jpg?quality=82&strip=1&resize=640%2C360",
  "https://www.boredpanda.com/blog/wp-content/uploads/2023/03/bad-funny-weird-stock-images-fb10.png",
  "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/04/man-with-a-chicken.jpg?quality=82&strip=all",
  "https://thumbs.dreamstime.com/b/funny-man-eating-his-cereals-bath-bathtub-33728479.jpg",
  "https://previews.123rf.com/images/elnur/elnur1506/elnur150605815/42488571-funny-young-mexican-with-gun-isolated-on-white.jpg",
  "https://media.teachprivacy.com/wp-content/uploads/2016/03/28184254/Hacker1.jpg",
  "https://www.bluecorona.com/wp-content/uploads/2015/04/snoe-sniffing.jpg",
  "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/04/woman-licking-cactus.jpg?quality=82&strip=all",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbPebL0dpKHXu6qItflvriYL6sPEeSpUji3Q&usqp=CAU",
  "https://qph.cf2.quoracdn.net/main-qimg-2036567e64703e55d3a6fa73a6f8b3f0-lq",
  "https://www.shutterstock.com/shutterstock/photos/114457939/display_1500/stock-photo-funny-picture-of-the-pretty-woman-with-gun-and-big-rat-114457939.jpg",
  "https://st.depositphotos.com/2232796/3348/i/450/depositphotos_33482983-stock-photo-rope.jpg",
  "https://media.istockphoto.com/id/1351477272/photo/crazy-senior-man-having-fun-doing-party-during-holidays-time-elderly-people-celebrating-life.jpg?s=612x612&w=0&k=20&c=ZbV08DTRMy3q6Zj0Dp6UPXbkRgJO1fiw67hnuAx8H3A=",
  "https://media.istockphoto.com/id/1207943794/photo/office-worker-flying-in-blue-sky.jpg?s=612x612&w=0&k=20&c=qLc2WzD3nUhENGqWDmCBGnGMb2tUj_fQr8sci5_ir0U=",
  "https://media.istockphoto.com/id/1167031517/photo/eccentric-senior-woman-portrait.jpg?s=612x612&w=0&k=20&c=8M-y4jC9ki0kFHG6RUH7Rs9WbiJXu_xAvHqZu3PEwpk=",
  "https://i.makeagif.com/media/9-22-2022/udzUMf.gif",

];


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const randomColors = [];
for (let i = 0; i < 200; i++) {
    randomColors.push(getRandomColor());
}

const randomTexts = [
    " gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay gay",
    "",
    "WE SEE ALL",
    "we know where the bodies are, you thought you could hide them from us",
    "You try to run me through Hold on, think again Dont you know what youre starting? But you sure aint got a clue How bad this will go Dont you know, know my art? (Art of war) And as you look to the horizon, not a cloud But then stormy weathers caught you cold Seems like it crept up out of nowhere all around you Its not quite what you foretold Youll never see it coming Youll see that my mind is too fast for eyes Youre done in By the time its hit you, your last surprise Ooh, ooh, oohOoh, ooh, ooh Ooh, ooh, ooh Ooh, ooh, ooh You think you got your game Planned out to a T Yet Im two steps ahead, yeah So, you step into my way Stand down, its a trap One more step and youre dead (yeah youre dead) Why just a picosecond ago, clear blue skies? But now lightnings struck your last resolve Its not an accident that no one hears your cries As your last strength seems to dissolve Youll never see it coming Youll see that my mind is too fast for eyes Youre done in By the time its hit you, your last surprise Im coming for you My games always so fast, so fine Youre spun in by the net You didnt catch it in time Ooh, ooh, ooh Ooh, ooh, ooh Ooh, ooh, ooh Ooh, ooh, ooh Better think about your game Are you sure your next moves the right one for you? Are you sure you wont get outmaneuvered Again and again, my friend? Youll never see it coming Youll see that my mind is too fast for eyes Youre done in By the time its hit you, your last surprise Im coming for you My games always so fast, so fine Youre spun in by the net You didnt catch it in time Ooh, ooh, ooh Ooh, ooh, ooh Ooh, ooh, ooh Ooh, ooh, ooh Ooh, ooh, ooh Ooh, ooh, ooh Ooh, ooh, ooh",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.",
  "weezer riff plays",
  " business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business business",
  "qwertyuiopasdfghjklerfgbhnm4drtfvgbhj4sd5rtfgvybhrxdcgvyur5egiontgintvgvwgwgwfvbgvbiwrigvbwiwvwgvbiigvbtwrtgvbwtvvvvvvvvvvvgbytvgbtgvbrwitgvwyrvtwvrht",
  "meow",
  "you should follow i-suck-at-most-stuff on github",
  "97.58.68.30",
  "163.72.173.67",
  "91.230.188.209",
  "228.240.83.132",
  "44.184.217.73",
  "105.244.35.120",
  "207.126.93.135",
  "26.111.251.91",
  "192.36.41.103",
  "177.47.144.236",
  "242.243.160.242",
  "17.220.25.208",
  "225.236.53.113",
  "148.154.197.125",
  "69.84.105.3",
  
    
];
function randomEffect() {
    const effects = [changeImage, changeTextColor, changeBackgroundColor, flipPage, flipPage4, flipPage5, playMusic, changeText, changeFontSize, playMusic2 ];
    const randomIndex = Math.floor(Math.random() * effects.length);
    effects[randomIndex]();
}


function changeImage() {
    const images = document.querySelectorAll('img');
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomImageSrc = randomImages[Math.floor(Math.random() * randomImages.length)];
    images[randomImageIndex].src = randomImageSrc;
}


function changeTextColor() {
    document.body.style.color = randomColors[Math.floor(Math.random() * randomColors.length)];
}


function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColors[Math.floor(Math.random() * randomColors.length)];
}


function flipPage() {
    document.body.style.transform = "rotate(180deg)";
}

function flipPage5() {
    document.body.style.transform = "rotate(360deg)";
}
function flipPage4() {
    document.body.style.transform = "rotate(45deg)";
}
function playMusic() {
    const audio = document.getElementById('background-music');
    audio.play();
}
function playMusic2() {
    const audio = document.getElementById('weezer-music');
    audio.play();
}

function changeText() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    const randomTextElementIndex = Math.floor(Math.random() * textElements.length);
    const randomText = randomTexts[Math.floor(Math.random() * randomTexts.length)];
    textElements[randomTextElementIndex].textContent = randomText;
}

function changeFontSize() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    const randomTextElementIndex = Math.floor(Math.random() * textElements.length);
    const randomFontSize = Math.floor(Math.random() * (48 - 12 + 1)) + 12; 
    textElements[randomTextElementIndex].style.fontSize = `${randomFontSize}px`;
}



const interactiveElements = document.querySelectorAll('a, button, img');
interactiveElements.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        randomEffect();
    });
});
