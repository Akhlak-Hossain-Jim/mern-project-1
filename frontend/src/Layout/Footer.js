import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <div className="parent 4col">
        <div className="contentBox">
          <h2>Menu</h2>
          <a href="sa">Privacy Policy</a>
          <a href="dja">Cookie Policy</a>
          <a href="dja">Purchasing Policy</a>
          <a href="dja">Terms & Conditions</a>
          {/* <a href="dja">Career</a> */}
        </div>
        <div className="contentBox">
          <h2>Contact Us</h2>
          <p>
            Main : 23/15 Tajmahal Road, Block-C, Mohammadpur, Dhaka-1207
            Contact: <a href="tel:+8801711429220">+8801711429220</a>,{" "}
            <a href="tel:+">+8801740731560</a>
          </p>
          <p>
            Outlet -2: Shimanto Square, Shop #132, Road #02, Dhanmondi ,
            Dhaka-1205Contact: <a href="tel:+">+8801715953988</a>
          </p>
          <p>
            Outlet-3 : Boshundhora City, Level # 4, Block # A, Shop # 55-56,
            Panthapath, Dhaka-1205Contact: <a href="tel:+">+8801676657712</a>
          </p>
          <p>
            Outlet-4 : Tokyo Square, Shop # 220, 1st Floor, Mohammadpur,
            Dhaka-1207Contact: <a href="tel:+">+8801868980900</a>
          </p>
        </div>
        <div className="contentBox">
          <h2>Company</h2>
          <a href="sa">About</a>
          <a href="dja">Work Process</a>
          <a href="dja">Carrer</a>
          {/* <a href="dja">Terms & Conditions</a> */}
        </div>
        <div className="contentBox">
          <h2>Get in Touch</h2>
          <p>
            Email:<a href="mailto:shop@shoilo.com"> shop@shoilo.com</a>
          </p>
          <p>
            Phone: <a href="tel:+8801711429220">+8801711429220</a>
          </p>
          <p>
            Phone: <a href="tel:+">+8801740731560</a>
          </p>
          <h2>Social Links</h2>
          <a
            href="https://www.facebook.com/ShopShoilo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook
          </a>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  /* max-width: 100vw; */
  background-color: #f4ffe7a6;
  padding: 50px;
  @media (max-width: 548px) {
    padding: 30px 20px;
  }
  .parent {
    display: grid;
    justify-content: space-around;
    /* text-align: center; */
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 548px) {
      grid-template-columns: 1fr;
    }
    .contentBox {
      display: flex;
      flex-direction: column;
      h2 {
        /* font-size: 2px; */
        color: var(--secondary);
        margin-bottom: 20px;
      }
      a,
      p {
        padding: 5px 0;
        font-weight: 700;
        text-decoration: none;
        transition: all ease-in-out 300ms;
        color: var(--secondary);
        &:hover {
          text-decoration: dashed;
        }
      }
    }
  }
`;

export default Footer;
