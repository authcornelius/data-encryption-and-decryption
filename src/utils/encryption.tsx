function encrypt(plaintext: string, secretKey: string): string {
    let encrypted = '';
    for (let i = 0; i < plaintext.length; i++) {
        const charCode = plaintext.charCodeAt(i);
        const keyCharCode = secretKey.charCodeAt(i % secretKey.length);
        encrypted += String.fromCharCode(charCode + keyCharCode);
    }
    return encrypted;
}

export default encrypt;