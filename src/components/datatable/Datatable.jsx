import "./Datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatable_source";
import { Link } from "react-router-dom"

const Datatable = () => {
    const actionColumn = [{
        field: "action", headerName: "Action", width: 200, renderCell: () => {
            return (
                <div className="cellAction">
                    <Link to="/user/test" style={{ textDecoration: "none" }}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
    }]

    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New User
                <Link to="/user/new" style={{ textDecoration: "none" }} className="btn_link">
                    Add New
                </Link>
            </div>
            <DataGrid
                cla ssName="datagrid"
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;