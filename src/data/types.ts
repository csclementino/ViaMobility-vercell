// app/types.ts
export type UserProfile = {
  id: string;
  imagemPerfil: string;
  nome: string;
  sobrenome: string;
  tel: string;
  email: string;
  emailVerificado: boolean;
  dataNascimento?: string; // Adicione esta linha
};
  
  export type ProfileFieldType = 
    | 'text'
    | 'phone'
    | 'email'
    | 'password';