import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import MetaData from "./MetaData";
// import { Buttonii } from "../Components/Buttons";
// // import Head from "../Components/Head";
// import { HeadCon } from "../style/header-style";

function Header() {
  const [toggler, setToggler] = useState(false);

  const [activeNav, setactiveNav] = useState();
  const [title, settitle] = useState("");

  const [mOver, setMOver] = useState(0);

  let location = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    setToggler(false);
  }, [location.pathname]);

  useEffect(() => {
    location.pathname === "/"
      ? setactiveNav(1)
      : // : location.pathname === "/project/"
      // ? setactiveNav(2)
      location.pathname === "/about/"
      ? setactiveNav(3)
      : setactiveNav();
  }, [location.pathname]);

  useEffect(() => {
    location.pathname === "/"
      ? settitle("")
      : // : location.pathname === "/project/"
      // ? settitle("Project |")
      location.pathname === "/about/"
      ? settitle("About |")
      : settitle("");
  }, [location.pathname]);

  return (
    <>
      <MetaData
        title={title}
        con={`${window.location.origin}${location.pathname}`}
      />
      <HeadCon>
        <div className="header__box">
          <div className="header__logo">
            <Link name="logo" to="/">
              <img src="/images/logos/logo.png" alt="" />
            </Link>
          </div>

          <div
            className={`phone__nav__icon `}
            onClick={() => setToggler(!toggler)}
            tabIndex="0"
          >
            <div className={toggler ? "hamInner active" : "hamInner"}></div>
          </div>
        </div>

        <nav className={`big__nav ${toggler ? "phone__nav" : ""}`} id="nav">
          <Link
            className={`nav__items ${activeNav === 1 ? "active" : ""}  ${
              mOver === 0 ? "" : mOver === 1 ? "hover" : "nover"
            }`}
            onBlur={() => setMOver(0)}
            onFocus={() => setMOver(1)}
            onMouseOver={() => setMOver(1)}
            onMouseOut={() => setMOver(0)}
            to="/"
          >
            Home
          </Link>

          <Link
            className={`nav__items ${activeNav === 2 ? "active" : ""}  ${
              mOver === 0 ? "" : mOver === 2 ? "hover" : "nover"
            }`}
            onBlur={() => setMOver(0)}
            onFocus={() => setMOver(2)}
            onMouseOver={() => setMOver(2)}
            onMouseOut={() => setMOver(0)}
            to="/"
          >
            About
          </Link>
        </nav>
      </HeadCon>
    </>
  );
}

const HeadCon = styled.header`
  font-family: "Ibarra Real Nova", serif;
  max-width: 1440px;
  padding: 10px 20px;
  min-height: 60px;
  background-color: #fff;
  box-shadow: 0 0 15px rgb(0 0 0 / 15%);
  display: flex;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20000;
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding: 0 10px;
  }
  .header__box {
    margin: auto;
    flex: 1;
    @media (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header__logo {
      margin-left: 20px;
      a {
        img {
          max-width: 80px !important;
          max-height: auto !important;
          @media (max-width: 768px) {
            width: 80px;
            padding: 0;
          }
          @media (max-width: 386px) {
            width: 50px;
            padding: 0;
          }
        }
      }
    }
  }
  .big__nav {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    @media (max-width: 768px) {
      display: none !important;
    }
    .nav__items {
      font-size: 18px;
      font-weight: 600;
      padding: 0 16px;
      margin: 16px 0;
      color: #000;
      text-decoration: none;
      transition: 0.5s;
      cursor: pointer;
      position: relative;
      &.hover {
        color: var(--secondary);
      }
      &.nover {
        color: rgb(177, 176, 176);
      }
      @media (max-width: 1440px) {
        font-size: 14px;
      }
      @media (max-width: 768px) {
        font-size: 18px;
      }
      &:focus {
        outline: dashed 2px var(--secondary);
      }
      &:after {
        content: "";
        height: 2px;
        background: var(--secondary);
        // width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
        transform: scaleX(0);
        @media (min-width: 1500px) {
          height: 7px;
        }
      }
      &.active {
        color: var(--secondary);
        &:after {
          opacity: 1;
          transform: scaleX(1);
        }
      }
      &:hover {
        &:after {
          opacity: 1;
          transform: scaleX(1);
        }
      }
      @media (min-width: 1500px) {
        font-size: 100% !important;
      }
    }
    gap: 10px;
    @media (min-width: 1500px) {
      gap: 36px;
    }
    &.phone__nav {
      display: flex !important;
      background-color: #fff;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      height: 100vh;
      width: 80vw;
      transition: all 1s;
      z-index: 100;
      animation: fromleft 1s !important;
      @keyframes fromleft {
        from {
          top: -100px !important;
          margin-left: -100%;
          border-radius: 0 0 300% 0;
          height: 10vh;
        }
        to {
          top: 0;
          margin-left: 0%;
          height: 100vh;
        }
      }
      @media (min-width: 769px) {
        display: none !important;
      }
      .nav__items {
        display: block;
        text-align: center;
        &.active {
          color: var(--secondary);
        }
        &.hover {
          color: var(--secondary);
        }
        &.nover {
          color: rgb(61, 61, 61);
        }
      }
      @media (min-width: 1500px) {
        font-size: 300% !important;
      }
    }
  }
  .phone__nav__icon {
    margin: auto 20px;
    position: relative !important;
    height: 30px;
    width: 30px;
    @media (min-width: 769px) {
      display: none;
    }
    .hamInner {
      z-index: 12;
      position: absolute;
      top: 40%;
      right: 0px;
      width: 25px;
      height: 2px;
      border-radius: 4px;
      background-color: var(--secondary);
      transform: rotate(0deg);
      &::after {
        bottom: -10px;
        transform: rotate(0deg);
        content: "";
        display: block;
        position: absolute;
        right: 0px;
        width: 25px;
        height: 2px;
        border-radius: 4px;
        background-color: var(--secondary);
      }
      &::before {
        top: -10px;
        opacity: 1;
        content: "";
        display: block;
        position: absolute;
        right: 0px;
        width: 25px;
        height: 2px;
        border-radius: 4px;
        background-color: var(--secondary);
      }
      &.active {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 0;
        height: 0;
        border-radius: 4px;
        background-color: var(--secondary);
        transform: rotate(0deg);
        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 12px;
          bottom: 0;
          right: 0;
          left: 2.5px;
          width: 30px;
          height: 2px;
          border-radius: 4px;
          background-color: var(--secondary);
          transition-timing-function: ease;
          transition-duration: 0.15s;
          transition-property: transform;
          transform: rotate(45deg);
        }
        &::before {
          opacity: 1;
          content: "";
          display: block;
          position: absolute;
          top: 12px;
          bottom: 0;
          right: 0;
          left: 2.5px;
          width: 30px;
          height: 2px;
          border-radius: 4px;
          background-color: var(--secondary);
          transition-timing-function: ease;
          transition-duration: 0.15s;
          transition-property: transform;
          transform: rotate(-45deg);
        }
      }
    }
  }
  @media (min-width: 1500px) {
    font-size: 300%;
    padding: 0 20%;
    height: 130px;
  }
`;

export default Header;
