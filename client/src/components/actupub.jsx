import * as React from "react";
import { useState } from "react";

export default function ActuPub(props) {
  const [like, setlike] = useState(false)

  const handleLike = () => {
    setlike(!like)

  }
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/55aa7add2713d014d8bb1af32f4176a7c6e5422e3b597e04761230ba04f48db8?apiKey=72f16fa33e144176ad8a205e03cb5e40&"
              className="img"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eb4564cc1c1da4a185177368c8c5ca43ae6a1a92cb9ed2409650e8463ea1780?apiKey=72f16fa33e144176ad8a205e03cb5e40&"
              className="img-2"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4452bacac5a4ea36b6463d41fc2eebd67f48a14c8297ad87cfb83e2d3a2c7b95?apiKey=72f16fa33e144176ad8a205e03cb5e40&"
              className="img-3"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/20780f8f2f3edae77234214202cf29e83ac25b7762efde005eb1160086bbf4f4?apiKey=72f16fa33e144176ad8a205e03cb5e40&"
              className="img-4"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5440f4f33da6a9d3f21570725741dec1d8707477c77dd67852e91e4eb024c6f?apiKey=72f16fa33e144176ad8a205e03cb5e40&"
              className="img-5"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ddc29b61dc8144db606a4f60c2002116068c6c7fe921ffd2748354660e26753?apiKey=72f16fa33e144176ad8a205e03cb5e40&"
              className="img-6"
            />
          </div>
          <div className="div-4">
            <div className="div-5">

              <img />
            </div>
            <div className="div-7">
              <div className="div-8">
                <div className="column">
                  <div className="div-9">
                    <div className="div-10">
                      <div className="div-11" />
                      <div className="div-12">{props.pseudo}</div>
                    </div>
                    <h2>{props.name}</h2>
                    <div className="div-13">
                      {props.description}
                    </div>
                    <div className="div-14" >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c642366fd9c9f0ba4eace766d9c3b2cac13ca0a6e5ade5d766049db2c6c90bb?apiKey=72f16fa33e144176ad8a205e03cb5e40&"
                        className="img-8"
                      />


                      <div className="div-15">{props.lieu}</div>
                    </div>

                    <div className="img-9" style={{ marginTop: "50px" }} onClick={handleLike}>
                      {!like ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16" >
                          <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386" />
                        </svg>
                      )}


                    </div>


                  </div>
                </div>
                <div className="column-2">
                  <div className="div-19" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <style jsx>{`
        .div {
          background-color: #fffae2;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .div-2 {
          background-color: #fffae2;
          display: flex;
          width: 100%;
          justify-content: space-between;
          gap: 20px;
          padding: 39px 50px 39px 0;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .div-3 {
          border-radius: 20px;
          box-shadow: 10px 5px 10.1px 0px rgba(210, 171, 95, 0.25);
          background-color: #fff;
          display: flex;
          flex-basis: 0%;
          flex-direction: column;
          align-items: center;
          margin: auto 0;
          padding: 50px 19px;
        }
        @media (max-width: 991px) {
          .div-3 {
            padding-right: 20px;
          }
        }
        .img {
          aspect-ratio: 1.05;
          object-fit: auto;
          object-position: center;
          width: 22px;
          fill: #109bff;
          margin-top: 56px;
        }
        @media (max-width: 991px) {
          .img {
            margin-top: 40px;
          }
        }
        .img-2 {
          aspect-ratio: 1.03;
          object-fit: auto;
          object-position: center;
          width: 32px;
          fill: #fff;
          margin-top: 46px;
        }
        @media (max-width: 991px) {
          .img-2 {
            margin-top: 40px;
          }
        }
        .img-3 {
          aspect-ratio: 1.02;
          object-fit: auto;
          object-position: center;
          width: 49px;
          fill: #fff;
          margin-top: 46px;
        }
        @media (max-width: 991px) {
          .img-3 {
            margin-top: 40px;
          }
        }
        .img-4 {
          aspect-ratio: 1.08;
          object-fit: auto;
          object-position: center;
          width: 29px;
          fill: #109bff;
          margin-top: 46px;
        }
        @media (max-width: 991px) {
          .img-4 {
            margin-top: 40px;
          }
        }
        .img-5 {
          aspect-ratio: 1.08;
          object-fit: auto;
          object-position: center;
          width: 28px;
          fill: #fff;
          margin-top: 46px;
        }
        @media (max-width: 991px) {
          .img-5 {
            margin-top: 40px;
          }
        }
        .img-6 {
          aspect-ratio: 1.45;
          object-fit: auto;
          object-position: center;
          width: 49px;
          fill: #fff;
          margin-top: 45px;
        }
        @media (max-width: 991px) {
          .img-6 {
            margin-top: 40px;
          }
        }
        .div-4 {
          align-self: start;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
          }
        }
        .div-5 {
          border-radius: 100px;
          box-shadow: 10px 5px 10.1px 0px rgba(210, 171, 95, 0.25);
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          font-size: 20px;
          color: rgba(0, 0, 0, 0.45);
          font-weight: 400;
          white-space: nowrap;
          padding: 15px 30px;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-6 {
          font-family: Montserrat, sans-serif;
          border-radius: 100px;
          box-shadow: 0px 3px 12.9px -4px rgba(0, 0, 0, 0.25) inset;
          background-color: #e9fbff;
          justify-content: center;
          align-items: start;
          margin: auto 0;
          padding: 24px 60px 24px 23px;
        }
        @media (max-width: 991px) {
          .div-6 {
            white-space: initial;
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .img-7 {
          aspect-ratio: 0.97;
          object-fit: auto;
          object-position: center;
          width: 74px;
          border-radius: 100px;
        }
        .div-7 {
          border-radius: 20px;
          box-shadow: 10px 5px 10.1px 0px rgba(210, 171, 95, 0.25);
          background-color: #fff;
          margin-top: 26px;
          padding: 16px 26px;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-8 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-8 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-9 {
          display: flex;
          margin-top: 14px;
          flex-grow: 1;
          flex-direction: column;
          align-items: start;
          font-size: 20px;
          color: #000;
          font-weight: 600;
        }
        @media (max-width: 991px) {
          .div-9 {
            margin-top: 40px;
          }
        }
        .div-10 {
          align-self: stretch;
          display: flex;
          justify-content: space-between;
          gap: 14px;
          font-size: 32px;
          color: #0094ff;
        }
        .div-11 {
          border-radius: 100px;
          background-color: rgba(217, 217, 217, 1);
          width: 66px;
          height: 66px;
        }
        .div-12 {
          font-family: Montserrat, sans-serif;
          align-self: end;
          margin-top: 30px;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-13 {
          font-family: Montserrat, sans-serif;
          font-weight: 400;
          align-self: stretch;
          margin-top: 14px;
        }
        .div-14 {
          display: flex;
          margin-top: 32px;
          gap: 9px;
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-14 {
            white-space: initial;
          }
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .div-15 {
          font-family: Montserrat, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }
        .img-9 {
          aspect-ratio: 1.03;
          object-fit: auto;
          object-position: center;
          width: 105px;
          margin-top: 11px;
          max-width: 100%;
        }
        .div-16 {
          display: flex;
          margin-left: 13px;
          width: 78px;
          justify-content: space-between;
          gap: 20px;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.46);
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-16 {
            margin-left: 10px;
            white-space: initial;
          }
        }
        .div-17 {
          font-family: Montserrat, sans-serif;
        }
        .div-18 {
          font-family: Montserrat, sans-serif;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-19 {
          border-radius: 16px;
          background-color: #1f0b0b;
          width: 302px;
          max-width: 100%;
          height: 312px;
          margin: 0 auto;
        }
        @media (max-width: 991px) {
          .div-19 {
            margin-top: 40px;
          }
        }
        .div-20 {
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-20 {
            max-width: 100%;
          }
        }
        .div-21 {
          border-radius: 20px;
          box-shadow: 10px 5px 10.1px 0px rgba(210, 171, 95, 0.25);
          background-color: #fff;
          display: flex;
          flex-direction: column;
          font-size: 15px;
          color: #000;
          font-weight: 400;
          padding: 27px 40px 50px;
        }
        @media (max-width: 991px) {
          .div-21 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-22 {
          align-self: center;
          white-space: nowrap;
          font: 600 32px Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-22 {
            white-space: initial;
          }
        }
        .img-10 {
          aspect-ratio: 100;
          object-fit: auto;
          object-position: center;
          width: 100%;
          stroke-width: 2px;
          stroke: #11a5ff;
          margin-top: 24px;
        }
        .img-11 {
          aspect-ratio: 100;
          object-fit: auto;
          object-position: center;
          width: 100%;
          stroke-width: 3px;
          stroke: #fff;
          margin-top: 5px;
        }
        .div-23 {
          font-family: Montserrat, sans-serif;
          margin-top: 4px;
        }
        .img-12 {
          aspect-ratio: 100;
          object-fit: auto;
          object-position: center;
          width: 100%;
          stroke-width: 2px;
          stroke: #11a5ff;
          margin-top: 19px;
        }
        .div-24 {
          font-family: Montserrat, sans-serif;
          margin-top: 12px;
        }
        .img-13 {
          aspect-ratio: 100;
          object-fit: auto;
          object-position: center;
          width: 100%;
          stroke-width: 2px;
          stroke: #11a5ff;
          margin-top: 19px;
        }
        .div-25 {
          font-family: Montserrat, sans-serif;
          margin-top: 12px;
        }
        .img-14 {
          aspect-ratio: 100;
          object-fit: auto;
          object-position: center;
          width: 100%;
          stroke-width: 2px;
          stroke: #11a5ff;
          margin-top: 19px;
        }
        .div-26 {
          font-family: Montserrat, sans-serif;
          margin: 12px 0 29px;
        }
        .div-27 {
          border-radius: 20px;
          background-color: #ffbc11;
          margin-top: 24px;
          justify-content: center;
          color: #000;
          text-align: center;
          padding: 82px 60px 90px;
          font: italic 500 24px Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-27 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-28 {
          border-radius: 20px;
          background-color: #75ffb1;
          margin-top: 24px;
          padding: 29px 23px;
        }
        @media (max-width: 991px) {
          .div-28 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-29 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-29 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 64%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-30 {
          color: #000;
          margin-top: 41px;
          font: italic 500 20px Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-30 {
            margin-top: 40px;
          }
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 36%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-31 {
          filter: drop-shadow(8px 8px 29.8px rgba(28, 28, 28, 0.16));
          background-color: #fff;
          border-radius: 50%;
          width: 121px;
          height: 121px;
          margin: 0 auto;
        }
        @media (max-width: 991px) {
          .div-31 {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}


