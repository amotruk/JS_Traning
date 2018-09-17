export class User {
  constructor(
    public login: string = '',
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public jobTitle: string = '',
    public token: string = null
  ) {}
}
