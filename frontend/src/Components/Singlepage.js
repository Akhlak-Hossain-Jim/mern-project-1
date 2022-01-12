import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";

function Singlepage() {
  const [productData, setProductData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/data")
      .then((res) => res.json())
      .then((json) => setProductData(json.airData));
  }, []);

  const [data, setData] = useState();

  const path = useParams();

  useEffect(() => {
    setData(
      path &&
        productData &&
        productData.filter((d) => {
          return d.name === path.id;
        })
    );
  }, [path, productData]);
  //   console.log(path);

  var DATA = data && data[0];

  return (
    <Container>
      {data && data.length ? (
        <>
          <div className="top">
            <div className="slick-coin">
              <img
                src={data[0].images && data[0].images.picture_url}
                alt={data[0].name && data[0].name}
              />
            </div>
            <div className="details">
              <h1>{data[0].name && data[0].name}</h1>
              <br />
              <p>
                <strong>Address: </strong>
                {DATA.address.street}, {DATA.address.suburb},{" "}
                {DATA.address.government_area}, {DATA.address.country}
              </p>
              <br />
              <p>
                <strong>Summary:</strong> {data[0].summary && data[0].summary}
              </p>
              <br />
              {data[0].price.$numberDecimal && (
                <h2>
                  <strong>Price: $</strong>
                  {data[0].price.$numberDecimal}
                </h2>
              )}
              {data[0].host && (
                <>
                  <h3>Host Details:</h3>
                  {data[0].host.host_name && (
                    <h4>
                      <strong>Name: </strong>
                      {data[0].host.host_name}
                    </h4>
                  )}
                  {
                    <h4>
                      <strong>Location: </strong>
                      {data[0].host.host_location}
                    </h4>
                  }
                </>
              )}
              <br />
              {data[0].listing_url && (
                <a
                  href={data[0].listing_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See now
                </a>
              )}
              {data[0].host.host_url && (
                <a
                  href={data[0].listing_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Host
                </a>
              )}
              <br />
              <br />
            </div>
          </div>
          <div className="details">
            <h1>More Details</h1>
            {DATA.property_type && (
              <>
                <br />
                <p>
                  <strong>Property Type: </strong>
                  {DATA.property_type}
                </p>
              </>
            )}
            {DATA.room_type && (
              <>
                <br />
                <p>
                  <strong>Room Type: </strong>
                  {DATA.room_type}
                </p>
              </>
            )}
            {DATA.bed_type && (
              <>
                <br />
                <p>
                  <strong>Bed Type: </strong>
                  {DATA.bed_type}
                </p>
              </>
            )}
            {DATA.bedrooms && (
              <>
                <br />
                <p>
                  <strong>Bedrooms: </strong>
                  {DATA.bedrooms}
                </p>
              </>
            )}
            {DATA.beds && (
              <>
                <br />
                <p>
                  <strong>Number of Beds: </strong>
                  {DATA.beds}
                </p>
              </>
            )}
            {DATA.minimum_nights && (
              <>
                <br />
                <p>
                  <strong>Minimum Nights: </strong>
                  {DATA.minimum_nights}
                </p>
              </>
            )}
            {DATA.maximum_nights && (
              <>
                <br />
                <p>
                  <strong>Maximum Nights: </strong>
                  {DATA.maximum_nights}
                </p>
              </>
            )}
            {DATA.space && (
              <>
                <br />
                <h3>Space</h3>
                <p>{DATA.space}</p>
              </>
            )}
            {DATA.description && (
              <>
                <br />
                <h3>Description</h3>
                <p>{DATA.description}</p>
              </>
            )}
            {DATA.neighborhood_overview && (
              <>
                <br />
                <h3>Neighborhood Overview</h3>
                <p>{DATA.neighborhood_overview}</p>
              </>
            )}
            {DATA.notes && (
              <>
                <br />
                <h3>Notes</h3>
                <p>{DATA.notes}</p>
              </>
            )}
            {DATA.transit && (
              <>
                <br />
                <h3>Transit</h3>
                <p>{DATA.transit}</p>
              </>
            )}
            {DATA.house_rules && (
              <>
                <br />
                <h3>House Rules</h3>
                <p>{DATA.house_rules}</p>
              </>
            )}
            {DATA.amenities && (
              <>
                <br />
                <h3>Amenities:</h3>
                <p>
                  {React.Children.toArray(
                    DATA.amenities.map((e) => (
                      <span className="comaSpace">{e}</span>
                    ))
                  )}
                </p>
              </>
            )}
          </div>
        </>
      ) : (
        <p>No product with this name is available right now</p>
      )}
    </Container>
  );
}

const Container = styled.main`
  /* margin: 50px 0 0; */
  padding-top: 120px !important;
  max-width: 1200px !important;
  margin: auto;
  padding: 20px;
  @media (max-width: 548px) {
    padding-top: 100px;
  }
  .top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (max-width: 548px) {
      grid-template-columns: 1fr;
    }
    .slick-coin {
      margin: 0 auto;
      img {
        width: 100%;
        object-fit: cover;
        object-position: center bottom;
      }
    }
  }
  .details {
    padding: 20px 0;
    color: var(--secondaryLite);
    h1,
    h2 {
      color: var(--secondary);
    }
    a {
      color: var(--secondary);
      background-color: var(--bg);
      border: 1px solid var(--secondary);
      border-radius: 10px;
      font-weight: 900;
      padding: 10px 20px;
      text-decoration: none;
      margin: 0 10px;
      &:hover {
        color: var(--secondaryLite);
        background-color: var(--secondary);
        border: 1px solid transparent;
      }
    }
    span.comaSpace {
      &::before {
        &:not(:first-child) {
          content: ", ";
        }
      }
    }
  }
`;
export default Singlepage;
