import React from 'react';

export default function FeaturedIcon(props) {
  const {
    icon, height, width, color,
  } = props;
  return (
    <div>
      <span className="iconify" data-icon={icon} />
      <style jsx>
        {`
          div {
            display: flex;
            align-items: center;
            justify-content: center;
            height: ${'height' in props ? height : '60'}px;
            width: ${'width' in props ? width : '60'}px;
            background: ${color};
            border-radius: 30px;
          }
          .iconify {
            color: #fff;
            font-size: ${'height' in props ? height / 2 : '30'}px;
          }
        `}
      </style>
    </div>
  );
}
