const MUSIC_RESOURCE_URL = 'http://127.0.0.1:8080/music/1.mp3';
const MUSIC_RESOURCE_URL_TWO = 'http://127.0.0.1:8080/music/2.mp3';
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

function getBuffer(url) {
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';
        request.onload = () => {
            audioContext.decodeAudioData(request.response, buffer => buffer ? resolve(buffer) : reject('decoding error'));
        };
        request.onerror = error => reject(error);
        request.send();
    });
}
