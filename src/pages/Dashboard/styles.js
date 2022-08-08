import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 4.5625rem;

  border-bottom: 0.0625rem solid var(--color-gray-3);
  h1 {
    font-size: 1.5rem;
    color: var(--color-primary);
  }
`;
export const ButtonLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.4681rem;
  height: 2rem;

  border: none;
  border-radius: 0.1999rem;
  background-color: var(--color-gray-3);
  color: var(--color-gray-0);

  font-weight: 600;
  font-size: 0.5996rem;
  :focus {
    background-color: var(--color-gray-1);
  }
  :hover {
    animation: pulse 1.5s infinite;
  }
`;
export const ContentUser = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  padding-left: 2.1875rem;
  height: 8.125rem;
  width: 100%;

  border-bottom: 0.0625rem solid var(--color-gray-3);
  h3 {
    font-weight: 700;
    font-size: 1.5rem;

    color: var(--color-gray-0);
  }
  span {
    font-weight: 400;
    font-size: 0.85rem;

    color: var(--color-gray-1);
  }
  @media (min-width: 23.4375rem) {
    justify-content: space-around;

    padding: 0 4%;
  }
`;
export const Content = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: .9375rem;
  justify-content: center;
  padding: 1.5625rem 22.9%;
`;
