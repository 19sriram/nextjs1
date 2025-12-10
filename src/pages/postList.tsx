'use client';

const PostListComponent = (props:any)=>{
    const {posts} = props;
    console.log('PostListComponent users:', posts);
    return (
        <>
        { posts?.map((u: any) => (
          <li key={u.id}>
            {u.id}
          </li>
        ))}
        </>
    )
}
export default PostListComponent;