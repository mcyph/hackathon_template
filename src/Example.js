import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Containers from "./examples/controls/Containers";
import Progress from "./examples/controls/Progress";
import Navigation from "./examples/controls/Navigation";
import Floating from "./examples/controls/Floating";
import Tabs from "./examples/controls/Tabs";
import Icons from "./examples/controls/Icons";
import Images from "./examples/controls/Images";
import Menus from "./examples/controls/Menus";
import TablesGrids from "./examples/controls/TablesGrids";
import examplesListing from "./examples/examplesListing.json";

import FlexContainer from "./libraries/containers/flexbox/FlexContainer";
import FlexRow from "./libraries/containers/flexbox/FlexRow";
import FlexCol from "./libraries/containers/flexbox/FlexCol";

import Charts from "./examples/Charts";
import Editors from "./examples/Editors";
import Gamification from "./examples/Gamification";
import Landing from "./examples/Landing";
import Layout from "./examples/Layout";
import Maps from "./examples/Maps";
import Previews from "./examples/Previews";

import OffCanvasSidebar from "./libraries/containers/offcanvas/OffCanvasSidebar";
import OffCanvasContent from "./libraries/containers/offcanvas/OffCanvasContent";
import OffCanvas from "./libraries/containers/offcanvas/OffCanvas";
import SourceCodeDisplay from "./libraries/previews/SourceCodeDisplay";
import NavTree from "./libraries/navigation/navtree/NavTree";
import NavTreeItem from "./libraries/navigation/navtree/NavTreeItem";
import FormsButtons from "./examples/controls/FormsButtons";
import FormsSelectControls from "./examples/controls/FormsSelectControls";
import FormsSliders from "./examples/controls/FormsSliders";
import FormsTextControls from "./examples/controls/FormsTextControls";
import FormsToggleControls from "./examples/controls/FormsToggleControls";
import Labels from "./examples/Labels";
import Toasts from "./examples/Toasts";
import Calendars from "./examples/controls/Calendars";

let MyNav=()=>{
  return <>
    <nav className="example-nav">
      <NavTree>
        <NavTreeItem>
          <a>Layout/Containers</a>
          <NavTree>
            <NavTreeItem><Link to="/containers">Containers</Link></NavTreeItem>
            <NavTreeItem><Link to="/labels">Labels</Link></NavTreeItem>
            {/*<NavTreeItem><Link to="/landing">Landing Pages</Link></NavTreeItem>*/}
            <NavTreeItem><Link to="/layout">Layout</Link></NavTreeItem>
            <NavTreeItem><Link to="/tables_grids">TablesGrids</Link></NavTreeItem>
            <NavTreeItem><Link to="/toasts">Toasts</Link></NavTreeItem>
          </NavTree>
        </NavTreeItem>
        <NavTreeItem>
          <a>Forms</a>
          <NavTree>
            <NavTreeItem><Link to="/forms_buttons">Buttons</Link></NavTreeItem>
            <NavTreeItem><Link to="/forms_calendars">Calendars</Link></NavTreeItem>
            <NavTreeItem><Link to="/progress">Progress</Link></NavTreeItem>
            <NavTreeItem><Link to="/forms_select_controls">Select Controls</Link></NavTreeItem>
            <NavTreeItem><Link to="/forms_sliders">Sliders</Link></NavTreeItem>
            <NavTreeItem><Link to="/forms_text_controls">Text Controls</Link></NavTreeItem>
            <NavTreeItem><Link to="/forms_toggle_controls">Toggle Controls</Link></NavTreeItem>
          </NavTree>
        </NavTreeItem>
        <NavTreeItem>
          <a>Navigation/Menus</a>
          <NavTree>
            {/*<NavTreeItem><Link to="/floating">Floating</Link></NavTreeItem>*/}
            <NavTreeItem><Link to="/menus">Menus</Link></NavTreeItem>
            <NavTreeItem><Link to="/navigation">Navigation</Link></NavTreeItem>
            <NavTreeItem><Link to="/tabs">Tabs</Link></NavTreeItem>
          </NavTree>
        </NavTreeItem>
        <NavTreeItem>
          <a>Graphics/Charts/Vis</a>
          <NavTree>
            <NavTreeItem><Link to="/charts">Charts</Link></NavTreeItem>
            <NavTreeItem><Link to="/icons">Icons</Link></NavTreeItem>
            <NavTreeItem><Link to="/images">Images</Link></NavTreeItem>
            <NavTreeItem><Link to="/maps">Maps/GIS</Link></NavTreeItem>
          </NavTree>
        </NavTreeItem>
        <NavTreeItem>
          <a>Rich Markup</a>
          <NavTree>
            <NavTreeItem><Link to="/editors">Editors</Link></NavTreeItem>
            <NavTreeItem><Link to="/previews">Previews</Link></NavTreeItem>
          </NavTree>
        </NavTreeItem>
      </NavTree>
    </nav>
  </>;
}

