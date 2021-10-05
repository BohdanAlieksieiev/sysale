import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import clsx from 'clsx';
import Zoom from 'react-img-zoom';
import PropTypes from 'prop-types';

import classes from './Shampoo.module.scss';
import './Main.scss';

import scalesImage from '../../assets/images/scales.svg';
import greenTickImage from '../../assets/images/green-tick.svg';
// import shampoo1Image from '../../assets/images/shampoo1.png';
import arrowDown from '../../assets/images/arrow-down.svg';
import arrowUp from '../../assets/images/arrow-up.svg';

const colors = [
  {
    label: 'Желтый',
    value: 'yellow',
  },
  {
    label: 'Красный',
    value: 'red',
  },
  {
    label: 'Зеленый',
    value: 'green',
  },
];

const Shampoo = ({ img, title, text, priceOneItem }) => {
  const [itemCount, setItemCount] = useState(1);
  const [milliliters, setMilliliters] = useState(100);
  const [price, setPrice] = useState(200);
  //const [priceOne] = useState(200); // This is the price for 1 package in which 100 milligrams
  const [isBasket, setIsBasket] = useState(false);
  const [color, setColor] = useState('');

  const changeItemCount = (count) => {
    const newItemCount = itemCount + count;
    setItemCount(newItemCount);
    setNewPrice(newItemCount, milliliters);
  };

  const onChangeValue = (event) => {
    const newMilliliters = event.target.value;
    setMilliliters(newMilliliters);
    setNewPrice(itemCount, newMilliliters);
  };
  const setNewPrice = (newItemCount, newMilliliters) => {
    const newPrice = priceOneItem * newItemCount * (newMilliliters / 100);
    setPrice(newPrice);
  };
  const basket = () => {
    setIsBasket(!isBasket);
  };

  const handleChangeDropDown = (option) => {
    setColor(option.value);
    console.log(color);
  };

  return (
    <>
      <section className={classes.Shampoo_block}>
        <div className={classes.upper_block}>
          <div className={classes.new_block}>NEW</div>
          <div className={classes.img_block}>
            <Zoom img={img} zoomScale={3} width={128} height={261} />
            {/* <img src={shampoo1Image} className={classes.img} alt="shampoo1Image" /> */}
          </div>
          <div className={classes.scales_img} onClick={basket}>
            <img
              src={scalesImage}
              className={clsx(
                classes.scales_img_size,
                !isBasket && classes.scales_img_size__active,
                isBasket && classes.scales_img_size__no_active,
              )}
              alt="scales"
            />
            <img
              src={greenTickImage}
              className={clsx(
                classes.scales_img_size,
                isBasket && classes.scales_img_size__active,
                !isBasket && classes.scales_img_size__no_active,
              )}
              alt="scales"
            />
            {/* {!isBasket && (
                    <img 
                        src={scalesImage} 
                        className={classes.scales_img_size} 
                        alt="scales"
                    />
                  )}
                  {isBasket && (
                    <img 
                        src={greenTickImage} 
                        className={classes.scales_img_size} 
                        alt="scales"
                    />
                  )} */}
          </div>
        </div>
        <div className={classes.middle_block}>
          <div className={classes.title}>{title}</div>
          <div className={classes.text}>{text}</div>
        </div>
        <div className={classes.down_block}>
          <div className={classes.color_and_price}>
            <div>
              <Dropdown
                options={colors}
                placeholder="Цвет"
                controlClassName={classes.controlClassDropDown}
                menuClassName={classes.menuClassName}
                className={classes.dropDownRoot}
                onChange={handleChangeDropDown}
                arrowClosed={
                  <span className="arrow-closed">
                    <img className={classes.arrow_dropdown} src={arrowDown} alt="arrow-down" />
                  </span>
                }
                arrowOpen={
                  <span className="arrow-open">
                    <img className={classes.arrow_dropdown} src={arrowUp} alt="arrow-up" />
                  </span>
                }
              />
            </div>
            <div>{price} грн</div>
          </div>
          <div className={classes.checkbox} onChange={(event) => onChangeValue(event)}>
            <div className={classes.radio_block}>
              <input
                className={classes.radio_input}
                type="radio"
                name="ml"
                value="100"
                id="radio1"
                defaultChecked
              />
              <label className={classes.radio_label} htmlFor="radio1">
                100 мл
              </label>
            </div>
            <div className={classes.radio_block}>
              <input
                className={classes.radio_input}
                type="radio"
                name="ml"
                value="200"
                id="radio2"
              />
              <label className={classes.radio_label} htmlFor="radio2">
                200 мл
              </label>
            </div>
            <div className={classes.radio_block}>
              <input
                className={classes.radio_input}
                type="radio"
                name="ml"
                value="300"
                id="radio3"
              />
              <label className={classes.radio_label} htmlFor="radio3">
                300 мл
              </label>
            </div>
          </div>
          <div className={classes.submit_block}>
            <div className={classes.count_items}>
              <div className={classes.count_item_sign} onClick={() => changeItemCount(-1)}>
                -
              </div>
              <div className={classes.count_item_number}>{itemCount}</div>
              <div className={classes.count_item_sign} onClick={() => changeItemCount(1)}>
                +
              </div>
            </div>
            <div>
              <button className={classes.submit_btn}>КУПИТЬ</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Shampoo.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  priceOneItem: PropTypes.number,
};

Shampoo.defaultProps = {
  img: '../../assets/images/shampoo1.png',
  title: 'Шампунь',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  priceOneItem: 200,
};

export default Shampoo;
