import { Button, Col, Row } from "antd";
import React from "react";
import { Route, Switch } from "react-router-dom";
import useFormValidate from "../../../core/hook/useFormValidate";
import InputGroup from "../../Atoms/InputGroup";
import LinkCategory from "../../Atoms/LinkCategory";
import "./index.scss";
import NewsDetail from "./NewsDetail";
import NewsList from "./NewsList";

export default function News() {
  let { form, inputChange, submit, error } = useFormValidate(
    {
      first_name: "",
    },
    {
      rule: {
        first_name: { required: true },
      },
      massage: {},
    }
  );
  return (
    <Row className="news">
      <Switch>
        <Route exact path="/news" component={NewsList} />
        <Route path="/news/:title" component={NewsDetail} />
      </Switch>

      <Col className="news-col right">
        <div className="news-search">
          <input type="text" className="search" />
          <input type="submit" value="Search" className="submit" />
        </div>

        <div className="news-recentpost">
          <h4 className="title">RECENT POST</h4>
          <ul className="listgroup">
            <li className="link">
              Decorating Master Class: 10 Common Mistakes and How to Fix Them
            </li>
            <li className="link">An Inside Look at Paris Fashion Week</li>
            <li className="link">The Fashion of Tomorrowland</li>
            <li className="link">20 Must-Have Shoes For the Holiday Season</li>
            <li className="link">
              A Master Bath With a Checkered Past Is Now Bathed in Elegance
            </li>
          </ul>
        </div>

        <div className="news-categories">
          <h4 className="title">CATEGORIES</h4>
          <LinkCategory
            to="do-choi-me-be-id2549"
            title="Fashion"
            className="link"
          />
          <LinkCategory
            to="hang-tieu-dung-thuc-pham-id4384"
            title="Interior"
            className="link"
          />
        </div>

        <div className="news-recentcomment">
          <h4 className="title">RECENT COMMENTS</h4>
        </div>
        <div className="news-tag">
          <h4 className="title">TAGS</h4>
          <Button className="button" size="small">
            Bathroom
          </Button>
          <Button className="button" size="small">
            Decorating
          </Button>
          <Button className="button" size="small">
            Fashion
          </Button>
          <Button className="button" size="small">
            Fashion Week
          </Button>
          <Button className="button" size="small">
            Interiors
          </Button>
          <Button className="button" size="small">
            Kitchen
          </Button>
          <Button className="button" size="small">
            Makeover
          </Button>
          <Button className="button" size="small">
            Must Have
          </Button>
          <Button className="button" size="small">
            Paris
          </Button>
        </div>
      </Col>
    </Row>
  );
}
