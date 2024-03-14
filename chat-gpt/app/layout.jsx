import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

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

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
