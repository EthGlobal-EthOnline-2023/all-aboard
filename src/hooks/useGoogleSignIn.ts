import { useEffect, useState } from "react";
import type { UseGoogleSignInType } from "../typings";
import { GoogleSignin, type User } from '@react-native-google-signin/google-signin';

const useGoogleSignIn = (): UseGoogleSignInType => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect((): void => {
    console.log('here')
    GoogleSignin.configure()
    console.log('wow')
  }, [])

  const signIn = async (): Promise<User | null> => {
    const hasPlayService = await GoogleSignin.hasPlayServices()

    if (!hasPlayService) return null

    const user = await GoogleSignin.signIn()

    setCurrentUser(user)

    return user
  }

  const signOut = async (): Promise<boolean> => {
    await GoogleSignin.signOut()
    const user = await GoogleSignin.getCurrentUser()

    if (user) return false

    setCurrentUser(null)

    return true
  }

  const getCurrentUser = async (): Promise<User | null> => {
    const user = await GoogleSignin.getCurrentUser();
    return user
  }

  return { signIn, signOut, getCurrentUser, currentUser }
}

export default useGoogleSignIn;