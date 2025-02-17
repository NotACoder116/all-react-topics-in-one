import { useQuery } from '@tanstack/react-query';
import React from 'react';

const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Error fetching data");
    return response.json();
}

const LearnReactQuery = () => {
    const { data, isLoading, error } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts, staleTime: 5000 });

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error occured</p>
  return (
    <div>{data?.map(eachData => <p key={eachData.title}>{eachData.title}</p>)}</div>
  )
}

export default LearnReactQuery