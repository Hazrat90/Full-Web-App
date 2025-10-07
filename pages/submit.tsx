```tsx
const res = await fetch('/api/rewards', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ title, url, handle }),
})
const data = await res.json()
if (data.success) {
setMessage('Submission received — it will appear on the leaderboard after review (mock).')
setTitle('')
setUrl('')
setHandle('')
} else {
setMessage('Failed to submit — try again.')
}
} catch (err) {
setMessage('Network error')
}
}


return (
<div className="bg-white rounded-lg shadow p-6">
<h2 className="text-xl font-semibold">Submit a Contribution</h2>
<form onSubmit={handleSubmit} className="mt-4 space-y-4">
<div>
<label className="block text-sm font-medium">Title</label>
<input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" placeholder="Fix: README, Add feature X" />
</div>
<div>
<label className="block text-sm font-medium">Link / Evidence</label>
<input value={url} onChange={(e) => setUrl(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" placeholder="https://github.com/your/pr" />
</div>
<div>
<label className="block text-sm font-medium">Your handle</label>
<input value={handle} onChange={(e) => setHandle(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" placeholder="@yourhandle" />
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-indigo-600 text-white rounded">Submit</button>
<div className="text-sm text-gray-600">{message}</div>
</div>
</form>
</div>
)
}
```
