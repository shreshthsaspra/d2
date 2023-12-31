import React from "react";
import "../../index.css";
import { areaGRey, jupiter, mars, orange, tomato } from "../../assets";

export default function What() {
  return (
    <div className="flex   w-full max-w-7xl items-center itStart static my-[120px] z-20 mx-auto" id="whatWeDo" style={{ paddingTop: '20vh' }}>
      <div className="flex flex-col pl-5 items-center w-full itStart  ">
        <div className="BoxOut flex items-center z-10 itStart">
          <div className="boxHead w-[600px] whathead">
            <h1>OUR AREA</h1>
            <p>
              ウェブ制作、AIソリューション、web3テクノロジーに特化。<br /> ITを通じて物事を大きく変え、そこからビジネスを革新し、 <br /> 変えることを得意とします。
            </p>
          </div>
          <div className="boxIn relative mr-[-80px] darvinResWeb1">
            <h1>WEB</h1>
            <p>
              ウェブサイトの制作から <br />
              システムの開発まで幅広く
            </p>
            <img src={jupiter} alt="no img" className='jupi jupireal absolute right-[-36px] top-[-120px] w-[200px] h-auto z-30 overflow-visible' />
          </div>
        </div>
        <div className="BoxOut flex items-center z-10 ">
          <div className="boxIn relative darvinResAi">
            <h1>AI </h1>
            <p>
              AIを使ったサービス開発、業務効率 <br />
              化、アルゴリズム開発など。
            </p>
            <img src={mars} alt="no img" className='mars mars2 absolute right-[-15px] top-[-45px] w-[100px] h-auto z-30 overflow-visible' />
          </div>
          <div className="boxIn darvinResApps">
            <h1>APPs</h1>
            <p>
              ウェブアプリから、サービスとして <br />
              のアプリ開発まで。
            </p>

          </div>
        </div>
        <div className="BoxOut flex items-center z-10 mr-[-120px] boxInMore">
          <div className="boxIn relative darvinResWeb">
            <h1>web3.0 </h1>
            <p>
              最先端のweb3.0領域のサービス開発 <br />
              やコンサルティング。
            </p>
            <img src={tomato} alt="no img" className='jupi tomatoJupi absolute left-[40px] bottom-[-140px] w-[180px] h-auto z-30 overflow-visible' />
          </div>
          <div className="boxIn relative darvinResMore ">
            <h1>and more.</h1>
            <img src={orange} alt="no img" className='mars lemo absolute right-[40px] w-[100px] h-auto z-30 overflow-visible' />

          </div>
        </div>
        <div className="absolute left-0 z-0 ">
          <img src={areaGRey} alt="no img" className='w-[1000px] h-auto' />
        </div>
      </div>
    </div>
  );
}
