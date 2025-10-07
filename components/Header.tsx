```tsx
import Link from 'next/link'


export default function Header() {
return (
<header className="bg-white shadow-sm">
<div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
<h1 className="text-xl font-semibold">Talent Protocol — Builder Rewards</h1>
<nav className="space-x-4">
<Link href="/" className="hover:underline">Home</Link>
<Link href="/submit" className="hover:underline">Submit</Link>
<Link href="/leaderboard" className="hover:underline">Leaderboard</Link>
</nav>
</div>
</header>
)
}
```
