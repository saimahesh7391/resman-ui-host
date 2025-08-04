// // resmanui-host/src/auth/AuthContext.tsx
// import React, { createContext, useContext, useState, useEffect } from 'react';
// // import jwtDecode from 'jwt-decode';

// interface AuthContextType {
//   user: { id: string; role: string; email: string } | null;
//   setToken: (token: string) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<AuthContextType['user']>(null);

//   const setToken = (token: string) => {
//     localStorage.setItem('token', token);
//     const decoded: { id: string; role: string; email: string } = jwtDecode(token);
//     setUser(decoded);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//   };

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const decoded: { id: string; role: string; email: string } = jwtDecode(token);
//         setUser(decoded);
//       } catch {
//         logout();
//       }
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setToken, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error('useAuth must be used within AuthProvider');
//   return context;
// };
