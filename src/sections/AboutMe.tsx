import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import Image from 'next/image';
import headshotPic from '../../public/headshot.jpg';
import '@/app/globals.scss';
import NavLink from '@/components/nav/NavLink';
import ContentDiv from '@/components/ContentDiv';
import { useTranslations } from 'next-intl';
import { Markup } from 'interweave';

export default function AboutMe() {
  const dict = useTranslations('sections.aboutMe');

  return (
    <PageSection section={SectionEnum.ABOUT} hideTitle>
      <div className='relative mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-4 leading-snug lg:grid-cols-2'>
        <div className='place-items-center pt-4 sm:px-1 md:px-2 lg:flex lg:px-4 xl:px-8 xl:pt-12'>
          <Image
            src={headshotPic}
            alt='Tenzin Pelletier'
            className='mx-auto w-3/4 rounded-2xl shadow-md lg:w-full xl:rounded-3xl'
            priority
          />
        </div>
        <div className='flex flex-col place-content-between pb-4 sm:px-1 md:px-2 lg:px-4 xl:px-8 xl:pt-12'>
          <div className='text-center text-7xl leading-snug tracking-tight md:whitespace-nowrap lg:text-left'>
            <span className='font-black text-primary'>Tenzin</span> Pelletier
          </div>
          <ContentDiv className='text-center lg:text-left'>
            <Markup content={dict.raw('content')} />
          </ContentDiv>
          <div className='mt-4 flex place-content-center gap-6'>
            <NavLink
              className='btn btn-outline w-36'
              section={SectionEnum.SKILLS}
            >
              {dict('readMore')}
            </NavLink>
            <NavLink
              className='btn btn-primary w-36'
              section={SectionEnum.CONTACT}
            >
              {dict('contact')}
            </NavLink>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
