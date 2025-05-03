

const getSelectValue(selectObj) {

    if(!selectObj) {
        return undefined;
    }
    console.log(selectObj.selectedIndex);
}

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', event => {
        const target = event?.target?.id;
        if (target === 'form-submit') {
            // handles to elements
            const note = document.getElementById('sound-note');
            const sharpFlat = document.getElementById('sound-sharp-flat');
            const octave = document.getElementById('sound-octave');
            const waveforme = document.getElementById('sound-waveform');
            const duration = document.getElementById('sound-duration');
            
            console.log(getSelectValue(note));
        }
    });
});