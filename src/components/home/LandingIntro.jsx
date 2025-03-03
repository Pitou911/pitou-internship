import React from "react";

const LandingIntro = () => {
  return (
    <section id='section-intro' className='no-top no-bottom'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 mb-sm-30'>
            <div className='feature-box f-boxed style-3'>
              <div
                data-aos='fade-up'
                data-aos-offset='10'
                data-aos-duration='800'
              >
                <i className='bg-color-2 i-boxed icon_wallet'></i>
              </div>
              <div className='text'>
                <div
                  data-aos='fade-up'
                  data-aos-offset='10'
                  data-aos-duration='1000'
                >
                  <h4 className=''>Set up your wallet</h4>
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-offset='10'
                  data-aos-duration='1300'
                >
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.
                  </p>
                </div>
              </div>
              <i className='wm icon_wallet'></i>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-sm-30'>
            <div className='feature-box f-boxed style-3'>
              <div
                data-aos='fade-up'
                data-aos-offset='10'
                data-aos-duration='800'
              >
                <i className='bg-color-2 i-boxed icon_cloud-upload_alt'></i>
              </div>
              <div className='text'>
                <div
                  data-aos='fade-up'
                  data-aos-offset='10'
                  data-aos-duration='1000'
                >
                  <h4 className=''>Add your NFT's</h4>
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-offset='10'
                  data-aos-duration='1300'
                >
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.
                  </p>
                </div>
              </div>
              <i className='wm icon_cloud-upload_alt'></i>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-sm-30'>
            <div className='feature-box f-boxed style-3'>
              <div
                data-aos='fade-up'
                data-aos-offset='10'
                data-aos-duration='800'
              >
                <i className='bg-color-2 i-boxed icon_tags_alt'></i>
              </div>
              <div className='text'>
                <div
                  data-aos='fade-up'
                  data-aos-offset='10'
                  data-aos-duration='1000'
                >
                  <h4 className=''>Sell your NFT's</h4>
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-offset='10'
                  data-aos-duration='1300'
                >
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.
                  </p>
                </div>
              </div>
              <i className='wm icon_tags_alt'></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
