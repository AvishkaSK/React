import SportImage from '../../assets/images/banner.png'
import Button from '../atoms/button';

const HeroSection = () => {
  return (
    <div
      className="position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '530px'
      }}
    >
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: '50vh' }}>
          
          <div className="col-lg-6 text-white py-5">
            <h1 className="display-3 fw-bold mb-4">
              Sports Gear For Champion
            </h1>
            <p className="lead mb-4">
              Elevate your game with premium sports equipment and apparel designed for peak performance
            </p>
            <div className="d-flex gap-3">
              <Button text="Shop Now" className="btn-outline-light btn-lg px-5" />
              <Button text="View Collection" className="btn-outline-light btn-lg px-5" />
            </div>
          </div>

          <div className="col-lg-6 d-none d-lg-block">
            <div className="text-center">
              <img
                src={SportImage}
                alt="Banner"
                style={{ maxWidth: '100%' }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
