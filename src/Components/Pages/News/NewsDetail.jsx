import { Col, Row } from "antd";
import React from "react";
import InputGroup from "../../Atoms/InputGroup";

export default function NewsDetail() {
  return (
    <Col className="news-col left">
      <div className="news-header">
        <img src="/Image/News/news1.jpg" alt="" className="news-header-image" />
        <div className="news-header-title">
          <h2>An Inside Look at Paris Fashion Week</h2>
          <p>
            by <strong>dodgerfan</strong> | Oct 29,2017 |{" "}
            <strong> Fashion</strong> | 0 comments
          </p>
        </div>
      </div>
      <div className="news-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida
          sollicitudin egestas. Ut lobortis eros vitae mauris cursus, vel
          faucibus turpis volutpat. Duis aliquam eu nibh non molestie. Sed
          pretium sit amet tellus eu pellentesque. In sed dictum quam. Nullam
          pulvinar porttitor lorem, eget placerat sapien sodales eget. Quisque
          ac mattis dui. Nunc sodales nisl pretium, tempor felis et, sagittis
          purus. Nullam quis purus quam. Nulla ligula libero, luctus eget
          efficitur eu, ullamcorper non ex. Sed eget ullamcorper diam, non
          hendrerit lorem. Pellentesque imperdiet nec mi at malesuada. Sed
          gravida at tortor non interdum.
        </p>
        <p className="qoute">
          Pellentesque sed maximus massa. Praesent dui leo, elementum et ipsum
          sed, aliquet gravida sapien. Curabitur libero turpis, hendrerit in
          libero quis, ullamcorper consequat leo. Nulla in consectetur ante.
          Vivamus elementum ultrices enim vel blandit. Donec facilisis diam quis
          molestie ultricies. Phasellus volutpat eros vel arcu aliquet luctus.
          Aliquam erat volutpat.
        </p>
        <p>
          Sed sed arcu at mi fringilla pellentesque at quis metus. Maecenas
          lacinia efficitur libero, sed congue risus eleifend quis. Cras lectus
          elit, fringilla eget erat vel, euismod gravida lacus. Nunc neque ex,
          ultricies non aliquet in, pretium rhoncus tellus. Curabitur at odio
          consequat, varius est nec, gravida elit. Donec et blandit ligula.
          Mauris eleifend, lacus ac gravida ullamcorper, nulla libero fermentum
          turpis, id pulvinar leo elit id orci. Vestibulum massa lacus, cursus
          eu faucibus lacinia, euismod vel metus. Ut et eleifend ex, ac laoreet
          odio.
        </p>
      </div>
      <div className="news-comment">
        <p className="title">Submit a Comment</p>
        <p className="description">
          Your email address will not be published. Required fields are marked *
        </p>
        <textarea className="text-area" rows="8">
          Comment
        </textarea>
        <Row gutter={[5, 5]} className="news-inputgroup">
          <InputGroup
            placeholder="Name"
            type="text"
            name="name"
            xl={8}
            lg={8}
            md={24}
            isLabel={false}
            error={[]}
          />
          <InputGroup
            placeholder="Email"
            type="text"
            name="email"
            xl={8}
            lg={8}
            md={24}
            isLabel={false}
            error={[]}
          />
          <InputGroup
            placeholder="Phone"
            type="text"
            name="phone"
            xl={8}
            lg={8}
            md={24}
            isLabel={false}
            error={[]}
          />
          <Row className="checkbox">
            <input type="checkbox" />
            <label>
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </Row>
        </Row>
        <p className="submit">
          <button>Submit Comment</button>
        </p>
      </div>
    </Col>
  );
}
