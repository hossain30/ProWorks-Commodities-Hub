import './TextSection.css'

const TextSection = () => {
  return (
    <div className="text_section">
      <div className="text_btns_container">
        <button className="txtBtnOne">Capabilities Statement</button>
        <button className="txtBtnTwo">Our Line Sheet</button>
      </div>
      <p className="text_text_container">
        ProWorks Procurement Services is a Woman-Owned, HUBZone supplier of
        industrial and facility maintenance supplies. We specialize in helping
        our customers meet their minority participation goals by providing
        procurement, logistics and project support. With our extensive network
        of partners, we are able to provide competitive pricing, quality
        products and overall cost savings for our customers.
      </p>
    </div>
  );
};

export default TextSection;
