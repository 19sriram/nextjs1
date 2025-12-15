'use client';

import { useEffect, useState } from "react";

type User = { id: number; name: string;[key: string]: any; todos?: Todo[] };
type Todo = { userId: number; id: number; title: string; completed: boolean };

export const WithFetchWrapper = () => {
    const [userData, setUserData] = useState<User[]>([]);
    const transformData = (users: any, todos: any) => {
        const todoList: Record<number, Todo[]> = {};
        for (const todo of todos) {
            if (!todoList[todo.userId]) {
                todoList[todo.userId] = []
            }
            todoList[todo.userId].push(todo);
        }

        const userList = users.map((user: User) => (
            {
                ...user,
                todos: todoList[user.id] || []
            }
        ));
        console.log('userList', userList);
        setUserData(userList);
    }
    async function getData() {
        const urls = [
            'https://jsonplaceholder.typicode.com/users',
            'https://jsonplaceholder.typicode.com/todos',
        ];
        try {
            const [users, todos] = await Promise.all(
                urls.map(url => fetch(url).then(res => res.json()))
            );
            transformData(users, todos);
        } catch (e) {
            console.error(e);
        }


    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            {userData.length === 0 ? (
                <p>Fetching...</p>
            ) : (
                userData.map((user: User) => (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <ul>
                            <li>{user?.todos?.length}</li>
                        </ul>
                    </div>
                ))
            )}
        </>
    );
}
