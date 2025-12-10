'use server';

import { getPosts, getData } from "@/app/lib/apis";

export async function fetchPosts(num: number) {
  return await getPosts(num);
}

export async function fetchData(){
    return await getData();
}