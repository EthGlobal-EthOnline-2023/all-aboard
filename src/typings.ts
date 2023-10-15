import type { User } from "@react-native-google-signin/google-signin";

export interface UseGoogleSignInType {
  signIn: () => Promise<User | null>
  signOut: () => Promise<boolean>
  getCurrentUser: () => Promise<User | null>
  currentUser: User | null
}