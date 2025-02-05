import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { decrypt } from '../utils/decryption';
import { encrypt } from '../utils/encryption';

interface EncryptionFormProps {
    onEncrypt: (data: string) => void;
}

const EncryptionForm: React.FC<EncryptionFormProps> = ({ onEncrypt }) => {
    const [plaintext, setPlaintext] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [encryptedInput, setEncryptedInput] = useState(''); // New state for encrypted input
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const handleEncrypt = () => {
        try {
            const encrypted = encrypt(plaintext, secretKey);
            setEncryptedText(encrypted);
            onEncrypt(encrypted);
        } catch (error) {
            console.error('Encryption error:', error);
        }
    };

    const handleDecrypt = () => {
        try {
            // Use the encrypted input field instead of encryptedText
            const decrypted = decrypt(encryptedInput, secretKey);
            setDecryptedText(decrypted);
        } catch (error) {
            console.error('Decryption error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Enter Text to Encrypt:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter plaintext"
                    value={plaintext}
                    onChangeText={setPlaintext}
                    placeholderTextColor="#666"
                    multiline
                />
                
                <Text style={styles.label}>Secret Key:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter secret key"
                    value={secretKey}
                    onChangeText={setSecretKey}
                    placeholderTextColor="#666"
                />

                <TouchableOpacity 
                    style={[styles.button, styles.encryptButton]} 
                    onPress={handleEncrypt}
                >
                    <Text style={styles.buttonText}>ENCRYPT</Text>
                </TouchableOpacity>

                {encryptedText && (
                    <View style={styles.resultBox}>
                        <Text style={styles.resultLabel}>Encrypted Result:</Text>
                        <Text style={styles.resultText} selectable>{encryptedText}</Text>
                    </View>
                )}

                <Text style={[styles.label, styles.spacedLabel]}>Enter Text to Decrypt:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter encrypted text"
                    value={encryptedInput}
                    onChangeText={setEncryptedInput}
                    placeholderTextColor="#666"
                    multiline
                />

                <TouchableOpacity 
                    style={[styles.button, styles.decryptButton]} 
                    onPress={handleDecrypt}
                >
                    <Text style={styles.buttonText}>DECRYPT</Text>
                </TouchableOpacity>

                {decryptedText && (
                    <View style={styles.resultBox}>
                        <Text style={styles.resultLabel}>Decrypted Result:</Text>
                        <Text style={styles.resultText}>{decryptedText}</Text>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
    },
    inputContainer: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    spacedLabel: {
        marginTop: 20,
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    button: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
    },
    encryptButton: {
        backgroundColor: '#4CAF50',
    },
    decryptButton: {
        backgroundColor: '#2196F3',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resultBox: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    resultLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    resultText: {
        fontSize: 16,
        color: '#333',
    }
});

export default EncryptionForm;
