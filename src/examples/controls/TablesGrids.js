import {Table, TableBody, TableRow, TableCol, TableHeader, TableHeaderCol, TableFooter} from "../../libraries/tables_grids";

let TablesGrids=()=>{
  return <>
    <h2>Tables/Grids</h2>
    <h3>Tables</h3>
    <p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCol>Table Header Column 1</TableHeaderCol>
            <TableHeaderCol>Table Header Column 2</TableHeaderCol>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCol>Table Body Row 1</TableCol>
            <TableCol>Table Body Row 2</TableCol>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCol>Table Footer Row 1</TableCol>
            <TableCol>Table Footer Row 2</TableCol>
          </TableRow>
        </TableFooter>
      </Table>
    </p>
  </>;
}

export default TablesGrids;
