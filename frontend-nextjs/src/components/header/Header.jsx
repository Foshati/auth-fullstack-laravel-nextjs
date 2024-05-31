"use client";
import { logout } from "@/actions/Register";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Header() {
  const { user, logoutContext } = useContext(AuthContext);
  const Router = useRouter();
  //? console.log(user);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/posts">Posts</Link>
              </li>
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">Auth-Full-Stack</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
        </div>
        {/* navbar-end  */}
        <div className="gap-4 navbar-end ">
          {user ? (
            <>
              <span>{user.name}</span>
              <button
                onClick={async () => {
                  await logout();
                  logoutContext();
                  Router.push("/");
                }}
                className="btn"
              >
                log out
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="btn">
                Log in
              </Link>
              <Link href="/auth/register" className="btn">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
