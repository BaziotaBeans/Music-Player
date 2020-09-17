let element = {
    menu_toggle: document.querySelector('.menu-toggle'),
    menu_container: document.querySelector('.menu-container'),
    show_menu: true,
    search_icon: document.querySelector('.search-icon'),
    show_search: true,
    search_music: document.querySelector('.search-music'),
    swipper_music_list: document.querySelector('.swipper-music-list'),
    swiper_container: document.querySelector('.swiper-container'),
    show_swipper_container: true,
    toggle_list_track: document.querySelector('.ellipsis-h-container input[type="checkbox"]'),
    track_list: document.querySelector('.track-list-player'),
    track_info: document.querySelector('.middle'),
    player_container: document.querySelector('.player-container'),
    show_track_list: true,
    track_details: document.querySelector('.details'),
    beat_effect_econtainer: document.querySelector('.beat-effect'),
    track_list_content: document.querySelector('table'),
    btn_increase_volume: document.querySelector('.increase-volume'),
    btn_decrease_volume: document.querySelector('.decrease-volume'),
    btn_seek_slider: document.querySelector(".seek_audio"),
    btn_seek_volume: document.querySelector(".seek_volume"),
    start_time: document.querySelector('.start-time'),
    duration_time: document.querySelector('.end-time'),
    btn_controll_mode: document.querySelector('.control-mode'),
    btn_backward: document.querySelector('.backward'),
    btn_forward: document.querySelector('.forward'),
    btn_favorite_track_list: document.querySelector('.favorite-container input[type="checkbox"]'),
    btn_random: document.querySelector('.random-container input[type="checkbox"]'),
    btn_volume_mute: document.querySelector('.volume-mute-container input[type="checkbox"]'),
    btn_replay: document.querySelector('.replay-container input[type="checkbox"]'),
    audio: document.querySelector('#audio'),/*document.createElement('audio')*/
    img: document.querySelector('.cover img'),
    track_name_playing_top: document.querySelector('.track-playing-name-top'),
    track_album_cover_top: document.querySelector('.track-album-cover-top'),
    track_genre: document.querySelector('.track-genre'),
    track_year_realesed: document.querySelector('.track-year-released'),
    track_curr_name: document.querySelector('.details h1'),
    track_curr_artist_album: document.querySelector('.details h3'),
    show_beat_effect: true,
    track_name_bottom: document.querySelector('.player-container-mode-top .track-playing-name'),
    global: document.querySelector('html'),
    container_geral: document.querySelector('.container')
}
/**
 * Set The Primary Color
 */
let color_collection = {
    hex_color: ['#12D749','#FF0099','#1AA1FB','#FBFF4C','#FF003D','#7519EB','#FF9900','#FF564C'],
    rgba_color: [
        'rgba(18, 215, 73,.4)',
        'rgba(255,0,153,.4)',
        'rgba(26,161,251,.4)',
        'rgba(251, 255, 76,.4)',
        'rgba(255,0,61,.4)',
        'rgba(117,25,235,.4)',
        'rgba(255,153,0,.4)',
        'rgba(255,86,76,.4)'
    ],
    current_index: 0
}