let SourceDisplay=({ reactClass, jsonKey })=>{
  return <>
    <FlexContainer>
      <FlexRow>
        <FlexCol defaultWidth={6} style={{maxWidth: "50%"}}>
          { reactClass }
        </FlexCol>
        <FlexCol defaultWidth={6} style={{maxWidth: "50%"}}>
          <SourceCodeDisplay language="jsx"
                             code={ examplesListing[jsonKey] }/>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  </>;
}

let ExampleKitchenSink=()=>{
  return <>
    <Router>
      <OffCanvas>
        <OffCanvasSidebar style={{ width: "14rem", position: "fixed", top: 0, height: "100vh" }}>
          <MyNav />
        </OffCanvasSidebar>
        <OffCanvasContent
          style={{ width: "14rem", position: "fixed", top: 0, height: "100vh" }}>
          <MyNav />
        </OffCanvasContent>
      </OffCanvas>

      <div style={{ maxWidth: "1600px",
                    marginLeft: "15rem",
                    paddingTop: "0.9rem" }}>
        <Switch>
          <Route path="/containers"><SourceDisplay reactClass={<Containers/>} jsonKey="Containers"/></Route>
          <Route path="/floating"><SourceDisplay reactClass={<Floating/>} jsonKey="Floating"/></Route>
          <Route path="/labels"><SourceDisplay reactClass={<Labels/>} jsonKey="Labels"/></Route>
          <Route path="/toasts"><SourceDisplay reactClass={<Toasts/>} jsonKey="Toasts"/></Route>

          <Route path="/forms_calendars"><SourceDisplay reactClass={<Calendars/>} jsonKey="Calendars"/></Route>
          <Route path="/forms_buttons"><SourceDisplay reactClass={<FormsButtons/>} jsonKey="FormsButtons"/></Route>
          <Route path="/forms_select_controls"><SourceDisplay reactClass={<FormsSelectControls/>} jsonKey="FormsSelectControls"/></Route>
          <Route path="/forms_sliders"><SourceDisplay reactClass={<FormsSliders/>} jsonKey="FormsSliders"/></Route>
          <Route path="/forms_text_controls"><SourceDisplay reactClass={<FormsTextControls/>} jsonKey="FormsTextControls"/></Route>
          <Route path="/forms_toggle_controls"><SourceDisplay reactClass={<FormsToggleControls/>} jsonKey="FormsToggleControls"/></Route>

          <Route path="/icons"><SourceDisplay reactClass={<Icons/>} jsonKey="Icons"/></Route>
          <Route path="/images"><SourceDisplay reactClass={<Images/>} jsonKey="Images"/></Route>
          <Route path="/menus"><SourceDisplay reactClass={<Menus/>} jsonKey="Menus"/></Route>
          <Route path="/navigation"><SourceDisplay reactClass={<Navigation/>} jsonKey="Navigation"/></Route>
          <Route path="/progress"><SourceDisplay reactClass={<Progress/>} jsonKey="Progress"/></Route>
          <Route path="/tables_grids"><SourceDisplay reactClass={<TablesGrids/>} jsonKey="TablesGrids"/></Route>
          <Route path="/tabs"><SourceDisplay reactClass={<Tabs/>} jsonKey="Tabs"/></Route>

          <Route path="/charts"><SourceDisplay reactClass={<Charts/>} jsonKey="Charts"/></Route>
          <Route path="/editors"><SourceDisplay reactClass={<Editors/>} jsonKey="Editors"/></Route>
          <Route path="/gamification"><SourceDisplay reactClass={<Gamification/>} jsonKey="Gamification"/></Route>
          <Route path="/landing"><SourceDisplay reactClass={<Landing/>} jsonKey="Landing"/></Route>
          <Route path="/layout"><SourceDisplay reactClass={<Layout/>} jsonKey="Layout"/></Route>
          <Route path="/maps"><SourceDisplay reactClass={<Maps/>} jsonKey="Maps"/></Route>
          <Route path="/previews"><SourceDisplay reactClass={<Previews/>} jsonKey="Previews"/></Route>

          <Route path="/"><SourceDisplay reactClass={<Layout/>} jsonKey="Layout" /></Route>
        </Switch>
      </div>
    </Router>
  </>;
}

export default ExampleKitchenSink;
