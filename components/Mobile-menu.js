import Sidebar from '@components/Sidebar'

const openMenu = () => {
  let element = document.getElementById("mobile-btn");
  element.classList.add("open");
}

export default function Mobile_Menu() {
  return (
    <div className="mobile-menu bg_white pc_box_shadow">
      <div id="mobile-btn">
        <div id="nav-icon" className="btn-spans nav-icon" onClick={openMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Sidebar />
      </div>
    </div>
  )
}