/*
*   The Track Collection
*/
let track_collection = {
    track: [
        {
            artist: 'The Weeknd',
            gender: 'Trap, Hip Hop, R&B alternativo, R&B Electropop',
            year_realesed: '2018',
            album_name: 'My Dear Melancholy',
            cover: '../img/The Weeknd - Cover.gif',
            favorite_track_list: true,
            url: [
                {
                    track_name: 'Call Out My Name',
                    track_path: '../audio/My Dear Melancholy/01. Call Out My Name.mp3',
                    favorite: true
                    
                },
                {
                    track_name: 'Try Me',
                    track_path: '../audio/My Dear Melancholy/02. Try Me.mp3',
                    favorite: false
                },
                {
                    track_name: 'Wasted Times',
                    track_path: '../audio/My Dear Melancholy/03. Wasted Times.mp3',
                    favorite: false
                },
                {
                    track_name: 'I Was Never There (feat. Gesaffelstein)',
                    track_path: '../audio/My Dear Melancholy/04. I Was Never There (feat. Gesaffelstein).mp3',
                    favorite: false
                },
                {
                    track_name: 'Hurt You (feat. Gesaffelstein)',
                    track_path: '../audio/My Dear Melancholy/05. Hurt You (feat. Gesaffelstein).mp3',
                    favorite: false
                },
                {
                    track_name: 'Privilege',
                    track_path: '../audio/My Dear Melancholy/06. Privilege.mp3',
                    favorite: false
                }                
            ]
        },
        {
            artist: 'The Weeknd',
            gender: 'Trap, Hip Hop, R&B alternativo, R&B Electropop',
            year_realesed: '2018',
            album_name: 'My Dear Melancholy',
            cover: '../img/Travis Scott - Astroworld.jpg',
            favorite_track_list: false,
            url: [
                {
                    track_name: 'Call Out My Name',
                    track_path: '../audio/My Dear Melancholy/01. Call Out My Name.mp3',
                    favorite: false
                    
                },
                {
                    track_name: 'Try Me',
                    track_path: '../audio/My Dear Melancholy/02. Try Me.mp3',
                    favorite: false
                },
                {
                    track_name: 'Wasted Times',
                    track_path: '../audio/My Dear Melancholy/03. Wasted Times.mp3',
                    favorite: false
                },
                {
                    track_name: 'I Was Never There (feat. Gesaffelstein)',
                    track_path: '../audio/My Dear Melancholy/04. I Was Never There (feat. Gesaffelstein).mp3',
                    favorite: false
                },
                {
                    track_name: 'Hurt You (feat. Gesaffelstein)',
                    track_path: '../audio/My Dear Melancholy/05. Hurt You (feat. Gesaffelstein).mp3',
                    favorite: false
                },
                {
                    track_name: 'Privilege',
                    track_path: '../audio/My Dear Melancholy/06. Privilege.mp3',
                    favorite: false
                }                
            ]
        }
    ]    
}
// Control of audio element
const audio_utility = {
    index_track_list: 0,
    audio_general_info: [],
    audio_path: [],
    audio_duration: [],
    audio_track_name: [],
    index_curr_track: 0,
    audio_state: true,
    track_list_length: 0,
    track_replay: false,
    track_random: false
}
let updateTimer; 


/**
 * Menu Effect
 */
element.menu_toggle.addEventListener('click', ()=>{
    element.menu_container.classList.toggle('on', element.show_menu);
    element.swipper_music_list.classList.toggle('on', element.show_menu);
    //element.swiper_container.classList.toggle('on', element.show_menu);
    element.show_menu = !element.show_menu;
    swipper_toggle_effect();
});


/*
* Show list track
*/
element.toggle_list_track.addEventListener('click', ()=>{
    element.track_list.classList.toggle('on',element.show_track_list);
    element.track_info.classList.toggle('on',element.show_track_list);
    element.player_container.classList.toggle('on',element.show_track_list);
    element.track_details.classList.toggle('on', element.show_track_list);
    element.beat_effect_econtainer.classList.toggle('on', element.show_track_list);
    element.container_geral.classList.toggle('on',element.show_track_list);
    element.show_track_list = !element.show_track_list;
});

/*
* Swipper toggle effect
*/
function swipper_toggle_effect(){
    if(element.show_swipper_container){
        element.swiper_container.classList.remove('remove');
        element.swiper_container.classList.add('on');
    }else{
        element.swiper_container.classList.remove('on');
        element.swiper_container.classList.add('remove');
    }
    element.show_swipper_container = !element.show_swipper_container;
}

/*
* Search Icon
*/
element.search_icon.addEventListener('click', ()=>{
    if(element.show_search){
        element.search_music.style.transform = 'scaleX(1)';
        element.show_search = !element.show_search;
        element.search_icon.style.color = 'var(--white)';
    }else{
        element.search_music.style.transform = 'scaleX(0)';
        element.show_search = !element.show_search;
        element.search_icon.style.color = 'var(--grey-dark)';
    }
});
/**
 * Get all audio info
 */
function getAllAudioInfo(){
    let obj = track_collection.track;
    for(let i = 0; i < obj.length; i++) {
        audio_utility.audio_general_info.push([...obj[i].url]);
    }
}

getAllAudioInfo();


