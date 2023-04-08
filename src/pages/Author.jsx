import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "../components/UI/Skeleton";

const Author = () => {
  const { id } = useParams();
  const [authorItems, setAuthorItems] = useState({});
  const [followers, setFollowers] = useState();
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  async function main() {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`
    );
    setFollowers(data.followers);
    setAuthorItems(data);
    setLoading(false);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    main();
  }, []);

  function toggleFollow() {
    if (isFollowing) {
      setFollowers(followers - 1);
    } else {
      setFollowers(followers + 1);
    }
    setIsFollowing(!isFollowing);
  }
  return (
    <div id='wrapper'>
      <div className='no-bottom no-top' id='content'>
        <div id='top'></div>

        <section
          id='profile_banner'
          aria-label='section'
          className='text-light'
          data-bgimage='url(images/author_banner.jpg) top'
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>
        {loading ? (
          <section aria-label='section'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='d_profile de-flex'>
                    <div className='de-flex-col'>
                      <div className='profile_avatar'>
                        <Skeleton
                          width={`150px`}
                          height={`150px`}
                          borderRadius={`50%`}
                        />
                        <i className='fa fa-check'></i>
                      </div>
                      <div className='profile_name'>
                        <h4>
                          <Skeleton width={`90px`} height={`20px`} />
                          <span className='profile_username'>
                            <Skeleton width={`75px`} height={`20px`} />
                          </span>
                          <span id='wallet' className='profile_wallet'>
                            <Skeleton width={`120px`} height={`20px`} />
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className='profile_follow de-flex'>
                      <div className='de-flex-col'>
                        <div className='profile_follower'>
                          <Skeleton width={`90px`} height={`20px`} />
                        </div>
                        <button className='btn-main'>Follow</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='de_tab tab_simple'>
                    <div className='tab-1'>
                      <div className='row'>
                        {new Array(8).fill(0).map((_, index) => (
                          <div
                            className='col-lg-3 col-md-6 col-sm-6 col-xs-12'
                            key={index}
                          >
                            <div className='nft__item'>
                              <div className='author_list_pp'>
                                <Skeleton
                                  width={`50px`}
                                  height={`50px`}
                                  borderRadius={`50%`}
                                />
                              </div>

                              <div className='nft__item_wrap'>
                                <Skeleton
                                  width={`100%`}
                                  height={`320px`}
                                  borderRadius={`50px`}
                                />
                              </div>
                              <div className='nft__item_info'>
                                <Skeleton width={`90px`} height={`20px`} />
                                <div className='nft__item_price'>
                                  <Skeleton width={`75px`} height={`20px`} />
                                </div>
                                <div className='nft__item_like'>
                                  <Skeleton width={`50px`} height={`20px`} />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section aria-label='section'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='d_profile de-flex'>
                    <div className='de-flex-col'>
                      <div className='profile_avatar'>
                        <img src={authorItems.authorImage} alt='' />

                        <i className='fa fa-check'></i>
                        <div className='profile_name'>
                          <h4>
                            {authorItems.authorName}
                            <span className='profile_username'>
                              @{authorItems.tag}
                            </span>
                            <span id='wallet' className='profile_wallet'>
                              {authorItems.address}
                            </span>
                            <button id='btn_copy' title='Copy Text'>
                              Copy
                            </button>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className='profile_follow de-flex'>
                      <div className='de-flex-col'>
                        <div className='profile_follower'>
                          {followers} followers
                        </div>

                        <button onClick={toggleFollow} className='btn-main'>
                          {isFollowing ? "Unfollow" : "Follow"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-12'>
                  <div className='de_tab tab_simple'>
                    <AuthorItems authorItems={authorItems} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Author;
