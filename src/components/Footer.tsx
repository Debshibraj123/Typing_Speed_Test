import React, { memo, useEffect } from "react";

type Props = {
  theme: string;
};

function Footer({ theme }: Props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className={`text-center mt-auto ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
      <div className='container'>
        <ul className='nav justify-content-center py-2'>
          <li className='nav-item pe-1'>
            <a
              className='github-button'
              href='https://github.com/Debshibraj123/Typing_Speed_Test'
              data-icon='octicon-star'
              data-color-scheme='no-preference: light; light: light; dark: dark;'
              data-show-count='true'
              
            >
              Star
            </a>
          </li>

          <li className='nav-item pe-1'>
            <a
              className='github-button'
              href='https://github.com/Debshibraj123/Typing_Speed_Test.git'
              data-icon='octicon-repo-forked'
              data-color-scheme='no-preference: light; light: light; dark: dark;'
              data-show-count='true'
            >
              Fork
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='github-button'
              href='https://github.com/Debshibraj123/Typing_Speed_Test.git'
              data-color-scheme='no-preference: light; light: light; dark: dark;'
              aria-label='Follow @Debshibraj123 on GitHub'
            >
              Follow
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default memo(Footer);
