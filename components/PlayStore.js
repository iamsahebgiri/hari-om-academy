import React from 'react'

export default function AppStore() {
  return (
    <div>
      <img src="/play_store.svg" alt="Play Store" height="50"/>
      <style jsx>{`
        div {
          width: 160px;
          height: 50px;
          background: rgba(0,0,0, 1);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        div:hover {
          cursor: pointer;
          background: rgba(0,0,0, 0.9);
        }
        img {
          transform: scale(1.3);
        }
      `}</style>
    </div>
  )
}
