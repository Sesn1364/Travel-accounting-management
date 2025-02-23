export interface InputFieldProps {
    label: string;
    type?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  