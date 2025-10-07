```tsx
export default function BuilderCard({ builder }: { builder: any }) {
return (
<div className="bg-white rounded-lg shadow p-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
{builder.handle?.slice(1,3) || 'B'}
</div>
<div className="flex-1">
<div className="font-semibold">{builder.name}</div>
<div className="text-sm text-gray-500">{builder.handle}</div>
</div>
<div className="text-right">
<div className="text-lg font-semibold">{builder.points}</div>
<div className="text-xs text-gray-500">points</div>
</div>
</div>
</div>
)
}
```
