import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.container}> 
      <Text>Profile</Text>
    </ScrollView>
  )
}
const styles = StyleSheet .create({
  container: {
    flex: 1,
  }
})

export default Profile