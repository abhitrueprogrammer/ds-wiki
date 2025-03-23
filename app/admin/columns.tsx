import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { IPost } from "@/interface/types";

export const columns: ColumnDef<IPost>[] = [
  {
    id: "sno",
    header: "S.No.",
    cell: ({ row }) => <div>{row.index + 1}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    id: "select",
    header: "Select",
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="rounded-[5px] cursor-pointer border-gray-300 data-[state=checked]:bg-[#9d00f6]"
      />
    ),
  },
  {
    accessorKey: "title",
    header: () => {
      return <div className="text-left">Title</div>;
    },
    cell: ({ row }) => (
      <div className="flex gap-2 text-left min-w-40">
        {row.original.title}
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: () => {
      return <div className="text-left">Description</div>;
    },
    cell: ({ row }) => (
      <div className="flex gap-2 text-left min-w-40">
        {row.original.description}
      </div>
    ),
  },
  {
    accessorKey: "edit",
    header: () => {
      return <div className="text-left">Edit</div>;
    },
    cell: ({ row }) => (
      <div className="flex gap-2 text-left min-w-40">
        Reject
      </div>
    ),
  },
  {
    accessorKey: "approve",
    header: () => {
      return <div className="text-left">Reject</div>;
    },
    cell: ({ row }) => (
      <div className="flex gap-2 text-left min-w-40">
        Reject
      </div>
    ),
  },
  {
    accessorKey: "reject",
    header: () => {
      return <div className="text-left">Approve</div>;
    },
    cell: ({ row }) => (
      <div className="flex gap-2 text-left min-w-40">
        Approve
      </div>
    ),
  },
];
