import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useUserStore from '@/hooks/use-userstore';

const Page = () => {
    const {setIsGuest} = useUserStore();
  return (
    <View>
      <Text>My inside page </Text>
      <Button  title="Go login" onPress={() => setIsGuest(false)}/>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})