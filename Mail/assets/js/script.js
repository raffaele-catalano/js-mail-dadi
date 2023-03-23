

// 1
const mailAccepted = [
    'stefano@boolean.it',
    'luca@boolean.it',
    'loris@boolean.it',
    'marco@boolean.it',
    'raffaele@boolean.it',
    'simona@boolean.it',
]
    console.log('array email consentite ->',mailAccepted);

// 2
const insertMail = prompt('Inserisci la tua Mail', "xyz@boolean.it");

console.log('mail inserita ->', insertMail);

// 3 + 4 + 5
let mail = false;

for (let i = 0; i < mailAccepted.length; i++) {
    if (insertMail === mailAccepted[i]) {
        mail = true;
    }

    console.log(mailAccepted[i]);
}

if (mail === true) {
    console.log('Accesso Eseguito');
    document.getElementById('output').innerHTML = `
    <i class="fa-solid fa-circle-check" style="color: #1ed760;"></i> Accesso Eseguito`
} else {
    console.warn('Accesso Negato');
    document.getElementById('output').innerHTML = `
    <i class="fa-solid fa-circle-xmark" style="color: #e10000;"></i> Accesso Negato`
}


// soluzione "moderna"

// if (mailAccepted.includes(insertMail)) {
//     console.log('Login effettuato');
// } else {
//     console.warn('Non puoi accedere');
// }