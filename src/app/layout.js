"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { useReducer } from "react";
import { appReducer } from "@/reducers/appReducer";
import { init } from "@/utils/init";
import { Provider } from "@/context/appContect";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [state, dispatch] = useReducer(appReducer, init)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider value={{ state, dispatch }}>
          {children}
        </Provider>


      </body>
    </html>
  );
}
