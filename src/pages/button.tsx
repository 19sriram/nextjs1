'use client';

import { useState } from 'react';
import { fetchPosts } from "@/actions/posts";

type ButtonComponentProps = {
    handlePosts: (posts: any) => void;
};

const ButtonComponent = ({ handlePosts }: ButtonComponentProps) => {
    const [num, setNum] = useState(10);
    const onButtonclick = async () => {
        const newNum = num + 10;
        setNum(newNum);
        await fetchPosts(newNum).then((res) => {
            handlePosts(res);
        });
    }

    return (

        <>
            <button type="button" onClick={() => onButtonclick()} style={{ padding: '1em', background: 'orange' }}>
                Get now
            </button>
        </>
    )
}
export default ButtonComponent;