function getAllPath(){
    let obj = audio_utility.audio_general_info;
    for(let i = 0; i < obj.length; i++) {
        let tmp_str = '';
        for (let j = 0; j < obj[i].length; j++) {
            tmp_str += obj[i][j].track_path;
            if(j < obj[i].length - 1) tmp_str +=','; 
        }
        let tmp_arr = tmp_str.split(',');
        audio_utility.audio_path.push([...tmp_arr]);
    }
}
getAllPath();

let storage = window.localStorage;
function getAllDuration(){
    let obj = audio_utility.audio_path;
    for (let i = 0; i < obj.length; i++){
        let tmp_duration = [];
        for (let j = 0; j < obj[i].length; j++){
            getDuration(obj[i][j],j);
            tmp_duration.push(storage.getItem('duration'+j));   
        }   
        audio_utility.audio_duration.push([...tmp_duration]);

    }
    storage.clear();
}
getAllDuration();

function getDuration(src,index){
    let audio = new Audio();
    audio.src = src;
    audio.addEventListener('loadedmetadata', ()=>{
        storage.setItem('duration'+index,audio.duration);
    });

}

function show(){
    let obj = audio_utility.audio_duration;
    for (let i = 0; i < (obj.length); i++) {
        for (let j = 0; j < obj[i].length; j++){
        }
    }
}

//show();

function getTime(value){
    let second, minute;
    minute = Math.floor(value/60);
    second = Math.floor(value - minute * 60);
    if (minute < 10) {minute = '0' + minute;}
    if (second < 10) {second = '0' + second;}
    return {
        minute,second
    }
}

getAllDuration();



function render_track_list_player(index){
    let obj = track_collection.track, count = 0;
    for(let i = 0; i < obj[index].url.length; i++) {
        let n = i + 1;
        let time_format__ = getTime(audio_utility.audio_duration[index][i]);
        let time_format = time_format__.minute + ':' + time_format__.second; 
        //console.log(time_format);
        let html = `
        <tr class='${n} ${i == 0 ? "track-active-play" : ""}'>
            <td class="track-number"><span>${n}</span></td>
            <td class="track-name"><span>${obj[index].url[i].track_name}</span></td>
            <td class="track-duration"><span>${time_format}</span></td>
            <td class="track-favorite">
                <input type="checkbox" ${obj[index].url[i].favorite ? 'checked' : 'unchecked'}>
                <span class="favorite">
            </span></td>
        </tr>`;
        element.track_list_content.insertAdjacentHTML('beforeend',html);
    }
    setChecked__favoriteTrackList(index);
    element.img.src = obj[index].cover;
    element.track_name_playing_top.textContent = obj[index].url[0].track_name;
    element.track_name_bottom.textContent = obj[index].url[0].track_name;
    element.track_album_cover_top.textContent = obj[index].artist+' - '+obj[index].album_name;
    element.track_year_realesed.textContent = obj[index].year_realesed;
    element.track_genre.textContent = obj[index].gender;
    element.track_curr_name.textContent = obj[index].url[0].track_name;
    element.track_curr_artist_album.textContent = obj[index].artist+' - '+obj[index].album_name;

    element.start_time.textContent =  "00:00";
    element.duration_time.textContent = getTime(audio_utility.audio_duration[index][0]).minute + ":" + getTime(audio_utility.audio_duration[index][0]).second;
}

render_track_list_player(0);
/**
 * AUDIO SET
 */
element.audio.src =  audio_utility.audio_path[audio_utility.index_track_list][audio_utility.index_curr_track];
element.audio.load();
element.btn_seek_volume.value = 100;
//element.btn_seek_slider.max = audio_utility.audio_duration[audio_utility.index_track_list][audio_utility.index_curr_track];
audio_utility.track_list_length = track_collection.track[audio_utility.index_track_list].url.length;



function changeSource(index_list_track, index_curr_track){
    element.audio.src = audio_utility.audio_path[index_list_track][index_curr_track];
    element.audio.load();
}

/**
 * Play or pause
 */
element.btn_controll_mode.addEventListener('click',({target})=>{
    if(audio_utility.audio_state){
        playTrack();
    }else{
        pauseTrack();
    }
});

/**
 * Backward BTN
 */
element.btn_backward.addEventListener('click', prevTrack);
/**
 * Forward BTN
 */
