export interface JwtPayload {
  userInfo: {
    email: string;
    nickName?: string;
    id: number;
  };
}
