/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
`;

export const navbarStyles = css`
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95));
  padding: 1rem;
  border-radius: 20px;
  width: 90%;
  max-width: 1200px;
  border: 1px solid rgba(94, 234, 212, 0.2);
  position: relative;
  overflow: hidden;
`;

export const navListStyles = css`
  display: flex;
  justify-content: space-around;
  list-style: none;
  gap: 0.5rem;
`;

export const navItemStyles = css`
  position: relative;
`;

export const navLinkStyles = css`
  color: #e2e8f0;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid transparent;

  &:hover {
    border-color: #5eead4;
    background: rgba(94, 234, 212, 0.1);
    transform: translateY(-2px);
  }

  &:hover .nav-icon {
    transform: rotate(10deg);
    filter: drop-shadow(0 0 8px #5eead4);
  }

  &:hover .nav-label::after {
    width: 100%;
  }

  &:hover .nav-tooltip {
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
`;

export const navIconStyles = css`
  width: 20px;
  height: 20px;
  fill: #5eead4;
  transition: all 0.3s ease;
`;

export const navLabelStyles = css`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #5eead4;
    transition: width 0.3s ease;
  }
`;

export const statusDotStyles = css`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #5eead4;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: 0 0 10px #5eead4;
  animation: ${pulse} 2s infinite;
`;

export const navTooltipStyles = css`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%) scale(0);
  background: rgba(94, 234, 212, 0.9);
  color: #0f172a;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
  white-space: nowrap;
`;
