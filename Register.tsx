import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Title from './components/Title';  // Impor komponen Title
import Input from './components/Input';  // Impor komponen Input (sebelumnya TextInputField)
import Button from './components/Button';  // Impor komponen Button

const App = () => {
  // Menyimpan setiap input ke dalam state
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Fungsi untuk menangani klik tombol Register
  const handleRegister = () => {
    const userData = {
      name,
      username,
      email,
      address,
      phoneNumber,
    };

    // Menampilkan data di console log
    console.log('User Data:', userData);

    // Contoh menampilkan alert jika diperlukan
    Alert.alert('Registration Successful', `Welcome ${name}`);
  };

  return (
    <View style={styles.container}>
      <Title text="Registration" />
      <Input placeholder="Masukan nama lengkap anda" value={name} onChangeText={setName} />
      <Input placeholder="Masukan username anda" value={username} onChangeText={setUsername} />
      <Input placeholder="Masukan email anda" value={email} onChangeText={setEmail} />
      <Input placeholder="Masukan alamat anda" value={address} onChangeText={setAddress} />
      <Input
        placeholder="Masukan Nomor telepon anda"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default App;
