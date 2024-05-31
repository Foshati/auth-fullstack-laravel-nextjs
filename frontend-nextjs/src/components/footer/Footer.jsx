import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="p-4 footer footer-center bg-base-300 text-base-content">
        <aside>
          <p className="hidden lg:block">
            Copyright &copy; 2024 - All right reserved by{" "}
            <a
              className="cursor-pointer hover:text-red-500"
              href="https://github.com/Foshati"
              target="_blank"
              rel="noopener noreferrer" /* Prevent tabnabbing security attack */
            >
              Foshati
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
}
