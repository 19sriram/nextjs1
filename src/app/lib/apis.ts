async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users",{
        cache:'no-store'
    });
    if(!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}
 async function getPosts(num: number = 10){
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${num}`, {
        cache:'no-store'
    }
    );
    if(!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
 }

 export {
    getPosts,
    getData
 }