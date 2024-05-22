import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MyDatatable from "../../components/mydatatable/MyDatatable";
import Widget from "../../components/widget/Widget";


const MyList = () => {
  return (
    <div className="myList">
      <Sidebar />
      <div className="MyListContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order"/>
          <Widget type="earning" />
          <Widget type="earning" />
      </div>
      <div className="table">
        <MyDatatable />
      </div>
      </div>
    </div>
  );
};

export default MyList;