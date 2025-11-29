import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const AppleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.appleButton}>
         <Ionicons name="logo-apple" size={18} color="white" />
      <Text style={styles.appleButtonText}>Sign in with Apple</Text>
    </TouchableOpacity>
  )
}

export default AppleAuthButton

const styles = StyleSheet.create({
    appleButton: {
         backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 17,
        borderRadius: 12,
        gap: 4, 
    },
    appleButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600', 
    },



   
})