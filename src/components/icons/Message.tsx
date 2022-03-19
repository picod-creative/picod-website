import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const Message: FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    viewBox="0 0 109 98"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{
      width: 'fit-content',
      fontSize: 98,
      ...props.sx,
    }}
  >
    <g filter="url(#filter0_dd_501_333)">
      <path
        d="M46.3791 25H58.6171C61.425 24.9995 64.2055 25.5553 66.7997 26.6356C69.394 27.716 71.7512 29.2997 73.7369 31.2963C75.7225 33.293 77.2976 35.6635 78.3723 38.2724C79.4469 40.8814 80 43.6777 80 46.5016C80 52.204 77.7477 57.6729 73.7385 61.7052C69.7294 65.7375 64.2917 68.003 58.6218 68.0032H25V46.5016C25 40.799 27.2524 35.33 31.2618 31.2977C35.2712 27.2653 40.709 25 46.3791 25Z"
        fill="white"
      />
    </g>
    <path
      d="M45.3589 51.3967H44.1706C42.8914 51.3967 41.6646 50.8856 40.7601 49.9759C39.8555 49.0662 39.3474 47.8323 39.3474 46.5458C39.3474 45.2592 39.8555 44.0254 40.7601 43.1157C41.6646 42.206 42.8914 41.6949 44.1706 41.6949H45.3589V51.3967Z"
      fill="#303030"
    />
    <path
      d="M53.9433 51.3967H52.755C51.4758 51.3967 50.249 50.8856 49.3445 49.9759C48.44 49.0662 47.9318 47.8323 47.9318 46.5458C47.9318 45.2592 48.44 44.0254 49.3445 43.1157C50.249 42.206 51.4758 41.6949 52.755 41.6949H53.9433V51.3967Z"
      fill="#303030"
    />
    <path
      d="M62.9416 51.3967H61.7533C60.4741 51.3967 59.2473 50.8856 58.3427 49.9759C57.4382 49.0662 56.93 47.8323 56.93 46.5458C56.93 45.2592 57.4382 44.0254 58.3427 43.1157C59.2473 42.206 60.4741 41.6949 61.7533 41.6949H62.9416V51.3967Z"
      fill="#303030"
    />
    <defs>
      <filter
        id="filter0_dd_501_333"
        x="0"
        y="0"
        width="109"
        height="97.0032"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="9" dy="9" />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_501_333"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-9" dy="-9" />
        <feGaussianBlur stdDeviation="8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.904167 0 0 0 0 0.904167 0 0 0 0 0.904167 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_501_333"
          result="effect2_dropShadow_501_333"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_501_333"
          result="shape"
        />
      </filter>
    </defs>
  </SvgIcon>
);

export default Message;
