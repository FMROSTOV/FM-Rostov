window.addEventListener("load", event => {
   ////////////////
   // Variables
   ////////////////

   const iconTopExpand = document.querySelector(".icon.topExpand"),
         iconBottomExpand = document.querySelector(".icon.bottomExpand"),
         topContent = document.querySelector(".topContent"),
         bottomContent = document.querySelector(".bottomContent"),
         playBtn = document.querySelector(".btnPlay"),
         musicGroups = document.querySelector(".swiper-wrapper.slider-two"),
         swipperWrapper = document.querySelector(".swiper-wrapper.slider-one"),
         imageBg = document.querySelector(".imageBg"),
         albumBg = document.querySelector(".albumBg"),
         wrapper = document.querySelector(".wrapper"),
         bodyBg = document.querySelector(".bodyBg"),
         next = document.querySelector(".swiper-button-next"),
         prev = document.querySelector(".swiper-button-prev");

   // Songs
   const songs = [
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/D3D09045-E400-E081-EA1C-9AF88B7C26C1.png",
         artistName: "Радиостанция Тихий Дон",
         songName: "73.76 УКВ",
         song: "http://185.154.72.15:8000",
         color: "#ffffff"
      },
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/0EGtLy6WvFE.jpg",
         artistName: "Детское радио",
         songName: "88.2 FM",
         song: "https://pub0202.101.ru:8443/stream/reg/mp3/128/region_deti_14?",
         color: "#4a8eff"
      },
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/Radio-Russia.png",
         artistName: "Радио России - Дон-ТР",
         songName: "89.0 FM",
         song: "http://icecast.vgtrk.cdnvideo.ru/russiafm_dontr_mp3",
         color: "#00a4ed"
      },
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/28980451424.png",
         artistName: "Радио 7",
         songName: "89.4 FM",
         song: "https://hls-01-radio7.emgsound.ru/13/playlist.m3u8",
         color: "ff3308"
      },
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/3B527986-38E8-8D72-A218-215A84FDCD28.png",
         artistName: "Комсомольская правда",
         songName: "89.8 FM",
         song: "https://kpradio.hostingradio.ru:8003/rostov.radiokp64.mp3",
         color: "#b39553"
      },
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/vest.png",
         artistName: "Вести FM - Дон-ТР",
         songName: "90.2 FM",
         song: "http://icecast.vgtrk.cdnvideo.ru/vestifm_dontr_mp3",
         color: "#3953a3"
      },

      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/BDDEFA24-5358-92A1-2704-5BF029AF786F1.png",
         artistName: "Радио Мир",
         songName: "90.6 FM",
         song: "https://icecast-mirtv.cdnvideo.ru/radio_mir128",
         color: "#a3c641"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/FA27A788-2490-8F1A-7F66-4E6647073E9D.png",
         artistName: "Радио Юмор FM",
         songName: "91.2 FM",
         song: "http://pub0101.101.ru:8000/stream/reg/mp3/128/region_humor_10",
         color: "#ffdd00"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/mauk.png",
         artistName: "Радио Маяк - Дон-ТР",
         songName: "91.8 FM",
         song: "http://icecast.vgtrk.cdnvideo.ru/mayak_dontr_mp3",
         color: "#fe0000"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/C378AD54-3FB5-6ED3-C09D-9E1C363CE831.png",
         artistName: "Хит FM",
         songName: "100.1 FM",
         song: "http://online2.gkvr.ru:8000/hitfm_rnd_64.aac",
         color: "#462870"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/C7EBD3AC-7BBB-9DF5-0A13-88A313CF9639.png",
         artistName: "FM-на-Дону",
         songName: "100.7 FM",
         song: "https://radio.mediacdn.ru/fm_na_donu.mp3",
         color: "#4fafbb"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/C993CA8E-4864-E409-1365-D0FF15862118.png",
         artistName: "Ретро FM",
         songName: "101.2 FM",
         song: "http://online2.gkvr.ru:8000/retro_rnd_64.aac",
         color: "#dc1671"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/hhr.png",
         artistName: "Love radio",
         songName: "101.6 FM",
         song: "https://online2.gkvr.ru:8001/love_rnd_64.aac",
         color: "#e1000a"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/05B98864-345B-B51C-46E6-FF300D903A4F.png",
         artistName: "Дорожное радио",
         songName: "102.2 FM",
         song: "http://185.154.72.15:8070",
         color: "#ffc400"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/ru_rad.png",
         artistName: "Русское радио",
         songName: "103.0 FM",
         song: "http://online2.gkvr.ru:8000/rusradio_rnd_64.aac",
         color: "#00438c"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/fc3dada9a5363cc7d238ab32e961c67d.jpg",
         artistName: "Радио Дача",
         songName: "103.3 FM",
         song: "https://online2.gkvr.ru:8001/dacha_rnd_64.aac",
         color: "#0094da"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/943D6B26-F563-595E-BB31-986D26BEA6FF.png",
         artistName: "Монте-Карло",
         songName: "103.7 FM",
         song: "http://online2.gkvr.ru:8000/mc_rnd_64.aac",
         color: "#86093e"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/54CC.png",
         artistName: "Авторадио",
         songName: "104.1 FM",
         song: "http://pub0101.101.ru:8000/stream/reg/mp3/128/region_avto_148",
         color: "#1d8ffc"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/dance.png",
         artistName: "DFM",
         songName: "104.6 FM",
         song: "http://online2.gkvr.ru:8000/dfm_rnd_64.aac",
         color: "#040000"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/6D6B1DCB-2411-B30D-E518-D7D83951C224.png",
         artistName: "Радио Шансон",
         songName: "105.1 FM",
         song: "http://chanson.hostingradio.ru:8041/chanson128.mp3",
         color: "#17356f"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/6954.png",
         artistName: "Европа Плюс",
         songName: "105.7 FM",
         song: "http://online2.gkvr.ru:8000/europa_rnd_64.aac",
         color: "#074790"
      },
	  
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/nrj_rnd.png",
         artistName: "Радио Energy",
         songName: "106.6 FM",
         song: "https://pub0101.101.ru:443/stream/reg/mp3/128/region_energy_98?",
         color: "#e40613"
      },
      {
         img: "https://raw.githubusercontent.com/FMROSTOV/FM-Rostov/main/Sony_Media_Tower_Reborn/wen12.png",
         artistName: "Новое Радио",
         songName: "107.5 FM",
         song: "http://185.154.72.15:8050",
         color: "#ffffff"
      }
   ];

   // Группа
   const groups = [
      {
         title: "Плейлист",
         img:
         "https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
      },
   ];

   // Playlists
   const playlists = [
      {
         title: "Pop Music",
         img:
         "https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
      },
      {
         title: "On the road!",
         img:
         "https://images.pexels.com/photos/3049327/pexels-photo-3049327.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
      },
      {
         title: "Christmas Songs",
         img:
         "https://images.pexels.com/photos/1661905/pexels-photo-1661905.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
      },
      {
         title: "Rainy days",
         img:
         "https://images.pexels.com/photos/216657/pexels-photo-216657.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
      }
   ];

   ////////////////
   // Events
   ////////////////

   iconTopExpand.addEventListener("click", expandTop);
   iconBottomExpand.addEventListener("click", expandBottom);
   playBtn.addEventListener("click", playSong);

   ////////////////
   // Functions
   ////////////////

   function playSong() {
      if (playBtn.classList.contains("pause")) {
         playBtn.classList.remove("pause");
         document.querySelector(".swiper-slide-active audio").pause();
      } else {
         playBtn.classList.add("pause");
         document.querySelector(".swiper-slide-active audio").play();
      }
      progressBar();
   }

   function expandTop() {
      if (topContent.classList.contains("expand")) {
         topContent.classList.remove("expand");
      } else {
         topContent.classList.add("expand");

         //Swiper Music Goups
         var mySwiper2 = new Swiper(".swiper-container.slider-two", {
            // Optional parameters
            direction: "horizontal",
            slidesPerView: "auto",
            draggable: true
         });
      }
      albumSize();
   }

   function expandBottom() {
      if (bottomContent.classList.contains("expand")) {
         bottomContent.classList.remove("expand");
      } else {
         bottomContent.classList.add("expand");
      }
      albumSize();
      progressBar();
   }

   // change Album size

   function albumSize() {
      const albumContent = document.querySelectorAll(".albumContent");

      if (
         topContent.classList.contains("expand") &&
         bottomContent.classList.contains("expand")
      ) {
         albumContent.forEach(function(el) {
            el.classList.add("small");
         });
      } else {
         albumContent.forEach(function(el) {
            el.classList.remove("small");
         });
      }
   }

   //Swiper Albums

   songs.forEach(function(el) {
      let template = `
<div class="swiper-slide">
<div class="settings">
<div class="icon heart"></div>
<div class="icon plus"></div>
</div>
<audio src="${el.song}"></audio>
<div class="albumContent">
<div class="albumCover" style="background-color:${
      el.color
      }"><img src="${el.img}"></div>
<p class="artistName">${el.artistName}</p>
<p class="songName">${el.songName}</p></div>
<div class="playlistsContent">
<div class="icon close"></div>
</div>
</div>`;

      swipperWrapper.insertAdjacentHTML("beforeend", template);
   });

   // To Create Playlists
   playlists.forEach(function(el) {
      let templatePlaylist = `
<div class="playlist">
<span class="checkbox"></span>
<figure class="playlistBg"><img src="${el.img}"></figure>
<figure class="playlistThumb"><img src="${el.img}"></figure>
<p class="playlistTitle">${el.title}</p></div>`;

      var playlistContent = document.querySelectorAll(".playlistsContent");

      playlistContent.forEach(function(el) {
         el.insertAdjacentHTML("beforeend", templatePlaylist);
      });
   });

   // Slider Songs (Middle)

   var mySwiper = new Swiper(".swiper-container.slider-one", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 600,
      allowTouchMove: false,
      effect: "coverflow",

      coverflowEffect: {
         rotate: 40,
         slideShadows: false
      },

      // Navigation arrows
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev"
      }
   });

   // Change Song & Album BG
   next.addEventListener("click", changeSong);
   prev.addEventListener("click", changeSong);

   function changeSong() {
      if (playBtn.classList.contains("pause")) {
         document.querySelectorAll("audio").forEach(function(el) {
            el.pause();
         });
         document.querySelector(".swiper-slide-active audio").play();
      }
      changeBg();
      progressBar();
      closePlaylists();
      changeBgColor();
   }

   function changeBg() {
      albumBg.classList.add("animeBg");

      setTimeout(() => {
         imageBg.src = document.querySelector(
            ".slider-one .swiper-slide-active img"
         ).src;
      }, 300);

      setTimeout(() => {
         albumBg.classList.remove("animeBg");
      }, 700);
   }

   function changeBgColor() {
      var getColor = document.querySelector(
         ".slider-one .swiper-slide-active .albumCover"
      ),
          activeColor = getColor.style.backgroundColor;

      setTimeout(() => {
         bodyBg.style.backgroundColor = activeColor;
      }, 200);
   }

   // Music Groups

   for (let i = 0; i < groups.length; i++) {
      const { title, img } = groups[i];

      var template2 = `<div class="swiper-slide group">
<figure><img src="${img}"></figure>
<p class = "titleGroup">${title}</p>
</div>`;

      musicGroups.insertAdjacentHTML("beforeend", template2);
   }

   // Add favourites & Playlist

   const heart = document.querySelectorAll(".heart"),
         plus = document.querySelectorAll(".plus"),
         close = document.querySelectorAll(".close"),
         playlist = document.querySelectorAll(".playlist");

   heart.forEach(function(el) {
      el.addEventListener("click", addFave);
   });

   plus.forEach(function(el) {
      el.addEventListener("click", openPlaylists);
   });

   close.forEach(function(el) {
      el.addEventListener("click", openPlaylists);
   });

   playlist.forEach(function(el) {
      el.addEventListener("click", addPlaylist);
   });

   function addFave(e) {
      if (e.currentTarget.classList.contains("fave")) {
         e.currentTarget.classList.remove("fave");
      } else {
         e.currentTarget.classList.add("fave");
      }
   }

   function openPlaylists(e) {
      if (
         e.currentTarget
         .closest(".swiper-slide-active")
         .classList.contains("open")
      ) {
         e.currentTarget
            .closest(".swiper-slide-active")
            .classList.remove("open");
      } else {
         e.currentTarget.closest(".swiper-slide-active").classList.add("open");
      }
   }

   function closePlaylists() {
      document.querySelector(".swiper-slide-active").classList.remove("open");
   }

   function addPlaylist(e) {
      if (e.currentTarget.classList.contains("selected")) {
         e.currentTarget.classList.remove("selected");
      } else {
         e.currentTarget.classList.add("selected");
      }
   }

   // Song Progress Bar

   function formatTime(seconds) {
      minutes = Math.floor(seconds / 60);
      minutes = minutes >= 10 ? minutes : "0" + minutes;
      seconds = Math.floor(seconds % 60);
      seconds = seconds >= 10 ? seconds : "0" + seconds;
      return minutes + ":" + seconds;
   }

   function progressBar() {
      var songDuration = document.querySelector(".swiper-slide-active audio")
      .duration,
          endTime = document.querySelector(".endTime"),
          songAudio = document.querySelector(".swiper-slide-active audio"),
          currentTime = document.querySelector(".currentTime");

      endTime.innerHTML = formatTime(songDuration);

      songAudio.ontimeupdate = function() {
         var progress = document.querySelector(".progress");
         progress.style.width =
            songAudio.currentTime * 100 / songDuration + "%";
         currentTime.innerHTML = formatTime(songAudio.currentTime);
      };
   }

   ////////////////
   // Call Functions
   ////////////////

   changeBg();
   progressBar();
   changeBgColor();

   wrapper.style.height = window.innerHeight + "px";

   console.log(window.innerHeight);
});
