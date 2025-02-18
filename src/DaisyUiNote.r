<>
  {/*Navbar :*/}
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </div>
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
        >
          <div className="card-body">
            <span className="text-lg font-bold">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>


  {/*Tab :*/}
  <div role="tablist" className="tabs tabs-boxed">
    <a role="tab" className="tab">
      Tab 1
    </a>
    <a role="tab" className="tab tab-active">
      Tab 2
    </a>
    <a role="tab" className="tab">
      Tab 3
    </a>
  </div>


  {/*Link :*/}
  <a className="link link-info">I'm a simple link</a>

  {/*Check box :*/}
  <div className="form-control">
    <label className="label cursor-pointer">
      <span className="label-text">Remember me</span>
      <input
        type="checkbox"
        defaultChecked
        className="checkbox checkbox-primary"
      />
    </label>
  </div>


  {/*File input :*/}
  <input
    type="file"
    className="file-input file-input-bordered file-input-primary w-full max-w-xs"
  />


  {/*Hero :*/}
  <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        className="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  ;
  <div
    className="hero min-h-screen"
    style={{
      backgroundImage:
        "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>


  {/* Indicator : */}
  <div className="indicator">
    <span className="indicator-item badge badge-secondary">99+</span>
    <button className="btn">inbox</button>
  </div>
  <div className="indicator">
    <span className="indicator-item badge badge-secondary"></span>
    <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
  </div>


  {/* Footer : */}
  <footer className="footer bg-base-200 text-base-content p-10">
    <nav>
      <h6 className="footer-title">Services</h6>
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav>
    <nav>
      <h6 className="footer-title">Company</h6>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav>
    <nav>
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
    <form>
      <h6 className="footer-title">Newsletter</h6>
      <fieldset className="form-control w-80">
        <label className="label">
          <span className="label-text">Enter your email address</span>
        </label>
        <div className="join">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered join-item"
          />
          <button className="btn btn-primary join-item">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </footer>

  {/*  */}
  <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
    <nav className="grid grid-flow-col gap-4">
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav>
    <nav>
      <div className="grid grid-flow-col gap-4">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </nav>
    <aside>
      <p>
        Copyright © {new Date().getFullYear()} - All right reserved by ACME
        Industries Ltd
      </p>
    </aside>
  </footer>


  {/* Text-area : */}
  <textarea className="textarea textarea-primary" placeholder="Bio"></textarea>;
  <textarea className="textarea textarea-info" placeholder="Bio"></textarea>;
  <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>


  {/* Deroulant : */}
  <select className="select select-bordered w-full max-w-xs">
    <option disabled selected>
      Who shot first?
    </option>
    <option>Han Solo</option>
    <option>Greedo</option>
  </select>

  {/*  */}
  <select className="select w-full max-w-xs">
    <option disabled selected>
      Pick your favorite Simpson
    </option>
    <option>Homer</option>
    <option>Marge</option>
    <option>Bart</option>
    <option>Lisa</option>
    <option>Maggie</option>
  </select>


  {/* Loading : */}
  <span className="loading loading-spinner loading-xs"></span>
  <span className="loading loading-spinner loading-sm"></span>
  <span className="loading loading-spinner loading-md"></span>
  <span className="loading loading-spinner loading-lg"></span>
  <span className="loading loading-ring loading-xs"></span>
  <span className="loading loading-ring loading-sm"></span>
  <span className="loading loading-ring loading-md"></span>
  <span className="loading loading-ring loading-lg"></span>

  {/*  */}
  <span className="loading loading-infinity loading-xs"></span>
  <span className="loading loading-infinity loading-sm"></span>
  <span className="loading loading-infinity loading-md"></span>
  <span className="loading loading-infinity loading-lg"></span>


  {/* Boutton : */}
  <button className="btn">Button</button>
  <button className="btn btn-neutral">Neutral</button>
  <button className="btn btn-primary">Primary</button>
  <button className="btn btn-secondary">Secondary</button>
  <button className="btn btn-accent">Accent</button>
  <button className="btn btn-ghost">Ghost</button>
  <button className="btn btn-link">Link</button>
  <button className="btn btn-outline">Default</button>
  <button className="btn btn-outline btn-primary">Primary</button>
  <button className="btn btn-outline btn-secondary">Secondary</button>
  <button className="btn btn-outline btn-accent">Accent</button>
  {/*  */}
  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
    Responsive
  </button>


  {/* Theme change */}
  <label className="swap swap-rotate">
    {/* this hidden checkbox controls the state */}
    <input type="checkbox" className="theme-controller" value="synthwave" />

    {/* sun icon */}
    <svg
      className="swap-off h-10 w-10 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
    </svg>

    {/* moon icon */}
    <svg
      className="swap-on h-10 w-10 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
    </svg>
  </label>

  {/*  */}
  <input
    type="checkbox"
    value="synthwave"
    className="toggle theme-controller"
  />

  {/*  */}
  <label className="flex cursor-pointer gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
    <input
      type="checkbox"
      value="synthwave"
      className="toggle theme-controller"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </label>

  {/*  */}
  <label className="grid cursor-pointer place-items-center">
    <input
      type="checkbox"
      value="synthwave"
      className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
    />
    <svg
      className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
    <svg
      className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </label>


  {/* Card */}
  <div className="card card-compact bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>

  {/* Chat buble */}
  <div className="chat chat-start">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS chat bubble component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </div>
    </div>
    <div className="chat-header">
      Obi-Wan Kenobi
      <time className="text-xs opacity-50">12:45</time>
    </div>
    <div className="chat-bubble">You were the Chosen One!</div>
    <div className="chat-footer opacity-50">Delivered</div>
  </div>
  <div className="chat chat-end">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS chat bubble component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </div>
    </div>
    <div className="chat-header">
      Anakin
      <time className="text-xs opacity-50">12:46</time>
    </div>
    <div className="chat-bubble">I hate you!</div>
    <div className="chat-footer opacity-50">Seen at 12:46</div>
  </div>

  {/*  */}
  <div className="chat chat-start">
    <div className="chat-header">
      Obi-Wan Kenobi
      <time className="text-xs opacity-50">2 hours ago</time>
    </div>
    <div className="chat-bubble">You were the Chosen One!</div>
    <div className="chat-footer opacity-50">Seen</div>
  </div>
  <div className="chat chat-start">
    <div className="chat-header">
      Obi-Wan Kenobi
      <time className="text-xs opacity-50">2 hour ago</time>
    </div>
    <div className="chat-bubble">I loved you.</div>
    <div className="chat-footer opacity-50">Delivered</div>
  </div>

  {/* Countdown */}
  <span className="countdown font-mono text-2xl">
    <span style={{"--value":10}}></span>:
    <span style={{"--value":24}}></span>:
    <span style={{"--value":${counter}}}></span>
  </span>

  {/*  */}
  <span className="countdown">
    <span style={{"--value":${counter}}}></span>
  </span>

  {/* Alert */}
  <div role="alert" className="alert alert-success">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Your purchase has been confirmed!</span>
</div>

{/*  */}
<div role="alert" className="alert alert-error">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Error! Task failed successfully.</span>
</div>

{/* Toast */}
<div className="toast toast-center toast-middle">
  <div className="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div className="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>

{/* Toggle */}
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span>
    <input type="checkbox" className="toggle" defaultChecked />
  </label>
</div>

{/*  */}
<div className="flex flex-col">
  <div className="form-control w-52">
    <label className="label cursor-pointer">
      <span className="label-text">Remember me</span>
      <input type="checkbox" className="toggle toggle-primary" defaultChecked />
    </label>
  </div>
  <div className="form-control w-52">
    <label className="label cursor-pointer">
      <span className="label-text">Remember me</span>
      <input type="checkbox" className="toggle toggle-secondary" defaultChecked />
    </label>
  </div>
  <div className="form-control w-52">
    <label className="label cursor-pointer">
      <span className="label-text">Remember me</span>
      <input type="checkbox" className="toggle toggle-accent" defaultChecked />
    </label>
  </div>
</div>

</>;
