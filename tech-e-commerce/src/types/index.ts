export type FormReturnType<T> = {
  message: string;
  success: boolean;
  result: T;
};

export type StepProps = {
  nextStep?: () => void;
  prevStep?: () => void;
};

export type UploadFileType = {
  message: string;
  url: string | null;
};
