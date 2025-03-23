"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useQueryClient } from "@tanstack/react-query";
import { ICreatePost, IPost } from "@/interface/types"; // Adjust path
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import client from "@/app/services/api";
import { ApiError } from "next/dist/server/api-utils";
import Markdown from "react-markdown";

async function updatePost(
  id: string,
  data: Partial<ICreatePost>
): Promise<void> {
  return toast.promise(client.put(`/all/${id}`, data), {
    loading: "Deleting Post",
    success: "Success!",
    error: (err: ApiError) => err.message,
  });
}

interface EditCellProps {
  row: IPost; // Pass the entire row.original object
}

export const EditCell = ({ row }: EditCellProps) => {
  const queryClient = useQueryClient();
  const [description, setDescription] = useState<string>(row.description);

  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm<ICreatePost>({
    defaultValues: {
      title: row.title,
      description: row.description,
      type: row.type,
    },
  });

  const onSubmit = async (data: ICreatePost) => {
    try {
      await updatePost(row._id, data)
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setOpen(false);
      reset(data); // Keep the form updated with the new values
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="flex gap-2 text-left min-w-40">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Post</DialogTitle>
            <DialogDescription>
              Modify the post details below.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" {...register("title")} />
            </div>
              <Label
                htmlFor="description"
                className="col-span-1 text-right text-lg font-bold text-white"
              >
                Description
              </Label>
            <div className="grid grid-cols-2 items-center gap-4">
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
            <div className="grid gap-2">
              <Label htmlFor="type">Type</Label>
              <select
                id="type"
                {...register("type")}
                className="rounded-md border bg-gray-200 p-2 text-black"
              >
                <option value="npc">NPC</option>
                <option value="weapon">Weapon</option>
                <option value="location">Location</option>
                <option value="armour">Armour</option>
                <option value="item">Item</option>
              </select>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
                type="button"
              >
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
