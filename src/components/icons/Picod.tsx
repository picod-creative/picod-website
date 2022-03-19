import { SvgIcon, SvgIconProps } from '@mui/material';
import type { FC } from 'react';

export interface PicodIconProps extends SvgIconProps {
  variant: 'icon' | 'logo-monochrome' | 'logo-color';
}

const Picod: FC<PicodIconProps> = ({ variant, ...props }) =>
  variant === 'icon' ? (
    <SvgIcon
      {...props}
      viewBox="0 0 30 46"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      sx={{
        fontSize: 46,
        width: 'fit-content',
        ...props.sx,
      }}
    >
      <path
        d="M0.939212 0.647095H14.9995C18.9516 0.647095 22.7419 2.21708 25.5365 5.01167C28.3311 7.80626 29.9011 11.5965 29.9011 15.5487C29.9011 19.5008 28.3311 23.2911 25.5365 26.0857C22.7419 28.8803 18.9516 30.4503 14.9995 30.4503H0.0979004V1.48841C0.0979004 1.26528 0.186539 1.05129 0.344315 0.893509C0.502091 0.735733 0.716082 0.647095 0.939212 0.647095Z"
        fill="white"
      />
      <path
        d="M0.0979004 30.4502H14.9995C14.9995 34.4023 13.4295 38.1926 10.6349 40.9872C7.84032 43.7818 4.05005 45.3518 0.0979004 45.3518V30.4502Z"
        fill="#9C9B9B"
      />
    </SvgIcon>
  ) : variant === 'logo-monochrome' ? (
    <SvgIcon
      {...props}
      fontSize="inherit"
      viewBox="0 0 392 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        width: 'fit-content',
        fontSize: 127,
        ...props.sx,
      }}
    >
      <path
        d="M2.73198 0.906006H43.2266C54.4597 0.906006 65.2327 5.3653 73.1757 13.3029C81.1187 21.2405 85.5811 32.0062 85.5811 43.2316V43.2316C85.5811 54.4571 81.1187 65.2228 73.1757 73.1604C65.2327 81.098 54.4597 85.5573 43.2266 85.5573H0.87207V2.76991C0.872068 2.27648 1.06786 1.80319 1.41651 1.45379C1.76516 1.10439 2.23822 0.907398 2.73198 0.906006V0.906006Z"
        fill="#E5E5E5"
      />
      <path
        d="M336.728 127.888H326.297C315.064 127.888 304.291 123.429 296.348 115.491C288.405 107.554 283.942 96.7879 283.942 85.5625V85.5625C283.942 74.337 288.405 63.5713 296.348 55.6337C304.291 47.6961 315.064 43.2368 326.297 43.2368H336.728V127.888V127.888Z"
        fill="#E5E5E5"
      />
      <path
        d="M235.503 127.888H235.579C258.972 127.888 277.936 108.938 277.936 85.5612C277.936 62.1847 258.972 43.2342 235.579 43.2342H235.503C212.11 43.2342 193.146 62.1847 193.146 85.5612C193.146 108.938 212.11 127.888 235.503 127.888Z"
        fill="#E5E5E5"
      />
      <path
        d="M0.869385 85.5625H43.2239C43.2239 96.788 38.7615 107.554 30.8185 115.491C22.8755 123.429 12.1025 127.888 0.869385 127.888V85.5625Z"
        fill="#666666"
      />
      <path
        d="M89.7034 43.2343H97.7534C101.761 43.2343 105.729 44.023 109.431 45.5556C113.134 47.0881 116.498 49.3344 119.332 52.1662C122.165 54.9979 124.413 58.3597 125.947 62.0596C127.48 65.7595 128.27 69.725 128.27 73.7297V127.886H120.22C112.126 127.886 104.364 124.673 98.6414 118.954C92.9185 113.235 89.7034 105.478 89.7034 97.39V43.2343V43.2343Z"
        fill="#666666"
      />
      <path
        d="M362.285 11.143H368.47V95.5314C368.47 104.113 365.058 112.343 358.986 118.411C352.914 124.479 344.678 127.888 336.091 127.888H329.906V43.4998C329.906 39.2506 330.744 35.0431 332.371 31.1174C333.998 27.1917 336.383 23.6247 339.39 20.6201C345.462 14.552 353.697 11.143 362.285 11.143V11.143Z"
        fill="#666666"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M176.207 127.888H186.637V105.749C185.616 105.914 184.568 106 183.5 106C172.73 106 164 97.2696 164 86.5C164 75.7304 172.73 67 183.5 67C184.568 67 185.616 67.0859 186.637 67.2511V43.2368H176.207C164.973 43.2368 154.2 47.6961 146.257 55.6337C138.314 63.5713 133.852 74.337 133.852 85.5625C133.852 96.7879 138.314 107.554 146.257 115.491C154.2 123.429 164.973 127.888 176.207 127.888Z"
        fill="#C4C4C4"
      />
    </SvgIcon>
  ) : variant === 'logo-color' ? (
    <SvgIcon
      {...props}
      viewBox="0 0 157 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        width: 'fit-content',
        fontSize: 51,
        ...props.sx,
      }}
    >
      <path
        d="M86.6433 33.5614C86.6369 38.0279 84.85 42.3093 81.6752 45.4654C78.5004 48.6214 74.1971 50.3941 69.7104 50.3941H69.6814C67.3884 50.5099 65.0957 50.1604 62.9427 49.3666C60.7896 48.5729 58.8212 47.3516 57.1571 45.7769C55.493 44.2022 54.1679 42.3071 53.2625 40.2067C52.357 38.1064 51.8901 35.8446 51.8901 33.559C51.8901 31.2734 52.357 29.0117 53.2625 26.9113C54.1679 24.811 55.493 22.9158 57.1571 21.3412C58.8212 19.7665 60.7896 18.5452 62.9427 17.7514C65.0957 16.9577 67.3884 16.6081 69.6814 16.724H69.7104C73.1229 16.726 76.4553 17.7543 79.2705 19.6743C82.0858 21.5943 84.2526 24.3162 85.487 27.4834C85.487 27.4834 82.5407 28.384 79.6815 29.2509C77.0819 29.9897 74.303 29.7814 71.8439 28.6634C70.9332 28.2688 69.9302 28.1336 68.9469 28.273C67.9635 28.4123 67.0383 28.8207 66.2743 29.4526C65.5103 30.0845 64.9375 30.9152 64.6197 31.852C64.3019 32.7889 64.2516 33.7952 64.4744 34.7588C64.6971 35.7224 65.1843 36.6056 65.8815 37.3099C66.5787 38.0142 67.4586 38.512 68.4232 38.7479C69.3878 38.9837 70.3993 38.9484 71.3449 38.6458C72.2906 38.3431 73.1333 37.7851 73.7791 37.0339C74.6592 35.9695 75.7608 35.1079 77.0078 34.5084C78.2548 33.9089 79.6176 33.5858 81.0022 33.5614H86.6433Z"
        fill="url(#paint0_linear_673_2)"
      />
      <path
        d="M4.40759 0.117769H17.8958C22.3867 0.117769 26.6937 1.89374 29.8692 5.05498C33.0447 8.21622 34.8287 12.5038 34.8287 16.9745C34.8287 21.4451 33.0447 25.7327 29.8692 28.8939C26.6937 32.0552 22.3867 33.8312 17.8958 33.8312H0.962963V3.48911C0.97444 2.5885 1.34288 1.72888 1.98804 1.09744C2.63321 0.466002 3.50285 0.113885 4.40759 0.117769Z"
        fill="url(#paint1_linear_673_2)"
      />
      <path
        d="M0.962963 33.7686H17.8958C17.8958 38.2392 16.1118 42.5268 12.9363 45.688C9.76078 48.8493 5.45384 50.6252 0.962963 50.6252V33.7686Z"
        fill="url(#paint2_linear_673_2)"
      />
      <path
        d="M156.789 16.907L139.856 16.907C139.856 12.4364 141.64 8.1488 144.816 4.98756C147.991 1.82631 152.298 0.0503483 156.789 0.0503483V16.907Z"
        fill="url(#paint3_linear_673_2)"
      />
      <path
        d="M47.8912 50.3941H39.4248C38.5061 50.3941 37.625 50.0307 36.9754 49.384C36.3257 48.7373 35.9608 47.8602 35.9608 46.9457V23.0188L36.1446 23.2355C37.667 24.9772 39.6959 26.2042 41.9502 26.7465C44.6414 27.444 47.0246 29.0096 48.7272 31.1985C50.4297 33.3875 51.3556 36.0764 51.36 38.8448V46.9457C51.36 47.3989 51.2703 47.8477 51.0959 48.2664C50.9215 48.6851 50.6659 49.0655 50.3437 49.3858C50.0216 49.706 49.6391 49.9599 49.2183 50.133C48.7975 50.306 48.3465 50.3947 47.8912 50.3941Z"
        fill="url(#paint4_linear_673_2)"
      />
      <path
        d="M51.3407 32.5212V16.7C51.3407 14.6728 50.5318 12.7287 49.0919 11.2953C47.652 9.86192 45.6991 9.05664 43.6628 9.05664C41.6269 9.05792 39.6748 9.8636 38.2352 11.2967C36.7956 12.7298 35.9863 14.6732 35.985 16.7C35.985 19.6234 37.0348 22.4071 40.9294 23.7412C50.8956 27.1511 51.3407 32.5212 51.3407 32.5212Z"
        fill="url(#paint5_linear_673_2)"
      />
      <path
        d="M116.823 21.8629C115.254 20.297 113.39 19.0552 111.337 18.2089C109.285 17.3625 107.085 16.9283 104.863 16.9311H104.834C100.488 17.1381 96.3893 19.0024 93.3872 22.1374C90.3852 25.2723 88.7105 29.4373 88.7105 33.7685C88.7105 38.0997 90.3852 42.2647 93.3872 45.3997C96.3893 48.5346 100.488 50.3989 104.834 50.606H104.863C108.204 50.5967 111.468 49.6038 114.243 47.7521C117.018 45.9005 119.182 43.2729 120.46 40.2001C121.739 37.1272 122.075 33.7466 121.428 30.4836C120.781 27.2206 119.178 24.2212 116.823 21.8629ZM104.849 39.2349C103.72 39.2349 102.618 38.9019 101.68 38.278C100.742 37.654 100.011 36.7672 99.5788 35.7296C99.1471 34.692 99.0341 33.5503 99.2542 32.4488C99.4743 31.3474 100.018 30.3356 100.815 29.5415C101.613 28.7473 102.629 28.2065 103.736 27.9874C104.842 27.7683 105.989 27.8808 107.031 28.3106C108.074 28.7403 108.964 29.4681 109.591 30.4019C110.218 31.3357 110.553 32.4336 110.553 33.5566C110.553 34.3025 110.406 35.0411 110.12 35.7304C109.833 36.4196 109.413 37.0458 108.883 37.5732C108.354 38.1006 107.724 38.5188 107.032 38.804C106.34 39.0891 105.598 39.2355 104.849 39.2349Z"
        fill="url(#paint6_linear_673_2)"
      />
      <path
        d="M153.359 50.6011H139.875C135.385 50.6011 131.078 48.8252 127.902 45.6639C124.727 42.5027 122.943 38.2151 122.943 33.7444C122.943 29.2738 124.727 24.9862 127.902 21.825C131.078 18.6637 135.385 16.8878 139.875 16.8878H156.808V47.1865C156.808 47.6365 156.719 48.0821 156.545 48.4977C156.372 48.9132 156.117 49.2905 155.797 49.6078C155.476 49.9252 155.096 50.1763 154.677 50.3468C154.259 50.5172 153.811 50.6037 153.359 50.6011Z"
        fill="url(#paint7_linear_673_2)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_673_2"
          x1="66.5174"
          y1="26.8621"
          x2="76.0358"
          y2="46.9934"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBC137" />
          <stop offset="1" stopColor="#FB7437" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_673_2"
          x1="5.37035"
          y1="5.69011"
          x2="23.7725"
          y2="30.7318"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EB6469" />
          <stop offset="1" stopColor="#FF4A57" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_673_2"
          x1="4.55757"
          y1="44.6965"
          x2="9.56886"
          y2="35.6277"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8F5CCC" />
          <stop offset="1" stopColor="#3E5CBB" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_673_2"
          x1="6320.71"
          y1="982.02"
          x2="6531.19"
          y2="1404.87"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8F5CCC" />
          <stop offset="1" stopColor="#3E5CBB" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_673_2"
          x1="2442.25"
          y1="3152.29"
          x2="1929.72"
          y2="3654.55"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8F5CCC" />
          <stop offset="1" stopColor="#3E5CBB" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_673_2"
          x1="2276.54"
          y1="1642.42"
          x2="2680.1"
          y2="2190.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBC137" />
          <stop offset="1" stopColor="#FB7437" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_673_2"
          x1="98.4963"
          y1="22.6383"
          x2="111.033"
          y2="44.798"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EB6469" />
          <stop offset="1" stopColor="#FF4938" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_673_2"
          x1="11768.3"
          y1="3062.94"
          x2="12680.6"
          y2="4860.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBC137" />
          <stop offset="1" stopColor="#FB7437" />
        </linearGradient>
      </defs>
    </SvgIcon>
  ) : null;

export default Picod;
