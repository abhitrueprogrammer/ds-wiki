"use client";

import client from "@/app/services/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ICreatePost } from "@/interface/types";
import { handleAPIError } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type ApiError } from "next/dist/server/api-utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Markdown from "react-markdown";
export async function CreatePost(data: ICreatePost) {
  try {
    console.log(data);
    await client.post("/all", data);
  } catch (e) {
    console.log(e);
    throw handleAPIError(e);
  }
}
const Create = () => {
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset } = useForm<ICreatePost>();

  const [description, setDescription] = useState<string>(
    "**Hello** *world* - test ![A cute cat](https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80)"
  );
  const createQuestion = useMutation({
    mutationFn: async (data: ICreatePost) => {
      return toast.promise(CreatePost(data), {
        loading: "Adding Post",
        success: "Success!",
        error: (err: ApiError) => err.message,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["posts"] });
      reset();
    },
    onError: () => {
      console.log("Error occurred while creating the question");
    },
  });

  const onSubmit = (data: ICreatePost) => {
    createQuestion.mutate(data);
  };

  return (
    <div className="m-10 space-y-10 text-white">
      <div className="flex items-center">
        <h1 className=" text-white flex-grow text-center text-2xl font-bold ">
          Add Post
        </h1>
      </div>
      <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="title"
            className="text-right text-lg font-bold text-white"
          >
            Title
          </Label>
          <Input
            id="title"
            placeholder="Title of your post..."
            className="col-span-3"
            {...register("title")}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="description"
            className="col-span-1 text-right text-lg font-bold text-white"
          >
            Description
          </Label>
          <div className="col-span-3 flex gap-2">
            {/* <Editor /> */}
            <Textarea
              id="description"
              defaultValue={description}
              className="w-full"
              {...register("description")}
              onChange={(e) => setDescription(e.target.value)}
              rows={10}
            ></Textarea>
            <div className="markdown w-full border p-2">
              <Markdown>{description}</Markdown>
            </div>
          </div> 
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor="type"
            className="text-right text-lg font-bold text-white"
          >
            Type
          </Label>
          <select
            {...register("type")}
            defaultValue={"npc"}
            id="type"
            className="col-span-3 rounded-md border bg-gray-200 p-2 text-black"
          >
            <option value={"npc"}>NPC</option>
            <option value={"weapon"}>Weapon</option>
            <option value={"location"}>Location</option>
            <option value={"armour"}>Armour</option>
            <option value={"item"}>Item</option>
          </select>
        </div>

        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Create;
