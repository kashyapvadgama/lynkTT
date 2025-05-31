import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    Alert, 
    ActivityIndicator
} from 'react-native';
import { RootStackParamList } from '../MainPage'; 
import { NavigationProp } from '@react-navigation/native';
import { supabase } from '../Supabase/supabase'; 

const SignUpScreen: React.FC = () => {
  const [name, setName] = useState<string>(''); 
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSignUp = async () => {
    // Basic validation (name is included here as it's on the form)
    if (!name.trim() || !email.trim() || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
  
    setLoading(true);
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    setLoading(false); 

    if (authError) {
      Alert.alert('Sign Up Error', authError.message);
      return; 
    }

    if (authData.user) {
      if (!authData.session) {
        Alert.alert(
          'Sign Up Successful!',
          'Account created. Please check your email to confirm your account before logging in.'
        );
        navigation.navigate('Login'); 
      } else {
        Alert.alert('Sign Up Successful!', `Welcome, ${name}!`); 
      }
    } else {
      Alert.alert('Sign Up Error', 'Could not create user account. Please try again.');
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name" 
        value={name}
        onChangeText={setName}
        editable={!loading}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        editable={!loading}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        editable={!loading}
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleSignUp}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" /> 
        ) : (
          <Text style={styles.buttonText}>Create Account</Text>
        )}
      </TouchableOpacity>

      <Text style={{fontSize:20,paddingTop:10}}>
        Already have an account? 
        <Text onPress={() => !loading && navigation.navigate('Login')} style={{ color: 'blue', fontWeight: 'bold' }}>
          Login
        </Text>
      </Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center', 
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 40,
      textAlign: 'center',
    },
    input: {
      width: '100%',         
      borderWidth: 1,
      borderColor: '#999',
      borderRadius: 8,
      paddingHorizontal: 14,
      paddingVertical: 10,
      fontSize: 16,
      marginBottom: 20,
    },
    button: {
      width: '100%',         
      backgroundColor: '#007AFF',
      padding: 14,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
    },
  });