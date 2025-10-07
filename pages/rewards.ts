```ts
import { NextApiRequest, NextApiResponse } from 'next'


// Simple in-memory mock. Not persistent across restarts.
let builders = [
{ name: 'Aisha Khan', handle: '@aisha', points: 120 },
{ name: 'Diego Silva', handle: '@diego', points: 95 },
{ name: 'Sana Rahman', handle: '@sana', points: 80 },
]


export default function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method === 'GET') {
// Return sorted leaderboard
const sorted = builders.sort((a, b) => b.points - a.points)
return res.status(200).json({ builders: sorted })
}


if (req.method === 'POST') {
const { title, url, handle } = req.body
if (!handle) return res.status(400).json({ success: false, message: 'handle required' })


// Find builder or create
let found = builders.find(b => b.handle === handle)
if (!found) {
found = { name: handle.replace('@',''), handle, points: 10 }
builders.push(found)
} else {
found.points += 10 // mock reward for submission
}


return res.status(201).json({ success: true, builder: found })
}


res.setHeader('Allow', ['GET', 'POST'])
res.status(405).end(`Method ${req.method} Not Allowed`)
}
```
