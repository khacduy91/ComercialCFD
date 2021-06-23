import { Badge, Button, Card, Col, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import "./index.scss";
import { ShoppingOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cart_addToCart } from "../../../redux/reducers/cartReducer";
import SkeletonImage from "antd/lib/skeleton/Image";

export default function ProductCard(props) {
  let {
    imageUrl,
    productName,
    productPrice,
    xl,
    lg,
    md,
    sm,
    xs,
    loading,
    slug,
    _id,
    category,
  } = props;

  const dispatch = useDispatch();

  function _addToCart(e) {
    let data = {
      imageUrl: imageUrl,
      name: productName,
      price: productPrice,
      _id: _id,
      category: category,
    };
    dispatch(cart_addToCart(data));
  }
  let [cartNum, setCartNum] = useState(0);
  let listCart = useSelector((state) => state.cart.listCart);
  let num = useSelector((state) => state.cart.num);

  useEffect(() => {
    let f = listCart.findIndex((item) => item._id === _id);
    setCartNum(listCart[f]?.cartNum);
  }, [num]);

  // let cartNum = listCart[f].cartNum;

  return (
    <Col
      xl={{ span: xl }}
      lg={{ span: lg }}
      md={{ span: md }}
      sm={{ span: sm }}
      xs={{ span: xs }}
    >
      <Card
        cover={
          <>
            {loading ? (
              <SkeletonImage
                active={true}
                style={{ width: 230, height: 250 }}
              ></SkeletonImage>
            ) : (
              <Link to={`/shop/detail/${slug}`} className="productCard-Image">
                <img alt="example" src={imageUrl} />
              </Link>
            )}
          </>
        }
        bordered="false"
        className="productCard"
      >
        <Skeleton loading={loading} active="true" paragraph={{ row: 2 }}>
          <Meta
            className="productCard-Meta"
            title={
              <>
                <Link className="productCard-Title" to={`/shop/detail/${slug}`}>
                  {productName}
                </Link>
                <Button
                  icon={
                    <Badge count={cartNum} size="small" offset={[5, -5]}>
                      <ShoppingOutlined />
                    </Badge>
                  }
                  size="medium"
                  className="productCard-Button"
                  onClick={(e) => _addToCart(e)}
                ></Button>
              </>
            }
            description={
              <>
                <p className="productCard-Description">
                  {productPrice?.toLocaleString()}
                </p>
              </>
            }
          />
        </Skeleton>
      </Card>
    </Col>
  );
}
