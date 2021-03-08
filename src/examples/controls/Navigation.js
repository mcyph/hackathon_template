import Breadcrumbs from "../../libraries/navigation/breadcrumbs/Breadcrumbs";
import BreadcrumbItem from "../../libraries/navigation/breadcrumbs/BreadcrumbItem";
import Navbar from "../../libraries/navigation/navbar/Navbar";
import NavbarBrand from "../../libraries/navigation/navbar/NavbarBrand";
import NavbarLink from "../../libraries/navigation/navbar/NavbarLink";
import NavbarSection from "../../libraries/navigation/navbar/NavbarSection";
import Steps from "../../libraries/navigation/steps/Steps";
import StepItem from "../../libraries/navigation/steps/StepItem";
import NavTree from "../../libraries/navigation/navtree/NavTree";
import NavTreeItem from "../../libraries/navigation/navtree/NavTreeItem";

let Navigation=()=>{
  return <>
    <h2>Navigation</h2>
    <h3>Breadcrumbs</h3>
    <p>
      <Breadcrumbs>
        <BreadcrumbItem href="#">Testing testing 123</BreadcrumbItem>
        <BreadcrumbItem href="#">Active Item</BreadcrumbItem>
      </Breadcrumbs>
    </p>
    <hr/>

    <h3>Navigation Tree</h3>
    <p>
      <NavTree>
        <NavTreeItem>Nav Tree Item 1</NavTreeItem>
        <NavTree>
          <NavTreeItem active={true}>Nav Tree Item 2</NavTreeItem>
          <NavTreeItem>Nav Tree Item 3</NavTreeItem>
        </NavTree>
        <NavTreeItem>Nav Tree Item 4</NavTreeItem>
        <NavTree>
          <NavTreeItem>Nav Tree Item 5</NavTreeItem>
        </NavTree>
      </NavTree>
    </p>
    <hr/>

    <h3>Navigation Bar</h3>
    <Navbar>
      <NavbarSection>
        <NavbarBrand>Navbar Brand</NavbarBrand>
      </NavbarSection>
      <NavbarSection>
        <NavbarLink>Navbar Link 1</NavbarLink>
        <NavbarLink>Navbar Link 2</NavbarLink>
        <NavbarLink>Navbar Link 3</NavbarLink>
      </NavbarSection>
      <NavbarSection>
        <NavbarLink>Navbar Link 4</NavbarLink>
      </NavbarSection>
    </Navbar>
    <hr/>

    <h3>Steps</h3>
    <p>
      <Steps>
        <StepItem href="#">Step 1</StepItem>
        <StepItem active={true}>Step 2</StepItem>
        <StepItem href="#">Step 3</StepItem>
      </Steps>
    </p>
  </>;
}

export default Navigation;
