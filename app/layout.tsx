export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div>
        <h1>Welcome to Ethereum Blogs</h1>
        <p>We learn about to create web3.0 app with Nextjs 👽</p>
        <br />
      </div>
    </header>
  )
  const footer = (
    <footer>
      <div>
        <p>Developed 💻 by Amitabh😁</p>
        <br/>
      </div>
    </footer>
  )
  return (
    <html>
      <head />
      <body>
        {header}
        {children}
        {footer}
        </body>
    </html>
  )
}
