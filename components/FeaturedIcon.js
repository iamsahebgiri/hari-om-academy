import React from 'react'

export default function FeaturedIcon(props) {
  return (
    <div>
      <span className='iconify' data-icon={props.icon}></span>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          height: ${ 'height' in props ? props.height : '60' }px;
          width: ${ 'width' in props ? props.width : '60' }px;
          background: ${props.color};
          border-radius: 30px;
        }
        .iconify {
          color: #FFF;
          font-size: ${ 'height' in props ? props.height/2 : '30' }px;;
        }
      `}</style>
    </div>
  )
}
