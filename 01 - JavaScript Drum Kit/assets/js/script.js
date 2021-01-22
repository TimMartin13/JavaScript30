function playSound(e) {
    // Get the get the correct audio for the button pressed
    const audio = document.querySelector(`audio[data-key="${ e.keyCode }"]`);
    // Get the key pressed
    const key = document.querySelector(`.key[data-key="${ e.keyCode }"]`);
    
    // If there isn't any audio linked to that key, stop
    if (!audio) { return; }

    // Rewind to the start for multiple presses
    audio.currentTime = 0;
    // Play audio
    audio.play();
    key.classList.add('playing');
}
// Stop playing the sound  
function removeTransition(e) {
    if (e.propertyName !== 'transform') { return; }
    this.classList.remove('playing');
}

// Grab all the keys
const keys = document.querySelectorAll('.key');
// Loop through each key and stop the sound
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// Play the sound when the keys are pressed
window.addEventListener('keydown', playSound);