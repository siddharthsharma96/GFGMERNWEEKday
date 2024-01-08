const SideBarListItem = ({
  id,
  iconName,
  pillName,
  activeClass,
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
      <a class={activeClass} href="javascript:void(0)">
        <span class="material-icons">{iconName}</span>
        <span>{pillName}</span>
      </a>
    </li>
  );
};
export default SideBarListItem;
