export default function Dropdown() {
  return (
    <>
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1">
          Menu
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Section-1</a>
          </li>
          <li>
            <a>Section-2</a>
          </li>
        </ul>
      </div>
    </>
  );
}
