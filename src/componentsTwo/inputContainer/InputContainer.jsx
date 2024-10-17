import "./InputContainer.css";

const InputContainer = () => {
  return (
    <div className="input_container">
      <div className="input_left">
        <div className="address">
          <p>
            <i class="fa-solid fa-house-chimney"></i>000 Powerhouse Suite 000
            example TX, 0000
          </p>

          <p>
            <i class="fa-solid fa-envelope"></i>example@domain.com
          </p>

          <p>
            <i class="fa-solid fa-phone"></i>000-000-0000
          </p>
        </div>
      </div>

      <div className="input_right">
        <div className="input_box_bap">
          <form className="input_box">
            <div className="input_cover">
              <label htmlFor="name">Full Name</label>
              <input id="name" type="text" placeholder="Full Name" />
            </div>
            <div className="input_cover">
              <label htmlFor="email">Email *</label>
              <input id="email" type="email" placeholder="Email" />
            </div>

            <div className="input_cover">
              <label htmlFor="phone">Phone *</label>
              <input id="phone" type="tel" placeholder="Full Name" />
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputContainer;
