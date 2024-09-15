import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          </ThemeProvider>
          {children}
        </body>
      </html>
    </>
  )
}
