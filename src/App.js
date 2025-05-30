import { FaUpload } from "react-icons/fa";

export default function App() {
  return (
    <div className="container">
      <div className="layout">
        <Setting />
        <Security />
      </div>
    </div>
  );
}

function SectionHeadings({ children }) {
  return (
    <div className="setting">
      {children}
    </div>
  );
}

function Setting() {
  return (
    <div>
      <SettingHeading />
      <SettingContent />
    </div>
  )
}

function SettingHeading() {
  return (
    <SectionHeadings className="setting">
      <div>
        <h1 className="setting--heading">Setting Details</h1>
        <span>Update your photo and personal details here</span>
      </div>
      <div>
        <PaddedButton color="white">Cancel</PaddedButton><PaddedButton color="purple">Save</PaddedButton>
      </div>
    </SectionHeadings>
  );
}

function SettingContent() {
  return (
    <div className="content">
      <SettingMain />
      <SettingAside />
    </div>
  )
}


function SettingMain() {
  return (
    <main className="main">
      <form className="form">
        <h2>Personal Information</h2>
        <div className="form--content">
          <div className="form__group">
            <InputElements labelClass="form__label" inputClass="form__input" type="text" for="fname" name="fname" id="fname" placeholder="Enter first name">First Name</InputElements>
            <InputElements labelClass="form__label" inputClass="form__input" type="text" for="lname" name="lname" id="lname" placeholder="Enter last name">Last Name</InputElements>
          </div>
          <div className="form__group">
            <InputElements labelClass="form__label" inputClass="form__input" type="text" for="email" name="email" id="email" placeholder="Enter email address">Email Address</InputElements>
            <InputElements labelClass="form__label" inputClass="form__input" type="text" for="username" name="username" id="username" placeholder="Enter username">Username</InputElements>
          </div>
          <div className="form__group">
            <InputElements labelClass="form__label" inputClass="form__input" type="tel" for="phone" name="phone" id="phone" pattern="[0-9]{10}" placeholder="Enter phone no">Phone No</InputElements>
            <InputElements labelClass="form__label" inputClass="form__input" type="text" for="city" name="city" id="city" placeholder="Enter city">City</InputElements>
          </div>
          <div className="form__group">
            <InputElements labelClass="form__label" inputClass="form__input" type="text" for="countryname" name="countryname" id="countryname" placeholder="Enter country name">Country Name</InputElements>
            <InputElements labelClass="form__label" inputClass="form__input" type="text" for="city" name="city" id="city" pattern="[0-9]{5}" placeholder="Enter zip code">Zip Code</InputElements>
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

function SettingAside() {
  return (
    <aside className="aside">
      <h2>Your Photo</h2>
      <div className="aside__content">
        <div className="person">
          <div className="profile">
            <img src="" alt="" />
            <div>
              <h4>Edit your photo</h4>
              <Button color="white">Delete</Button><Button color="purple">Update</Button>
            </div>
          </div>
          <FileUpload />
        </div>
      </div>
    </aside>
  );
}


///////////////////////////////////////////////////////////////////////////////
///// This is the beginning of the Security Section

function Security() {
  return (
    <div>
      <SecurityHeading />
      <SecurityContent />
    </div>
  )
}

function SecurityHeading() {
  return (
    <SectionHeadings>
      <h1>Security</h1>
    </SectionHeadings>
  );
}

function SecurityContent() {
  return (
    <div className="content">
      <SecurityMain />
      <SecurityAside />
    </div>
  )
}

function SecurityMain() {
  return (
    <div className="main s-main security__content">
      <div className="security__heading">
        <h2 className="mb-1">Password</h2>
        <p className="mb-4">The Last password generator creates random<br /> passwords based on parameters set by you.</p>
      </div>
      <form className="security__form">
        <div className="form__group">
          <InputElements labelClass="form__label" inputClass="form__input" type="password" for="password" name="password" id="password" placeholder="Enter current password">Current Password</InputElements>
        </div>
        <div className="form__group">
          <InputElements labelClass="form__label" inputClass="form__input" type="password" for="new-password" name="new-password" id="new-password" placeholder="New password">New Password</InputElements>
        </div>
        <div className="form__group">
          <InputElements labelClass="form__label" inputClass="form__input" type="password" for="confirm-password" name="confirm-password" id="confirm-password" placeholder="Confirm password">Confirm Password</InputElements>
        </div>
        <div className="form__instruction">
          <h3 className="mb-1"> Rules for password</h3>
          <p className="mb-1">To create a new password, you have to meet all of the following requirements</p>
          <ul>
            <li>Minimum 8 character</li>
            <li>At least one special character</li>
            <li>At least one number</li>
            <li>Can't be the same as previous</li>
          </ul>
        </div>
      </form>
      
    </div>
  );
}

function SecurityAside() {
  return (
    <aside className="security__aside">
      <div className="security__heading">
        <h2 className="mb-1">Devices</h2>
        <p className="mb-2">The Last password generator creates random<br /> passwords based on parameters set by you.</p>
        <PaddedButton color="purple">Sign out from all devices</PaddedButton>
      </div>
      <div className="d-flex-container">
        <Devices device="iPhone11" location="London, UK-Oct12 at 2:30AM" />
        <Devices device="Galaxy 18" location="Berlin, Nov23 at 2:30pm" />
        <Devices device="Vivo y21" location="London, UK-Oct12 at 2:30am" />
        <Devices device="iPhone12" location="London, UK-Oct12 at 2:30AM" />
        <Devices device="Samsung" location="Karachi, PAK-Oct12 at 2:30AM" />
      </div>
    </aside>
  );
}





///////////////////////////////////////////////////////////////////////////////
///// These are components and templates used for the various pages


function FileUpload() {
  return (
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
  );
}


function InputElements({labelClass, inputClass, type, id, placeholder, pattern, children }) {
  return (
    <div>
      <label className={labelClass} for={id}>{children}</label>
      <input className={inputClass} type={type} id={id} name={id} placeholder={placeholder} />
    </div>
  );
}


function Button({children, color}) {
  return <button className={`btn btn--${color}`} type="button">{children}</button>
}

function PaddedButton({children, color}) {
  return <button className={`btn btn-${color}`} type="button">{children}</button>
}

function Devices({device, location}) {
  return (
    <div className="d-flex">
      <div>
        <h3>{device}</h3>
        <p>{location}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
      </svg>
    </div>
  )
}