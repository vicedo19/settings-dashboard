import { FaUpload } from "react-icons/fa";

export default function App() {
  return (
    <div className="container">
      <SettingHeading />
      <Content />
    </div>
  );
}


function SettingHeading() {
  return (
    <div className="setting">
      <h1 className="setting--heading">Setting Details</h1>
      <span>Update your photo and personal details here</span>
    </div>
  );
}


function Content() {
  return (
    <div className="content">
      <Main />
      <Aside />
    </div>
  )
}


function Main() {
  return (
    <main className="main">
      <form className="form">
        <h2>Personal Information</h2>
        <div className="form--content">
          <div className="form__group">
            <div>
              <label className="form__label" for="fname">Full Name</label>
              <input className="form__input" type="text" id="fname" name="fname" placeholder="Enter first name" />
            </div>
            <div>
              <label className="form__label" for="lname">Last Name</label>
              <input className="form__input" type="text" id="lname" name="lname" placeholder="Enter last name" />
            </div>
          </div>
          <div className="form__group">
            <div>
              <label className="form__label" for="email">Email Address</label>
              <input className="form__input" type="email" id="email" name="email" placeholder="Enter email address" />
            </div>
            <div>
              <label className="form__label" for="username">Username</label>
              <input className="form__input" type="text" id="username" name="username" placeholder="Enter username" />
            </div>
          </div>
          <div className="form__group">
            <div>
              <label className="form__label" for="phone">Phone No</label>
              <input className="form__input" type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="Enter phone no" />
            </div>
            <div>
              <label className="form__label" for="city">City</label>
              <input className="form__input" type="text" id="city" name="city" placeholder="Enter city" />
            </div>
          </div>
          <div className="form__group">
            <div>
              <label className="form__label" for="countryname">Country Name</label>
              <input className="form__input" type="text" id="countryname" name="countryname" placeholder="Enter country name" />
            </div>
            <div>
              <label className="form__label" for="zipcode">Zip Code</label>
              <input className="form__input" type="text" id="zipcode" name="zipcode" placeholder="Enter zip code" pattern="[0-9]{5}" title="5-digit zip code" />
            </div>
          </div>
          <div className="form__group">
            <div>
              <label className="form__label" for="bio">Bio <span>(Write a short introduction)</span></label>
              <select>
                <option value="normal">Normal</option>
              </select>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus, metus sed venenatis convallis, sem purus ornare ipsum, ac feugiat magna lorem in purus. Phasellus iaculis quam ullamcorper nibh gravida, at blandit ipsum ornare. In luctus lacinia mi sed pharetra.</p>
          <div className="form__group">
            <div>
              <label className="form__label" htmlFor="timezone">Timezone</label>
              <select id="timezone">
                <option value="PST">Pacific Standard Time</option>
                <option value="MST">Mountain Standard Time</option>
                <option value="CST">Central Standard Time</option>
                <option value="EST">Eastern Standard Time</option>
                <option value="AKST">Alaska Standard Time</option>
                <option value="HST">Hawaii Standard Time</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </main>
  )
}

function Aside() {
  return (
    <aside className="aside">
      <h2>Your Photo</h2>
      <div className="aside__content">
        <div className="person">
          <div className="profile">
            <img src="" alt="" />
            <div>
              <h4>Edit your photo</h4>
              <button>Delete</button>
            </div>
          </div>
          <div class="upload-container">
            <input type="file" id="file-upload" accept=".svg,.png,.jpg,.jpeg,.gif" hidden />
            <label for="file-upload" class="upload-box">
              <div class="upload-text">
                <FaUpload size="1.5em" style={{ marginRight: '8px'}} />
                <span>Click to upload</span> or drag and drop<br /> 
                <small>SVG, PNG, JPG or GIF (max. 800×400px)</small>
              </div>
            </label>
            <p id="file-name">No file selected</p>
          </div>
        </div>
        <div>
          <img src="./Google_2015_logo.svg.png" alt="Google Logo" style={{ width: "60px"}} />
          <p>Use google to sign into your account <a href="https://www.google.com">Click here to learn more</a></p>
        </div>
      </div>
    </aside>
  )
}

function Button({children}) {
  return <button className="btn" type="button">{children}</button>
}
