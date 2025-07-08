import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Session')
export class Session {
  @PrimaryColumn('text')
  id: string;

  @Column('text')
  shop: string;

  @Column('text')
  state: string;

  @Column('boolean', { default: false })
  isOnline: boolean;

  @Column('text', { nullable: true })
  scope?: string;

  @Column('timestamp', { nullable: true })
  expires?: Date;

  @Column('text')
  accessToken: string;

  @Column('bigint', { nullable: true })
  userId?: string;

  @Column('text', { nullable: true })
  firstName?: string;

  @Column('text', { nullable: true })
  lastName?: string;

  @Column('text', { nullable: true })
  email?: string;

  @Column('boolean', { default: false })
  accountOwner: boolean;

  @Column('text', { nullable: true })
  locale?: string;

  @Column('boolean', { default: false })
  collaborator: boolean;

  @Column('boolean', { default: false })
  emailVerified: boolean;
} 