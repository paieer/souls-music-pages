'use strict';

const musicData = [
	{
		backgroundImage: "https://pages.souls-music.com/images/album-1.jpg",
		posterUrl: "https://pages.souls-music.com/images/album-1.jpg",
		title: "",
		album: "最伟大的著作[第一章]",
		year: 2024,
		artist: "Soul's Whisper",
	},
	{
		backgroundImage: "https://pages.souls-music.com/images/album-2.jpg",
		posterUrl: "https://pages.souls-music.com/images/album-2.jpg",
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
	container: document.getElementById('aplayer'),
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
const num_item = current_page_url.substring(index + 1, current_page_url.length);

for (let i = 0, len = musicData.length; i < len; i++) {
	playlist.innerHTML += `
<li>
	<button class="music-item ${i === (num_item - 1) ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
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

let firstLoad = true;
let currentMusic = num_item - 1;
let lastPlayedMusic = num_item - 1;

const changePlaylistItem = function () {
	playlistItems[lastPlayedMusic].classList.remove("playing");
	playlistItems[currentMusic].classList.add("playing");
}

const loadAplayerMusic = function () {
	ap.list.clear();
	switch (currentMusic + 1) {
		case 1:
			ap.list.add([
				{
					name: '一千零一夜',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-01.mp3',
					pic: 'https://pages.souls-music.com/images/1-01.jpg'
				},
				{
					name: '傲慢与偏见',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-02.mp3',
					pic: 'https://pages.souls-music.com/images/1-02.jpg'
				},
				{
					name: '奥德赛',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-03.mp3',
					pic: 'https://pages.souls-music.com/images/1-03.jpg'
				},
				{
					name: '变形记',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-04.mp3',
					pic: 'https://pages.souls-music.com/images/1-04.jpg'
				},
				{
					name: '老实人',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-05.mp3',
					pic: 'https://pages.souls-music.com/images/1-05.jpg'
				},
				{
					name: '李尔王',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-06.mp3',
					pic: 'https://pages.souls-music.com/images/1-06.jpg'
				},
				{
					name: '简爱',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-07.mp3',
					pic: 'https://pages.souls-music.com/images/1-07.jpg'
				},
				{
					name: '漂亮朋友',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-08.mp3',
					pic: 'https://pages.souls-music.com/images/1-08.jpg'
				},
				{
					name: '理想国',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-09.mp3',
					pic: 'https://pages.souls-music.com/images/1-09.jpg'
				},
				{
					name: '少年维特之烦恼',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-10.mp3',
					pic: 'https://pages.souls-music.com/images/1-10.jpg'
				},
				{
					name: '喧哗与骚动',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-11.mp3',
					pic: 'https://pages.souls-music.com/images/1-11.jpg'
				},
				{
					name: '屠场',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-12.mp3',
					pic: 'https://pages.souls-music.com/images/1-12.jpg'
				},
				{
					name: '罪与罚',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-13.mp3',
					pic: 'https://pages.souls-music.com/images/1-13.jpg'
				},
				{
					name: '圣诞颂歌',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-14.mp3',
					pic: 'https://pages.souls-music.com/images/1-14.jpg'
				},
				{
					name: '爱神·第二十六首',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/1-15.mp3',
					pic: 'https://pages.souls-music.com/images/1-15.jpg'
				}
			]);

			break;
		case 2:
			ap.list.add([
				{
					name: '阿特拉斯耸耸肩',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/2-01.mp3',
					pic: 'https://pages.souls-music.com/images/2-01.jpg'
				},
				{
					name: '德伯家的苔丝',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/2-02.mp3',
					pic: 'https://pages.souls-music.com/images/2-02.jpg'
				},
				{
					name: '愤怒的葡萄',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/2-03.mp3',
					pic: 'https://pages.souls-music.com/images/2-03.jpg'
				},
				{
					name: '金色的笔记',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/2-04.mp3',
					pic: 'https://pages.souls-music.com/images/2-04.jpg'
				},
				{
					name: '静静的顿河',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/2-05.mp3',
					pic: 'https://pages.souls-music.com/images/2-05.jpg'
				},
				{
					name: '巨人传',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/2-06.mp3',
					pic: 'https://pages.souls-music.com/images/2-06.jpg'
				},
				{
					name: '你往何处去',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/2-07.mp3',
					pic: 'https://pages.souls-music.com/images/2-07.jpg'
				},
				{
					name: '人性的枷锁',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/2-08.mp3',
					pic: 'https://pages.souls-music.com/images/2-08.jpg'
				},
				{
					name: '神曲',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/2-09.mp3',
					pic: 'https://pages.souls-music.com/images/2-09.jpg'
				},
				{
					name: '万历十五年',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/2-10.mp3',
					pic: 'https://pages.souls-music.com/images/2-10.jpg'
				},
				{
					name: '午夜的孩子',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/2-11.mp3',
					pic: 'https://pages.souls-music.com/images/2-11.jpg'
				},
				{
					name: '中午的黑暗',
					artist: "魂音乐队",
					url: 'https://mp3.souls-music.com/download/2-12.mp3',
					pic: 'https://pages.souls-music.com/images/2-12.jpg'
				}
			]);
			break;
	}
	if (firstLoad) {
		firstLoad = false;
	} else {
		ap.play();
	}
}

addEventOnElements(playlistItems, "click", function () {
	lastPlayedMusic = currentMusic;
	currentMusic = Number(this.dataset.playlistItem);
	loadAplayerMusic();
	changePlaylistItem();
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
