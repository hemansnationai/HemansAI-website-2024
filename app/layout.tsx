import { FC } from "react";
import "./app.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider"


const RootLayout: FC = ({ children }) => {
  return (
    <>
      <html>
        <head>
          <link rel="icon" sizes="16x16" href="images/logo.ico" />
          <title>Dextar</title>
        </head>
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme=""
            enableSystem
            disableTransitionOnChange
          >
          <ToastContainer />
          <div className="">
            <div className="min-h-screen">{children}</div>
          </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
};
export default RootLayout;