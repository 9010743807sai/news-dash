"use client"

import React from "react"

type SocialItem = { href: string; label: string; svg: React.ReactNode }

const socials: SocialItem[] = [
  {
    href: "https://github.com/9010743807sai",
    label: "GitHub",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0.2975C5.373 0.2975 0 5.6675 0 12.2975C0 17.5575 3.438 21.9975 8.205 23.5475C8.805 23.6575 9.025 23.2975 9.025 22.9875C9.025 22.7075 9.015 22.0175 9.01 21.0975C5.6725 21.7975 4.9675 19.4575 4.9675 19.4575C4.4225 18.0375 3.6325 17.6475 3.6325 17.6475C2.545 16.8975 3.7175 16.9125 3.7175 16.9125C4.9225 17.0025 5.555 18.155 5.555 18.155C6.6375 20.035 8.4225 19.5125 9.1325 19.1975C9.2375 18.4275 9.5475 17.8975 9.895 17.5975C7.205 17.2975 4.39 16.2525 4.39 11.5775C4.39 10.2575 4.8475 9.1725 5.6075 8.3275C5.4825 8.0275 5.0825 6.7875 5.7275 5.0975C5.7275 5.0975 6.7375 4.7675 8.995 6.3275C9.955 6.0575 10.975 5.9275 12 5.9225C13.025 5.9275 14.045 6.0575 15.005 6.3275C17.2575 4.7675 18.2675 5.0975 18.2675 5.0975C18.915 6.7875 18.515 8.0275 18.39 8.3275C19.155 9.1725 19.605 10.2575 19.605 11.5775C19.605 16.2675 16.785 17.2925 14.09 17.5925C14.525 17.9525 14.915 18.6825 14.915 19.8125C14.915 21.4025 14.9 22.6075 14.9 22.9875C14.9 23.3025 15.115 23.6675 15.725 23.5475C20.49 21.9975 24 17.5575 24 12.2975C24 5.6675 18.627 0.2975 12 0.2975Z"/>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/sai-puneeth-2a025b293/",
    label: "LinkedIn",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6C1.1 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5zM0 8h5v13H0V8zm7 0h4.8v1.8h.1c.7-1.3 2.4-2.6 4.9-2.6C22.8 7.2 24 10 24 14.1V21H19v-6.1c0-1.5 0-3.4-2.1-3.4-2.2 0-2.6 1.7-2.6 3.3V21H7V8z"/>
      </svg>
    ),
  },
  {
    href: "https://x.com/saipuneeth919",
    label: "Twitter",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.762.127 1.124C7.728 8.86 4.1 6.868 1.671 3.889a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.23-.616v.062c0 2.386 1.697 4.374 3.95 4.827a4.935 4.935 0 0 1-2.224.084c.627 1.956 2.444 3.379 4.6 3.419A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.01-7.512 14.01-14.02 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/>
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/sai_puneeth_919?igsh=MmJ4aGhia2NsZ2F6",
    label: "Instagram",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 1 0 12 7.5zm0 2A2.5 2.5 0 1 1 12 14a2.5 2.5 0 0 1 0-4.5zM17.5 6.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
      </svg>
    ),
  },
  {
    href: "mailto:saipuneeth919@gmail.com",
    label: "Email",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 13.065L0 6.5V18c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2V6.5l-12 6.565zM12 11L24 4H0l12 7z"/>
      </svg>
    ),
  },
]

export default function SocialFloating() {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3">
      {socials.map((s) => (
        <a
          key={s.href}
          href={s.href}
          aria-label={s.label}
          title={s.label}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-white transition-colors shadow"
        >
          <span className="sr-only">{s.label}</span>
          {s.svg}
        </a>
      ))}
    </div>
  )
}
