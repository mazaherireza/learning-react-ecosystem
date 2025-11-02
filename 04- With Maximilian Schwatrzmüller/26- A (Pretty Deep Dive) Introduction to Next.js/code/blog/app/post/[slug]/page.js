export default async function PostPage({ params }) {
  const { slug } = await params;

  return (
    <main>
      <h1>The Post</h1>
      <p>{slug}</p>
    </main>
  );
}
