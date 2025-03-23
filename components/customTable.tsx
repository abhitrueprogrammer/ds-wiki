import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

type TableProps<T> = {
  dateSelection?: boolean;
  filterSelection?: boolean;
  columns: ColumnDef<T>[];
  pagination?: boolean;
  data: T[];
  selectAll?: boolean;
  searchBar?: boolean;
  className?: string;
};
export default function CustomTable<T>({
  pagination = true,
  data,
  selectAll = false,
  searchBar = false,
  columns,
  className,
}: TableProps<T>) {
  const [pageInput, setPageInput] = useState("");
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleSetPage = () => {
    const pageIndex = Number(pageInput) - 1;
    if (pageIndex >= 0 && pageIndex < table.getPageCount()) {
      table.setPageIndex(pageIndex);
    }
    setPageInput("");
    setPopoverOpen(false);
  };

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className={cn("rounded-lg border", className)}>
      {" "}
      <div className="bg-[#f9fafb] flex flex-col gap-2 md:flex-row md:items-center md:justify-between py-4 px-5">
        {selectAll && (
          <div className="-m-2">
            <div className="font-bold">
              {" "}
              Select the items you want in the dataset
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={
                  table.getIsAllPageRowsSelected() ||
                  (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                  table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
              />
              Select All
            </div>
          </div>
        )}
        <div className="flex  items-center space-x-2 ">
          {searchBar && (
            <div className="relative max-w-sm">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search here..."
                value={
                  (table
                    .getColumn("description")
                    ?.getFilterValue() as string) ?? ""
                }
                onChange={(event) =>
                  table
                    .getColumn("description")
                    ?.setFilterValue(event.target.value)
                }
                className="pl-8 text-sm border-1 max-w-sm" // Added padding-left to accommodate the icon
              />
            </div>
          )}
        </div>
      </div>
      <div className="rounded-md  ">
        <Table>
          <TableHeader className="bg-[#f0f2f5]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className={`   data-[state=selected]:shadow-[inset_4px_0_0_#9D00F6] data-[state=selected]:bg-[#f3e1fe] hover:bg-[#f5ebfc]`}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {pagination && (
        <div className="p-5 flex items-center  space-x-2 py-4">
          <div>
            <span className="text-sm font-bold">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </span>
          </div>
          <div>
            {[...Array(table.getPageCount()).keys()].map((page, index) => {
              if (index < 3 || index > table.getPageCount() - 3)
                return (
                  <Button
                    size="sm"
                    variant="ghost"
                    className={`${
                      index == table.getState().pagination.pageIndex
                        ? "border  border-[#9D00F6]"
                        : ""
                    } h-6 c cursor-pointer m-0 rounded-md`}
                    onClick={() => table.setPageIndex(Number(page))}
                    key={index}
                  >
                    {page + 1}
                  </Button>
                );
              else if (index === 3)
                return (
                  <Popover
                    key={index}
                    open={isPopoverOpen}
                    onOpenChange={() => setPopoverOpen(!isPopoverOpen)}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="cursor-pointer px-2 m-0 rounded-md"
                        key="ellipsis"
                      >
                        ...
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-44 p-4">
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          placeholder="Page"
                          value={pageInput}
                          onChange={(e) => setPageInput(e.target.value)}
                          className="w-full"
                        />
                        <Button size="sm" onClick={handleSetPage}>
                          Go
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                );
            })}
          </div>
          <div className="">
            <Button
              size="sm"
              className="bg-[#676e86] cursor-pointer px-2 text m-0 rounded-l-md rounded-r-none"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft />
            </Button>
            <Button
              size="sm"
              className="bg-[#676e86] cursor-pointer  px-2 m-0 rounded-r-md rounded-l-none"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
