import '@styles/global.css';

export const metadata = {
  title: 'ChatGPT App',
  description: 'This is not ChatGPT!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
}
