import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import EncryptionForm from './src/components/EncryptionForm';

export default function App() {
  const [encryptedData, setEncryptedData] = useState<string>('');
  
  const handleEncryption = (data: string) => {
    setEncryptedData(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Encryption App</Text>
      <EncryptionForm onEncrypt={handleEncryption} />
      {encryptedData ? (
        <Text style={styles.output}>Encrypted Data: {encryptedData}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  output: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
  },
});