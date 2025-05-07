const posts = [
  {
    id: '1',
    title: 'First Post',
    content: 'This is the first post',
    author: 'John Doe',
    publishedAt: new Date()
  }
]

export default function handler (req, res) {
  res.status(200).json(posts)
}
