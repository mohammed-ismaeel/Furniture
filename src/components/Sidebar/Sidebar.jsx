import { useEffect, useRef } from "react";

const Sidebar = ({ isOpen, onClose, triggerRef }) => {
  const sidebarRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideSidebar =
        sidebarRef.current && !sidebarRef.current.contains(event.target);
      const clickedOutsideTrigger =
        triggerRef.current && !triggerRef.current.contains(event.target);

      if (clickedOutsideSidebar && clickedOutsideTrigger) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      ref={sidebarRef}
      className="w-80 h-[calc(100%-128px)] z-50 bg-zinc-100 fixed right-0 bottom-0 max-lg:h-[calc(100%-96px)]"
    >
      <button
        onClick={onClose}
        className="mx-5 my-3 px-2 rounded-sm border border-black font-bold"
      >
        x
      </button>
      <div>
        <ul className="text-center flex flex-col gap-10 mt-5">
          <li>
            <a href="#">Home</a>
          </li>
          <hr />
          <li>
            <a href="#">Services</a>
          </li>
          <hr />
          <li>
            <a href="#">Doctors</a>
          </li>
          <hr />
          <li>
            <a href="#">Products</a>
          </li>
          <hr />
          <li>
            <a href="#">Gallery</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
