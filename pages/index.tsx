```tsx
import Link from 'next/link'


export default function Home() {
return (
<div className="space-y-6">
<section className="bg-white rounded-lg shadow p-6">
<h2 className="text-2xl font-bold">What is Builder Rewards?</h2>
<p className="mt-2 text-gray-700">This portal tracks and rewards builders who contribute to public goods for Talent Protocol. Use the Submit page to propose a contribution or view the leaderboard to see top builders.</p>
<div className="mt-4 flex gap-3">
<Link href="/submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Submit Contribution</Link>
<Link href="/leaderboard" className="px-4 py-2 border rounded">View Leaderboard</Link>
</div>
</section>


<section className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white rounded-lg shadow p-4">
<h3 className="font-semibold">How rewards work</h3>
<ol className="mt-2 list-decimal list-inside text-gray-700">
<li>Submit your contribution with evidence.</li>
<li>Maintainers review and assign points.</li>
<li>Points are tallied on the leaderboard.</li>
</ol>
</div>
<div className="bg-white rounded-lg shadow p-4">
<h3 className="font-semibold">Next steps</h3>
<p className="mt-2 text-gray-700">Integrate a backend, add auth (Discord/GitHub), or connect an onchain contract to mint NFTs or tokens as rewards.</p>
</div>
</section>
</div>
)
}
```
