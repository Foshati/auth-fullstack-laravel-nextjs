const getData = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/posts", {
    method: "GET",
    cache: "no-store",
  });
  if (res.ok) {
    const data = await res.json();
    return data.posts;
  } else {
    throw new Error(res.status);
  }
};

export default async function Blogs() {
  const postsData = await getData();

  return (
    <div className="container p-4 mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {postsData.map((post) => (
          <div key={post.id} className="p-4 bg-black card">
            <div className="card-body">
              <h2 className="overflow-hidden card-title text-ellipsis">
                {post.title}
              </h2>
              <p className="overflow-hidden break-words">{post.body}</p>
              <div className="justify-end card-actions">
                <button className="btn">Read more..</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
