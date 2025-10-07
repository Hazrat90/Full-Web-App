```tsx
import useSWR from 'swr'
import BuilderCard from '../components/BuilderCard'


const fetcher = (url: string) => fetch(url).then(r => r.json())


export default function Leaderboard() {
const { data, error } = useSWR('/api/rewards', fetcher)


if (error) return <div>Failed to load leaderboard.</div>
if (!data) return <div>Loading...</div>


return (
<div className="space-y-4">
<div className="bg-white rounded-lg shadow p-4">
<h2 className="text-xl font-semibold">Leaderboard</h2>
<p className="text-sm text-gray-500">Top builders by points (mock data)</p>
</div>


<div className="grid gap-4">
{data.builders.map((b: any) => (
<BuilderCard key={b.handle} builder={b} />
))}
</div>
</div>
)
}
```