element.btn_forward.addEventListener('click', nextTrack);
/**
 * Calculate Random Function
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function prevTrack(){
    if(!audio_utility.track_random){
        if (audio_utility.index_curr_track < audio_utility.track_list_length 
            && audio_utility.index_curr_track - 1 > -1)
        {
            audio_utility.index_curr_track--;
        }else {
            audio_utility.index_curr_track = 0;
        }
    }else{
        randomIndex();
    }
    
    changeSource(audio_utility.index_track_list, audio_utility.index_curr_track);
    playTrack();
    removeAllActive();
    setTrack__btn__control();
    resetValue();
    setBg__Color();
}

function nextTrack() {
    if(!audio_utility.track_random){
        if (audio_utility.index_curr_track < audio_utility.track_list_length
        && audio_utility.index_curr_track + 1 < audio_utility.track_list_length){
            audio_utility.index_curr_track++;
        }
        else{
            audio_utility.index_curr_track = 0;
        }
    }else{
        randomIndex();
    }
    changeSource(audio_utility.index_track_list, audio_utility.index_curr_track);
    playTrack();
    removeAllActive();
    setTrack__btn__control();
    resetValue();
    setBg__Color();
}
/**
 *  To calculate the random index of track Music
 */
function randomIndex(){
    let last_index = audio_utility.index_curr_track;
    let current_index = getRandomIntInclusive(0, audio_utility.track_list_length-1);
    while(last_index == current_index){
        current_index = getRandomIntInclusive(0, audio_utility.track_list_length-1);
    }
    audio_utility.index_curr_track = current_index;
}
/**
 * Favotie Album BTN
 */
element.btn_favorite_track_list.addEventListener('click', ({target})=>{
    setChecked__favoriteTrackList(audio_utility.index_track_list);
});
/**
 * Muted Album BTN
 */
element.btn_volume_mute.addEventListener('click', ({target})=>{
    if(element.btn_volume_mute.checked){
        element.audio.muted = true;
    }else{
        element.audio.muted = false;
    }
});

function setChecked__favoriteTrackList(index){
    if(element.btn_favorite_track_list.checked){
        setValue__favoriteTrackList(true,index);
        track_collection.track[index].favorite_track_list = true;
    }else{
        setValue__favoriteTrackList(false,index);
        track_collection.track[index].favorite_track_list = false;
    }
}

function setValue__favoriteTrackList(flag,index){
    element.btn_favorite_track_list.checked = flag;
    track_collection.track[index].favorite_track_list = flag;
}

function setBeat(){
    if (!element.beat_effect_econtainer.classList.contains('active')){
        element.beat_effect_econtainer.classList.add('active');
    }
}

function resetBeat(){
    if (element.beat_effect_econtainer.classList.contains('active')){
        element.beat_effect_econtainer.classList.remove('active')
    }
}


function updateText(){
    element.track_name_playing_top.textContent = track_collection.track[audio_utility.index_track_list].url[audio_utility.index_curr_track].track_name;
    element.track_curr_name.textContent = track_collection.track[audio_utility.index_track_list].url[audio_utility.index_curr_track].track_name;
    element.track_name_bottom.textContent = track_collection.track[audio_utility.index_track_list].url[audio_utility.index_curr_track].track_name;
}

element.track_list_content.addEventListener('click', ({target})=>{
    if(target.tagName != 'INPUT')
    {
        if(target.tagName == 'SPAN'){
            setActiveTrack(target.parentNode.parentNode);
        }else if(target.tagName != 'INPUT'){
            setActiveTrack(target.parentNode);
        }
    }else{
        setFavoriteTrack(target.parentNode.parentNode, target.checked);
    }
});

function setFavoriteTrack(element, flag){
    let str_tmp = element.className.toString();
    str_tmp = str_tmp.replace('track-active-play','');
    if(flag){
        track_collection.track[audio_utility.index_track_list].url[Number(str_tmp) - 1].favorite = true;
    }else{
        track_collection.track[audio_utility.index_track_list].url[Number(str_tmp) - 1].favorite = false;
    }
}


function setActiveTrack(element){
    removeAllActive();
    let str_tmp = element.className.toString();
    str_tmp = str_tmp.replace('track-active-play','');
    audio_utility.index_curr_track = Number(str_tmp) - 1;
    changeSource(audio_utility.index_track_list, audio_utility.index_curr_track);
    playTrack();
    element.classList.add('track-active-play');
    setBg__Color();
    resetValue();
}

