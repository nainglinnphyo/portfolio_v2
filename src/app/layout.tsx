import './globals.css'
import favicon from '@/app/favicon.ico'
import Wrapper from './wrapper'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        <title>Naing Linn Phyo | fullstack Dev</title>
        <meta name="title" content="Naing Linn Phyo | fullstack Dev" />
        <meta name="description" content="Experienced full-stack developer skilled in building robust web applications. Proficient in front-end and back-end technologies, including JavaScript, Node.js, GoLang , PHP and SQL." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nainglinnphyo.vercel.app/" />
        <meta property="og:title" content="Naing Linn Phyo | fullstack Dev" />
        <meta property="og:description" content="Experienced full-stack developer skilled in building robust web applications. Proficient in front-end and back-end technologies, including JavaScript, Node.js, GoLang , PHP and SQL." />
        <meta property="og:image" content="https://i.postimg.cc/wvTFXLv5/meta-Image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nainglinnphyo.vercel.app/" />
        <meta property="twitter:title" content="Naing Linn Phyo | fullstack Dev" />
        <meta property="twitter:description" content="Experienced full-stack developer skilled in building robust web applications. Proficient in front-end and back-end technologies, including JavaScript, Node.js, GoLang , PHP and SQL." />
        <meta property="twitter:image" content="https://i.postimg.cc/wvTFXLv5/meta-Image.png" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GL8EBQ92BQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GL8EBQ92BQ');
        `,
          }}
        />
      </head>
      <body>
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  )
}
