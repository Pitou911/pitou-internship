import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CountdownTimer from "../UI/CountdownTimer";
import Skeleton from "../UI/Skeleton";

const ExploreItems = () => {
  const [exploreItems, setExploreItems] = useState([]);
  const [visible, setVisible] = useState(8);
  const [totalItem, setTotalItem] = useState(0);
  const showMoreItems = () => {
    setVisible((preVal) => preVal + 4);
  };
  async function main() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore"
    );
    setTotalItem(data.length);
    setExploreItems(data);
  }
  useEffect(() => {
    main();
  }, []);
  const calMilisecond = (time) => {
    return time - Date.now();
  };

  function filteredItems(filter) {
    if (filter === "price_low_to_high") {
      setExploreItems(
        exploreItems
          .slice()
          .sort((a, b) => (a.price || a.price) - (b.price || b.price))
      );
    }
    if (filter === "price_high_to_low") {
      setExploreItems(
        exploreItems
          .slice()
          .sort((a, b) => (b.price || b.price) - (a.price || a.price))
      );
    }

    if (filter === "likes_high_to_low") {
      setExploreItems(exploreItems.slice().sort((a, b) => b.likes - a.likes));
    }
  }
  return (
    <>
      <div>
        <select
          id='filter-items'
          defaultValue=''
          onChange={(event) => filteredItems(event.target.value)}
        >
          <option value='' disabled>
            Default
          </option>
          <option value='price_low_to_high'>Price, Low to High</option>
          <option value='price_high_to_low'>Price, High to Low</option>
          <option value='likes_high_to_low'>Most liked</option>
        </select>
      </div>
      {exploreItems.length ? (
        <>
          {exploreItems.slice(0, visible).map((item, index) => (
            <div
              key={index}
              className='d-item col-lg-3 col-md-6 col-sm-6 col-xs-12'
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <div className='nft__item'>
                <div className='author_list_pp'>
                  <Link
                    to={`/author/${item.authorId}`}
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                  >
                    <img className='lazy' src={item.authorImage} alt='' />
                    <i className='fa fa-check'></i>
                  </Link>
                </div>
                {item.expiryDate ? (
                  <div className='de_countdown'>
                    {calMilisecond(item.expiryDate) > 0 ? (
                      <CountdownTimer expiryDate={item.expiryDate} />
                    ) : (
                      <>Expired</>
                    )}
                  </div>
                ) : (
                  <></>
                )}

                <div className='nft__item_wrap'>
                  <div className='nft__item_extra'>
                    <div className='nft__item_buttons'>
                      <button>Buy Now</button>
                      <div className='nft__item_share'>
                        <h4>Share</h4>
                        <Link to='/' target='_blank' rel='noreferrer'>
                          <i className='fa fa-facebook fa-lg'></i>
                        </Link>
                        <Link to='/' target='_blank' rel='noreferrer'>
                          <i className='fa fa-twitter fa-lg'></i>
                        </Link>
                        <Link to='/'>
                          <i className='fa fa-envelope fa-lg'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Link to={`/item-details/${item.nftId}`}>
                    <img
                      src={item.nftImage}
                      className='lazy nft__item_preview'
                      alt=''
                    />
                  </Link>
                </div>
                <div className='nft__item_info'>
                  <Link to={`/item-details/${item.nftId}`}>
                    <h4>{item.title}</h4>
                  </Link>
                  <div className='nft__item_price'>{item.price} ETH</div>
                  <div className='nft__item_like'>
                    <i className='fa fa-heart'></i>
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {new Array(8).fill(0).map((_, index) => (
            <div
              key={index}
              className='d-item col-lg-3 col-md-6 col-sm-6 col-xs-12'
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <Skeleton width={`100%`} height={`500px`} />
            </div>
          ))}
        </>
      )}

      <div className='col-md-12 text-center'>
        {visible < totalItem && (
          <button
            onClick={showMoreItems}
            id='loadmore'
            className='btn-main lead'
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default ExploreItems;
