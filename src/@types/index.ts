import type { ElementType, ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { SvgIconProps } from '@mui/material';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type Section = {
  id: string;
  title: string;
};

export type Service = {
  id: string;
  title: string;
  icon: ElementType<SvgIconProps>;
  description: string;
};

export type SocialMedia = {
  facebook?: string;
  discord?: string;
  linkedin?: string;
  behance?: string;
};

export type TeamMemberProfile = {
  name: string;
  role: string;
  image: string;
  socialMedia: SocialMedia;
};
