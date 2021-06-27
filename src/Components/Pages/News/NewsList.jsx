import { Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function NewsList() {
  return (
    <Col className="news-col left">
      <div className="news-header">
        <img src="/Image/News/news1.jpg" alt="" className="news-header-image" />
        <div className="news-header-title">
          <Link to="/news/title">
            <h2>An Inside Look at Paris Fashion Week</h2>
          </Link>
          <p>
            by <strong>dodgerfan</strong> | Oct 29,2017 |{" "}
            <strong> Fashion</strong> | 0 comments
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim vero
            cupiditate dolorem rem inventore ex, libero dignissimos suscipit
            exercitationem. Nam ea fugit quis harum saepe vel magni, quibusdam
            necessitatibus enim?
          </p>
        </div>
      </div>

      <div className="news-header">
        <img src="/Image/News/news1.jpg" alt="" className="news-header-image" />
        <div className="news-header-title">
          <Link to="/news/title">
            <h2>An Inside Look at Paris Fashion Week</h2>
          </Link>
          <p>
            by <strong>dodgerfan</strong> | Oct 29,2017 |{" "}
            <strong> Fashion</strong> | 0 comments
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim vero
            cupiditate dolorem rem inventore ex, libero dignissimos suscipit
            exercitationem. Nam ea fugit quis harum saepe vel magni, quibusdam
            necessitatibus enim?
          </p>
        </div>
      </div>

      <div className="news-header">
        <img src="/Image/News/news1.jpg" alt="" className="news-header-image" />
        <div className="news-header-title">
          <Link to="/news/title">
            <h2>An Inside Look at Paris Fashion Week</h2>
          </Link>

          <p>
            by <strong>dodgerfan</strong> | Oct 29,2017 |
            <strong> Fashion</strong> | 0 comments
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim vero
            cupiditate dolorem rem inventore ex, libero dignissimos suscipit
            exercitationem. Nam ea fugit quis harum saepe vel magni, quibusdam
            necessitatibus enim?
          </p>
        </div>
      </div>
    </Col>
  );
}
