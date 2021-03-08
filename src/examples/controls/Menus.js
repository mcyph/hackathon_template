import Menu from "../../libraries/menus/Menu";
import MenuBadge from "../../libraries/menus/MenuBadge";
import MenuDivider from "../../libraries/menus/MenuDivider";
import MenuItem from "../../libraries/menus/MenuItem";

let Menus=()=>{
  return <>
    <h2>Menus</h2>
    <Menu>
      <MenuDivider text="Menu Divider 1"  />
      <MenuItem>Menu Item 1</MenuItem>
      <MenuItem>Menu Item 2<MenuBadge>Badge</MenuBadge></MenuItem>
      <MenuDivider text="Menu Divider 2"  />
      <MenuItem>Menu Item 3</MenuItem>
    </Menu>
  </>
}

export default Menus;
