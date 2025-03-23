import CustomTable from "@/components/customTable";
import { columns } from "../columns";
import { IPost } from "@/interface/types";


const Statements = () => {
  return (
    <CustomTable
      dateSelection={true}
      filterSelection={true}
      searchBar={true}
      columns={columns}
      data={mockData}
      className="m-12"
    ></CustomTable>
  );
};