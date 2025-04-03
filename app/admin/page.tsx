"use client" ;

import CustomTable from "@/components/customTable";
import { columns } from "./columns";

import React from "react";
import { IPost } from "@/interface/types";
import { useQuery } from "@tanstack/react-query";
import client from "../services/api";
import { handleAPIError } from "@/lib/utils";
 async function GetAllLore() {
  try {
    const response = await client.get<IPost[]>("/all");
    return response.data;
  } catch (e) {
    throw handleAPIError(e);
  }
}

export default function All() {
  const { data, error, isLoading } = useQuery<IPost[], Error>({
    queryKey: ["posts"],
    queryFn: GetAllLore,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (data)
    return (
      <CustomTable
        dateSelection={true}
        filterSelection={true}
        searchBar={true}
        columns={columns}
        data={data}
        className="m-12"
      ></CustomTable>
    );
}
