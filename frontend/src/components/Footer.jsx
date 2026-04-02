import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 text-center border-t border-gray-200 dark:border-gray-800">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Sajith. All rights reserved.
      </p>
    </footer>
  );
}

