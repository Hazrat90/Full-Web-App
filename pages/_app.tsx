```tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'


export default function App({ Component, pageProps }: AppProps) {
return (
<>
<Header />
<main className="max-w-4xl mx-auto px-4 py-8">
<Component {...pageProps} />
</main>
</>
)
}
```
