

const getSelectValue = (selectObj) => {

    if(!selectObj) {
        return undefined;
    }
    return selectObj.options[selectObj.selectedIndex];
}

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', event => {
        const target = event?.target?.id;
        if (target === 'form-submit') {
            // handles to elements
            const note = getSelectValue(document.getElementById('sound-note'));
            const sharpFlat = getSelectValue(document.getElementById('sound-sharp-flat'));
            const octave = getSelectValue(document.getElementById('sound-octave'));
            const waveform = getSelectValue(document.getElementById('sound-waveform'));
            const duration = getSelectValue(document.getElementById('sound-duration'));
            
            console.log(note, sharpFlat, octave, waveform, duration);
        }
    });
});