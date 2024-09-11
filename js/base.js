'use strict';

const musicData = [
  {
    backgroundImage: "https://pages.souls-music.com/images/poster-1.jpg",
    posterUrl: "https://pages.souls-music.com/images/poster-1.jpg",
    title: "",
    album: "最伟大的著作[第一章]",
    year: 2024,
    artist: "Soul's Whisper",
  },
  {
    backgroundImage: "https://pages.souls-music.com/images/poster-2.jpg",
    posterUrl: "https://pages.souls-music.com/images/poster-2.jpg",
    title: "",
    album: "Soul's Whisper",
    year: 2024,
    artist: "最伟大的著作[第二章]",
  },
];

/**
 * add Aplayer
 */

const ap = new APlayer({
	container: document.getElementById('aplayer1'),
	fixed: false,
	listFolded: true,
	mutex: true,
	preload: false,
	audio: []
});

/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
	for (let i = 0, len = elements.length; i < len; i++) {
	  elements[i].addEventListener(eventType, callback);
	}
}


/**
 * PLAYLIST
 *
 * add all music in playlist, from 'musicData'
 * <span class="material-symbols-rounded">equalizer</span>
 * <img src="https://pages.souls-music.com/images/icons8-audio-wave.gif">
 */

const playlist = document.querySelector("[data-music-list]");

const current_page_url = window.location.href;
var index = current_page_url.lastIndexOf("\/");
const num_item = current_page_url.substring(index + 1, current_page_url.length) - 1;

for (let i = 0, len = musicData.length; i < len; i++) {
playlist.innerHTML += `
<li>
	<button class="music-item ${i === num_item ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
	<img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
		class="img-cover">

	<div class="item-icon">
		<span class="material-symbols-rounded">equalizer</span>
	</div>
	</button>
</li>
`;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 *
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
playlistSideModal.classList.toggle("active");
overlay.classList.toggle("active");
document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 *
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = num_item;
let lastPlayedMusic = num_item;

const changePlaylistItem = function () {
playlistItems[lastPlayedMusic].classList.remove("playing");
playlistItems[currentMusic].classList.add("playing");
}

const loadAplayerMusic = function () {
	ap.list.clear();
	switch (currentMusic+1) {
		case 1:
			ap.list.add([
				{
					name: '半岛铁盒',
					author: '周杰伦',
					url: 'https://echeverra.cn/wp-content/uploads/2022/05/周杰伦-半岛铁盒.mp3',
					pic: 'https://echeverra.cn/wp-content/uploads/2022/05/周杰伦-半岛铁盒-mp3-image.png'
				},
				{
					name: '给我一首歌的时间',
					author: '周杰伦',
					url: 'https://echeverra.cn/wp-content/uploads/2021/06/周杰伦-给我一首歌的时间.mp3',
					pic: 'https://echeverra.cn/wp-content/uploads/2021/06/周杰伦-给我一首歌的时间-mp3-image.png'
				}
			]);
		case 2:
			ap.list.add([
				{
					name: '时间',
					author: 'Soul\'s whisper',
					url: 'https://r2.souls-music.com/music/music-2.mp3',
					pic: 'https://pages.souls-music.com/images/poster-2.jpg'
				}
			]);
	}

}

addEventOnElements(playlistItems, "click", function () {
lastPlayedMusic = currentMusic;
currentMusic = Number(this.dataset.playlistItem);
changePlaylistItem();
// 加载专辑到 aplayer
loadAplayerMusic();
});
loadAplayerMusic();


/**
 * PLAYER
 *
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
// const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");


const changePlayerInfo = function () {
playerBanner.src = musicData[currentMusic].posterUrl;
playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
// playerTitle.textContent = musicData[currentMusic].title;
playerAlbum.textContent = musicData[currentMusic].album;
playerYear.textContent = musicData[currentMusic].year;
playerArtist.textContent = musicData[currentMusic].artist;

}
changePlayerInfo();
addEventOnElements(playlistItems, "click", changePlayerInfo);
