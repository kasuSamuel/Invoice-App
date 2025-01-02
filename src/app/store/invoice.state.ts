// card.state.ts
export interface CardDetailsState {
    cardId: string | null;  // Store the card ID
    cardInfo: any | null;   // Store the detailed card information
    loading: boolean;       // To track loading state
    error: string | null;   // To track error messages
  }
  
  export const initialCardState: CardDetailsState = {
    cardId: null,
    cardInfo: null,
    loading: false,
    error: null
  };
  

  // theme.state.ts
export interface ThemeState {
  theme: 'light' | 'dark';
}

export const initialThemeState: ThemeState = {
  theme: 'light',
};
