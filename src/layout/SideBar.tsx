import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
const SideBar:React.FC = () => {
    return (
        // <div className="wrapper">
            <aside className="main-sidebar">
    <section className="sidebar">
      <div className="user-panel">
        <div className="pull-left image">
          <img src="../theme/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
          {/* <img src="/home/phucvinh/Documents/Code/Typescript/my-app/src/theme/img/user2-160x160.jpg" className="img-circle" alt="User Image" /> */}
        </div>
        <div className="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">MAIN NAVIGATION</li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-dashboard"></i> <span>Dashboard</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="../../index.html"><FontAwesomeIcon color="#000" size={"5x"} icon="coffee" /> Dashboard v1</a></li>
            <li><a href="../../index2.html"><FontAwesomeIcon icon="coffee" /> Dashboard v2</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-files-o"></i>
            <span>Layout Options</span>
            <span className="pull-right-container">
              <span className="label label-primary pull-right">4</span>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="../layout/top-nav.html"><FontAwesomeIcon icon="coffee" /> Top Navigation</a></li>
            <li><a href="../layout/boxed.html"><FontAwesomeIcon icon="coffee" /> Boxed</a></li>
            <li><a href="../layout/fixed.html"><FontAwesomeIcon icon="coffee" /> Fixed</a></li>
            <li><a href="../layout/collapsed-sidebar.html"><FontAwesomeIcon icon="coffee" /> Collapsed Sidebar</a></li>
          </ul>
        </li>
        <li>
          <a href="../widgets.html">
            <i className="fa fa-th"></i> <span>Widgets</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-green">new</small>
            </span>
          </a>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-pie-chart"></i>
            <span>Charts</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="../charts/chartjs.html"><FontAwesomeIcon icon="coffee" /> ChartJS</a></li>
            <li><a href="../charts/morris.html"><FontAwesomeIcon icon="coffee" /> Morris</a></li>
            <li><a href="../charts/flot.html"><FontAwesomeIcon icon="coffee" /> Flot</a></li>
            <li><a href="../charts/inline.html"><FontAwesomeIcon icon="coffee" /> Inline charts</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-laptop"></i>
            <span>UI Elements</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="../UI/general.html"><FontAwesomeIcon icon="coffee" /> General</a></li>
            <li><a href="../UI/icons.html"><FontAwesomeIcon icon="coffee" /> Icons</a></li>
            <li><a href="../UI/buttons.html"><FontAwesomeIcon icon="coffee" /> Buttons</a></li>
            <li><a href="../UI/sliders.html"><FontAwesomeIcon icon="coffee" /> Sliders</a></li>
            <li><a href="../UI/timeline.html"><FontAwesomeIcon icon="coffee" /> Timeline</a></li>
            <li><a href="../UI/modals.html"><FontAwesomeIcon icon="coffee" /> Modals</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-edit"></i> <span>Forms</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="../forms/general.html"><FontAwesomeIcon icon="coffee" /> General Elements</a></li>
            <li><a href="../forms/advanced.html"><FontAwesomeIcon icon="coffee" /> Advanced Elements</a></li>
            <li><a href="../forms/editors.html"><FontAwesomeIcon icon="coffee" /> Editors</a></li>
          </ul>
        </li>
        <li className="treeview active">
          <a href="#">
            <i className="fa fa-table"></i> <span>Tables</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li className="active"><a href="simple.html"><FontAwesomeIcon icon="coffee" /> Simple tables</a></li>
            <li><a href="data.html"><FontAwesomeIcon icon="coffee" /> Data tables</a></li>
          </ul>
        </li>
        <li>
          <a href="../calendar.html">
            <i className="fa fa-calendar"></i> <span>Calendar</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-red">3</small>
              <small className="label pull-right bg-blue">17</small>
            </span>
          </a>
        </li>
        <li>
          <a href="../mailbox/mailbox.html">
            <i className="fa fa-envelope"></i> <span>Mailbox</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-yellow">12</small>
              <small className="label pull-right bg-green">16</small>
              <small className="label pull-right bg-red">5</small>
            </span>
          </a>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-folder"></i> <span>Examples</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="../examples/invoice.html"><FontAwesomeIcon icon="coffee" /> Invoice</a></li>
            <li><a href="../examples/profile.html"><FontAwesomeIcon icon="coffee" /> Profile</a></li>
            <li><a href="../examples/login.html"><FontAwesomeIcon icon="coffee" /> Login</a></li>
            <li><a href="../examples/register.html"><FontAwesomeIcon icon="coffee" /> Register</a></li>
            <li><a href="../examples/lockscreen.html"><FontAwesomeIcon icon="coffee" /> Lockscreen</a></li>
            <li><a href="../examples/404.html"><FontAwesomeIcon icon="coffee" /> 404 Error</a></li>
            <li><a href="../examples/500.html"><FontAwesomeIcon icon="coffee" /> 500 Error</a></li>
            <li><a href="../examples/blank.html"><FontAwesomeIcon icon="coffee" /> Blank Page</a></li>
            <li><a href="../examples/pace.html"><FontAwesomeIcon icon="coffee" /> Pace Page</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-share"></i> <span>Multilevel</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="#"><FontAwesomeIcon icon="coffee" /> Level One</a></li>
            <li className="treeview">
              <a href="#"><FontAwesomeIcon icon="coffee" /> Level One
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="#"><FontAwesomeIcon icon="coffee" /> Level Two</a></li>
                <li className="treeview">
                  <a href="#"><FontAwesomeIcon icon="coffee" /> Level Two
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="#"><FontAwesomeIcon icon="coffee" /> Level Three</a></li>
                    <li><a href="#"><FontAwesomeIcon icon="coffee" /> Level Three</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#"><FontAwesomeIcon icon="coffee" /> Level One</a></li>
          </ul>
        </li>
        <li><a href="https://adminlte.io/docs"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
        <li className="header">LABELS</li>
        <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
      </ul>
    </section>
  </aside>
        // </div>
    )
}

export default SideBar
