let pianoKeys = document.querySelectorAll('.key')
function playSound(newURL)
{
    new Audio(newURL).play()
}

pianoKeys.forEach((pianoKey,i) => {
    const newURL = '24/key' + (i+1) + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newURL))
})
