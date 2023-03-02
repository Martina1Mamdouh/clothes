import React, { Component } from 'react'
import { CardGroup, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import {Row ,Carousel} from 'react-bootstrap'
import StoreItem from '../data/StoreItem.json'
import StoreItems from './StoreItems'
import Shoplogo from './Shoplogo'
export default class Shop extends Component {
  render() {
    return (
      <>
      <Shoplogo/>
        <Row  md={2} xs={1} lg={3} className="g-3" style={{marginTop:"0%"}}>
          {StoreItem.map((item) => (
            <Col key={item.id}>
              <StoreItems {...item} />
            </Col>
          ))}
        </Row>
      </>
    )
  }
}
