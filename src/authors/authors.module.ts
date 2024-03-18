import { Module } from '@nestjs/common'
import { AuthorRepository, AuthorsService } from './services/authors.service'

@Module({
  providers: [AuthorsService, AuthorRepository],
  exports: [AuthorsService]
})
export class AuthorsModule {}
