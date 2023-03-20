import aes from "crypto-js/aes.js";
import crypto from "crypto-js";

export const useCrypto = () => {
    function encrypt(key: string, input: string) {
        return aes.encrypt(input, key).toString();
    }
    function decrypt(key: string, ciphertext: string) {
        return aes.decrypt(ciphertext, key).toString(crypto.enc.Utf8);
    }
    return {
        encrypt,
        decrypt
    }
}