import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline_bap_container">
      <div className="timeline_child_container">
        <div className=" timeline_left_container timeline_grandChild_container">
        <i class="icon icon-left fa-regular fa-square-check"></i>
          <div className="timeline_box">
            <p>
              ProWorks works with facilities across the US that have supplier
              diversity programs in place. With our, HUBZone, Woman Owned Small
              Business, and other set aside certifications we literally check a
              lot of boxes!
            </p>
          </div>
        </div>
        <div className=" timeline_right_container timeline_grandChild_container">
          <i class="icon icon-right fa-regular fa-square-check"></i>

          <div className="timeline_box">
            <p>
              By using ProWorks, facilities reduce procurement cost and time by
              allowing us to source multiple commodity needs. We source, quote,
              and purchase multiple line items, with various categories allowing
              our customers to streamline their purchasing process.
            </p>
          </div>
        </div>
        <div className=" timeline_left_container timeline_grandChild_container">
          <i class="icon icon-left fa-regular fa-square-check"></i>
          <div className="timeline_box">
            <p>
              Need a one time purchase- Let ProWorks handle that! ProWorks
              handles those one-time buys - so you don’t have to!
            </p>
          </div>
        </div>
        <div className=" timeline_right_container timeline_grandChild_container">
          <i class="icon icon-right fa-regular fa-square-check"></i>
          <div className="timeline_box">
            <p>
              Need a hard to find product? Let ProWorks source this for you!
              With our large network of suppliers, we have over a 99% quotable
              rating!
            </p>
          </div>
        </div>
        <div className=" timeline_left_container timeline_grandChild_container">
          <i class="icon icon-left fa-regular fa-square-check"></i>

          <div className="timeline_box">
            <p>
              Need a Value Added Service? ProWorks partners work together to
              provide Inventory Management Solutions, Subcontracting Services,
              and any customer need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
