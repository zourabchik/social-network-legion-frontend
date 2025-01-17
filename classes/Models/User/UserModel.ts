import BaseModel from "~/classes/BaseModel";
import PrivacySettingsModel from "~/classes/Models/User/PrivacySettingsModel";
import RoleModel from "~/classes/Models/User/RoleModel";
import { UserInterface } from "~/interfaces/classes/Models/User/UserModelInterface";

export default class UserModel extends BaseModel {
  private _avatar: string = '';
  private _createdAt: string = '';
  private _email: string = '';
  private _friendsCount: number = 0;
  private _hasDialogWithMe: boolean = false;
  private _id: number = 0;
  private _isMyFriend: boolean = false;
  private _name: string = '';
  private _postsCount: number = 0;
  private _privacySettings: PrivacySettingsModel | null = null;
  private _roles: RoleModel[] | [] = [];
  private _updatedAt: string = '';

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get friendsCount(): number {
    return this._friendsCount;
  }

  set friendsCount(value: number) {
    this._friendsCount = value;
  }

  get hasDialogWithMe(): boolean {
    return this._hasDialogWithMe;
  }

  set hasDialogWithMe(value: boolean) {
    this._hasDialogWithMe = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get isMyFriend(): boolean {
    return this._isMyFriend;
  }

  set isMyFriend(value: boolean) {
    this._isMyFriend = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get postsCount(): number {
    return this._postsCount;
  }

  set postsCount(value: number) {
    this._postsCount = value;
  }

  get privacySettings(): PrivacySettingsModel | null {
    return this._privacySettings;
  }

  set privacySettings(value: PrivacySettingsModel | null) {
    this._privacySettings = value;
  }

  get roles(): RoleModel[] {
    return this._roles;
  }

  set roles(value: RoleModel[]) {
    this._roles = value;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  set updatedAt(value: string) {
    this._updatedAt = value;
  }

  constructor(data: UserInterface | null = null) {
    super();

    if (data) {
      this.fillData(data);
    }
  }

  protected fillData(data: UserInterface) {
    this.avatar = data.avatar;
    this.createdAt = data.createdAt;
    this.email = data.email;
    this.friendsCount = data.friendsCount;
    this.hasDialogWithMe = data.hasDialogWithMe;
    this.id = data.id;
    this.isMyFriend = data.isMyFriend;
    this.name = data.name;
    this.postsCount = data.postsCount;
    this.privacySettings = data.privacySettings ? new PrivacySettingsModel(data.privacySettings) : null;
    this.roles = data.roles ? data.roles.map(i => new RoleModel(i)) : [];
    this.updatedAt = data.updatedAt;
  }
}
