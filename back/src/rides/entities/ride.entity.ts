import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';
import { Driver } from '../../drivers/entities/driver.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  startLocationLatitude: number;

  @Column('decimal')
  startLocationLongitude: number;

  @Column('decimal')
  endLocationLatitude: number;

  @Column('decimal')
  endLocationLongitude: number;

  @Column('decimal')
  totalPrice: number;

  @Column({ default: 'pending' })
  status: 'driving' | 'completed';

  @ManyToOne(() => User, (user) => user.rides, { eager: true })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.rides, { eager: true })
  @JoinColumn({ name: 'vehicleId', referencedColumnName: 'id' })
  vehicle: Vehicle;

  @ManyToOne(() => Driver, (driver) => driver.rides, { eager: true })
  @JoinColumn({ name: 'driverId', referencedColumnName: 'id' })
  driver: Driver;
}
