import { Menu, MenuBadge, MenuDivider, MenuItem } from "../../libraries/menus";

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
