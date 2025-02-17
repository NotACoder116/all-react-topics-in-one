import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import LearnReactQuery from "./LearnReactQuery";

const createPost = (newPost) => {
  const response = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newPost),
  });

  return response.json();
};

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();
  const { mutate } = useMutation({ 
    mutationFn: createPost,
    onSuccess: () => {
        queryClient.invalidateQueries(["posts"])
    },
    onMutate: async (newPost) => {
        await queryClient.cancelQueries(["posts"]);
        const previousPosts = queryClient.getQueryData(["posts"]);
        queryClient.setQueryData(["posts"], old => [
            ...old,
            { id: Date.now(), ...newPost }
        ]);

        return { previousPosts };
    },
    onError: (err, newPost, context) => {
        queryClient.setQueryData(["posts"], context.previousPosts)
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ title, body: "This is a new post" });
  };

  return (
    <form>
      <input className="border-2 border-indigo-400" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <LearnReactQuery />
    </form>
  );
};

export default CreatePost;
