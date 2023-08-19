export namespace CreateM {
  export type Input = { description: string };
  export type Output = {
    id: string;
    description: string;
    done: boolean;
    created_at: Date;
    done_at: Date | null;
  };
}
