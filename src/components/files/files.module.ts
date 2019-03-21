import { Module } from '@nestjs/common';
import {FilesService} from './files.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema } from './file.schema';
import { FilesRepository } from './files.repository';
import {UsersModule} from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'File', schema: FileSchema }]),
    UsersModule
  ],
  exports: [FilesService],
  providers: [FilesService, FilesRepository],
})
export class FilesModule {}