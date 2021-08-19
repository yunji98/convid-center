import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const CenterItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    div {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const CenterItem = ({ center }) => {
  const { address, centerName, facilityName, lat, lng, phoneNumber } = center;
  const [url, setUrl] = useState('');
  const mapContainer = useRef('ref');

  useEffect(() => {
    const container = mapContainer.current;
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(lat, lng);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);

    setUrl(`https://map.kakao.com/link/map/${centerName},${lat},${lng}`);
  }, [centerName, lat, lng]);

  return (
    <CenterItemBlock>
      {lat && lng && (
        <div className="thumbnail">
          <div
            ref={mapContainer}
            style={{
              width: '200px',
              height: '200px',
            }}
          ></div>
        </div>
      )}

      {centerName && (
        <div className="contents">
          <h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {centerName} | {facilityName}
            </a>
          </h2>
          <p>{address}</p>
          <p>{phoneNumber}</p>
          <button>예약하기</button>
        </div>
      )}

    </CenterItemBlock>
  );
};

export default CenterItem;