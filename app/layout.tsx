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
        <head></head>
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
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