const getSelectValue = (selectObj) => {

    if (!selectObj) {
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

            if (note && octave && waveform) {
                const realNote = `${note.trim()}${sharpFlat?.trim()}`;
                if (duration && duration.length > 0) {
                    const tone = window.soundPlayer.setNote(waveform, realNote, octave);
                    window.soundPlayer.playNotes([tone], duration);
                }
            }
        }
    });
});

window.addEventListener('load', () => {
    const canvasParent = document.getElementById('clock-parent-node');
    if (canvasParent && window.canvasRef?.create) {
        const clock = window.canvasRef.create('analog-clock', 'clock-parent-node', 200, 200);
        if (clock) {
            const x = 100, 
		y = 100,
		size = 90;
            clock.rectangle(0, 0, 200, 200, {
                fillStrokeClear: 'fill',
                color: '#f5f5f5'
            });
            clock.circle(x, y, 90, {
                color: 'black'
            });
            for (let i = 0; i < 360; i += 15) {
                clock.line(x - size, y, x + size, y, {
                    rotateAngle: i,
                    color: 'black'
                });
            }
            clock.circle(x, y, size - 20, {
                fillStrokeClear: 'fill',
                color: '#f5f5f5'
            });
            clock.circle(x, y, 8, {
                fillStrokeClear: 'fill',
                color: 'black'
            });
        }
    }
});
