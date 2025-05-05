

const getSelectValue = (selectObj) => {

    if(!selectObj) {
        return undefined;
    }  
    const option = selectObj.options[selectObj.selectedIndex];
    return option.value;
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
            const duration = document.getElementById('sound-duration')?.value;
            
            if (note && sharpFlat && octave && waveform) {
                const realNote = `${note.trim()}${sharpFlat.trim()}`;
                if (duration && duration.length > 0) {
                    const tone = window.soundPlayer.setNote(waveform, realNote, octave);
                    window.soundPlayer.playNotes([tone], duration);
                }
            }
        }
    });
});
