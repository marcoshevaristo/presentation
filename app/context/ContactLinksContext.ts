import { createContext } from 'react';

export interface IContactLinksContext {
  linkedin: string | null;
  whatsapp: string | null;
  email: string | null;
}

export const ContactLinksContext = createContext<IContactLinksContext>({
  linkedin: null,
  whatsapp: null,
  email: null,
});
