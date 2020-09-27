decodeMorse = (morseCode) => morseCode.split(' ').map(word => MORSE_CODE[word] || ' ').join('').replace(/ +(?= )/g,'').trim()
