import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
// import { IPost } from "@/interface/types"; // Adjust path as needed
import toast from "react-hot-toast"; // Import react-hot-toast
import client from "@/app/services/api";
import { ApiError } from "next/dist/server/api-utils";

async function deletePost(id: string): Promise<void> {
  return toast.promise(client.delete(`/all/${id}`), {
    loading: "Deleting Post",
    success: "Success!",
    error: (err: ApiError) => err.message,
  });
}

interface DeleteCellProps {
  postId: string;
}

export const DeleteCell = ({ postId }: DeleteCellProps) => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    await deletePost(postId);
    queryClient.invalidateQueries({ queryKey: ["posts"] });
    setOpen(false);
  };

  return (
    <div className="flex gap-2 text-left min-w-40">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this post? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
