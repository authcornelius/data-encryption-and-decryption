import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { decrypt } from '../utils/decryption';
import encrypt from '../utils/encryption';

interface EncryptionFormProps {
    onEncrypt: (data: string) => void;
}

const EncryptionForm: React.FC<EncryptionFormProps> = ({ onEncrypt }) => {
    const [plaintext, setPlaintext] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const handleEncrypt = () => {
        const encrypted = encrypt(plaintext, secretKey);
        setEncryptedText(encrypted);
        onEncrypt(encrypted);
    };

    const handleDecrypt = () => {
        const decrypted = decrypt(encryptedText, secretKey);
        setDecryptedText(decrypted);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter plaintext"
                value={plaintext}
                onChangeText={setPlaintext}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter secret key"
                value={secretKey}
                onChangeText={setSecretKey}
            />
            <Button title="Encrypt" onPress={handleEncrypt} />
            <Text>Encrypted Text: {encryptedText}</Text>
            <Button title="Decrypt" onPress={handleDecrypt} />
            <Text>Decrypted Text: {decryptedText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
});

export default EncryptionForm;