import React from "react";
import Link from "next/link";
// reactstrap components
import Image from 'next/image';
import styles from './Navigation.module.css'
import userIcon from '../../public/icons/userIcon.png'
import Search from '../searchBar/Search';
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  NavItem,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

function DashNavbar({brand,user=null }) {

  return (
    <>
      <Container fluid>
     <div className={styles.navBar}>
              <Link href='/' passHref>
                <a className={styles.logo}>LAIBU</a>
            </Link>
        <div className={styles.searchContainer}>
          <Search/>
        </div>
          <Nav className="align-items-center d-none d-md-flex " navbar>
            <UncontrolledDropdown nav >
              <DropdownToggle className="pr-0" nav>
                {user &&
                  <Media className="d-flex flex-column align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <Image
                      alt="..."
                      src={user.picture?user.picture:userIcon}
                      width={'30px'}
                      height={'30px'}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      {user.nickname}
                    </span>
                  </Media>
                </Media>
                  }
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" en>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <Link href="/admin/profile" passHref>
                  <DropdownItem>
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </DropdownItem>
                </Link>
                <Link href="/admin/profile" passHref>
                  <DropdownItem>
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                  </DropdownItem>
                </Link>
                <Link href="/admin/profile" passHref>
                  <DropdownItem>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Activity</span>
                  </DropdownItem>
                </Link>
                <Link href="/admin/profile" passHref>
                  <DropdownItem>
                    <i className="ni ni-support-16" />
                    <span>Support</span>
                  </DropdownItem>
                </Link>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav> 
      </div>
        </Container> 
    </>
  );
}

export default DashNavbar;
