import SideBarListItem from "./SideBarListitem";

const SideBar = ({ active, activeHandler }) => {
  return (
    <div class="sidebar-container">
      <div class="sidebar-container__brand">Expense Tracker</div>
      <div class="sidebar-container__list">
        <ul>
          <SideBarListItem
            id={0}
            iconName={"insights"}
            pillName={"Expenses"}
            activeClass={active === 0 ? "active" : ""}
            activeHandler={activeHandler}
          ></SideBarListItem>
          <SideBarListItem
            id={1}
            iconName={"note_add"}
            pillName={"Add Expenses"}
            activeClass={active === 1 ? "active" : ""}
            activeHandler={activeHandler}
          ></SideBarListItem>
          <SideBarListItem
            id={2}
            iconName={"analytics"}
            pillName={"analytics"}
            activeClass={active === 2 ? "active" : ""}
            activeHandler={activeHandler}
          ></SideBarListItem>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
