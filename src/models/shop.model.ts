import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Shop')
export class Shop {
  @PrimaryColumn('text')
  id: string;

  @Column('text')
  shopifyDomain: string;

  @Column('text', { nullable: true })
  name?: string;

  @Column('text', { nullable: true })
  email?: string;

  @Column('text', { nullable: true })
  plan?: string;

  @Column('text', { nullable: true })
  currencyCode?: string;

  @Column('text', { nullable: true })
  primaryDomain?: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
} 