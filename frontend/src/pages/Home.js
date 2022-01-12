import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Home() {
  const [headerHeight, setheaderHeight] = useState();
  useEffect(() => {
    setheaderHeight(document.querySelector("header").offsetHeight + 10);
  }, []);

  const [productData, setproductData] = useState();
  console.log(productData);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/data")
      .then((res) => res.json())
      .then((json) => setproductData(json.airData))
      .catch((error) =>
        console.log(
          `sorry, we are having ${error} this errors, please try again later or contact us`
        )
      );
  }, []);

  useEffect(() => {
    sessionStorage.setItem("det", productData);
  }, [productData]);

  const Container = styled.main`
    padding-top: ${headerHeight}px !important;
    max-width: 1200px !important;
    margin: auto;
    padding: 20px;
    .slide-con {
      aspect-ratio: 16/7;
      overflow: hidden;
      margin: 0 auto;
      img {
        width: 100%;
        object-fit: cover;
        object-position: center bottom;
      }
    }

    h1 {
      color: var(--secondaryLite);
    }

    .products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 10px;
      @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media (max-width: 548px) {
        grid-template-columns: 1fr 1fr;
      }
      &_cont {
        text-decoration: none;
        /* background-color: #f4ffe7a6; */
        border-radius: 10px;
        display: grid;
        /* grid-template-rows: 3fr 1fr; */
        box-shadow: 0 0 2px #8f8f8f;
        overflow: hidden;
        img {
          width: 100%;
          margin: auto;
          transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 200ms;
          overflow: hidden;
          &:hover {
            transform: scale(1.2, 1.2);
          }
        }
        &__details {
          z-index: 100;
          padding: 10px;
          color: var(--secondaryLite);
          display: flex;
          flex-direction: column;
          /* justify-content: space-between; */
          background: #fff;
          p {
            padding-top: 10px;
          }
          h3 {
          }
          strong {
            color: var(--secondary);
          }
        }
      }
    }

    .trust {
      background-color: var(--bg);
      padding: 20px;
      border-radius: 4px;
      margin: 40px 0 10px;

      color: var(--secondaryLite);
    }
  `;

  return (
    <Container>
      <h1>All Places</h1>
      <br />
      <div className="products">
        {productData &&
          React.Children.toArray(
            productData.map((data) => (
              <a href={`/details/${data.name}`} className="products_cont">
                <img src={data.images.picture_url} alt="" />
                <div className="products_cont__details">
                  <h3>{data.name}</h3>
                  <p>Property Type: {data.property_type}</p>
                  <p>
                    <strong>{data.address.country}</strong>
                  </p>
                </div>
              </a>
            ))
          )}
      </div>
    </Container>
  );
}

export default Home;
