import Tabs from "../../libraries/tabs/Tabs";
import TabItem from "../../libraries/tabs/TabItem";

let _Tabs=()=>{
  return <>
    <h2>Tabs</h2>
    <p>
      <Tabs>
        <TabItem href="#" name="Tab 1" />
        <TabItem href="#" name="Tab 2" />
        <TabItem href="#" name="Tab 3" active={true} />
      </Tabs>
    </p>
  </>;
}

export default _Tabs;
