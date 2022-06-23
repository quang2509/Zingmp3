$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)

const itemList = $('.list-song .list-items')
const btnPlay = $('.btn-play')
const Action = $('.action')
const btnShuffle = $('.btn-shuffle')
const btnRepeat = $('.btn-repeat')
const thumb = $('.level-control-left .thumbnail img')
const heading = $('.level-control-left .title')
const singer = $('.level-control-left .subtitle')
const audio = $('#audio')
const next = $('.action .btn-next')
const pre = $('.action .btn-pre')
const range = $('#range')
const timeCurrent = $('.time-left')
const timeDuration = $('.time-right')
const volume = $('.volume')

console.log(volume)

const app = {
    isRepeat: false,
    isRamdom: false,
    isPlaying: false,
    currentIndex: 0,
  songs: [
        {
            name: 'Người Nào Đó',
            singer:'JustaTee',
            image: './assets/thumb/nguoinaodo.jpg',
            path: './assets/song/Nguoi-Nao-Do-JustaTee.mp3',
            album: 'Forever Alone (Single)',
            time: '3:58'
        },
        {
            name: 'Có Một Nơi Như Thế',
            singer:'Phan Mạnh Quỳnh',
            image: './assets/thumb/comotnoinhuthe.jpg',
            path: './assets/song/Co-Mot-Noi-Nhu-The-Phan-Manh-Quynh.mp3',
            album: 'Có Một Nơi Như Thế (Single)',
            time: '3:55'
        },
        {
            name: 'Crying Over You',    
            singer:'JustaTee, Binz',
            image: './assets/thumb/cry-over-you.jpg',
            path: './assets/song/Crying-Over-You-JustaTee-Binz.mp3',
            album: 'Crying Over You (Single)',
            time: '5:39'
        },
        {
            name: 'Sài Gòn Chiều Nay Có Mưa Bay',    
            singer:'Hakoota Dũng Hà',
            image: './assets/thumb/sai-gon-chieu-nay-co-mua-roi.jpg',
            path: './assets/song/SaiGonChieuNayCoMuaBay-HakootaDungHa-7120704.mp3',
            album: 'Sài Gòn Chiều Nay Có Mưa Bay (Acoustic Version) (Single)',
            time: '4:17'
        },
        {
            name: 'OK Em Buồn',    
            singer:'Hoàng Yến Chibi, Dư Quốc Vương',
            image: './assets/thumb/chia-tay.jpg',
            path: './assets/song/OK-Em-Buon-Hoang-Yen-Chibi-Du-Quoc-Vuong.mp3',
            album: 'Chia Tay Thì... (EP)',
            time: '2:46'
        },
        {
            name: 'Sao Cũng Được',    
            singer:'Binz',
            image: './assets/thumb/sao-cung-duoc.png',
            path: './assets/song/Sao-Cung-Duoc-Binz.mp3',
            album: 'Sao Cũng Được (Single)',
            time: '4:28'
        },
        {
            name: 'Tháng Mấy Em Nhớ Anh?',    
            singer:'Hà Anh Tuấn',
            image: './assets/thumb/thang-may-em-nho-ang.jpg',
            path: './assets/song/ThangMayEmNhoAnh-HaAnhTuan-6995531.mp3',
            album: 'Tháng Mấy Em Nhớ Anh? (Single)',
            time: '5:00'
        },
        {
            name: 'Từng là tất cả',    
            singer:'Karik',
            image: './assets/thumb/tung-la-tat-ca.jpg',
            path: './assets/song/Tung-La-Tat-Ca-Karik.mp3',
            album: 'Từng Là Tất Cả (Single)',
            time: '4:20'
        },
    ],
    render: function (){
        
        const html = this.songs.map(function(song, index){
           
            return `
         <div class="select-item ${index === app.currentIndex ? 'active' : ''}" data-index = "${index}" >
            <div class="check-box">
                <label class="checkbox">
                    <input type="checkbox">
                </label>
            </div>
            <div class="list-item">
                <div class="ls-left">
                    <div class="song-icon">
                        <i class="bi bi-music-note-beamed" style="    font-size: 14px;"></i>
                    </div>
                    <div class="song-thumb">
                        <figure class="img"><img src="${song.image}" alt=""></figure>
                        <div class="opavity"></div>
                        <div class="action-container">
                            <div class="icon-action no-active"><button class="btn action-btn button"><i class="bi bi-play"></i></button></div>
                            <div class="icon-action active"></div>
                        </div>
                    </div>
                    <div class="song-name">
                        <div class="title"><span class="item-tittle">${song.name}</span></div>
                        <h3 class="subtitle">
                        <a href="#" class="singer">${song.singer}</a>
                        </h3>
                    </div>
                </div>
                <div class="ls-content">
                    <div class="album-infor">
                        <span>${song.album}</span>
                    </div>
                </div>
                <div class="ls-right">
                    <div class="hover-item">
                        <div class="level">
                            <div class="level-item"></div>
                            <div class="level-item"><button class="btn button"><i class="bi bi-mic"></i></button></div>
                            <div class="level-item"><button class="btn button"><i class="bi bi-heart-fill"></i></button></div>
                            <div class="level-item"><button class="btn button"><i class="bi bi-three-dots"></i></button></div>
                        </div>
                    </div>
                    <div class="action-item">
                        <div class="level">
                            <div class="level-item"><button class="btn button"><i class="bi bi-heart-fill"></i></button></div>
                            <div class="level-item time">${song.time}</div>
                        </div>
                    </div>
                </div>
            </div>   
            
            
        </div>`
        })
     itemList.innerHTML = html.join('')
    
},

handleEvent: function () {
    
    btnPlay.onclick = function () {
        if(app.isPlaying) {
            audio.pause();                 
        }
        else {   
            audio.play();  
        }

      
    }   
   
   
    audio.onplay = function(){
        app.isPlaying = true 
        Action.classList.add('playing')  
        app.render()
    },

    audio.onpause = function(){       
        app.isPlaying = false 
        Action.classList.remove('playing')
    }


 
    btnShuffle.onclick = function () {
        app.isRamdom = !app.isRamdom
        btnShuffle.classList.toggle('active')
    }

    btnRepeat.onclick = function () {
        app.isRepeat  = !app.isRepeat
        btnRepeat.classList.toggle('active')
        console.log(app.isRepeat)
    }
 
    next.onclick = function () {
        if(app.isRamdom){
            app.ramdom()
        } else {
            app.nextsong()   
        }
      
        app.render()
        audio.play() 
    }

    pre.onclick = function () {
        app.prevsong()
        audio.play()
    }

    audio.onended = function () {
        if(app.isRepeat) {
            audio.play()
        } 
        else {
            app.nextsong()
            audio.play()
        }
    
      
    }
 
    audio.ontimeupdate = function () {
                
        const rangeTime =
        Math.floor(audio.currentTime/ audio.duration *100)
        
        if(rangeTime){
            range.value = rangeTime
        }  
    
        range.oninput = function(e){
            const seaktime = (audio.duration / 100 * e.target.value)
            audio.currentTime = seaktime
        }   

        function time (time) {
            const minutes = Math.floor(time / 60)
            const seconds = Math.floor(time - minutes * 60)

            return `0${minutes}:${seconds}`
        }
   
            if(!audio.duration) {
            timeCurrent.textContent = "00:00"
            timeDuration.textContent = "00:00" 
        } else{
            timeDuration.textContent = time(audio.duration)
            timeCurrent.textContent = time(audio.currentTime)
        }
    
    }

    // audio.onvolumechange = function(){
    //     volume.oninput = function (e) {
    //             audio.volume = e.target.value
    //             console.log(audio.volume)   
    //     }
        
    // }

    volume.oninput = function (e) {
        audio.volume = e.target.value
    }



    itemList.onclick = function (e) {
        const data = e.target.closest('.select-item:not(.active)')
        
      if(data){
          app.currentIndex = Number(data.dataset.index)
          app.render()
          app.loadCurrentSong()
          audio.play()
      }
   
    }
},

nextsong: function () {
    this.currentIndex++
    if(this.currentIndex >= this.songs.length){
        this.currentIndex = 0
    }
    this.loadCurrentSong()
},

prevsong: function () {
    this.currentIndex--
    if(this.currentIndex < 0){
        this.currentIndex = this.songs.length - 1
    }
    this.loadCurrentSong()
},

ramdom: function () {
        var ramdomIndex
        
        do {
            ramdomIndex = Math.floor(Math.random() * this.songs.length)
        }while(ramdomIndex === this.currentIndex)
        this.currentIndex = ramdomIndex
        this.loadCurrentSong()
        
},
// Lấy vị trí bài hát trong array bài hát
getCurrentSong: function () {
    return this.songs[this.currentIndex]
},

// Load bài hát đã lấy
loadCurrentSong: function (){
    heading.textContent = this.getCurrentSong().name
    singer.textContent = this.getCurrentSong().singer
    thumb.src = this.getCurrentSong().image
    audio.src = this.getCurrentSong().path
      
    


},

start: function () {

         this.render()

         this.handleEvent()

         this.getCurrentSong()

         this.loadCurrentSong()
}



}

app.start();
