export default class LoginResponseDTO {
  public userId: number;
  public userEmail: string;
  public userNickName: string;
  public token: string;

  public getUserId(): number {
    return this.userId;
  }

  public setUserId(userId: number): LoginResponseDTO {
    this.userId = userId;
    return this;
  }

  public getUserEmail(): string {
    return this.userEmail;
  }

  public setUserEmail(userEmail: string): LoginResponseDTO {
    this.userEmail = userEmail;
    return this;
  }

  public getUserNickName(): string {
    return this.userNickName;
  }

  public setUserNickName(userNickName: string): LoginResponseDTO {
    this.userNickName = userNickName;
    return this;
  }

  public getToken(): string {
    return this.token;
  }

  public setToken(token: string): LoginResponseDTO {
    this.token = token;
    return this;
  }
}
