import { ColumnDef } from "@tanstack/react-table";
import { IPost } from "@/interface/types";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Markdown from "react-markdown";
import { DeleteCell } from "@/components/delete";
import { EditCell } from "@/components/edit";

export const columns: ColumnDef<IPost>[] = [
  {
    id: "sno",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting()}>
        S.No
        {column.getIsSorted() === "asc" ? (
          <ArrowUp className="ml-2 h-4 w-4" />
        ) : column.getIsSorted() === "desc" ? (
          <ArrowDown className="ml-2 h-4 w-4" />
        ) : (
          <ArrowUpDown className="ml-2 h-4 w-4" />
        )}
      </Button>
    ),
    cell: ({ row }) => <div>{row.index + 1} </div>,
    enableSorting: true,
    enableHiding: false,
  },
  // {
  //   id: "select",
  //   header: "Select",
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  // },
  {
    accessorKey: "title",
    header: () => {
      return <div className="text-left">Title</div>;
    },
    cell: ({ row }) => (
      <div className="flex gap-2 text-left min-w-40">{row.original.title}</div>
    ),
  },
  {
    accessorKey: "description",
    header: () => {
      return <div className="text-left">Description</div>;
    },
    cell: ({ row }) => (
      <div className="flex gap-2 text-left min-w-40">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              View Description
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Description</DialogTitle>
            </DialogHeader>
            <Markdown>{row.original.description}</Markdown>
          </DialogContent>
        </Dialog>
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: () => {
      return <div className="text-left">Type</div>;
    },
    cell: ({ row }) => (
      <div className="flex gap-2 text-left min-w-40">{row.original.type}</div>
    ),
  },
  {
    accessorKey: "edit",
    header: () => {
      return <div className="text-left">Edit</div>;
    },
    cell: ({ row }) => (
      <div className="flex gap-2 text-left min-w-40">
        <EditCell row={row.original} />
      </div>
    ),
  },
  {
    accessorKey: "delete",
    header: () => {
      return <div className="text-left">Delete</div>;
    },
    cell: ({ row }) => (
      <div className="flex gap-2 text-left min-w-40">
        <DeleteCell postId={row.original._id} />
      </div>
    ),
  },
];
