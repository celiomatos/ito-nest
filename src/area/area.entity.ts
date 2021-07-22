import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'area' })
export class Area {
  @PrimaryGeneratedColumn({ name: 'area_id' })
  id: number;

  @IsString()
  @IsNotEmpty({ message: 'nome é obrigatório' })
  @Column({ name: 'area_name', length: 100, nullable: false })
  name: string;

  @Exclude({
    toPlainOnly: true,
  })
  @CreateDateColumn({
    name: 'area_date_time_insert',
    update: false,
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @Exclude({
    toPlainOnly: true,
  })
  @Column({ name: 'area_usersy_id_insert', update: false })
  userCreate: number;

  @Exclude({
    toPlainOnly: true,
  })
  @Column({ name: 'area_compa_id', update: false })
  company: number;

  @Exclude({
    toPlainOnly: true,
  })
  @Column({ name: 'd_e_l_e_t_e_d', default: () => false })
  deleted: boolean;
}
