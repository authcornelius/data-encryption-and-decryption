export const decrypt = (encryptedString: string, secretKey: string): string => {
    let decryptedString = '';
    const keyLength = secretKey.length;
   
    if (!encryptedString || !secretKey) {
        throw new Error('Both encrypted string and secret key are required');
    }

    const length = encryptedString.length;
   
    for (let i = 0; i < length; i++) {
        const charCode = encryptedString.charCodeAt(i);
        const keyCharCode = secretKey.charCodeAt(i % keyLength);
        decryptedString += String.fromCharCode(charCode - keyCharCode);
    }

    return decryptedString;
};
