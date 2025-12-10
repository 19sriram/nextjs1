
import { PostsWrapper } from "@/components/PostsWrapper";
import { fetchPosts, fetchData } from "@/actions/posts";
import ListComponent from "@/pages/userList";


 async function Home() {
  const users = await fetchData();
  const posts = await fetchPosts(10);

  console.log('Server - users:', users);
  console.log('Server - posts:', posts);

  

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h3>Lists</h3>
        <ListComponent users={users} />
        <PostsWrapper initialPosts={posts} />
      </main>
    </div>
  );
}

export default Home;

