import SideBarListItem from "./SideBarListitem";

const SideBar = ({ active, activeHandler }) => {
  const sideBarOption = [
    {
      id: 0,
      iconName: "insights",
      pillName: "Expenses",
      activeclassName: `${active === 0 ? "active" : ""}`,
    },
    {
      id: 1,
      iconName: "note_add",
      pillName: "Add Expenses",
      activeclassName: `${active === 1 ? "active" : ""}`,
    },
    {
      id: 2,
      iconName: "analytics",
      pillName: "analytics",
      activeclassName: `${active === 2 ? "active" : ""}`,
    },
  ];
  return (
    <div className="sidebar-container">
      <div className="sidebar-container__brand">Expense Tracker</div>
      <div className="sidebar-container__list">
        <ul>
          {sideBarOption.map((e) => {
            return (
              <SideBarListItem
                id={e.id}
                iconName={e.iconName}
                pillName={e.pillName}
                activeclassName={e.activeclassName}
                activeHandler={activeHandler}
              ></SideBarListItem>
            );
          })}
          {/* <SideBarListItem
            id={0}
            iconName={"insights"}
            pillName={"Expenses"}
            activeclassName={active === 0 ? "active" : ""}
            activeHandler={activeHandler}
          ></SideBarListItem>
          <SideBarListItem
            id={1}
            iconName={"note_add"}
            pillName={"Add Expenses"}
            activeclassName={active === 1 ? "active" : ""}
            activeHandler={activeHandler}
          ></SideBarListItem>
          <SideBarListItem
            id={2}
            iconName={"analytics"}
            pillName={"analytics"}
            activeclassName={active === 2 ? "active" : ""}
            activeHandler={activeHandler}
          ></SideBarListItem> */}
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
