'use client';

import { useState } from 'react';

import ButtonComponent from '@/pages/button';
import PostListComponent from '@/pages/postList';


type PostsWrapperProps = {
    initialPosts: any;
};

export const PostsWrapper = ({ initialPosts }: PostsWrapperProps) => {
    const [posts, setPosts] = useState(initialPosts);

    const handlePostsUpdate = (newPosts: any) => {
        setPosts(newPosts);
    };

    return (
        <>
            <PostListComponent posts={posts} />
            <ButtonComponent handlePosts={handlePostsUpdate} />
        </>
    );
};