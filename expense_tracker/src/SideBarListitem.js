const SideBarListItem = ({
  id,
  iconName,
  pillName,
  activeclassName,
  activeHandler,
}) => {
  // const handler = (e, index = 0) => {
  //   activeHandler(index);
  // };
  return (
    <li
      onClick={() => {
        activeHandler(id);
      }}
    >
      <a className={activeclassName} href="javascript:void(0)">
        <span className="material-icons">{iconName}</span>
        <span>{pillName}</span>
      </a>
    </li>
  );
};
export default SideBarListItem;
