import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Wideget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart.jsx";
import List from "../../components/table/Table.jsx";

import "./home.css"
// import { ImportantDevices } from "@mui/icons-material";
const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    < Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <List />
                </div>
            </div>
        </div>

    )
}
export default Home;