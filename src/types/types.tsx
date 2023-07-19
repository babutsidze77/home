export type record = {
  id: Number;
  name: String;
  email: String;
  gender: String;
  address: {
    city: String;
    street: String;
  };
};
export type testobject = {
  type: unknown;
  value: Number;
};

export  type items = {
  address: { street: String; city: String };
  email: String;
  gender: String;
  id: Number;
  name: String;
  phone: String;
};

export type datafromback =
  | null
  | [
      {
        id: Number;
        name: String;
        email: String;
        gender: String;
        address: {
          city: String;
          street: String;
        };
      }
    ];

export type arr = [String];
export type data = [] | [{ type: String; value: Number }];
