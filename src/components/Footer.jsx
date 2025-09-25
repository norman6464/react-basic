import React from 'react';

export function Footer({
  siteTitle = 'サイトタイトル未設定',
  currentYear = new Date().getFullYear(),
}) {
  return (
    <footer>
      <p>
        &copy; {currentYear} {siteTitle}
      </p>
    </footer>
  );
}
