import {
	CreateDateColumn,
	Column,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
	BaseEntity,
} from 'typeorm';

export class BaseModel extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@CreateDateColumn()
	createdAt!: Date;

	@Column('text', { default: 'AIR_QUALITY_SERVICE' })
	createdBy!: string;

	@Column('boolean', { default: false })
	isArchived!: boolean;

	@UpdateDateColumn()
	updatedAt?: Date;

	@Column('text', { default: 'AIR_QUALITY_SERVICE' })
	updatedBy!: string;
}
