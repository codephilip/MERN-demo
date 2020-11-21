import { Menu, Container, Image, Icon } from "semantic-ui-react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import { handleLogout } from "../../utils/auth";



Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header({ user }) {
  const router = useRouter();
  const isRoot = user && user.role === "root";
  const isAdmin = user && user.role === "admin";
  const isRootOrAdmin = isRoot || isAdmin;

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu stackable fluid id="menu" inverted>
      <Container text>
        <Link href="/">
          <Menu.Item header active={isActive("/")}>
            <Image
              size="mini"
              src="/static/logo.svg"
              style={{ marginRight: "1em" }}
            />
            Budget Buddy
          </Menu.Item>
        </Link>

        <Link href="/about">
          <Menu.Item header active={isActive("/about")}>
            <Icon name="cart" size="large" />
            About
          </Menu.Item>
        </Link>

        {isRootOrAdmin && (
          <Link href="/create">
            <Menu.Item header active={isActive("/create")}>
              <Icon name="add square" size="large" />
              Create
            </Menu.Item>
          </Link>
        )}

        {user ? (
          <>
            <Link href="/budget">
              <Menu.Item header active={isActive("/budget")}>
                <Icon name="user" size="large" />
                My Budget
              </Menu.Item>
            </Link>
            <Link href="/summary">
              <Menu.Item header active={isActive("/summary")}>
                <Icon name="user" size="large" />
                Summary
              </Menu.Item>
            </Link>
            <Link href="/transactions">
            <Menu.Item header active={isActive("/transactions")}>
              <Icon name="user" size="large" />
              Transactions
            </Menu.Item>
          </Link>


          <Menu.Item onClick={handleLogout} header>
            <Icon name="sign out" size="large" />
            Logout
          </Menu.Item>
        </>
        ) : (
          <>
            <Link href="/login">
              <Menu.Item header active={isActive("/login")}>
                <Icon name="sign in" size="large" />
                Login
              </Menu.Item>
            </Link>

            <Link href="/signup">
              <Menu.Item header active={isActive("/signup")}>
                <Icon name="signup" size="large" />
                Signup
              </Menu.Item>
            </Link>
          </>
        )}
      </Container>
    </Menu>
  );
}

export default Header;
