let maksimal = parseInt(prompt('masukan nilai maksimal'))
while (!maksimal) {
    maksimal = parseInt(prompt('masukan nilai maksimal'))
}

const targetNum = Math.floor(Math.random() * maksimal + 1)
console.log(targetNum)

let guess = parseInt(prompt('isi tebakan perta mu'))

while ( guess !== targetNum ) {
    if ( guess > targetNum ) {
        guess = parseInt(prompt('tebakan terlalu tinggi'))
    } else {
        guess = parseInt(prompt('tebakan terlalu rendah'))
    }
}

alert('Selamat Tebakan Anda Benar')