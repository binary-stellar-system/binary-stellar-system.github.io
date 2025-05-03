

document.addEventListener('onDomContentLoaded', () => {

    // handles to elements
    const note = document.getElementById('sound-note');
    const sharpFlat = document.getElementById('sound-sharp-flat');
    const octave = document.getElementById('sound-octave');
    const waveforme = document.getElementById('sound-waveform');
    const duration = document.getElementById('sound-duration');

    document.addEventListener('click', event => {
        const target = event.target;
    
        console.log(target);
    }
});