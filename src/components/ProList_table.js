import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableBody } from "@mui/material";

const jsonFile = [
    {
        "id" : 1,
        "name" : "Shampoo",
        "desc" : "This is Shampoo",
        "query" : "This is Query part",
    },
    {
        "id" : 2,
        "name" : "Shampoo1",
        "desc" : "This is Shampoo1",
        "query" : "This is Query part1",
    },
    {
        "id" : 3,
        "name" : "Shampoo2",
        "desc" : "This is Shampoo2",
        "query" : "This is Query part2",
    },
    {
        "id" : 4,
        "name" : "Shampoo4",
        "desc" : "This is Shampoo4",
        "query" : "This is Query part4",
    },
    {
        "id" : 5,
        "name" : "Shampoo5",
        "desc" : "This is Shampoo5",
        "query" : "This is Query part5",
    },
    {
        "id" : 6,
        "name" : "Shampoo6",
        "desc" : "This is Shampoo6",
        "query" : "This is Query part6",
    },
];

const TableListing=()=>{
    return(
        <div className="tablelist">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow  sx={{'&:last-child td, &:last-child th':{fontSize:24}}}>
                            <TableCell> Id </TableCell>
                            <TableCell align="left"> Name </TableCell>
                            <TableCell align="left"> Desc </TableCell>
                            <TableCell align="left"> Query </TableCell>
                            <TableCell align="right">  </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {jsonFile.map(
                            (i)=>(
                            <TableRow sx={{'& td':{fontSize:20}}}>
                                <TableCell>{i.id}</TableCell>
                                <TableCell>{i.name}</TableCell>
                                <TableCell>{i.desc}</TableCell>
                                <TableCell>{i.query}</TableCell>
                                <TableCell align="right">
                                        <button id="tbtn">Edit</button>
                                        <button id="tbtn">Delete</button>
                                </TableCell>
                            </TableRow>)
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
export default TableListing;