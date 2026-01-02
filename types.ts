import { ThreeElements } from '@react-three/fiber';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface DesignConcept {
  projectName: string;
  description: string;
  colorPalette: {
    hex: string;
    name: string;
  }[];
  typography: {
    primary: string;
    secondary: string;
  };
  vibe: string;
}

export enum AiState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}