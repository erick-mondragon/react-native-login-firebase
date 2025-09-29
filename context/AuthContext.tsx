import { onAuthStateChanged, User } from "@firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../constants/firebase";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      console.error("Firebase auth is not initialized.");
      setIsLoading(false);
      return;
    }

    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setIsLoading(false);
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      (usr) => {
        setIsLoading(false);
        setUser(usr);
      },
      (error) => {
        console.error("Auth state change error:", error);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
