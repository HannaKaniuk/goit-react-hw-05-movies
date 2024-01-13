import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  HeaderTag,
  HeaderNavList,
  StyledLink,
  StyledHomeLink,
  Container,
} from './SharedLayout.styled';
import { HeroText, Hero } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <HeaderTag>
        <HeaderNavList>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </HeaderNavList>
        <StyledHomeLink to="/">&#127902; Movies World</StyledHomeLink>
      </HeaderTag>
      <main>
        <Hero>
          <HeroText>
            <h1>Find, watch, and enjoy a world of films at your fingertips</h1>
          </HeroText>
        </Hero>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
