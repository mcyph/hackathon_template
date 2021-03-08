import React from "react";

// Import container classes
import Card from "../../libraries/containers/card/Card";
import CardBody from "../../libraries/containers/card/CardBody";
import CardFooter from "../../libraries/containers/card/CardFooter";
import CardImage from "../../libraries/containers/card/CardImage";
import CardSubtitle from "../../libraries/containers/card/CardSubtitle";
import CardTitle from "../../libraries/containers/card/CardTitle";
import Chip from "../../libraries/containers/chip/Chip";
import EmptyCont from "../../libraries/containers/empty/EmptyCont";
import EmptyContTitle from "../../libraries/containers/empty/EmptyContTitle";
import EmptyContSubtitle from "../../libraries/containers/empty/EmptyContSubtitle";
import EmptyContIcon from "../../libraries/containers/empty/EmptyContIcon";
import EmptyContControls from "../../libraries/containers/empty/EmptyContControls";
import Panel from "../../libraries/containers/panel/Panel";
import OffCanvas from "../../libraries/containers/offcanvas/OffCanvas";
import OffCanvasContent from "../../libraries/containers/offcanvas/OffCanvasContent";
import OffCanvasSidebar from "../../libraries/containers/offcanvas/OffCanvasSidebar";
import Tile from "../../libraries/containers/tiles/Tile";
import TileSubtitle from "../../libraries/containers/tiles/TileSubtitle";
import TileTitle from "../../libraries/containers/tiles/TileTitle";
import Timeline from "../../libraries/containers/timeline/Timeline";
import TimelineContent from "../../libraries/containers/timeline/TimelineContent";
import TimelineIcon from "../../libraries/containers/timeline/TimelineIcon";
import TimelineLeft from "../../libraries/containers/timeline/TimelineLeft";
import TileContent from "../../libraries/containers/tiles/TileContent";
import TileIcon from "../../libraries/containers/tiles/TileIcon";
import TileAction from "../../libraries/containers/tiles/TileAction";
import TimelineItem from "../../libraries/containers/timeline/TimelineItem";
import PanelHeader from "../../libraries/containers/panel/PanelHeader";
import PanelTitle from "../../libraries/containers/panel/PanelTitle";
import PanelBody from "../../libraries/containers/panel/PanelBody";
import PanelNav from "../../libraries/containers/panel/PanelNav";
import PanelFooter from "../../libraries/containers/panel/PanelFooter";
import CardHeader from "../../libraries/containers/card/CardHeader";
import SpectreCSSIcon from "../../libraries/icons/SpectreCSSIcon";
import Hero from "../../libraries/containers/Hero";

let Containers=()=>{
  return <>
    <h1>Containers</h1>

    <h2>Card</h2>
    <p>
      <Card>
        <CardImage>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/220px-Oryctolagus_cuniculus_Rcdo.jpg" />
        </CardImage>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardSubtitle>Card Subtitle</CardSubtitle>
        </CardHeader>
        <CardBody>Card Body</CardBody>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    </p>
    <hr/>

    <h2>Chip</h2>
    <p>
      <Chip>
        <SpectreCSSIcon icon={ SpectreCSSIcon.ACTION.PLUS }/>
        &nbsp;Chip Item 1
        <a href="#"
           className="btn btn-clear"
           aria-label="Close"
           role="button" />
      </Chip>

      <Chip>
        <SpectreCSSIcon icon={ SpectreCSSIcon.ACTION.EDIT }/>
        &nbsp;Chip Item 2
        <a href="#"
           className="btn btn-clear"
           aria-label="Close"
           role="button" />
      </Chip>
    </p>
    <hr/>

    <h2>Empty Container</h2>
    Use this to indicate there isn't any content for some reason.
    <p>
      <EmptyCont>
        <EmptyContIcon>Container Icon</EmptyContIcon>
        <EmptyContTitle>Container Title</EmptyContTitle>
        <EmptyContSubtitle>Container Subtitle</EmptyContSubtitle>
        <EmptyContControls>Container Controls</EmptyContControls>
      </EmptyCont>
    </p>
    <hr/>

    <h2>Panel</h2>
    <p>
      <Panel>
        <PanelHeader><PanelTitle>Panel Title</PanelTitle></PanelHeader>
        <PanelBody>Panel Body</PanelBody>
        <PanelNav>Panel Navigation</PanelNav>
        <PanelFooter>Panel Footer</PanelFooter>
      </Panel>
    </p>
    <hr/>

    <h2>Off-Canvas</h2>
    <p>
      <OffCanvas>
        <OffCanvasSidebar>Off-canvas Sidebar</OffCanvasSidebar>
        <OffCanvasContent>Off-canvas Content</OffCanvasContent>
      </OffCanvas>
    </p>
    <hr/>

    <h2>Tile</h2>
    <p>
      <Tile>
        <TileIcon>Tile Icon</TileIcon>
        <TileTitle>Tile Title</TileTitle>
        <TileSubtitle>Tile Subtitle</TileSubtitle>
        <TileContent>Tile Content</TileContent>
        <TileAction>Tile Action</TileAction>
      </Tile>
    </p>
    <hr/>

    <h2>Timeline</h2>
    <p>
      <Timeline>
        <TimelineItem>
          <TimelineLeft><TimelineIcon /></TimelineLeft>
          <TimelineContent>
            Timeline Content 1
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineLeft><TimelineIcon /></TimelineLeft>
          <TimelineContent>
            Timeline Content 2
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </p>

    <h3>Hero</h3>
    <h4>Normal Hero</h4>
    <Hero size={Hero.SIZE.DEFAULT}>
      <h1>Hero title</h1>
      <p>Hero body</p>
    </Hero>
    <h4>Small Hero</h4>
    <Hero size={Hero.SIZE.SMALL}>
      <h1>Hero title</h1>
      <p>Hero body</p>
    </Hero>
    <h4>Large Hero</h4>
    <Hero size={Hero.SIZE.LARGE}>
      <h1>Hero title</h1>
      <p>Hero body</p>
    </Hero>
  </>
}

export default Containers;
