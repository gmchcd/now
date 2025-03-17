import CryptoJS from "crypto-js";

function encrypt(key, plaintext) {
    let keyUtf8 = CryptoJS.enc.Utf8.parse(key);
    let ciphertext = CryptoJS.AES.encrypt(plaintext, keyUtf8, {
        iv: keyUtf8,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
    return ciphertext;
}
function decrypt(key, ciphertext) {
    let keyUtf8 = CryptoJS.enc.Utf8.parse(key);
    let decrypted = CryptoJS.AES.decrypt(ciphertext, keyUtf8, {
        iv: keyUtf8,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return decrypted;
}

export { encrypt, decrypt };