export const encrypt = (plainText: string, secretKey: string): string => {
    let encryptedString = '';
    const keyLength = secretKey.length;
   
    if (!plainText || !secretKey) {
        throw new Error('Both plaintext and secret key are required');
    }

    const length = plainText.length;
   
    for (let i = 0; i < length; i++) {
        const charCode = plainText.charCodeAt(i);
        const keyCharCode = secretKey.charCodeAt(i % keyLength);
        encryptedString += String.fromCharCode(charCode + keyCharCode);
    }

    return encryptedString;
};