function setTrack__btn__control(){
    let arr = [...element.track_list_content.children];
    arr[audio_utility.index_curr_track].firstChild.classList.add('track-active-play');
}

function removeAllActive(){
    let arr = [...element.track_list_content.children];
    remove(arr);
}

function remove(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].firstChild.classList.remove('track-active-play');
    }
}

function playTrack(){
    element.audio.play();
    element.btn_controll_mode.classList.remove('play');
    element.btn_controll_mode.classList.add('pause');
    audio_utility.audio_state = false;
    updateText();
    setBeat();
}

function pauseTrack(){
    element.audio.pause();
    element.btn_controll_mode.classList.remove('pause');
    element.btn_controll_mode.classList.add('play');
    audio_utility.audio_state = true;
    updateText();
    resetBeat();
}


function loadTrack(track_index){
    clearInterval(updateTimer);
}

function setVolume(){
    element.audio.volume = element.btn_seek_volume.value/100;
}

function resetValue(){
    let duration = audio_utility.audio_duration[audio_utility.index_track_list][audio_utility.index_curr_track];
    element.start_time.textContent = "00:00";
    //element.duration_time.textContent = "00:00";
    element.duration_time.textContent = `${getTime(duration).minute}:${getTime(duration).second}`;
    element.btn_seek_slider.value = 0;
}

function seekTo(){
    let duration = audio_utility.audio_duration[audio_utility.index_track_list][audio_utility.index_curr_track];
    let seekTo = duration * (element.btn_seek_slider.value/100);
    element.audio.currentTime = seekTo;
    let value = getTime(seekTo);
    element.start_time.textContent = `${getTime(seekTo).minute}:${getTime(seekTo).second}`;
}
/**------------------------------------------------------------------------------------------------------------- */

element.audio.addEventListener('timeupdate', ()=>{
    let value = getTime(element.audio.currentTime);
    let duration = audio_utility.audio_duration[audio_utility.index_track_list][audio_utility.index_curr_track];
    element.start_time.textContent = `${value.minute}:${value.second}`;
    element.btn_seek_slider.value = (element.audio.currentTime*100)/duration;
});

element.btn_seek_slider.addEventListener("input",seekTo);
element.btn_seek_volume.addEventListener("input",setVolume);


element.btn_increase_volume.addEventListener('click', handleVolumeUp);
element.btn_decrease_volume.addEventListener('click', handleVolumeDown);


function handleVolumeUp(){
    element.btn_seek_volume.value = Number(element.btn_seek_volume.value) + 20;
    element.audio.volume = element.btn_seek_volume.value/100;

}
function handleVolumeDown(){
    element.btn_seek_volume.value = Number(element.btn_seek_volume.value) - 20;
    console.log(element.btn_seek_volume.value);
    element.audio.volume = element.btn_seek_volume.value/100;
}


element.audio.addEventListener('ended', ()=>{
    if(audio_utility.track_replay){
        element.audio.currentTime = 0;
        element.audio.play();
        setBg__Color();
    }else{
        pauseTrack();
    } 
});


element.btn_replay.addEventListener('click', ()=>{
    if(element.btn_replay.checked){
        audio_utility.track_replay = true;
    }else{
        audio_utility.track_replay = false;
    }
});


element.btn_random.addEventListener('click', ()=>{
    if(element.btn_random.checked){
        audio_utility.track_random = true;
    }else{
        audio_utility.track_random = false;
    }
});




function randomIndex(){
    let last_index = color_collection.current_index;
    let current_index = getRandomIntInclusive(0, color_collection.hex_color.length - 1);
    while(last_index == current_index){
        current_index = getRandomIntInclusive(0, color_collection.hex_color.length - 1);
    }
    color_collection.current_index = current_index;
}

function setBg__Color(){
    randomIndex();
    element.global.style.setProperty('--quarterly', color_collection.hex_color[color_collection.current_index]);
    element.global.style.setProperty('--gradient_primary', color_collection.rgba_color[color_collection.current_index]);
}

// setInterval(()=>{
//     randomIndex();
//     element.global.style.setProperty('--quarterly', color_collection.hex_color[color_collection.current_index]);
//     element.global.style.setProperty('--gradient_primary', color_collection.rgba_color[color_collection.current_index]);
// },1000);